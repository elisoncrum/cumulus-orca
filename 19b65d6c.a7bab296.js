(window.webpackJsonp=window.webpackJsonp||[]).push([[8,22],{108:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var o=n(22),r=n(110);function i(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(o.default)();return{withBaseUrl:(n,o)=>function(t,e,n,{forcePrependBaseUrl:o=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(o)return e+n;const a=n.startsWith(e)?n:e+n.replace(/^\//,"");return i?t+a:a}(e,t,n,o)}}function a(t,e={}){const{withBaseUrl:n}=i();return n(t,e)}},110:function(t,e,n){"use strict";function o(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!o(t)}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}))},53:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return s})),n.d(e,"metadata",(function(){return u})),n.d(e,"rightToc",(function(){return m})),n.d(e,"default",(function(){return b}));var o=n(3),r=n(0),i=n.n(r),a=n(107),c=n(115);const s={},u={unversionedId:"templates/pan-zoom-image",id:"templates/pan-zoom-image",isDocsHomePage:!1,title:"pan-zoom-image",description:"The image below can be panned and zoomed using your mouse or the provided buttons.",source:"@site/docs/templates/pan-zoom-image.mdx",slug:"/templates/pan-zoom-image",permalink:"/cumulus-orca/docs/templates/pan-zoom-image",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/templates/pan-zoom-image.mdx",version:"current"},m=[],d={rightToc:m};function b({components:t,...e}){return Object(a.b)("wrapper",Object(o.a)({},d,e,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Interactive Image")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The image below can be panned and zoomed using your mouse or the provided buttons.\nTo reset the image to the original size on the page click ",Object(a.b)("img",{width:"12px",height:"12px",src:e.resetPic,alt:"Reset Image"}),".\nIf you wish to view the full image on a separate page, click this ",Object(a.b)("a",{href:e.imageSource,target:"_blank",rel:"noopener noreferrer"},"link"),"."))),Object(a.b)(c.b,{defaultScale:1,mdxType:"TransformWrapper"},(({zoomIn:t,zoomOut:n,resetTransform:o,...r})=>Object(a.b)(i.a.Fragment,null,Object(a.b)("div",{className:"tools"},Object(a.b)("button",{onClick:t},Object(a.b)("img",{width:"15px",height:"15px",src:e.zoomInPic,alt:"Zoom In"})),Object(a.b)("button",{onClick:n},Object(a.b)("img",{width:"15px",height:"15px",src:e.zoomOutPic,alt:"Zoom Out"})),Object(a.b)("button",{onClick:o},Object(a.b)("img",{width:"15px",height:"15px",src:e.resetPic,alt:"Reset Image"}))),Object(a.b)(c.a,{mdxType:"TransformComponent"},Object(a.b)("img",{src:e.imageSource,alt:e.imageAlt}))))))}b.isMDXComponent=!0},69:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return u})),n.d(e,"default",(function(){return d}));var o=n(3),r=(n(0),n(107)),i=n(53),a=n(108);const c={id:"architecture-intro",title:"ORCA Architecture Introduction",description:"High level overview of ORCA architecture."},s={unversionedId:"about/architecture/architecture-intro",id:"about/architecture/architecture-intro",isDocsHomePage:!1,title:"ORCA Architecture Introduction",description:"High level overview of ORCA architecture.",source:"@site/docs/about/architecture/architecture-intro.mdx",slug:"/about/architecture/architecture-intro",permalink:"/cumulus-orca/docs/about/architecture/architecture-intro",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/about/architecture/architecture-intro.mdx",version:"current",sidebar:"about_orca",previous:{title:"Glossary",permalink:"/cumulus-orca/docs/about/introduction/intro-glossary"},next:{title:"Software System Architecture",permalink:"/cumulus-orca/docs/about/architecture/architecture-software-system"}},u=[],m={rightToc:u};function d({components:t,...e}){return Object(r.b)("wrapper",Object(o.a)({},m,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"ORCA relies heavily on Cumulus and integrates with Cumulus messaging,\nfunctionality, and UI elements. The diagram below provides insight into how the\nsoftware systems interact along with the network and OU boundaries that are\ncrossed using the ORCA system. From a security standpoint, ORCA is generally not\ninteracted directly but instead is acted on by the existing Cumulus systems APIs\nand Dashboard UI. Note that the actual archive storage for ORCA is maintained in\na separate account and VPC. This is done to better separate costs and\npermissions related to this secondary archive copy."),Object(r.b)(i.default,{imageSource:Object(a.a)("img/ORCA-Architecture-System-Context.svg"),imageAlt:"System Context",zoomInPic:Object(a.a)("img/zoom-in.svg"),zoomOutPic:Object(a.a)("img/zoom-out.svg"),resetPic:Object(a.a)("img/zoom-pan-reset.svg"),mdxType:"MyImage"}))}d.isMDXComponent=!0}}]);