(()=>{var e={};e.id=469,e.ids=[469],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6567:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>h,tree:()=>l});var a=r(482),n=r(9108),i=r(2563),o=r.n(i),s=r(8300),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8375)),"G:\\projects\\GitHub\\potolki\\app\\services\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e),async e=>(await Promise.resolve().then(r.bind(r,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,3226))).default(e)],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"G:\\projects\\GitHub\\potolki\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,7984)),"G:\\projects\\GitHub\\potolki\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"G:\\projects\\GitHub\\potolki\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e),async e=>(await Promise.resolve().then(r.bind(r,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(r.bind(r,3226))).default(e)],openGraph:[],twitter:[],manifest:void 0}}],u=["G:\\projects\\GitHub\\potolki\\app\\services\\page.tsx"],d="/services/page",p={require:r,loadChunk:()=>Promise.resolve()},h=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},5550:(e,t,r)=>{Promise.resolve().then(r.bind(r,5596)),Promise.resolve().then(r.bind(r,3087)),Promise.resolve().then(r.bind(r,7830)),Promise.resolve().then(r.bind(r,442)),Promise.resolve().then(r.t.bind(r,1900,23))},5596:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var a=r(5344),n=r(2254);r(3729);let i=({children:e,className:t,path:r})=>{let i=(0,n.useRouter)();return a.jsx("button",{onClick:e=>{i.push(`/services/${r}`)},className:t,children:e})}},2254:(e,t,r)=>{e.exports=r(4767)},2890:e=>{e.exports={section:"page_section__79ahz",section__title:"page_section__title__0lc7N",down:"page_down__neyMo",section__box:"page_section__box__Cc05x",card:"page_card__EQwNY",card__image:"page_card__image__oSi_J",card__cont:"page_card__cont__5rD17",card__cont_title:"page_card__cont_title__POhIa",card__cont_text:"page_card__cont_text__T9_dQ",card__cont_button:"page_card__cont_button__cgbig",left:"page_left__19a_8",up:"page_up__SGkwr",right:"page_right__pzxU_",scale:"page_scale__h9pGU",opacity:"page_opacity__mhk04",vibration:"page_vibration__t8W9y"}},6647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});let a=require("sharp");function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}var o=["a"],s=["autoOrient","size","format","brightness","saturation","removeAlpha"],c=["width","height"],l=function e(t,r){return t.length>r?[t.slice(0,r)].concat(e(t.slice(r),r)):[t]},u=function(e){var t=e.r,r=e.g,a=e.b,n=e.a;return void 0===n?"rgb("+[t,r,a].join(",")+")":"rgba("+[t,r,a,n].join(",")+")"},d=function(e){var t,r=e.data,a=e.info,i=a.channels,o=a.width,s=l((t=[]).concat.apply(t,r),i);return l(s,o).map(function(e){return e.map(function(e){var t=e[0],r=e[1],a=e[2],i=e[3];return n({r:t,g:r,b:a},void 0===i?{}:{a:Math.round(i/255*1e3)/1e3})})})},p=function(e){var t=e.pixels,r=e.info,a=t.map(function(e){var t=e.map(function(e){return u(e)});return"linear-gradient(90deg, "+t.map(function(e,r){return""+e+(0===r?"":" "+r/t.length*100+"%")+(r===t.length?"":" "+(r+1)/t.length*100+"%")}).join(",")+")"});a.length!==r.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var n=a.map(function(e,t){return 0===t?"0 0 ":"0 "+t/(a.length-1)*100+"%"}).join(","),i="100% "+100/a.length+"%";return{backgroundImage:a.join(","),backgroundPosition:n,backgroundSize:i,backgroundRepeat:"no-repeat"}},h=function(e){var t,r=e.pixels,a=e.info,s=r.map(function(e,t){return e.map(function(e,r){var a=e.a,s=i(e,o),c=void 0!==a?{fill:u(s),"fill-opacity":a}:{fill:u(s),"fill-opacity":1};return["rect",n({},c,{width:1,height:1,x:r,y:t})]})});s.length!==a.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var c=(t=[]).concat.apply(t,s);return["svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",shapeRendering:"crispEdges",preserveAspectRatio:"none",viewBox:"0 0 "+a.width+" "+a.height,style:{position:"absolute",top:"50%",left:"50%",transformOrigin:"top left",transform:"translate(-50%, -50%)",right:0,bottom:0}},c]},g=function(e,t){var r=void 0===t?{}:t,o=r.autoOrient,l=void 0!==o&&o,u=r.size,g=void 0===u?4:u,f=r.format,_=void 0===f?["png"]:f,m=r.brightness,b=void 0===m?1:m,v=r.saturation,x=void 0===v?1.2:v,w=r.removeAlpha,y=void 0!==w&&w,j=i(r,s);try{return Promise.resolve(a(e).metadata().then(function(e){var t=e.width,r=e.height,a=i(e,c);if(!t||!r)throw Error("Could not get required image metadata");return n({width:t,height:r},a)})).then(function(t){4<=g&&g<=64||console.error("Please enter a `size` value between 4 and 64");var r,i=(r=a(e).resize(g,g,{fit:"inside"})).toFormat.apply(r,_).modulate(n({brightness:b,saturation:x},null!=j&&j.hue?{hue:null==j?void 0:j.hue}:{},null!=j&&j.lightness?{lightness:null==j?void 0:j.lightness}:{})),o=!1===y?i:i.removeAlpha(),s=!1===l?o:o.rotate();return Promise.resolve(s.clone().stats().then(function(e){var t=e.dominant,r=t.r,a=t.g,n=t.b;return{r:r,g:a,b:n,hex:"#"+[r,a,n].map(function(e){return e.toString(16).padStart(2,"0")}).join("")}})).then(function(e){return Promise.resolve(s.clone().normalise().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,r=e.info;return"data:image/"+r.format+";base64,"+t.toString("base64")}).catch(function(e){throw console.error("base64 generation failed",e),e})).then(function(r){return Promise.resolve(s.clone().raw().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,r=e.info,a=d({data:t,info:r}),n=p({pixels:a,info:r}),i=h({pixels:a,info:r});return{pixels:a,css:n,svg:i}}).catch(function(e){throw console.error("pixel generation failed",e),e})).then(function(a){var n=a.pixels,i=a.css,o=a.svg;return{color:e,css:i,base64:r,metadata:t,pixels:n,svg:o}})})})})}catch(e){return Promise.reject(e)}};async function f(e){try{let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch image: ${t.status} ${t.statusText}`);let r=await t.arrayBuffer(),{base64:a}=await g(Buffer.from(r));return a}catch(e){e instanceof Error&&console.log(e.stack)}}},8523:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>o});let a=(0,r(6843).createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\Button\Button.tsx`),{__esModule:n,$$typeof:i}=a,o=a.default},8375:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_,metadata:()=>f});var a=r(5036);r(2);var n=r(5575),i=r(2890),o=r.n(i),s=r(5904),c=r.n(s),l=r(8523),u=r(5573),d=r.n(u),p=r(6647),h=r(680);let g=async()=>{try{return(await fetch("https://wclouds.ru/api/categories/?populate=*",{method:"GET",next:{revalidate:300},headers:{"Content-Type":"application/json",Authorization:"Bearer 4ee73f8dcbdd3f42ddd8b786c9d4f18eadf6539e7c87c202d68f475498beca9be1bef67ff2b6f2058a7f77c2bd3015e1ed4f59d3fdcbfc2974b2b33366459d558587b06b5299a14ff9104652461b8a67835d12081782001029d5cb0345875bb0a9feb65b35aeea8931a212e471f74a3b01fe3414c4d24faaf17147dbb53fa451"}})).json()}catch(e){console.log(e)}},f={title:"Услуги",twitter:{card:"summary_large_image"}},_=async()=>{let e=await g();return a.jsx(n.Z,{children:(0,a.jsxs)("main",{className:o().section,children:[a.jsx(h.ZP,{}),a.jsx("h1",{className:d()(o().section__title),children:"Виды услуг"}),a.jsx("div",{className:o().section__box,children:e.data.map(async(e,t)=>{let r=await (0,p.Z)(`https://wclouds.ru${e.attributes.image.data.attributes.formats.small.url}`);return(0,a.jsxs)("div",{className:d()(o().card),children:[a.jsx(c(),{className:o().card__image,src:`https://wclouds.ru${e.attributes.image.data.attributes.formats.small.url}`,loading:"lazy",width:400,height:300,alt:"services",placeholder:"blur",blurDataURL:r}),(0,a.jsxs)("div",{className:o().card__cont,children:[a.jsx("h3",{className:d()(o().card__cont_title),children:e.attributes.name}),a.jsx("p",{className:o().card__cont_text,children:e.attributes.description}),e.attributes.products.data.length>0&&a.jsx(l.ZP,{path:e.attributes.title,className:o().card__cont_button,children:"Подробнее"})]})]},t)})})]})})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,281,904,279],()=>r(6567));module.exports=a})();