if(!self.define){let e,i={};const n=(n,o)=>(n=new URL(n+".js",o).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,s)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const c=e=>n(e,r),u={module:{uri:r},exports:t,require:c};i[r]=Promise.all(o.map((e=>u[e]||c(e)))).then((e=>(s(...e),t)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"8f68cda6b1225ef9d1610d17e70301a7"},{url:"css/index.css",revision:"7573940d43123c9b98b4840ce14f3cef"},{url:"/",revision:"index-20240121035518552"},{url:"music/",revision:"music-20240121035518552"},{url:"about/",revision:"about-20240121035518552"}],{}),e.registerRoute(/^https:\/\/npm\.elemecdn\.com\/anzhiyu-blog/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
