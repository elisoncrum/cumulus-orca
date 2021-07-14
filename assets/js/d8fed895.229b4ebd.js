(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[8910],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var o=n(2263),r=n(3919);function a(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var a=void 0===o?{}:o,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(s)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},4760:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=n(4996),s={id:"restore-to-orca",title:"Restoring Data to ORCA",description:"Provides documentation for Operators to restore data back to ORCA."},l={unversionedId:"operator/restore-to-orca",id:"operator/restore-to-orca",isDocsHomePage:!1,title:"Restoring Data to ORCA",description:"Provides documentation for Operators to restore data back to ORCA.",source:"@site/docs/operator/restore-to-orca.mdx",sourceDirName:"operator",slug:"/operator/restore-to-orca",permalink:"/cumulus-orca/docs/operator/restore-to-orca",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/operator/restore-to-orca.mdx",version:"current",frontMatter:{id:"restore-to-orca",title:"Restoring Data to ORCA",description:"Provides documentation for Operators to restore data back to ORCA."},sidebar:"ops_guide",previous:{title:"Data Recovery",permalink:"/cumulus-orca/docs/operator/data-recovery"},next:{title:"Collection Configuration",permalink:"/cumulus-orca/docs/operator/collection-configuration"}},u=[{value:"Submit Granules to be Restored in ORCA",id:"submit-granules-to-be-restored-in-orca",children:[]},{value:"Monitor Executions and Job Status",id:"monitor-executions-and-job-status",children:[{value:"Monitoring the Overall Job via the Operations Tab",id:"monitoring-the-overall-job-via-the-operations-tab",children:[]},{value:"Monitoring Individual Granules Executions via the Executions Tab",id:"monitoring-individual-granules-executions-via-the-executions-tab",children:[]}]}],p={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following operations procedure details how an operator would re-ingest data\ninto ORCA through the Cumulus Dashboard without running a full ingest pipeline.\nAt a high level, the following steps should be used to manually ingest data into\nORCA."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the Cumulus Dashboard Granule Bulk Operations functionality to run the\n",(0,a.kt)("strong",{parentName:"li"},"OrcaCopyToArchiveWorkflow")," step function against the granules that need to\nbe ingested into ORCA."),(0,a.kt)("li",{parentName:"ol"},"Monitor the execution status of the job and workflows.")),(0,a.kt)("p",null,"The sections below go into further detail on how to accomplish the high level\nsteps above."),(0,a.kt)("h2",{id:"submit-granules-to-be-restored-in-orca"},"Submit Granules to be Restored in ORCA"),(0,a.kt)("p",null,"The following steps will guide the operator through submitting a bulk operation\nto restore data in ORCA."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("strong",{parentName:"p"},"Granules")," tab of the Cumulus Dashboard, click on the ",(0,a.kt)("strong",{parentName:"p"},"Granule Actions"),"\nbutton. The button is highlighted in figure 1 below."),(0,a.kt)("img",{alt:"Selecting Granule Actions on the Granules tab on Cumulus dashboard",src:(0,i.Z)("img/restore-orca-granule-tab.png")}),(0,a.kt)("p",{parentName:"li"}," ",(0,a.kt)("strong",{parentName:"p"},"Figure 1. Selecting Granule Actions to Perform Bulk Operations"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("strong",{parentName:"p"},"Granule Actions")," click on the ",(0,a.kt)("strong",{parentName:"p"},"Run Bulk Granules")," button highlighted\nbelow in figure 2."),(0,a.kt)("img",{alt:"Selecting the Run Bulk Granules Button under Granule Actions",src:(0,i.Z)("img/restore-orca-run-bulk-granules.png")}),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Figure 2. Select the Run Bulk Granules Button")))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"In the bulk operations pop up click on the ",(0,a.kt)("strong",{parentName:"p"},"Bulk Operations")," button as seen\nbelow in figure 3."),(0,a.kt)("img",{alt:"Selecting the Bulk Operations Button",src:(0,i.Z)("img/restore-orca-run-bulk-operations.png")}),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Figure 3. Select the Bulk Operations Button"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Fill out the details in the ",(0,a.kt)("strong",{parentName:"p"},"Bulk Operations")," form utilizing any of the bulk\noperations methods to provide the list of granules to act upon."),(0,a.kt)("div",{parentName:"li",className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Workflow Name")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"}," Make sure that the workflow name value is set to ",(0,a.kt)("strong",{parentName:"p"},"OrcaCopyToArchiveWorkflow"),"\nas seen below in the figure."),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "WorkflowName": "OrcaCopyToArchiveWorkflow",\n  "index": "",\n  "query": "",\n  "ids": [],\n  "meta": {}\n}\n')))),(0,a.kt)("p",{parentName:"li"},"Figure 4 below shows using the ",(0,a.kt)("em",{parentName:"p"},"ids")," key to list granules to act upon.\nOnce the form is filled out, click the ",(0,a.kt)("strong",{parentName:"p"},"Run Bulk Operations")," button."),(0,a.kt)("img",{alt:"Filling out the Bulk Operations Form.",src:(0,i.Z)("img/restore-orca-bulk-operations-form.png")}),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Figure 4. Filling out the Bulk Operations Form"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save the Job ID value displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Bulk Granule Operations")," pop up\nwindow as seen below in figure 5. The ID will be used used for monitoring.\nClick on the ",(0,a.kt)("strong",{parentName:"p"},"Go To Operations")," button to begin monitoring the job."),(0,a.kt)("img",{alt:"Saving the Job ID for monitoring.",src:(0,i.Z)("img/restore-orca-bulk-operations-id.png")}),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Figure 5. Saving the Job ID")))),(0,a.kt)("h2",{id:"monitor-executions-and-job-status"},"Monitor Executions and Job Status"),(0,a.kt)("p",null,"Monitoring the Bulk Granule Operations Job and ",(0,a.kt)("em",{parentName:"p"},"OrcaCopyToArchiveWorkflow"),"\nworkflow can be done through the ",(0,a.kt)("em",{parentName:"p"},"Operations")," and ",(0,a.kt)("em",{parentName:"p"},"Executions")," tabs. The Job ID\nobtained from step 5 in the ",(0,a.kt)("a",{parentName:"p",href:"#submit-granules-to-be-restored-in-orca"},"Submit Granules to be Restored in ORCA"),"\nsection above will be needed for monitoring.  The sections below go into more details."),(0,a.kt)("h3",{id:"monitoring-the-overall-job-via-the-operations-tab"},"Monitoring the Overall Job via the Operations Tab"),(0,a.kt)("p",null,"Using the obtained Job ID, the operations can be filtered. The page will provide\ninformation on the overall bulk granule operations job and the status. This page\ndoes not contain any further drill down, but an operator can view the ",(0,a.kt)("em",{parentName:"p"},"Executions"),"\ntab for additional information. Figure 6 below shows the status of a job\nsubmitted in the example used in the above figures."),(0,a.kt)("img",{alt:"",src:(0,i.Z)("img/restore-orca-operations-view.png")}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 6. Monitoring the Operations Tab")),(0,a.kt)("h3",{id:"monitoring-individual-granules-executions-via-the-executions-tab"},"Monitoring Individual Granules Executions via the Executions Tab"),(0,a.kt)("p",null,"Using the obtained Job ID (",(0,a.kt)("em",{parentName:"p"},"asyncOperationsId"),"), the executions can be filtered.\nThe page will provide the operator with information on each specific execution of the\n",(0,a.kt)("em",{parentName:"p"},"OrcaCopyToArchiveWorkflow")," workflow. There is one execution per granule. The\nexecution can be drilled down further to look at failures and logs. Figure 7\nbelow shows the status of executions based on a Job ID."),(0,a.kt)("img",{alt:"",src:(0,i.Z)("img/restore-orca-executions-view.png")}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Figure 7. Monitoring the Executions Tab")))}c.isMDXComponent=!0}}]);