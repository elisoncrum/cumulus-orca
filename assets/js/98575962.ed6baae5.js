(self.webpackChunkorca_website=self.webpackChunkorca_website||[]).push([[6181],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4543:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i={id:"versioning-releases",title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process."},l={unversionedId:"developer/development-guide/code/versioning-releases",id:"developer/development-guide/code/versioning-releases",isDocsHomePage:!1,title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process.",source:"@site/docs/developer/development-guide/code/versioning-releases.md",sourceDirName:"developer/development-guide/code",slug:"/developer/development-guide/code/versioning-releases",permalink:"/cumulus-orca/docs/developer/development-guide/code/versioning-releases",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/versioning-releases.md",version:"current",frontMatter:{id:"versioning-releases",title:"ORCA Versioning and Releases",description:"Provides information to developers on semantic versioning and the release process."},sidebar:"dev_guide",previous:{title:"Best Practices",permalink:"/cumulus-orca/docs/developer/development-guide/code/best-practices"},next:{title:"Running Pylint Against Your Code",permalink:"/cumulus-orca/docs/developer/development-guide/code/linting"}},s=[{value:"Versioning",id:"versioning",children:[]},{value:"Release Process",id:"release-process",children:[{value:"Create a release branch",id:"create-a-release-branch",children:[]},{value:"Update CHANGELOG.md",id:"update-changelogmd",children:[]},{value:"Create a git tag for the release",id:"create-a-git-tag-for-the-release",children:[]},{value:"Running the deployment",id:"running-the-deployment",children:[]}]},{value:"Create a new ORCA release on github",id:"create-a-new-orca-release-on-github",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Delete and regenerate the tag",id:"delete-and-regenerate-the-tag",children:[]}]}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Much of this documentation is also found at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus/blob/master/docs/development/release.md"},"Cumulus"),"."),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"The ORCA team uses semantic versioning. More information about semantic\nversioning can be found ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"here"),"."),(0,o.kt)("h2",{id:"release-process"},"Release Process"),(0,o.kt)("h3",{id:"create-a-release-branch"},"Create a release branch"),(0,o.kt)("p",null,"From develop, create a new release branch from develop following the\n",(0,o.kt)("inlineCode",{parentName:"p"},"release-MAJOR.MINOR.x"),". For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"release-1.14.1"),". Push this branch\nto github if you created it locally."),(0,o.kt)("h3",{id:"update-changelogmd"},"Update CHANGELOG.md"),(0,o.kt)("p",null,"Update the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nasa/cumulus-orca/blob/master/CHANGELOG.md"},"CHANGELOG.md"),".\nPut a header under the 'Unreleased' section with the new version number and\nthe date."),(0,o.kt)("h3",{id:"create-a-git-tag-for-the-release"},"Create a git tag for the release"),(0,o.kt)("p",null,"Make sure you're on the latest commit of the release branch."),(0,o.kt)("p",null,"Create and push a new git tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    git tag -a vx.y.z -m "Release x.y.z"\n    git push origin vx.y.z\n')),(0,o.kt)("h3",{id:"running-the-deployment"},"Running the deployment"),(0,o.kt)("p",null,"Publishing of new releases is handled by a Bamboo release plan and is manually\ntriggered."),(0,o.kt)("p",null,"If you created a new release branch in step one, you will need to create a new\nbamboo deployment plan."),(0,o.kt)("h4",{id:"creating-a-bamboo-deployment-plan"},"Creating a Bamboo deployment plan"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the ORCA project (",(0,o.kt)("a",{parentName:"li",href:"https://ci.earthdata.nasa.gov/browse/ORCA-OI"},"https://ci.earthdata.nasa.gov/browse/ORCA-OI"),"), click\n",(0,o.kt)("inlineCode",{parentName:"li"},"Actions -> Configure Plan")," at the top right."),(0,o.kt)("li",{parentName:"ol"},"Scroll to the bottom of the branch list in the bottom left and select\n",(0,o.kt)("inlineCode",{parentName:"li"},"Create Plan Branch"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the values in that list. Choose a display name that makes it very clear\nthis is a deployment branch plan. Release (branch name) seems to work well.\nMake sure you enter the correct branch name."),(0,o.kt)("li",{parentName:"ol"},"Important Deselect Enable Branch - if you do not do this, it will immediately\nfire off a build."),(0,o.kt)("li",{parentName:"ol"},"Do Immediately On the Branch Details page, enable 'Change Trigger'. Set the\nTrigger type to manual, and this will prevent commits to the branch from\ntriggering the build plan. You should have been redirected to the 'Branch\nDetails' tab after creating the plan. If not, navigate to the branch from\nthe list where you clicked 'Create Plan Branch' in the previous step."),(0,o.kt)("li",{parentName:"ol"},"Go to the Variables tab. Ensure that you are on your branch plan and not the\nmaster plan: You should not see a large list of configured variables, but\ninstead a dropdown allowing you to select variables to override, and the tab\ntitle will be Branch Variables. Set a DEPLOYMENT variable appropriate for the\nrelease (defaults to last committer). This should be cumulus-from-npm-tf\nexcept in special cases such as incompatible backport branches. Then set:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"ORCA_VERSION: ",(0,o.kt)("inlineCode",{parentName:"li"},"<version number>")),(0,o.kt)("li",{parentName:"ul"},"RELEASE_FLAG: true"))),(0,o.kt)("li",{parentName:"ol"},"Enable the branch from the 'Branch Details' page."),(0,o.kt)("li",{parentName:"ol"},"Run the branch using the 'Run' button in the top right.")),(0,o.kt)("p",null,"Bamboo will build and run unit tests against that tagged release."),(0,o.kt)("h2",{id:"create-a-new-orca-release-on-github"},"Create a new ORCA release on github"),(0,o.kt)("p",null,"The release is automated in Bamboo, but the step must be manually started. If\nyou set the ",(0,o.kt)("inlineCode",{parentName:"p"},"RELEASE_FLAG")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," and the build steps passed, you will\nbe able to run the manual 'Release' step in Bamboo."),(0,o.kt)("p",null,"The CI release scripts will create a release based on the release version tag,\nas well as uploading release artifacts to the Github release for the Terraform\nmodules provided by Cumulus. The Terraform release artifacts include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A multi-module Terraform .zip artifact containing filtered copies of the\ntf-modules, packages, and tasks directories for use as Terraform module sources.")),(0,o.kt)("p",null,"Just make sure to verify the appropriate .zip files are present on Github after\nthe release process is complete."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Merge the base branch back into develop and master")),(0,o.kt)("p",null,"Finally, you need to merge the version update changes back into develop and\nmaster."),(0,o.kt)("p",null,"If this is the latest version, create the PRs to merge the release branch\ninto develop and master. "),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Note: ")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},'Do not squash this merge. Doing so will make the "compare" view from step 4\nshow an incorrect diff, because the tag is linked to a specific commit on the\nbase branch.'))),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"delete-and-regenerate-the-tag"},"Delete and regenerate the tag"),(0,o.kt)("p",null,"To delete a published tag to re-tag, follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    git tag -d vx.y.z\n    git push -d origin vx.y.z\n")))}d.isMDXComponent=!0}}]);