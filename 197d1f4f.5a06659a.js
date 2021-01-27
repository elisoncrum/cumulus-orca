(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return u}));var n=a(0),s=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),p=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},m=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||r;return a?s.a.createElement(u,i(i({ref:t},l),{},{components:a})):s.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<r;l++)c[l]=a[l];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return l}));var n=a(3),s=(a(0),a(107));const r={id:"unit-tests",title:"Unit Tests",description:"Instructions on running unit tests."},c={unversionedId:"developer/development-guide/code/unit-tests",id:"developer/development-guide/code/unit-tests",isDocsHomePage:!1,title:"Unit Tests",description:"Instructions on running unit tests.",source:"@site/docs/developer/development-guide/code/unit-tests.md",slug:"/developer/development-guide/code/unit-tests",permalink:"/cumulus-orca/docs/developer/development-guide/code/unit-tests",editUrl:"https://github.com/nasa/cumulus-orca/edit/develop/website/docs/developer/development-guide/code/unit-tests.md",version:"current",sidebar:"dev_guide",previous:{title:"Running PyLint Against Your Code",permalink:"/cumulus-orca/docs/developer/development-guide/code/linting"},next:{title:"Postgres Tests",permalink:"/cumulus-orca/docs/developer/development-guide/code/postgres-tests"}},i=[{value:"Running Unit Tests and Coverage Checks",id:"running-unit-tests-and-coverage-checks",children:[]},{value:"Writing Unit Tests",id:"writing-unit-tests",children:[{value:"Unit Test Standards and Tips",id:"unit-test-standards-and-tips",children:[]}]}],o={rightToc:i};function l({components:e,...t}){return Object(s.b)("wrapper",Object(n.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Run through the steps in ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/developer/development-guide/code/setup-dev-env"}),"Setting Up a Dev Environment")," prior to modifying/testing code."))),Object(s.b)("h2",{id:"running-unit-tests-and-coverage-checks"},"Running Unit Tests and Coverage Checks"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Navigate to the task's base folder."),Object(s.b)("li",{parentName:"ol"},"Activate the virtual environment."),Object(s.b)("li",{parentName:"ol"},"Run",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"coverage run --source [name of lambda] -m pytest\n")),Object(s.b)("a",{name:"coverage"})),Object(s.b)("li",{parentName:"ol"},"Output the coverage results to the file system by running",Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-commandline"}),"coverage html\n")))),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"For error-free running of postgres tests, see ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"postgres-tests"}),"Postgres Tests"),"."))),Object(s.b)("h2",{id:"writing-unit-tests"},"Writing Unit Tests"),Object(s.b)("p",null,"Any written code should have a minimum of 80% ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"#coverage"}),"coverage"),", with higher coverage ideal.\nThis is a requirement for any new code, and will apply retroactively to old code as we have time to create/update tests."),Object(s.b)("p",null,"As described above, we use ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.pytest.org/en/stable/"}),"pytest")," for running unit tests.\nIf pytest reports new or existing tests failing, then this must be resolved before a PR can be completed."),Object(s.b)("p",null,"Familiarize yourself with ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.mock.html"}),"Mock and Patch")," as they are vital for testing components in isolation."),Object(s.b)("h3",{id:"unit-test-standards-and-tips"},"Unit Test Standards and Tips"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Title your testing class with the format"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"class Test[class name](unittest.TestCase):\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Test a single piece of functionality at a time, such as a single path through a function.\nThis will make tests more valuable as diagnostic tools.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Title tests with the format"),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def test_[function name]_[conditions]_[expected result](self):\n"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Avoid using assignments to mock functions and objects."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"class.func = Mock() # This is dangerous\n")),Object(s.b)("p",{parentName:"li"},"These Mocks will persist between tests, potentially causing failures at best, and false-positives at worst.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Create mocks using ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.mock.html#patch"}),"patch")),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"@patch('class.first_func')\n@patch('class.second_func')\ndef test_name(self,\n              second_func_mock: MagicMock,\n              first_func_mock: MagicMock):\n")),Object(s.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"Decorators reverse in order when passed to parameters."))),Object(s.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-tip alert alert--success"}),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can assign Mocks to Mock properties without your Mocks persisting between tests.\nThese Mocks will persist for the duration of the test, then will be removed."),Object(s.b)("pre",{parentName:"div"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"func_mock = Mock()\nclass_mock.func = func_mock # This is fine\n"))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Tests should ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called"}),"assert")," any effects that go outside the test's scope.\nDepending on the size of your test, this could be"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Calls to external classes"),Object(s.b)("li",{parentName:"ul"},"Calls within the class to different functions"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Tests should ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called"}),"assert")," that affects you DO NOT expect do not occur.\nFor example, if 2/3 values in an array are passed through to another function then your test should assert that only the two values in question were passed.\nSimilarly, if the conditions in your test bypass an external effect, Mock that effect and make sure it is not called.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Generally speaking, any Mock you create should have at least one ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.mock.html#unittest.mock.Mock.assert_called"}),"assert")," statement.\nThe main exception is logging messages, particularly verbose or debug messages.")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"A different group of ",Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.python.org/3/library/unittest.html#unittest.TestCase.assertEqual"}),"asserts")," are used to check raw values, such as the return value of the function under test."),Object(s.b)("pre",{parentName:"li"},Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'self.assertEqual(expected_result, result, "Message to be displayed when assert fails.")\n')))))}l.isMDXComponent=!0}}]);