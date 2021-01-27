(window.webpackJsonp=window.webpackJsonp||[]).push([[27,22],{108:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c}));var n=a(22),o=a(110);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.default)();return{withBaseUrl:(a,n)=>function(e,t,a,{forcePrependBaseUrl:n=!1,absolute:r=!1}={}){if(!a)return a;if(a.startsWith("#"))return a;if(Object(o.b)(a))return a;if(n)return t+a;const c=a.startsWith(t)?a:t+a.replace(/^\//,"");return r?e+c:c}(t,e,a,n)}}function c(e,t={}){const{withBaseUrl:a}=r();return a(e,t)}},110:function(e,t,a){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return o}))},53:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(3),o=a(0),r=a.n(o),c=a(107),i=a(115);const s={},u={unversionedId:"templates/pan-zoom-image",id:"templates/pan-zoom-image",isDocsHomePage:!1,title:"pan-zoom-image",description:"The image below can be panned and zoomed using your mouse or the provided buttons.",source:"@site/docs/templates/pan-zoom-image.mdx",slug:"/templates/pan-zoom-image",permalink:"/cumulus-orca/docs/templates/pan-zoom-image",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/templates/pan-zoom-image.mdx",version:"current"},m=[],d={rightToc:m};function b({components:e,...t}){return Object(c.b)("wrapper",Object(n.a)({},d,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Interactive Image")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"The image below can be panned and zoomed using your mouse or the provided buttons.\nTo reset the image to the original size on the page click ",Object(c.b)("img",{width:"12px",height:"12px",src:t.resetPic,alt:"Reset Image"}),".\nIf you wish to view the full image on a separate page, click this ",Object(c.b)("a",{href:t.imageSource,target:"_blank",rel:"noopener noreferrer"},"link"),"."))),Object(c.b)(i.b,{defaultScale:1,mdxType:"TransformWrapper"},(({zoomIn:e,zoomOut:a,resetTransform:n,...o})=>Object(c.b)(r.a.Fragment,null,Object(c.b)("div",{className:"tools"},Object(c.b)("button",{onClick:e},Object(c.b)("img",{width:"15px",height:"15px",src:t.zoomInPic,alt:"Zoom In"})),Object(c.b)("button",{onClick:a},Object(c.b)("img",{width:"15px",height:"15px",src:t.zoomOutPic,alt:"Zoom Out"})),Object(c.b)("button",{onClick:n},Object(c.b)("img",{width:"15px",height:"15px",src:t.resetPic,alt:"Reset Image"}))),Object(c.b)(i.a,{mdxType:"TransformComponent"},Object(c.b)("img",{src:t.imageSource,alt:t.imageAlt}))))))}b.isMDXComponent=!0},93:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return d}));var n=a(3),o=(a(0),a(107)),r=a(53),c=a(108);const i={id:"architecture-database-container",title:"Database Container Architecture",description:"ORCA database schema information."},s={unversionedId:"about/architecture/architecture-database-container",id:"about/architecture/architecture-database-container",isDocsHomePage:!1,title:"Database Container Architecture",description:"ORCA database schema information.",source:"@site/docs/about/architecture/architecture-database-container.mdx",slug:"/about/architecture/architecture-database-container",permalink:"/cumulus-orca/docs/about/architecture/architecture-database-container",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/about/architecture/architecture-database-container.mdx",version:"current",sidebar:"about_orca",previous:{title:"Recover Container Architecture",permalink:"/cumulus-orca/docs/about/architecture/architecture-recover-container"},next:{title:"ORCA Tips",permalink:"/cumulus-orca/docs/about/tips"}},u=[],m={rightToc:u};function d({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},m,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"ORCA utilizes a single PostgreSQL RDBMS instance in AWS in order to track and\nmanage the status of a recovery in a typical recover data workflow. The diagram\nbelow provides details on the access and schema used by ORCA to manage recovery\njob status and tracking. The data within the database is considered transient\nand is typically no longer useful after a recovery has reached completion in a\nsuccessful state."),Object(o.b)(r.default,{imageSource:Object(c.a)("img/ORCA-Architecture-Database-Container-Component.svg"),imageAlt:"ORCA Database Container Context",zoomInPic:Object(c.a)("img/zoom-in.svg"),zoomOutPic:Object(c.a)("img/zoom-out.svg"),resetPic:Object(c.a)("img/zoom-pan-reset.svg"),mdxType:"MyImage"}))}d.isMDXComponent=!0}}]);