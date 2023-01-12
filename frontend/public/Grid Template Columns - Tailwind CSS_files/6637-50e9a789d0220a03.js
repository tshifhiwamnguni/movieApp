"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6637],{1816:function(e,t,r){r.d(t,{Z:function(){return E}});var n,a=r(67294),l=r(73935);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=["as","style"],o=(0,a.forwardRef)(function(e,t){var r=e.as,n=e.style,l=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,u);return(0,a.createElement)(void 0===r?"span":r,i({ref:t,style:i({border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap",wordWrap:"normal"},void 0===n?{}:n)},l))});function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if(null!=e){var r;if(e&&"[object Function]"==({}).toString.call(e))e(t);else try{e.current=t}catch(n){throw Error('Cannot assign value "'+t+'" to ref "'+e+'"')}}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f=["as","children","type"],p={polite:-1,assertive:-1},v={polite:{},assertive:{}},b={polite:null,assertive:null},m=(0,a.forwardRef)(function(e,t){var r=e.as,n=void 0===r?"div":r,l=e.children,i=e.type,u=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,f),o=(0,a.useRef)(null),p=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.useCallback)(function(e){for(var r,n=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(e,t)}}(e))){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}(t);!(r=n()).done;)c(r.value,e)},t)}(t,o),v=(0,a.useMemo)(function(){return(0,a.createElement)(n,d({},u,{ref:p,"data-reach-alert":!0}),l)},[l,u]);return function(e,t,r){var n,l,i=(l=(0,a.useRef)(null),(0,a.useEffect)(function(){l.current=e},[e]),l.current),u=(0,a.useRef)(null),o=(0,a.useRef)(!1);(0,a.useEffect)(function(){var n,a=(n=r.current,"undefined"!=typeof window&&window.document&&window.document.createElement?n?n.ownerDocument:document:null);o.current?i!==e?(u.current&&u.current.unmount(),u.current=h(e,a),u.current.mount(t)):u.current&&u.current.update(t):(o.current=!0,u.current=h(e,a),u.current.mount(t))},[t,e,i,r]),(0,a.useEffect)(function(){return function(){u.current&&u.current.unmount()}},[])}(void 0===i?"polite":i,v,o),v});function h(e,t){var r=++p[e];return{mount:function n(a){if(b[e])v[e][r]=a,g();else{var l=t.createElement("div");l.setAttribute("data-reach-live-"+e,"true"),b[e]=l,t.body.appendChild(b[e]),n(a)}},update:function(t){v[e][r]=t,g()},unmount:function(){delete v[e][r],g()}}}function g(){null!=n&&window.clearTimeout(n),n=window.setTimeout(function(){Object.keys(v).forEach(function(e){b[e]&&(0,l.render)((0,a.createElement)(o,{as:"div"},(0,a.createElement)("div",{role:"assertive"===e?"alert":"status","aria-live":e},Object.keys(v[e]).map(function(t){return(0,a.cloneElement)(v[e][t],{key:t,ref:null})}))),b[e])})},500)}var E=m},49808:function(e,t,r){r.d(t,{O:function(){return L}});var n=r(67294),a=r(12351),l=r(19946),i=r(32984),u=r(61363),o=r(84575),s=r(16723),c=r(23784),d=r(14157),f=r(3855),p=r(46045);function v({onFocus:e}){let[t,r]=(0,n.useState)(!0);return t?n.createElement(p._,{as:"button",type:"button",features:p.A.Focusable,onFocus(t){t.preventDefault();let n,a=50;function l(){if(a--<=0){n&&cancelAnimationFrame(n);return}if(e()){r(!1),cancelAnimationFrame(n);return}n=requestAnimationFrame(l)}n=requestAnimationFrame(l)}}):null}var b,m=r(73781),h=r(81021),g=((b=g||{})[b.SetSelectedIndex=0]="SetSelectedIndex",b[b.RegisterTab=1]="RegisterTab",b[b.UnregisterTab=2]="UnregisterTab",b[b.RegisterPanel=3]="RegisterPanel",b[b.UnregisterPanel=4]="UnregisterPanel",b);let E={0(e,t){let r=e.tabs.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))});if(t.index<0)return{...e,selectedIndex:e.tabs.indexOf(r[0])};if(t.index>e.tabs.length)return{...e,selectedIndex:e.tabs.indexOf(r[r.length-1])};let n=e.tabs.slice(0,t.index),a=[...e.tabs.slice(t.index),...n].find(e=>r.includes(e));return a?{...e,selectedIndex:e.tabs.indexOf(a)}:e},1(e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=(0,o.z2)([...e.tabs,t.tab],e=>e.current),l=null!=(r=a.indexOf(n))?r:e.selectedIndex;return -1===l&&(l=e.selectedIndex),{...e,tabs:a,selectedIndex:l}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,o.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},T=(0,n.createContext)(null);function y(e){let t=(0,n.useContext)(T);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}return t}T.displayName="TabsSSRContext";let x=(0,n.createContext)(null);function w(e){let t=(0,n.useContext)(x);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,w),r}return t}x.displayName="TabsDataContext";let P=(0,n.createContext)(null);function R(e){let t=(0,n.useContext)(P);if(null===t){let r=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,R),r}return t}function O(e,t){return(0,i.E)(t.type,E,e,t)}P.displayName="TabsActionsContext";let S=n.Fragment,A=(0,a.yV)(function(e,t){let{defaultIndex:r=0,vertical:l=!1,manual:i=!1,onChange:u,selectedIndex:o=null,...d}=e,p=l?"vertical":"horizontal",b=i?"manual":"auto",m=null!==o,h=(0,c.T)(t),[g,E]=(0,n.useReducer)(O,{selectedIndex:null!=o?o:r,tabs:[],panels:[]}),y=(0,n.useMemo)(()=>({selectedIndex:g.selectedIndex}),[g.selectedIndex]),w=(0,f.E)(u||(()=>{})),R=(0,f.E)(g.tabs),A=(0,n.useMemo)(()=>({orientation:p,activation:b,...g}),[p,b,g]),C=(0,f.E)(m?e.selectedIndex:g.selectedIndex),I=(0,n.useMemo)(()=>({registerTab:e=>(E({type:1,tab:e}),()=>E({type:2,tab:e})),registerPanel:e=>(E({type:3,panel:e}),()=>E({type:4,panel:e})),change(e){C.current!==e&&w.current(e),m||E({type:0,index:e})}}),[E,m]);(0,s.e)(()=>{E({type:0,index:null!=o?o:r})},[o]);let k=(0,n.useRef)({tabs:[],panels:[]});return n.createElement(T.Provider,{value:k},n.createElement(P.Provider,{value:I},n.createElement(x.Provider,{value:A},A.tabs.length<=0&&n.createElement(v,{onFocus(){var e,t;for(let r of R.current)if((null==(e=r.current)?void 0:e.tabIndex)===0)return null==(t=r.current)||t.focus(),!0;return!1}}),(0,a.sY)({ourProps:{ref:h},theirProps:d,slot:y,defaultTag:S,name:"Tabs"}))))}),C=(0,a.yV)(function(e,t){let{orientation:r,selectedIndex:n}=w("Tab.List"),l=(0,c.T)(t);return(0,a.sY)({ourProps:{ref:l,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:"div",name:"Tabs.List"})}),I=(0,a.yV)(function(e,t){var r,f;let p=`headlessui-tabs-tab-${(0,l.M)()}`,{orientation:v,activation:b,selectedIndex:g,tabs:E,panels:T}=w("Tab"),x=R("Tab"),P=y("Tab"),O=(0,n.useRef)(null),S=(0,c.T)(O,t);(0,s.e)(()=>x.registerTab(O),[x,O]);let A=P.current.tabs.indexOf(p);-1===A&&(A=P.current.tabs.push(p)-1);let C=E.indexOf(O);-1===C&&(C=A);let I=C===g,k=(0,m.z)(e=>{let t=E.map(e=>e.current).filter(Boolean);if(e.key===u.R.Space||e.key===u.R.Enter){e.preventDefault(),e.stopPropagation(),x.change(C);return}switch(e.key){case u.R.Home:case u.R.PageUp:return e.preventDefault(),e.stopPropagation(),(0,o.jA)(t,o.TO.First);case u.R.End:case u.R.PageDown:return e.preventDefault(),e.stopPropagation(),(0,o.jA)(t,o.TO.Last)}if((0,i.E)(v,{vertical:()=>e.key===u.R.ArrowUp?(0,o.jA)(t,o.TO.Previous|o.TO.WrapAround):e.key===u.R.ArrowDown?(0,o.jA)(t,o.TO.Next|o.TO.WrapAround):void 0,horizontal:()=>e.key===u.R.ArrowLeft?(0,o.jA)(t,o.TO.Previous|o.TO.WrapAround):e.key===u.R.ArrowRight?(0,o.jA)(t,o.TO.Next|o.TO.WrapAround):void 0}))return e.preventDefault()}),F=(0,m.z)(()=>{var e;null==(e=O.current)||e.focus()}),j=(0,n.useRef)(!1),L=(0,m.z)(()=>{var e;j.current||(j.current=!0,null==(e=O.current)||e.focus(),x.change(C),(0,h.Y)(()=>{j.current=!1}))}),M=(0,m.z)(e=>{e.preventDefault()}),D=(0,n.useMemo)(()=>({selected:I}),[I]),z={ref:S,onKeyDown:k,onFocus:"manual"===b?F:L,onMouseDown:M,onClick:L,id:p,role:"tab",type:(0,d.f)(e,O),"aria-controls":null==(f=null==(r=T[C])?void 0:r.current)?void 0:f.id,"aria-selected":I,tabIndex:I?0:-1};return(0,a.sY)({ourProps:z,theirProps:e,slot:D,defaultTag:"button",name:"Tabs.Tab"})}),k=(0,a.yV)(function(e,t){let{selectedIndex:r}=w("Tab.Panels"),l=(0,c.T)(t),i=(0,n.useMemo)(()=>({selectedIndex:r}),[r]);return(0,a.sY)({ourProps:{ref:l},theirProps:e,slot:i,defaultTag:"div",name:"Tabs.Panels"})}),F=a.AN.RenderStrategy|a.AN.Static,j=(0,a.yV)(function(e,t){var r,i,u,o;let{selectedIndex:d,tabs:f,panels:v}=w("Tab.Panel"),b=R("Tab.Panel"),m=y("Tab.Panel"),h=`headlessui-tabs-panel-${(0,l.M)()}`,g=(0,n.useRef)(null),E=(0,c.T)(g,t);(0,s.e)(()=>b.registerPanel(g),[b,g]);let T=m.current.panels.indexOf(h);-1===T&&(T=m.current.panels.push(h)-1);let x=v.indexOf(g);-1===x&&(x=T);let P=x===d,O=(0,n.useMemo)(()=>({selected:P}),[P]),S={ref:E,id:h,role:"tabpanel","aria-labelledby":null==(i=null==(r=f[x])?void 0:r.current)?void 0:i.id,tabIndex:P?0:-1};return P||null!=(u=e.unmount)&&!u||null!=(o=e.static)&&o?(0,a.sY)({ourProps:S,theirProps:e,slot:O,defaultTag:"div",features:F,visible:P,name:"Tabs.Panel"}):n.createElement(p._,{as:"span",...S})}),L=Object.assign(I,{Group:A,List:C,Panels:k,Panel:j})},11355:function(e,t,r){r.d(t,{u:function(){return j}});var n,a=r(67294),l=r(12351),i=r(16567),u=r(32984),o=r(14879),s=r(16723),c=r(3855),d=r(82180),f=r(23784),p=r(9362);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function b(e,...t){e&&t.length>0&&e.classList.remove(...t)}var m,h=((m=h||{}).Ended="ended",m.Cancelled="cancelled",m),g=r(94192),E=r(73781);function T(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,a.createContext)(null);y.displayName="TransitionContext";var x=((n=x||{}).Visible="visible",n.Hidden="hidden",n);let w=(0,a.createContext)(null);function P(e){return"children"in e?P(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function R(e,t){let r=(0,c.E)(e),n=(0,a.useRef)([]),i=(0,o.t)(),s=(0,g.G)(),d=(0,E.z)((e,t=l.l4.Hidden)=>{let a=n.current.findIndex(({el:t})=>t===e);-1!==a&&((0,u.E)(t,{[l.l4.Unmount](){n.current.splice(a,1)},[l.l4.Hidden](){n.current[a].state="hidden"}}),s.microTask(()=>{var e;!P(n)&&i.current&&(null==(e=r.current)||e.call(r))}))}),f=(0,E.z)(e=>{let t=n.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):n.current.push({el:e,state:"visible"}),()=>d(e,l.l4.Unmount)}),p=(0,a.useRef)([]),v=(0,a.useRef)(Promise.resolve()),b=(0,a.useRef)({enter:[],leave:[],idle:[]}),m=(0,E.z)((e,r,n)=>{p.current.splice(0),t&&(t.chains.current[r]=t.chains.current[r].filter(([t])=>t!==e)),null==t||t.chains.current[r].push([e,new Promise(e=>{p.current.push(e)})]),null==t||t.chains.current[r].push([e,new Promise(e=>{Promise.all(b.current[r].map(([e,t])=>t)).then(()=>e())})]),"enter"===r?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>n(r)):n(r)}),h=(0,E.z)((e,t,r)=>{Promise.all(b.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=p.current.shift())||e()}).then(()=>r(t))});return(0,a.useMemo)(()=>({children:n,register:f,unregister:d,onStart:m,onStop:h,wait:v,chains:b}),[f,d,n,m,h,b,v])}function O(){}w.displayName="NestingContext";let S=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function A(e){var t;let r={};for(let n of S)r[n]=null!=(t=e[n])?t:O;return r}let C=l.AN.RenderStrategy,I=(0,l.yV)(function(e,t){var r;let{beforeEnter:n,afterEnter:m,beforeLeave:x,afterLeave:O,enter:S,enterFrom:I,enterTo:k,entered:F,leave:j,leaveFrom:L,leaveTo:M,...D}=e,z=(0,a.useRef)(null),N=(0,f.T)(z,t),U=D.unmount?l.l4.Unmount:l.l4.Hidden,{show:H,appear:V,initial:Y}=function(){let e=(0,a.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[G,$]=(0,a.useState)(H?"visible":"hidden"),_=function(){let e=(0,a.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:W,unregister:Z}=_,B=(0,a.useRef)(null);(0,a.useEffect)(()=>W(z),[W,z]),(0,a.useEffect)(()=>{if(U===l.l4.Hidden&&z.current){if(H&&"visible"!==G){$("visible");return}return(0,u.E)(G,{hidden:()=>Z(z),visible:()=>W(z)})}},[G,z,W,Z,H,U]);let q,J=(0,c.E)({enter:T(S),enterFrom:T(I),enterTo:T(k),entered:T(F),leave:T(j),leaveFrom:T(L),leaveTo:T(M)}),K=(r={beforeEnter:n,afterEnter:m,beforeLeave:x,afterLeave:O},q=(0,a.useRef)(A(r)),(0,a.useEffect)(()=>{q.current=A(r)},[r]),q),Q=(0,d.H)();(0,a.useEffect)(()=>{if(Q&&"visible"===G&&null===z.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[z,G,Q]);let X=Y&&!V,ee=!Q||X||B.current===H?"idle":H?"enter":"leave",et=(0,E.z)(e=>(0,u.E)(e,{enter:()=>K.current.beforeEnter(),leave:()=>K.current.beforeLeave(),idle(){}})),er=(0,E.z)(e=>(0,u.E)(e,{enter:()=>K.current.afterEnter(),leave:()=>K.current.afterLeave(),idle(){}})),en=R(()=>{$("hidden"),Z(z)},_);return function({container:e,direction:t,classes:r,onStart:n,onStop:a}){let l=(0,o.t)(),i=(0,g.G)(),d=(0,c.E)(t);(0,s.e)(()=>{let t=(0,p.k)();i.add(t.dispose);let o=e.current;if(o&&"idle"!==d.current&&l.current){var s,c,f,m,g;let E,T,y,x,w,P,R;return t.dispose(),n.current(d.current),t.add((s=o,c=r.current,f="enter"===d.current,m=e=>{t.dispose(),(0,u.E)(e,{[h.Ended](){a.current(d.current)},[h.Cancelled](){}})},T=f?"enter":"leave",y=(0,p.k)(),x=void 0!==m?(E={called:!1},(...e)=>{if(!E.called)return E.called=!0,m(...e)}):()=>{},"enter"===T&&(s.removeAttribute("hidden"),s.style.display=""),w=(0,u.E)(T,{enter:()=>c.enter,leave:()=>c.leave}),P=(0,u.E)(T,{enter:()=>c.enterTo,leave:()=>c.leaveTo}),R=(0,u.E)(T,{enter:()=>c.enterFrom,leave:()=>c.leaveFrom}),b(s,...c.enter,...c.enterTo,...c.enterFrom,...c.leave,...c.leaveFrom,...c.leaveTo,...c.entered),v(s,...w,...R),y.nextFrame(()=>{b(s,...R),v(s,...P),function(e,t){let r=(0,p.k)();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[l,i]=[n,a].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t});if(l+i!==0){let u=[];u.push(r.addEventListener(e,"transitionrun",n=>{n.target===n.currentTarget&&(u.splice(0).forEach(e=>e()),u.push(r.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t("ended"),u.splice(0).forEach(e=>e()))}),r.addEventListener(e,"transitioncancel",e=>{e.target===e.currentTarget&&(t("cancelled"),u.splice(0).forEach(e=>e()))})))}))}else t("ended");r.add(()=>t("cancelled")),r.dispose}(s,e=>("ended"===e&&(b(s,...w),v(s,...c.entered)),x(e)))}),y.dispose)),t.dispose}},[t])}({container:z,classes:J,direction:ee,onStart:(0,c.E)(e=>{en.onStart(z,e,et)}),onStop:(0,c.E)(e=>{en.onStop(z,e,er),"leave"!==e||P(en)||($("hidden"),Z(z))})}),(0,a.useEffect)(()=>{X&&(U===l.l4.Hidden?B.current=null:B.current=H)},[H,X,G]),a.createElement(w.Provider,{value:en},a.createElement(i.up,{value:(0,u.E)(G,{visible:i.ZM.Open,hidden:i.ZM.Closed})},(0,l.sY)({ourProps:{ref:N},theirProps:D,defaultTag:"div",features:C,visible:"visible"===G,name:"Transition.Child"})))}),k=(0,l.yV)(function(e,t){let{show:r,appear:n=!1,unmount:o,...c}=e,p=(0,a.useRef)(null),v=(0,f.T)(p,t);(0,d.H)();let b=(0,i.oJ)();if(void 0===r&&null!==b&&(r=(0,u.E)(b,{[i.ZM.Open]:!0,[i.ZM.Closed]:!1})),![!0,!1].includes(r))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[m,h]=(0,a.useState)(r?"visible":"hidden"),g=R(()=>{h("hidden")}),[E,T]=(0,a.useState)(!0),x=(0,a.useRef)([r]);(0,s.e)(()=>{!1!==E&&x.current[x.current.length-1]!==r&&(x.current.push(r),T(!1))},[x,r]);let O=(0,a.useMemo)(()=>({show:r,appear:n,initial:E}),[r,n,E]);(0,a.useEffect)(()=>{if(r)h("visible");else if(P(g)){let e=p.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[r,g]);let S={unmount:o};return a.createElement(w.Provider,{value:g},a.createElement(y.Provider,{value:O},(0,l.sY)({ourProps:{...S,as:a.Fragment,children:a.createElement(I,{ref:v,...S,...c})},theirProps:{},defaultTag:a.Fragment,features:C,visible:"visible"===m,name:"Transition"})))}),F=(0,l.yV)(function(e,t){let r=null!==(0,a.useContext)(y),n=null!==(0,i.oJ)();return a.createElement(a.Fragment,null,!r&&n?a.createElement(k,{ref:t,...e}):a.createElement(I,{ref:t,...e}))}),j=Object.assign(k,{Child:F,Root:k})}}]);