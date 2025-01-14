#!/bin/bash
## =============================================================================
##
## NAME: setup_testing.sh
##
## DESCRIPTION: Script used to setup manual testing environment for db_deploy
##
## USAGE: ./setup_testing.sh <setup|pgclient|python|stop>
## =============================================================================

if [ ! -f ".env" ]; then
    echo "ERROR: Please create an .env file from the env_template!"
    exit 1
fi

# Source our variables
. .env


# Get the directory stuff set
if [ ! -d "${DATA_DIR}" ]; then
    mkdir -p ${DATA_DIR}
fi

if [ ! -d "${TASK_DIR}" ]; then
    echo "Directory [$TASK_DIR] does not exist. Please point to the git repo for cumulus-orca."
    exit 1
fi

export DB_DEPLOY_DIR="${TASK_DIR}/tasks/db_deploy"
export SHARED_LIBRARY_DIR="${TASK_DIR}/tasks/shared_libraries/database"

if [ ! -d "$DB_DEPLOY_DIR" ]; then
    echo "Directory [$DB_DEPLOY_DIR] does not exist. Make sure TASK_DIR is set to the base of the cumulus-orca repo."
    exit 1
fi

if [ ! -d "$SHARED_LIBRARY_DIR" ]; then
    echo "Directory [$SHARED_LIBRARY_DIR] does not exist. Make sure TASK_DIR is set to the base of the cumulus-orca repo."
    exit 1
fi

# Perform an action
case $1 in
    "setup")
        # Bring up the postgres database
        docker-compose up -d

        # Copy shared library files
        mkdir -p ${DB_DEPLOY_DIR}/orca_shared
        touch ${DB_DEPLOY_DIR}/orca_shared/__init__.py
        cp ${SHARED_LIBRARY_DIR}/shared_db.py ${DB_DEPLOY_DIR}/orca_shared/
    ;;

    "pgclient")
        docker run \
            -it --rm \
            --name orca-test-pg-client \
            -e "PGHOST=${DATABASE_HOST}" \
            -e "PGDATABASE=postgres" \
            -e "PGUSER=postgres" \
            -e "PGPASSWORD=${ADMIN_PASSWORD}" \
            -e "PGPORT=5433" \
            -v "${TASK_DIR}:/data" \
            postgres:12 \
            /bin/bash

    ;;

    "python")
        docker run \
            -it --rm \
            --name orca-test-python \
            -e "ADMIN_PASSWORD=${ADMIN_PASSWORD}" \
            -e "APPLICATION_PASSWORD=${APPLICATION_PASSWORD}" \
            -e "DATABASE_HOST=${DATABASE_HOST}" \
            -v "${TASK_DIR}:/data" \
            python:3.7 \
            /bin/bash
    ;;

    "stop")
        # Destroy the postgres database
        docker-compose down

        # Remove shared library files
        rm -rf ${DB_DEPLOY_DIR}/orca_shared
    ;;

    *)
        echo "Incorrect option provided!"
        echo "USAGE: ./setup_testing.sh <setup|pgclient|python|stop>"
        exit 1
    ;;
esac
