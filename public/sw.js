if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let t={};const r=e=>s(e,i),o={module:{uri:i},exports:t,require:r};a[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c2c0676f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Close padlock.svg",revision:"dd4f2dce7eb06d8382c2e83a7c8f2518"},{url:"/Menu icon.svg",revision:"35fd47583b4251c61ae355aaa6bc9752"},{url:"/Open padlock.svg",revision:"a0a5069fd36853e2e45fb0d972690e14"},{url:"/SEMANA MEI.jpg",revision:"6df70ee8c74ac2032c3f5e1775b9416d"},{url:"/_next/static/0q7QNBBNr0O2j2QibbP49/_buildManifest.js",revision:"d5bf220a0eb088d144849a30fd3c16fe"},{url:"/_next/static/0q7QNBBNr0O2j2QibbP49/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/332-2d0cb4416365c819.js",revision:"2d0cb4416365c819"},{url:"/_next/static/chunks/664-806b52bf69b97e98.js",revision:"806b52bf69b97e98"},{url:"/_next/static/chunks/675-45f9f7ae57ff0f95.js",revision:"45f9f7ae57ff0f95"},{url:"/_next/static/chunks/framework-ecc4130bc7a58a64.js",revision:"ecc4130bc7a58a64"},{url:"/_next/static/chunks/main-ef1c702d5fa144ef.js",revision:"ef1c702d5fa144ef"},{url:"/_next/static/chunks/pages/_app-5bbcebfdc35132a3.js",revision:"5bbcebfdc35132a3"},{url:"/_next/static/chunks/pages/_error-77823ddac6993d35.js",revision:"77823ddac6993d35"},{url:"/_next/static/chunks/pages/admin-8006ec8035e2c51a.js",revision:"8006ec8035e2c51a"},{url:"/_next/static/chunks/pages/conta/criarconta-ff0bc97024fb5307.js",revision:"ff0bc97024fb5307"},{url:"/_next/static/chunks/pages/conta/criarconta2-6dae5866907c3953.js",revision:"6dae5866907c3953"},{url:"/_next/static/chunks/pages/conta/criarconta3-f8760a1dfa44f756.js",revision:"f8760a1dfa44f756"},{url:"/_next/static/chunks/pages/home-0de1ed9a3dfb54f6.js",revision:"0de1ed9a3dfb54f6"},{url:"/_next/static/chunks/pages/home/conta-b57b08d1d08c3be2.js",revision:"b57b08d1d08c3be2"},{url:"/_next/static/chunks/pages/home/profissionais-1d1c6671828519b2.js",revision:"1d1c6671828519b2"},{url:"/_next/static/chunks/pages/home/vagas-2c50ba4d57d750cc.js",revision:"2c50ba4d57d750cc"},{url:"/_next/static/chunks/pages/index-eb28315e4c1a4bc0.js",revision:"eb28315e4c1a4bc0"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/avaliacao.jpg",revision:"a89c26c936dfea0dbf6c33a05e62d29f"},{url:"/avaliacao2.jpg",revision:"69c96f50a137b0a090151da65c573d91"},{url:"/cardapio.svg",revision:"8a1269f8c48ac77e3cd3bcfa3686de03"},{url:"/check.svg",revision:"a492b437b25932c4a1e443bd1e7ae868"},{url:"/facebook-icon.svg",revision:"77cd9a60e30531f937ceb64554f3ba13"},{url:"/fachada.jpg",revision:"6d76f2efb6055af02e167d6951aa81d2"},{url:"/fachada2.jpg",revision:"4e07dfe9267408d263598ffc24224e42"},{url:"/fachada3.jpg",revision:"4a90a8c65f97aea9262606be4f3cd8a4"},{url:"/fachada4.png",revision:"871438ca030e4c47c10eae4b0f60b5e4"},{url:"/fotoPerfioTela.png",revision:"526f35a2d485a7d677f7b5627fa2fdf6"},{url:"/fotoperfil.jpg",revision:"fe88a2679e58806c47c47c0981344ded"},{url:"/fotoperfil1.png",revision:"b731d9ea59292d154a3ae955302a3751"},{url:"/fotoperfil2.jpg",revision:"a4bdeef9c64431028d917cd0339e3b43"},{url:"/fotoperfil3.jpg",revision:"2d594a359e09e230b7fa5e845f7c9372"},{url:"/fotoprincipal.jpg",revision:"31125048d8e0318360dbc4691a840116"},{url:"/fundoperfil.jpg",revision:"e014b0e726f33c3cfdde71d8eae48beb"},{url:"/google-icon.svg",revision:"20cfecec89a18e9c9bf3289d5eaf324d"},{url:"/icon512_maskable.png",revision:"82aa4cb7a8e9c714d60c29c757f0d9cd"},{url:"/icon512_rounded.png",revision:"9f19368449b4f771efce4d826d7d989c"},{url:"/icone-balcao.png",revision:"c6925cd05c24e0271be48ce74c624a85"},{url:"/iconelapis.svg",revision:"1eac6265c475864789fbb95ef8f2524b"},{url:"/logo-balcao-de-empregos.svg",revision:"cd996d1972fd5a2639c9327b420100d8"},{url:"/manifest.json",revision:"8eb82b21e4acecfe58e7e035231dbf83"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
