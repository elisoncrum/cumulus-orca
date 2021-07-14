(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[9071],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3145:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a={id:"deployment-environment",title:"Creating a Deployment Environment",description:"Provides developer with information on setting up deployment environment."},l={unversionedId:"developer/deployment-guide/deployment-environment",id:"developer/deployment-guide/deployment-environment",isDocsHomePage:!1,title:"Creating a Deployment Environment",description:"Provides developer with information on setting up deployment environment.",source:"@site/docs/developer/deployment-guide/setting-up-deployment-environment.md",sourceDirName:"developer/deployment-guide",slug:"/developer/deployment-guide/deployment-environment",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-environment",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/deployment-guide/setting-up-deployment-environment.md",version:"current",frontMatter:{id:"deployment-environment",title:"Creating a Deployment Environment",description:"Provides developer with information on setting up deployment environment."},sidebar:"dev_guide",previous:{title:"Deployment Information",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment"},next:{title:"Creating the Glacier Bucket",permalink:"/cumulus-orca/docs/developer/deployment-guide/deployment-s3-bucket"}},s=[{value:"Deployment Tool Requirements",id:"deployment-tool-requirements",children:[]},{value:"Deployment Environment Setup",id:"deployment-environment-setup",children:[{value:"Installing Terraform",id:"installing-terraform",children:[]},{value:"Configure AWS CLI Profiles",id:"configure-aws-cli-profiles",children:[]}]}],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In order to deploy ORCA into an NGAP environment with Cumulus, a deployment\nenvironment needs be created. The sections below describe the tool chain needed\nand any additional environmental setup that should occur. The setup for deploying\nORCA is similar to the ",(0,i.kt)("a",{parentName:"p",href:"https://nasa.github.io/cumulus/docs/deployment/deployment-readme#requirements"},"Cumulus deployment requirements"),".\nThe sections below assume that the end user is using a Linux or MacOS environment."),(0,i.kt)("h2",{id:"deployment-tool-requirements"},"Deployment Tool Requirements"),(0,i.kt)("p",null,"The following tools should be installed to perform an ORCA deployment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git")),(0,i.kt)("li",{parentName:"ul"},"zip/unzip"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cli/"},"AWS CLI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html"},"AWS CLI Session Manager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tfutils/tfenv"},"Terraform Version Manager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.terraform.io/intro/index.html"},"Terraform")," v0.13.6 and up. Please see the ",(0,i.kt)("a",{parentName:"li",href:"#installing-terraform"},"installing terraform instructions"),".")),(0,i.kt)("h2",{id:"deployment-environment-setup"},"Deployment Environment Setup"),(0,i.kt)("p",null,"Setting up the development environment consists of installing the proper Terraform\nversion using Terraform Version Manager and creating the AWS profiles for connecting\nto the proper NGAP OU for your application."),(0,i.kt)("h3",{id:"installing-terraform"},"Installing Terraform"),(0,i.kt)("p",null,"Using Terraform Version Manager install the latest supported version of terraform\nusing the command below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tfenv install 0.13.6\n")),(0,i.kt)("h3",{id:"configure-aws-cli-profiles"},"Configure AWS CLI Profiles"),(0,i.kt)("p",null,"Configure the AWS CLI with two profiles. The first profile should be the default\nand the access information should be for the Cumulus OU. The second profile should\nbe have access information for the Disaster Recovery OU."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("a",{parentName:"p",href:"https://cloud.earthdatacloud.nasa.gov"},"Cloud Tamer")," application to create\nlong term access keys to both the Cumulus and Recovery OU environments. Using the\nAccess Key ID and Secret Access Key values configure the different profiles as seen\nbelow."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating the Default Profile.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure --profile default\n\nAWS Access Key ID []: Your AWS Access Key ID Value for Cumulus OU\nAWS Secret Access Key []: Your AWS Secret Access Key Value for Cumulus OU\nDefault region name []: us-west-2\nDefault output format []: json\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating the Disaster Recovery Profile")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"aws configure --profile drou-sandbox\n\nAWS Access Key ID []: Your AWS Access Key ID Value for Disaster Recovery OU\nAWS Secret Access Key []: Your AWS Secret Access Key Value for Disaster Recovery OU\nDefault region name []: us-west-2\nDefault output format []: json\n")))}p.isMDXComponent=!0}}]);