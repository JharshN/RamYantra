if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let i={};const d=e=>a(e,t),r={module:{uri:t},exports:i,require:d};s[t]=Promise.all(c.map((e=>r[e]||d(e)))).then((e=>(n(...e),i)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/CMeFt9TCoz0_zMPcssmNI/_buildManifest.js",revision:"9e0f6684f3dc67013ddde4bfcb315d16"},{url:"/_next/static/CMeFt9TCoz0_zMPcssmNI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0c428ae2-f3bada0b4e8a974b.js",revision:"f3bada0b4e8a974b"},{url:"/_next/static/chunks/1bfc9850-c16bf92f4f0de64c.js",revision:"c16bf92f4f0de64c"},{url:"/_next/static/chunks/390-951f69b19293e12f.js",revision:"951f69b19293e12f"},{url:"/_next/static/chunks/528-ab276678af67afb2.js",revision:"ab276678af67afb2"},{url:"/_next/static/chunks/857-b2e65cb4b9a00bf2.js",revision:"b2e65cb4b9a00bf2"},{url:"/_next/static/chunks/d7eeaac4-07bf1be696a6f34e.js",revision:"07bf1be696a6f34e"},{url:"/_next/static/chunks/framework-0c7baedefba6b077.js",revision:"0c7baedefba6b077"},{url:"/_next/static/chunks/main-b1d090fd959ac9c5.js",revision:"b1d090fd959ac9c5"},{url:"/_next/static/chunks/pages/404-d06948b9a3958d4f.js",revision:"d06948b9a3958d4f"},{url:"/_next/static/chunks/pages/_app-fb1ee6e76b4e02fa.js",revision:"fb1ee6e76b4e02fa"},{url:"/_next/static/chunks/pages/_error-ee5b5fb91d29d86f.js",revision:"ee5b5fb91d29d86f"},{url:"/_next/static/chunks/pages/aboutus-f123e1499a182b34.js",revision:"f123e1499a182b34"},{url:"/_next/static/chunks/pages/cc-97793f470ad09915.js",revision:"97793f470ad09915"},{url:"/_next/static/chunks/pages/checkmail-af53e46bdbf4073c.js",revision:"af53e46bdbf4073c"},{url:"/_next/static/chunks/pages/contactAdmin-4a437e684f62febc.js",revision:"4a437e684f62febc"},{url:"/_next/static/chunks/pages/contactus-1a6c119d09caa5c1.js",revision:"1a6c119d09caa5c1"},{url:"/_next/static/chunks/pages/foreign-9337533773053011.js",revision:"9337533773053011"},{url:"/_next/static/chunks/pages/greymarket-17fe73a6f33d598f.js",revision:"17fe73a6f33d598f"},{url:"/_next/static/chunks/pages/index-4457517770d252e5.js",revision:"4457517770d252e5"},{url:"/_next/static/chunks/pages/indices-7f84452dcb2af130.js",revision:"7f84452dcb2af130"},{url:"/_next/static/chunks/pages/login-0a4d7aa7ad67b51f.js",revision:"0a4d7aa7ad67b51f"},{url:"/_next/static/chunks/pages/magicLink-3b7c66e39ded0414.js",revision:"3b7c66e39ded0414"},{url:"/_next/static/chunks/pages/otherservice-3d56ba15b96e1b33.js",revision:"3d56ba15b96e1b33"},{url:"/_next/static/chunks/pages/privacypolicy-b2f173d4c6258e99.js",revision:"b2f173d4c6258e99"},{url:"/_next/static/chunks/pages/products-88a549beb1d2a881.js",revision:"88a549beb1d2a881"},{url:"/_next/static/chunks/pages/products/bond-investments-cd00c159dfd0d3d3.js",revision:"cd00c159dfd0d3d3"},{url:"/_next/static/chunks/pages/products/commodities-trading-ee022cf2aff3d826.js",revision:"ee022cf2aff3d826"},{url:"/_next/static/chunks/pages/products/currency-trading-38b68570cd15a48b.js",revision:"38b68570cd15a48b"},{url:"/_next/static/chunks/pages/products/equity-investment-125e4d339947c9ae.js",revision:"125e4d339947c9ae"},{url:"/_next/static/chunks/pages/products/insurance-solutions-404d66d35249dd83.js",revision:"404d66d35249dd83"},{url:"/_next/static/chunks/pages/products/loans-fd-0a85c8fee2335882.js",revision:"0a85c8fee2335882"},{url:"/_next/static/chunks/pages/products/mutual-funds-9e25c72804e084da.js",revision:"9e25c72804e084da"},{url:"/_next/static/chunks/pages/products/pms-aif-services-e8702d9720f5e316.js",revision:"e8702d9720f5e316"},{url:"/_next/static/chunks/pages/signout-affd3da8264ed4b5.js",revision:"affd3da8264ed4b5"},{url:"/_next/static/chunks/pages/signup-1e766de28d159a15.js",revision:"1e766de28d159a15"},{url:"/_next/static/chunks/pages/watchlist-9cc4716386e21773.js",revision:"9cc4716386e21773"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-975f6a13f6da10a1.js",revision:"975f6a13f6da10a1"},{url:"/_next/static/css/412630b3bea823eb.css",revision:"412630b3bea823eb"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/consultancy.webp",revision:"c51951030272c9ee5207663297603d50"},{url:"/favicon.ico",revision:"5fb674117cc62494f8f271597d08466e"},{url:"/icon-384x384.png",revision:"4171bcfc743f86720f278dd4fe5443ea"},{url:"/icon512_maskable.png",revision:"f4f139d4e53dd443b19d29ca13e00515"},{url:"/manifest.json",revision:"96f8683fd6de182fdd0be3d0f5d9f121"},{url:"/ramyantra.png",revision:"9d1bc33d6e23265a9ccb7662db00c8c5"},{url:"/x0jWYq6aSku1T9dV2CFF7w.webp",revision:"c7cc6cf6ae6da4ca70ba82106f233ca6"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
