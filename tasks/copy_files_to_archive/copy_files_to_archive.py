"""
Name: copy_files_to_archive.py

Description:  Lambda function that copies files from one s3 bucket
to another s3 bucket.
"""
import json
import logging
import os
import time
from datetime import datetime, timezone
from enum import Enum
from typing import Any, List, Dict, Optional, Union
import fastjsonschema

import boto3
# noinspection PyPackageRequirements
from botocore.client import BaseClient
# noinspection PyPackageRequirements
from botocore.exceptions import ClientError


# todo: Move to shared lib after ORCA-170
class RequestMethod(Enum):
    POST = 'post'
    PUT = 'put'


OS_ENVIRON_DB_QUEUE_URL_KEY = 'DB_QUEUE_URL'

# These will determine what the output looks like.
FILE_SUCCESS_KEY = 'success'
FILE_ERROR_MESSAGE_KEY = 'err_msg'

# These are tied to the input schema.
INPUT_JOB_ID_KEY = 'job_id'
INPUT_GRANULE_ID_KEY = 'granule_id'
INPUT_FILENAME_KEY = 'filename'
INPUT_SOURCE_KEY_KEY = 'source_key'
INPUT_TARGET_KEY_KEY = 'target_key'
INPUT_TARGET_BUCKET_KEY = 'restore_destination'
INPUT_SOURCE_BUCKET_KEY = 'source_bucket'

# todo: Move to shared lib after ORCA-170
ORCA_STATUS_PENDING = 1
ORCA_STATUS_STAGED = 2
ORCA_STATUS_SUCCESS = 3
ORCA_STATUS_FAILED = 4


class CopyRequestError(Exception):
    """
    Exception to be raised if the copy request fails for any of the files.
    """


def task(records: List[Dict[str, Any]], max_retries: int, retry_sleep_secs: float, db_queue_url: str) -> None:
    """
    Task called by the handler to perform the work.

    This task will call copy_object for each file. A copy will be tried
    up to {retries} times if it fails, waiting {retry_sleep_secs}
    between each attempt.

    Args:
        records: Passed through from the handler.
        max_retries: The number of attempts to retry a failed copy.
        retry_sleep_secs: The number of seconds
            to sleep between retry attempts.
        db_queue_url: The URL of the queue that posts status entries.
    Raises:
        CopyRequestError: Thrown if there are errors with the input records or the copy failed.
    """
    files = get_files_from_records(records)
    s3 = boto3.client('s3')  # pylint: disable-msg=invalid-name
    for attempt in range(1, max_retries + 1):
        for a_file in files:
            # All files from get_files_from_records start with 'success' == False.
            if not a_file[FILE_SUCCESS_KEY]:
                err_msg = copy_object(s3,
                                      a_file[INPUT_SOURCE_BUCKET_KEY],
                                      a_file[INPUT_SOURCE_KEY_KEY],
                                      a_file[INPUT_TARGET_BUCKET_KEY],
                                      a_file[INPUT_TARGET_KEY_KEY])
                if err_msg is None:
                    a_file[FILE_SUCCESS_KEY] = True
                    now = datetime.now(timezone.utc).isoformat()
                    post_status_for_file_to_queue(
                        a_file[INPUT_JOB_ID_KEY], a_file[INPUT_GRANULE_ID_KEY], a_file[INPUT_FILENAME_KEY], None,
                        None,
                        ORCA_STATUS_SUCCESS, None,
                        None, now, now, RequestMethod.PUT, db_queue_url,
                        max_retries, retry_sleep_secs
                    )
                else:
                    a_file[FILE_ERROR_MESSAGE_KEY] = err_msg

        if attempt < max_retries + 1:  # Only sleep if not on the last attempt.
            if all(a_file[FILE_SUCCESS_KEY] for a_file in files):  # Check for early completion
                break
            time.sleep(retry_sleep_secs)

    any_error = False
    for a_file in files:
        if not a_file[FILE_SUCCESS_KEY]:
            any_error = True
            now = datetime.now(timezone.utc).isoformat()
            post_status_for_file_to_queue(
                a_file[INPUT_JOB_ID_KEY], a_file[INPUT_GRANULE_ID_KEY], a_file[INPUT_FILENAME_KEY], None,
                None,
                ORCA_STATUS_FAILED, a_file.get(FILE_ERROR_MESSAGE_KEY, None),
                None, now, now, RequestMethod.PUT, db_queue_url,
                max_retries, retry_sleep_secs)

    if any_error:
        logging.error(
            f'File copy failed. {files}')
        raise CopyRequestError(f'File copy failed. {files}')


# todo: Move to shared lib after ORCA-170
def post_status_for_file_to_queue(job_id: str, granule_id: str, filename: str, key_path: Optional[str],
                                  restore_destination: Optional[str],
                                  status_id: Optional[int], error_message: Optional[str],
                                  request_time: Optional[str], last_update: str,
                                  completion_time: Optional[str],
                                  request_method: RequestMethod,
                                  db_queue_url: str,
                                  max_retries: int, retry_sleep_secs: float):
    new_data = {'job_id': job_id,
                'granule_id': granule_id,
                'filename': filename}
    if key_path is not None:
        new_data['key_path'] = key_path
    if restore_destination is not None:
        new_data['restore_destination'] = restore_destination
    if status_id is not None:
        new_data['status_id'] = status_id
    if error_message is not None:
        new_data['error_message'] = error_message
    if request_time is not None:
        new_data['request_time'] = request_time
    if last_update is not None:
        new_data['last_update'] = last_update
    if completion_time is not None:
        new_data['completion_time'] = completion_time

    post_entry_to_queue('orca_recoverfile',
                        new_data,
                        request_method,
                        db_queue_url, max_retries, retry_sleep_secs)


# todo: Move to shared lib after ORCA-170
def post_entry_to_queue(table_name: str, new_data: Dict[str, Any], request_method: RequestMethod, db_queue_url: str,
                        max_retries: int, retry_sleep_secs: float):
    body = json.dumps(new_data, indent=4)
    sqs = boto3.client('sqs')
    for attempt in range(1, max_retries + 1):
        try:
            sqs.send_message(
                QueueUrl=db_queue_url,
                MessageDeduplicationId=table_name + request_method.value + body,
                MessageGroupId='copy_files_to_archive',
                MessageAttributes={
                    'RequestMethod': {
                        'DataType': 'String',
                        'StringValue': request_method.value
                    },
                    'TableName': {
                        'DataType': 'String',
                        'StringValue': table_name
                    }
                },
                MessageBody=body
            )
            return
        except Exception as e:
            if attempt == max_retries + 1:
                logging.error(f"Error while logging row {json.dumps(new_data, indent=4)} "
                              f"to table {table_name}: {e}")
                raise e
            time.sleep(retry_sleep_secs)
            continue


def get_files_from_records(records: List[Dict[str, Any]]) -> List[Dict[str, Union[str, bool]]]:
    """
    Parses the input records and returns the files to be restored.

    Args:
        records: passed through from the handler.

    Returns:
        records, parsed into Dicts, with the additional KVP 'success' = False
    """
    with open("schemas/sub_schemas/body.json", "r") as raw_schema:
        schema = json.loads(raw_schema.read())

    validate = fastjsonschema.compile(schema)
    files = []
    for record in records:
        a_file = json.loads(record['body'])
        validate(a_file)
        a_file[FILE_SUCCESS_KEY] = False
        files.append(a_file)
    return files


def copy_object(s3_cli: BaseClient, src_bucket_name: str, src_object_name: str,
                dest_bucket_name: str, dest_object_name: str = None) -> Optional[str]:
    """Copy an Amazon S3 bucket object

    Args:
        s3_cli: An instance of boto3 s3 client.
        src_bucket_name: The source S3 bucket name.
        src_object_name: The key of the s3 object being copied.
        dest_bucket_name: The target S3 bucket name.
        dest_object_name: Optional; The key of the destination object.
            If an object with the same name exists in the given bucket, the object is overwritten.
            Defaults to {src_object_name}.

    Returns:
        None if object was copied, otherwise contains error message.
    """

    if dest_object_name is None:
        dest_object_name = src_object_name
    # Construct source bucket/object parameter
    copy_source = {'Bucket': src_bucket_name, 'Key': src_object_name}

    # Copy the object
    try:
        response = s3_cli.copy_object(CopySource=copy_source,
                                      Bucket=dest_bucket_name,
                                      Key=dest_object_name)
        logging.debug(f"Copy response: {response}")
    except ClientError as ex:
        logging.error(ex)
        return ex.__str__()
    return None


# noinspection PyUnusedLocal
def handler(event: Dict[str, Any], context: object) -> None:  # pylint: disable-msg=unused-argument
    """Lambda handler. Copies a file from its temporary s3 bucket to the s3 archive.

    If the copy for a file in the request fails, the lambda
    throws an exception. Environment variables can be set to override how many
    times to retry a copy before failing, and how long to wait between retries.

        Environment Vars:
            COPY_RETRIES (number, optional, default = 3): The number of
                attempts to retry a copy that failed.
            COPY_RETRY_SLEEP_SECS (number, optional, default = 0): The number of seconds
                to sleep between retry attempts.
            DATABASE_PORT (string): the database port. The standard is 5432.
            DATABASE_NAME (string): the name of the database.
            DATABASE_USER (string): the name of the application user.

        Parameter Store:
                drdb-user-pass (string): the password for the application user (DATABASE_USER).
                drdb-host (string): the database host

    Args:
        event:
            A dict from the SQS queue. See schemas/input.json for more information.

        context: An object required by AWS Lambda. Unused.

    Raises:
        CopyRequestError: An error occurred calling copy_object for one or more files.
        The same dict that is returned for a successful copy will be included in the
        message, with 'success' = False for the files for which the copy failed.
    """
    logging.basicConfig(level=logging.INFO,
                        format='%(levelname)s: %(asctime)s: %(message)s')
    try:
        str_env_val = os.environ['COPY_RETRIES']
        retries = int(str_env_val)
    except KeyError:
        retries = 2

    try:
        str_env_val = os.environ['COPY_RETRY_SLEEP_SECS']
        retry_sleep_secs = float(str_env_val)
    except KeyError:
        retry_sleep_secs = 30

    try:
        db_queue_url = str(os.environ[OS_ENVIRON_DB_QUEUE_URL_KEY])
    except KeyError as key_error:
        logging.error(f"os.environ[{OS_ENVIRON_DB_QUEUE_URL_KEY}] not found.")
        raise key_error
    logging.debug(f'event: {event}')
    records = event["Records"]

    task(records, retries, retry_sleep_secs, db_queue_url)