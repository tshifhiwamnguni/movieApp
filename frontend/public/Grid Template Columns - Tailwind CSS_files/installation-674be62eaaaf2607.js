(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{89302:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation",function(){return e(6341)}])},6341:function(n,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return c},default:function(){return u}});var i=e(85893),l=e(62223),s=e(53339),a=e(44794),o=e(41664),d=e.n(o),r=[{title:"Install Tailwind CSS",body:function(){return(0,i.jsxs)("p",{children:["Install ",(0,i.jsx)("code",{children:"tailwindcss"})," via npm, and create your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," ","file."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss\nnpx tailwindcss init"}},{title:"Configure your template paths",body:function(){return(0,i.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,i.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  /** @type {import('tailwindcss').Config} */\n  module.exports = {\n>   content: [\"./src/**/*.{html,js}\"],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,i.jsxs)("p",{children:["Add the ",(0,i.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your main CSS file."]})},code:{name:"src/input.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start the Tailwind CLI build process",body:function(){return(0,i.jsx)("p",{children:"Run the CLI tool to scan your template files for classes and build your CSS."})},code:{name:"Terminal",lang:"terminal",code:"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"}},{title:"Start using Tailwind in your HTML",body:function(){return(0,i.jsxs)("p",{children:["Add your compiled CSS file to the ",(0,i.jsx)("code",{children:"<head>"})," and start using Tailwind’s utility classes to style your content."]})},code:{name:"src/index.html",lang:"html",code:'  <!doctype html>\n  <html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n>   <link href="/dist/output.css" rel="stylesheet">\n  </head>\n  <body>\n>   <h1 class="text-3xl font-bold underline">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>'}},],c=!0;function u(n){var t=n.code;return(0,i.jsxs)(a.l,{children:[(0,i.jsxs)("div",{id:"content-wrapper",className:"relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark",children:[(0,i.jsx)("h3",{className:"sr-only",children:"Installing Tailwind CLI"}),(0,i.jsxs)("p",{children:["The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a"," ",(0,i.jsx)(d(),{href:"/blog/standalone-cli",children:(0,i.jsx)("a",{children:"standalone executable"})})," ","if you want to use it without installing Node.js."]})]}),(0,i.jsx)(l.R,{level:4,steps:r,code:t})]})}u.layoutProps={meta:{title:"Installation",description:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool."},Layout:s.L,allowOverflow:!1}}},function(n){n.O(0,[6637,8555,4713,8055,4794,9774,2888,179],function(){return n(n.s=89302)}),_N_E=n.O()}]);