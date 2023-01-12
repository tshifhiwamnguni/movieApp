(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4054],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach(function(n){s(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var i=a.createContext({}),l=function(e){var n,t=a.useContext(i),s=t;return e&&(s="function"==typeof(n=e)?e(t):o(o({},t),e)),s},c=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef(function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],!(n.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),p=l(t),d=p["".concat(i,".").concat(s)]||p[s]||u[s]||r;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))});function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=Array(r);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},33594:function(e,n,t){"use strict";t.d(n,{EL:function(){return c}});var a,s=t(67294),r=["bottom","height","left","right","top","width"],o=new Map,i=function e(){var n=[];o.forEach(function(e,t){var a,s,o=t.getBoundingClientRect();a=o,s=e.rect,void 0===a&&(a={}),void 0===s&&(s={}),r.some(function(e){return a[e]!==s[e]})&&(e.rect=o,n.push(e))}),n.forEach(function(e){e.callbacks.forEach(function(n){return n(e.rect)})}),a=window.requestAnimationFrame(e)},l="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function c(e,n,t){"boolean"==typeof(r=n)?u=n:(u=null==(d=null==n?void 0:n.observe)||d,p=null==n?void 0:n.onChange),(c=t)&&"[object Function]"==({}).toString.call(c)&&(p=t);var r,c,u,p,d,m=(0,s.useState)(e.current),g=m[0],f=m[1],h=(0,s.useRef)(!1),k=(0,s.useRef)(!1),v=(0,s.useState)(null),b=v[0],x=v[1],y=(0,s.useRef)(p);return l(function(){y.current=p,e.current!==g&&f(e.current)}),l(function(){g&&!h.current&&(h.current=!0,x(g.getBoundingClientRect()))},[g]),l(function(){if(u){var n=g;if(k.current||(k.current=!0,n=e.current),n){var t,s,r=(t=n,s=function(e){null==y.current||y.current(e),x(e)},{observe:function(){var e=0===o.size;o.has(t)?o.get(t).callbacks.push(s):o.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&i()},unobserve:function(){var e=o.get(t);if(e){var n=e.callbacks.indexOf(s);n>=0&&e.callbacks.splice(n,1),e.callbacks.length||o.delete(t),o.size||cancelAnimationFrame(a)}}});return r.observe(),function(){r.unobserve()}}}},[u,g,e]),b}},37144:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-smoothing",function(){return t(46795)}])},46795:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var a=t(99534);t(67294);var s=t(3905);t(41664);var r,o=t(5679),i=t(83434),l=t(53339),c=t(74296),u=t(78295),p=t(72394),d=l.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:d,classes:{utilities:{".antialiased":{"-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},".subpixel-antialiased":{"-webkit-font-smoothing":"auto","-moz-osx-font-smoothing":"auto"}}},meta:{title:"Font Smoothing",description:"Utilities for controlling the font smoothing of an element."},slug:"font-smoothing",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Applying font smoothing",slug:"applying-font-smoothing",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},f=c.X_;function h(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)(f,Object.assign({},g,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(o.X,{level:3,id:"applying-font-smoothing",nextElement:{type:"paragraph"}},"Applying font smoothing"),(0,s.kt)("p",null,"Use the ",(0,s.kt)("inlineCode",{parentName:"p"},"subpixel-antialiased")," utility to render text using subpixel antialiasing and the ",(0,s.kt)("inlineCode",{parentName:"p"},"antialiased")," utility to render text using grayscale antialiasing."),(0,s.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="flex flex-col gap-8">\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">subpixel-antialiased</span>\n      <p class="subpixel-antialiased text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class="font-medium text-sm text-slate-500 font-mono mb-3 dark:text-slate-400">antialiased</span>\n      <p class="antialiased text-lg font-medium text-slate-900 dark:text-slate-200">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"subpixel-antialiased")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"antialiased")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(p.k,{defaultClass:"antialiased",featuredClass:"subpixel-antialiased",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(u.p,{defaultClass:"antialiased",featuredClass:"subpixel-antialiased",element:"p",mdxType:"BreakpointsAndMediaQueries"}))}h.isMDXComponent=!0,h.layoutProps=g},78295:function(e,n,t){"use strict";t.d(n,{p:function(){return s}});var a=t(85893);function s(e){var n=e.defaultClass,t=e.featuredClass,s=e.element,r=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,a.jsxs)("code",{children:["md:",t]})," to apply the ",(0,a.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),r||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",n?"".concat(n," "):"").replace("{featuredClass}",t)}})}),(0,a.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,a.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,a.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,n,t){"use strict";t.d(n,{e:function(){return u}});var a=t(26042),s=t(85893),r=t(86010),o=t(61636),i=t(67294),l={none:"",md:"p-8"};function c(e){var n=e.as,t=e.style,o=e.padding,i=e.p,c=e.className,u=e.containerClassName,p=e.html,d=e.children,m=e.hint,g=e.hintClassName,f=e.lightOnly,h=void 0!==f&&f,k=null!=o?o:void 0===i?"md":i,v=l[k];if(void 0===v)throw Error("Invalid padding value: ".concat(JSON.stringify(k)));return(0,s.jsxs)("div",{className:u,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,r.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===n?"div":n,{style:t,className:(0,r.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!h&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,r.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!h&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,a.Z)({className:(0,r.Z)("relative rounded-xl overflow-auto",v,c)},p?{dangerouslySetInnerHTML:{__html:p}}:{children:d})),(0,s.jsx)("div",{className:(0,r.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!h&&"dark:border-white/5")})]})]})}function u(e){return e.resizable?(0,s.jsx)(p,(0,a.Z)({},e)):(0,s.jsx)(c,(0,a.Z)({},e))}function p(e){var n=(0,i.useRef)(),t=(0,o.c$)(0),r=(0,i.useRef)(),l=(0,i.useRef)();return(0,i.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(n.current),function(){e.disconnect()}},[]),(0,i.useEffect)(function(){l.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:n,className:"relative",children:[(0,s.jsx)(c,(0,a.Z)({as:o.ww.div,style:{marginRight:(0,o.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:r,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(o.ww.div,{ref:l,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:r,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},72394:function(e,n,t){"use strict";t.d(n,{k:function(){return s}});var a=t(85893);function s(e){e.property,e.utility;var n=e.variant,t=void 0===n?"hover":n,s=e.defaultClass,r=e.featuredClass,o=e.element,i=e.children;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,a.jsxs)("code",{children:[t,":",r]})," ","to only apply the ",(0,a.jsx)("code",{children:r})," utility on ",t,"."]}),i||(0,a.jsx)("pre",{className:"language-html",children:(0,a.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===o?"div":o).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",t).replace("{featuredClass}",r)}})}),(0,a.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,a.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},53339:function(e,n,t){"use strict";t.d(n,{L:function(){return l}});var a=t(26042),s=t(85893),r=t(21744),o=t(99440),i=t(54713);function l(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(r.C,(0,a.Z)({nav:i.u},e))]})}l.nav=i.u},29815:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var a=t(20943),s=t(13375),r=t(91566);function o(e){return function(e){if(Array.isArray(e))return(0,a.Z)(e)}(e)||(0,s.Z)(e)||(0,r.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,2912,8555,2474,4713,9774,2888,179],function(){return e(e.s=37144)}),_N_E=e.O()}]);