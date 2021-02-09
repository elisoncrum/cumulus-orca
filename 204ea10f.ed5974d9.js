(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,b=p["".concat(r,".").concat(u)]||p[u]||d[u]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(7),i=(n(0),n(108)),r={id:"contrib-documentation-templates",title:"Documentation Templates",desc:"Provides information on the templates currently offered."},c={unversionedId:"developer/development-guide/documentation/contrib-documentation-templates",id:"developer/development-guide/documentation/contrib-documentation-templates",isDocsHomePage:!1,title:"Documentation Templates",description:"ORCA utilizes templates to easily manage documentation objects so that they",source:"@site/docs/developer/development-guide/documentation/documentaion-templates.md",slug:"/developer/development-guide/documentation/contrib-documentation-templates",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-templates",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/documentation/documentaion-templates.md",version:"current",sidebar:"dev_guide",previous:{title:"Adding New Content",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-add"},next:{title:"Task Documentation",permalink:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-tasks"}},m=[{value:"<code>pan-zoom-image.mdx</code> Template",id:"pan-zoom-imagemdx-template",children:[]}],s={rightToc:m};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ORCA utilizes templates to easily manage documentation objects so that they\nhave a consistent look and feel for the end user. The sections below detail\nthe templates currently being maintained. All templates are maintained in the\n",Object(i.b)("inlineCode",{parentName:"p"},"website/docs/templates")," folder of the ORCA repository."),Object(i.b)("h2",{id:"pan-zoom-imagemdx-template"},Object(i.b)("inlineCode",{parentName:"h2"},"pan-zoom-image.mdx")," Template"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"pan-zoom-image.mdx")," template provides an author with a template that renders\nimages on the website that can be panned and zoomed. In addition the end user is\nprovided notes and links to display the image in a separate window. An example\nof this template in use can be seen on the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/cumulus-orca/docs/about/architecture/architecture-intro"}),"ORCA Architecture Introduction page"),"."),Object(i.b)("p",null,"To use the template create an ",Object(i.b)("inlineCode",{parentName:"p"},".mdx")," content file as laid out in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/cumulus-orca/docs/developer/development-guide/documentation/contrib-documentation-add"}),"Adding New Content"),".\nA sample of a content file using the template is provided below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mdx"}),"---\nid: my-unique-id\ntitle: My Content Page\ndesc: Provides information on my content.\n---\n\nimport MyImage from '@site/docs/templates/pan-zoom-image.mdx';\xac\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n\nThe grey fox jumped over the red fern chasing the pink pig.\n\n<MyImage\xac\n    imageSource={useBaseUrl('img/my-image.svg')}\xac\n    imageAlt=\"A fox chasing a pig.\"\xac\n    zoomInPic={useBaseUrl('img/zoom-in.svg')}\xac\n    zoomOutPic={useBaseUrl('img/zoom-out.svg')}\xac\n    resetPic={useBaseUrl('img/zoom-pan-reset.svg')}\xac\n/>\n")),Object(i.b)("p",null,"When using the template as seen from the example above, you must import both the\n",Object(i.b)("inlineCode",{parentName:"p"},"useBaseUrl")," library and the template. More information on the ",Object(i.b)("inlineCode",{parentName:"p"},"useBaseUrl"),"\nfunctionality can be found in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/docusaurus-core#usebaseurl"}),"Docusaurus API documentation"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mdx"}),"import MyImage from '@site/docs/templates/pan-zoom-image.mdx';\xac\nimport useBaseUrl from '@docusaurus/useBaseUrl';\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),Object(i.b)("inlineCode",{parentName:"h5"},"useBaseUrl"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"useBaseURL")," library allows us to reference the ",Object(i.b)("inlineCode",{parentName:"p"},"img")," path and image\nfile without having to create a relative location path from the current document."))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Image Location and Path")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Note that the ",Object(i.b)("inlineCode",{parentName:"p"},"img")," directory is in ",Object(i.b)("inlineCode",{parentName:"p"},"website/static/img")," but because of the way\nDocusaurus builds, anything within the static directory will be copied to the\nroot of the build directory for deployment. See information about this in the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/deployment/#deploying-to-github-pages"}),"Docusaurus documentation"),"."))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Using ",Object(i.b)("inlineCode",{parentName:"h5"},"@site"))),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"MyImage")," import provides a name to reference the ",Object(i.b)("inlineCode",{parentName:"p"},"pan-zoom-image.mdx")," template.\nThis name can be any alpha numeric value and is often camel cased."),Object(i.b)("p",{parentName:"div"},"By using ",Object(i.b)("inlineCode",{parentName:"p"},"@site/docs/templates/")," as the path, the template does not need to be\nreferenced via relative location. This allows Docusaurus to figure out the template\nlocations starting at the ",Object(i.b)("inlineCode",{parentName:"p"},"website")," root directory."))),Object(i.b)("p",null,"The position of the template content in the document is based on where you place\nthe tag for ",Object(i.b)("inlineCode",{parentName:"p"},"MyImage"),". In the example above, the tag was placed at the end of the\ndocument. This means that the content from the template will appear at the end of\nthe document. In addition this particular template requires the end user to\npopulate specific variables."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-mdx"}),"<MyImage\xac\n    imageSource={useBaseUrl('img/my-image.svg')}\xac\n    imageAlt=\"A fox chasing a pig.\"\xac\n    zoomInPic={useBaseUrl('img/zoom-in.svg')}\xac\n    zoomOutPic={useBaseUrl('img/zoom-out.svg')}\xac\n    resetPic={useBaseUrl('img/zoom-pan-reset.svg')}\xac\n/>\n")),Object(i.b)("p",null,"There are five required variables that need to be set for the template."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"imageSource"),": This is the location and name of the image to display."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"imageAlt"),": This is an alternative description of the image."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zoomInPic"),": Picture for zooming in icon. This value should be the same as the example."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"zoomOutPic"),": Picture for zooming out icon. This value should be the same as the example."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"resetPic"),": Picture for the reset icon. This value should be the same as the example.")))}l.isMDXComponent=!0}}]);