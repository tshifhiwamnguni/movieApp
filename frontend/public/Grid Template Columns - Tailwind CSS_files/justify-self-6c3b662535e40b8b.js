(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6542],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return o},kt:function(){return u}});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach(function(a){s(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var r=n.createContext({}),p=function(e){var a,t=n.useContext(r),s=t;return e&&(s="function"==typeof(a=e)?e(t):c(c({},t),e)),s},o=function(e){var a=p(e.components);return n.createElement(r.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef(function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,o=function(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],!(a.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,["components","mdxType","originalType","parentName"]),d=p(t),u=d["".concat(r,".").concat(s)]||d[s]||l[s]||i;return t?n.createElement(u,c(c({ref:a},o),{},{components:t})):n.createElement(u,c({ref:a},o))});function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,c=Array(i);c[0]=d;var r={};for(var p in a)hasOwnProperty.call(a,p)&&(r[p]=a[p]);r.originalType=e,r.mdxType="string"==typeof e?e:s,c[1]=r;for(var o=2;o<i;o++)c[o]=t[o];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33594:function(e,a,t){"use strict";t.d(a,{EL:function(){return o}});var n,s=t(67294),i=["bottom","height","left","right","top","width"],c=new Map,r=function e(){var a=[];c.forEach(function(e,t){var n,s,c=t.getBoundingClientRect();n=c,s=e.rect,void 0===n&&(n={}),void 0===s&&(s={}),i.some(function(e){return n[e]!==s[e]})&&(e.rect=c,a.push(e))}),a.forEach(function(e){e.callbacks.forEach(function(a){return a(e.rect)})}),n=window.requestAnimationFrame(e)},p="undefined"!=typeof window&&window.document&&window.document.createElement?s.useLayoutEffect:s.useEffect;function o(e,a,t){"boolean"==typeof(i=a)?l=a:(l=null==(u=null==a?void 0:a.observe)||u,d=null==a?void 0:a.onChange),(o=t)&&"[object Function]"==({}).toString.call(o)&&(d=t);var i,o,l,d,u,m=(0,s.useState)(e.current),g=m[0],k=m[1],N=(0,s.useRef)(!1),b=(0,s.useRef)(!1),f=(0,s.useState)(null),j=f[0],h=f[1],v=(0,s.useRef)(d);return p(function(){v.current=d,e.current!==g&&k(e.current)}),p(function(){g&&!N.current&&(N.current=!0,h(g.getBoundingClientRect()))},[g]),p(function(){if(l){var a=g;if(b.current||(b.current=!0,a=e.current),a){var t,s,i=(t=a,s=function(e){null==v.current||v.current(e),h(e)},{observe:function(){var e=0===c.size;c.has(t)?c.get(t).callbacks.push(s):c.set(t,{rect:void 0,hasRectChanged:!1,callbacks:[s]}),e&&r()},unobserve:function(){var e=c.get(t);if(e){var a=e.callbacks.indexOf(s);a>=0&&e.callbacks.splice(a,1),e.callbacks.length||c.delete(t),c.size||cancelAnimationFrame(n)}}});return i.observe(),function(){i.unobserve()}}}},[l,g,e]),j}},63321:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/justify-self",function(){return t(95541)}])},95541:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return N}});var n=t(99534);t(67294);var s=t(3905);t(41664);var i,c=t(5679),r=t(83434),p=t(53339),o=t(74296),l=t(78295),d=t(72394),u=p.L,m=function(e){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",Object.assign({},e))},g={Layout:u,classes:{utilities:{".justify-self-auto":{"justify-self":"auto"},".justify-self-start":{"justify-self":"start"},".justify-self-end":{"justify-self":"end"},".justify-self-center":{"justify-self":"center"},".justify-self-stretch":{"justify-self":"stretch"}}},meta:{title:"Justify Self",description:"Utilities for controlling how an individual grid item is aligned along its inline axis."},slug:"justify-self",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},k=o.X_;function N(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,s.kt)(k,Object.assign({},g,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(c.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,s.kt)(c.X,{level:3,id:"auto",nextElement:{type:"paragraph"}},"Auto"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-self-auto")," to align an item based on the value of the grid’s ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-items")," property:"),(0,s.kt)(r.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">\n    <div class="p-4 rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">01</div>\n    <div class="justify-self-auto p-4 rounded-lg bg-purple-500 shadow-lg">02</div>\n    <div class="p-4 rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">03</div>\n    <div class="p-4 rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">04</div>\n    <div class="p-4 rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">05</div>\n    <div class="p-4 rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">06</div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid justify-items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"justify-self-auto")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(c.X,{level:3,id:"start",nextElement:{type:"paragraph"}},"Start"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-self-start")," to align a grid item to the start its inline axis:"),(0,s.kt)(r.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">\n    <div class="p-4 rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">01</div>\n    <div class="bg-stripes-pink rounded-lg">\n      <div class="justify-self-start p-4 w-14 h-14 rounded-lg bg-pink-500 shadow-lg">02</div>\n    </div>\n    <div class="p-4 rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">03</div>\n    <div class="p-4 rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">04</div>\n    <div class="p-4 rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">05</div>\n    <div class="p-4 rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">06</div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid justify-items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"justify-self-start")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(c.X,{level:3,id:"center",nextElement:{type:"paragraph"}},"Center"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-self-center")," to align a grid item along the center its inline axis:"),(0,s.kt)(r.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">\n    <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">01</div>\n    <div class="justify-self-center grid w-full bg-stripes-indigo rounded-lg">\n      <div class="justify-self-center p-4 w-14 h-14 rounded-lg bg-indigo-500 shadow-lg">02</div>\n    </div>\n    <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03</div>\n    <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">04</div>\n    <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">05</div>\n    <div class="p-4 rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">06</div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid justify-items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"justify-self-center")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(c.X,{level:3,id:"end",nextElement:{type:"paragraph"}},"End"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-self-end")," to align a grid item to the end its inline axis:"),(0,s.kt)(r.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">\n    <div class="p-4 rounded-lg bg-blue-300 dark:bg-blue-800 dark:text-blue-500">01</div>\n    <div class="justify-self-end grid w-full bg-stripes-blue rounded-lg">\n      <div class="justify-self-end p-4 w-14 h-14 rounded-lg bg-blue-500 shadow-lg">02</div>\n    </div>\n    <div class="p-4 rounded-lg bg-blue-300 dark:bg-blue-800 dark:text-blue-500">03</div>\n    <div class="p-4 rounded-lg bg-blue-300 dark:bg-blue-800 dark:text-blue-500">04</div>\n    <div class="p-4 rounded-lg bg-blue-300 dark:bg-blue-800 dark:text-blue-500">05</div>\n    <div class="p-4 rounded-lg bg-blue-300 dark:bg-blue-800 dark:text-blue-500">06</div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid justify-items-stretch ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"justify-self-end")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)(c.X,{level:3,id:"stretch",nextElement:{type:"paragraph"}},"Stretch"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"justify-self-stretch")," to stretch a grid item to fill the grid area on its inline axis:"),(0,s.kt)(r.e,{containerClassName:"mt-4 -mb-3",html:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr font-mono text-white text-sm font-bold leading-6 text-center">\n    <div class="bg-stripes-fuchsia rounded-lg">\n      <div class="p-4 w-14 h-14 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">01</div>\n    </div>\n    <div class="justify-self-stretch grid w-full bg-stripes-fuchsia rounded-lg">\n      <div class="justify-self-stretch p-4 rounded-lg bg-fuchsia-500 shadow-lg">02</div>\n    </div>\n    <div class="bg-stripes-fuchsia rounded-lg">\n      <div class="p-4 w-14 h-14 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">03</div>\n    </div>\n    <div class="bg-stripes-fuchsia rounded-lg">\n      <div class="p-4 w-14 h-14 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">04</div>\n    </div>\n    <div class="bg-stripes-fuchsia rounded-lg">\n      <div class="p-4 w-14 h-14 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">05</div>\n    </div>\n    <div class="bg-stripes-fuchsia rounded-lg">\n      <div class="p-4 w-14 h-14 rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">06</div>\n    </div>\n  </div>\n'}),(0,s.kt)("pre",Object.assign({},{className:"language-html"}),(0,s.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),"grid justify-items-start ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"'),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"justify-self-stretch")," ...",(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),'"')),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"02",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,s.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,s.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,s.kt)("hr",null),(0,s.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,s.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,s.kt)(d.k,{defaultClass:"justify-self-start",featuredClass:"justify-self-end",mdxType:"HoverFocusAndOtherStates"}),(0,s.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,s.kt)(l.p,{defaultClass:"justify-self-start",featuredClass:"justify-self-end",mdxType:"BreakpointsAndMediaQueries"}))}N.isMDXComponent=!0,N.layoutProps=g},78295:function(e,a,t){"use strict";t.d(a,{p:function(){return s}});var n=t(85893);function s(e){var a=e.defaultClass,t=e.featuredClass,s=e.element,i=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use ",(0,n.jsxs)("code",{children:["md:",t]})," to apply the ",(0,n.jsx)("code",{children:t})," utility at only medium screen sizes and above."]}),i||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">md:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===s?"div":s).replace("{defaultClass} ",a?"".concat(a," "):"").replace("{featuredClass}",t)}})}),(0,n.jsxs)("p",{children:["To learn more, check out the documentation on"," ",(0,n.jsx)("a",{href:"/docs/responsive-design",children:"Responsive Design"}),","," ",(0,n.jsx)("a",{href:"/docs/dark-mode",children:"Dark Mode"})," and"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states#media-queries",children:"other media query modifiers"}),"."]})]})}},83434:function(e,a,t){"use strict";t.d(a,{e:function(){return l}});var n=t(26042),s=t(85893),i=t(86010),c=t(61636),r=t(67294),p={none:"",md:"p-8"};function o(e){var a=e.as,t=e.style,c=e.padding,r=e.p,o=e.className,l=e.containerClassName,d=e.html,u=e.children,m=e.hint,g=e.hintClassName,k=e.lightOnly,N=void 0!==k&&k,b=null!=c?c:void 0===r?"md":r,f=p[b];if(void 0===f)throw Error("Invalid padding value: ".concat(JSON.stringify(b)));return(0,s.jsxs)("div",{className:l,children:[void 0!==m&&(0,s.jsx)("div",{className:(0,i.Z)(g,"not-prose mb-4"),children:(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,s.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-slate-400 dark:stroke-slate-300"}),(0,s.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-slate-400 dark:stroke-sky-400"})]}),(0,s.jsx)("p",{className:"text-slate-700 text-sm font-medium dark:text-slate-200",children:m})]})}),(0,s.jsxs)(void 0===a?"div":a,{style:t,className:(0,i.Z)("not-prose relative bg-slate-50 rounded-xl overflow-hidden",!N&&"dark:bg-slate-800/25"),children:[(0,s.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,i.Z)("absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!N&&"dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,s.jsx)("div",(0,n.Z)({className:(0,i.Z)("relative rounded-xl overflow-auto",f,o)},d?{dangerouslySetInnerHTML:{__html:d}}:{children:u})),(0,s.jsx)("div",{className:(0,i.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!N&&"dark:border-white/5")})]})]})}function l(e){return e.resizable?(0,s.jsx)(d,(0,n.Z)({},e)):(0,s.jsx)(o,(0,n.Z)({},e))}function d(e){var a=(0,r.useRef)(),t=(0,c.c$)(0),i=(0,r.useRef)(),p=(0,r.useRef)();return(0,r.useEffect)(function(){var e=new window.ResizeObserver(function(){t.set(0)});return e.observe(a.current),function(){e.disconnect()}},[]),(0,r.useEffect)(function(){p.current.onselectstart=function(){return!1}},[]),(0,s.jsxs)("div",{ref:a,className:"relative",children:[(0,s.jsx)(o,(0,n.Z)({as:c.ww.div,style:{marginRight:(0,c.Hm)(t,function(e){return-e})}},e)),(0,s.jsx)("div",{ref:i,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,s.jsx)(c.ww.div,{ref:p,drag:"x",_dragX:t,dragMomentum:!1,dragElastic:0,dragConstraints:i,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:t},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,s.jsx)("div",{className:"w-1.5 h-8 bg-slate-500/60 rounded-full"})})})]})}},72394:function(e,a,t){"use strict";t.d(a,{k:function(){return s}});var n=t(85893);function s(e){e.property,e.utility;var a=e.variant,t=void 0===a?"hover":a,s=e.defaultClass,i=e.featuredClass,c=e.element,r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use"," ",(0,n.jsxs)("code",{children:[t,":",i]})," ","to only apply the ",(0,n.jsx)("code",{children:i})," utility on ",t,"."]}),r||(0,n.jsx)("pre",{className:"language-html",children:(0,n.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>{element}</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{defaultClass} <span class="code-highlight bg-code-highlight">{variant}:{featuredClass}</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>{element}</span><span class="token punctuation">></span></span>\n'.replace(/{element}/g,void 0===c?"div":c).replace("{defaultClass} ",s?"".concat(s," "):"").replace("{variant}",t).replace("{featuredClass}",i)}})}),(0,n.jsxs)("p",{children:["For a complete list of all available state modifiers, check out the"," ",(0,n.jsx)("a",{href:"/docs/hover-focus-and-other-states",children:"Hover, Focus, & Other States"})," documentation."]})]})}},53339:function(e,a,t){"use strict";t.d(a,{L:function(){return p}});var n=t(26042),s=t(85893),i=t(21744),c=t(99440),r=t(54713);function p(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Dx,{children:e.layoutProps.meta.metaTitle||e.layoutProps.meta.title}),(0,s.jsx)(i.C,(0,n.Z)({nav:r.u},e))]})}p.nav=r.u},29815:function(e,a,t){"use strict";t.d(a,{Z:function(){return c}});var n=t(20943),s=t(13375),i=t(91566);function c(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,s.Z)(e)||(0,i.Z)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[3430,2912,8555,2474,4713,9774,2888,179],function(){return e(e.s=63321)}),_N_E=e.O()}]);