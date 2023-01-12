(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3117],{3905:function(e,a,n){"use strict";n.d(a,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function s(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach(function(a){s(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var o=t.createContext({}),c=function(e){var a,n=t.useContext(o),s=n;return e&&(s="function"==typeof(a=e)?e(n):i(i({},n),e)),s},p=function(e){var a=c(e.components);return t.createElement(o.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef(function(e,a){var n=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],!(a.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["components","mdxType","originalType","parentName"]),u=c(n),m=u["".concat(o,".").concat(s)]||u[s]||l[s]||r;return n?t.createElement(m,i(i({ref:a},p),{},{components:n})):t.createElement(m,i({ref:a},p))});function m(e,a){var n=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=n.length,i=Array(r);i[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33594:function(e,a,n){"use strict";n.d(a,{EL:function(){return p}});var t,s=n(67294),r=["bottom","height","left","right","top","width"],i=new Map,o=function e(){var a=[];i.forEach(function(e,n){var t,s,i=n.getBoundingClientRect();t=i,s=e.rect,void 0===t&&(t={}),void 0===s&&(s={}),r.some(function(e){return t[e]!==s[e]})&&(e.rect=i,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),t=window.requestAnimationFrame(e)},c="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function p(e,a,n){"boolean"==typeof(r=a)?l=a:(l=null==(m=null==a?void 0:a.observe)||m,u=null==a?void 0:a.onChange),(p=n)&&"[object Function]"==({}).toString.call(p)&&(u=n);var r,p,l,u,m,g=(0,s.useState)(e.current),d=g[0],k=g[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),f=(0,s.useState)(null),j=f[0],O=f[1],h=(0,s.useRef)(u);return c(function(){h.current=u,e.current!==d&&k(e.current)}),c(function(){d&&!N.current&&(N.current=!0,O(d.getBoundingClientRect()))},[d]),c(function(){if(l){var a=d;if(b.current||(b.current=!0,a=e.current),a){var n,s,r=(n=a,s=function(e){null==h.current||h.current(e),O(e)},{observe:function(){var e=0===i.size;i.has(n)?i.get(n).callbacks.push(s):i.set(n,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&o()},unobserve:function(){var e=i.get(n);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||i.delete(n),i.size||cancelAnimationFrame(t)}}});return r.observe(),function(){r.unobserve()}}}},[l,d,e]),j}},10293:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-auto-rows",function(){return n(96722)}])},96722:function(e,a,n){"use strict";n.r(a),n.d(a,{default:function(){return j}});var t=n(99534);n(67294);var s,r=n(3905),i=n(41664),o=n.n(i),c=n(59533),p=n(5679),l=n(53339),u=n(74296),m=n(32189),g=n(78295),d=n(72394),k=l.L,N=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",Object.assign({},e))},b={Layout:k,classes:{utilities:{".auto-rows-auto":{"grid-auto-rows":"auto"},".auto-rows-min":{"grid-auto-rows":"min-content"},".auto-rows-max":{"grid-auto-rows":"max-content"},".auto-rows-fr":{"grid-auto-rows":"minmax(0, 1fr)"}}},meta:{title:"Grid Auto Rows",description:"Utilities for controlling the size of implicitly-created grid rows."},slug:"grid-auto-rows",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Sizing implicitly-created grid rows",slug:"sizing-implicitly-created-grid-rows",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},f=u.X_;function j(e){var a=e.components,n=(0,t.Z)(e,["components"]);return(0,r.kt)(f,Object.assign({},b,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(p.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,r.kt)(p.X,{level:3,id:"sizing-implicitly-created-grid-rows",nextElement:{type:"paragraph"}},"Sizing implicitly-created grid rows"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"auto-rows-{size}")," utilities to control the size implicitly-created grid rows."),(0,r.kt)("pre",Object.assign({},{className:"language-html"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid grid-flow-row ",(0,r.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"auto-rows-max"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"01",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"03",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,r.kt)("hr",null),(0,r.kt)(N,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,r.kt)(N,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,r.kt)(d.k,{defaultClass:"grid grid-flow-row auto-rows-max",featuredClass:"auto-rows-min",mdxType:"HoverFocusAndOtherStates"}),(0,r.kt)(N,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,r.kt)(g.p,{defaultClass:"grid grid-flow-row auto-rows-max",featuredClass:"auto-rows-min",mdxType:"BreakpointsAndMediaQueries"}),(0,r.kt)("hr",null),(0,r.kt)(p.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,r.kt)(p.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,r.kt)("p",null,"By default, Tailwind includes four general purpose ",(0,r.kt)("inlineCode",{parentName:"p"},"grid-auto-rows")," utilities. You can customize these values by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.gridAutoRows")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"theme.extend.gridAutoRows")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,r.kt)(c.M,{filename:"tailwind.config.js"},(0,r.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,r.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"theme"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"extend"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token literal-property property"}),"gridAutoRows"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string-property property"}),"'2fr'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'minmax(0, 2fr)'"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),"\n"),(0,r.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,r.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),"\n")))),(0,r.kt)("p",null,"Learn more about customizing the default theme in the ",(0,r.kt)(o(),{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,r.kt)("a",null,"theme customization"))," documentation."),(0,r.kt)(p.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,r.kt)(m.k,{property:"grid-auto-rows",defaultClass:"grid grid-flow-row",featuredClass:"auto-rows-[minmax(0,_2fr)]",mdxType:"ArbitraryValues"}))}j.isMDXComponent=!0,j.layoutProps=b},59533:function(e,a,n){"use strict";n.d(a,{M:function(){return r}});var t=n(85893),s=n(6774);function r(e){var a=e.filename,n=e.children;return(0,t.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,t.jsx)(s.n,{primary:{name:a},showTabMarkers:!1}),(0,t.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:n})]})}},6774:function(e,a,n){"use strict";n.d(a,{n:function(){return r}});var t=n(85893),s=n(86010);function r(e){var a=e.primary,n=e.secondary,r=e.showTabMarkers,i=e.side,o=e.translucent,c=e.children;return(0,t.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,t.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,(void 0===r||r)&&(a.saved?(0,t.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,t.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,t.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,t.jsxs)("div",{className:(0,s.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===i?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==o&&o&&"dark:bg-slate-800/50"),children:[(void 0===n?[]:n).map(function(e){var a=e.name,n=e.open,r=e.className;return(0,t.jsx)("div",{className:(0,s.Z)("px-4 py-1 border-r border-slate-200/5",r,{italic:!(void 0===n||n)}),children:a},a)}),c&&(0,t.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:c})]})]})}},29815:function(e,a,n){"use strict";n.d(a,{Z:function(){return i}});var t=n(20943),s=n(13375),r=n(91566);function i(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[8555,2474,4713,8732,9774,2888,179],function(){return e(e.s=10293)}),_N_E=e.O()}]);