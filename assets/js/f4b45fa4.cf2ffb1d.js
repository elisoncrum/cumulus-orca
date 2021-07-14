(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[2590],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1866:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"intro-contributing",title:"Contributing to ORCA",description:"Provides high level information on contributing to the ORCA project."},c={unversionedId:"about/introduction/intro-contributing",id:"about/introduction/intro-contributing",isDocsHomePage:!1,title:"Types of Contributers",description:"Provides high level information on contributing to the ORCA project.",source:"@site/docs/about/introduction/contributing.md",sourceDirName:"about/introduction",slug:"/about/introduction/intro-contributing",permalink:"/cumulus-orca/docs/about/introduction/intro-contributing",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/about/introduction/contributing.md",version:"current",frontMatter:{id:"intro-contributing",title:"Contributing to ORCA",description:"Provides high level information on contributing to the ORCA project."},sidebar:"about_orca",previous:{title:"Navigating the ORCA Documents",permalink:"/cumulus-orca/docs/about/introduction/intro-navigating"},next:{title:"ORCA Glossary",permalink:"/cumulus-orca/docs/about/introduction/intro-glossary"}},s=[{value:"Engagement Levels",id:"engagement-levels",children:[]},{value:"Requesting Fixes, Enhancements, and Features",id:"requesting-fixes-enhancements-and-features",children:[]},{value:"Providing Fixes, Enhancements, and Features",id:"providing-fixes-enhancements-and-features",children:[{value:"Creating a feature branch",id:"creating-a-feature-branch",children:[]}]}],u={toc:s};function l(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"engagement-levels"},"Engagement Levels"),(0,o.kt)("p",null,"ORCA has several ways to engage with the project and several different\nengagement levels. The various levels are explained below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advisor:"),"  Stakeholders that would like to be invited to demos and\nprovide input on where the system is headed. This includes active engagement\nin the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.earthdata.nasa.gov/display/CUMULUS/ORCA+Working+Group"},"ORCA Working Group"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DAAC Integrator:"),"  Developers, engineers, and operators that implement\nORCA into their DAAC workflows and Cumulus instances."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contributor:"),"  Developers, engineers, and users who are not a\npart of the core team that actively provides fixes, enhancements,\nand features through code pull requests to the cumulus-orca\nrespository."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Core Developer:"),"  Part of the core ORCA team that develops code and\ndocumentation for the ORCA components. If you would like to be a part of\nthis team, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:dwerner@contractor.usgs.gov?subject=Join%20ORCA%20Core%20Development%20Team"},"Darla Werner"),"."),(0,o.kt)("h2",{id:"requesting-fixes-enhancements-and-features"},"Requesting Fixes, Enhancements, and Features"),(0,o.kt)("p",null,"Feature requests and bug documentation should be done by filling out a Jira\ncard in the ",(0,o.kt)("a",{parentName:"p",href:"https://bugs.earthdata.nasa.gov/secure/RapidBoard.jspa?rapidView=985&projectKey=ORCA&view=planning.nodetail"},"ORCA Jira project"),".\nPlease create a descriptive card on the backlog detailing the feature or\nbug along with the desired outcome for acceptance criteria. When possible,\ninclude contact information should the team have questions about the issue.\nPrior to creating a card, please verify that a card does not already exist\nin the project. If a card does exist, add a comment to the card so that the\nteam knows the additional impact for the feature or bug."),(0,o.kt)("p",null,"All cards are prioritized and worked on in a normal 2 week sprint cycle\nthat follows the EOSDIS SAFe timelines."),(0,o.kt)("h2",{id:"providing-fixes-enhancements-and-features"},"Providing Fixes, Enhancements, and Features"),(0,o.kt)("p",null,"ORCA contributors may provide fixes, enhancements, and features to the ORCA\nproject. When making changes to code, ORCA follows a branching model\nsimilar to this ",(0,o.kt)("a",{parentName:"p",href:"https://nvie.com/posts/a-successful-git-branching-model/"},"git branching model"),"."),(0,o.kt)("p",null,"In general, you must create a feature branch off of the develop branch, make\nchanges on that branch, push the branch to the repo, and submit a pull\nrequest for approval. When creating your pull request, you will select your\nbranch as the source and the branch develop as the destination. The pull\nrequest will give ORCA core developers time to review the changes and offer\nsuggestions. All approved pull requests will be merged into the develop\nbranch and be in a release at some later time. Feature branches should be\nnamed feature/","[ORCA Jira Card ID]","."),(0,o.kt)("p",null,"Here is an example of creating a feature branch."),(0,o.kt)("h3",{id:"creating-a-feature-branch"},"Creating a feature branch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/nasa/cumulus-orca.git\n\ncd cumulus-orca\n\ngit checkout develop\n\ngit checkout -b feature/ORCA-1234 develop\n\ngit push origin feature/ORCA-1234\n")))}l.isMDXComponent=!0}}]);