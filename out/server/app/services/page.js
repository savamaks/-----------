(()=>{var e={};e.id=469,e.ids=[469],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},6390:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>d,originalPathname:()=>p,pages:()=>u,routeModule:()=>h,tree:()=>l});var n=r(482),a=r(9108),o=r(2563),i=r.n(o),s=r(8300),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);r.d(t,c);let l=["",{children:["services",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8375)),"G:\\projects\\GitHub\\potolki\\app\\services\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2917)),"G:\\projects\\GitHub\\potolki\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,7984)),"G:\\projects\\GitHub\\potolki\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,1429)),"G:\\projects\\GitHub\\potolki\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["G:\\projects\\GitHub\\potolki\\app\\services\\page.tsx"],p="/services/page",d={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/services/page",pathname:"/services",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},7703:(e,t,r)=>{Promise.resolve().then(r.bind(r,6121)),Promise.resolve().then(r.bind(r,3087)),Promise.resolve().then(r.bind(r,442)),Promise.resolve().then(r.t.bind(r,1900,23)),Promise.resolve().then(r.t.bind(r,1476,23))},6121:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(5344),a=r(2254);r(3729);let o=({children:e,className:t,path:r})=>{let o=(0,a.useRouter)();return n.jsx("button",{onClick:e=>{console.log(r),o.push(`/services/${r}`)},className:t,children:e})}},2254:(e,t,r)=>{e.exports=r(4767)},2890:e=>{e.exports={section:"page_section__79ahz",section__title:"page_section__title__0lc7N",section__box:"page_section__box__Cc05x",card:"page_card__EQwNY",down:"page_down__neyMo",card__image:"page_card__image__oSi_J",card__cont:"page_card__cont__5rD17",card__cont_title:"page_card__cont_title__POhIa",card__cont_text:"page_card__cont_text__T9_dQ",left:"page_left__19a_8",up:"page_up__SGkwr",right:"page_right__pzxU_",scale:"page_scale__h9pGU",opacity:"page_opacity__mhk04"}},6647:(e,t,r)=>{"use strict";r.d(t,{Z:()=>_});let n=require("sharp");function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var i=["a"],s=["autoOrient","size","format","brightness","saturation","removeAlpha"],c=["width","height"],l=function e(t,r){return t.length>r?[t.slice(0,r)].concat(e(t.slice(r),r)):[t]},u=function(e){var t=e.r,r=e.g,n=e.b,a=e.a;return void 0===a?"rgb("+[t,r,n].join(",")+")":"rgba("+[t,r,n,a].join(",")+")"},p=function(e){var t,r=e.data,n=e.info,o=n.channels,i=n.width,s=l((t=[]).concat.apply(t,r),o);return l(s,i).map(function(e){return e.map(function(e){var t=e[0],r=e[1],n=e[2],o=e[3];return a({r:t,g:r,b:n},void 0===o?{}:{a:Math.round(o/255*1e3)/1e3})})})},d=function(e){var t=e.pixels,r=e.info,n=t.map(function(e){var t=e.map(function(e){return u(e)});return"linear-gradient(90deg, "+t.map(function(e,r){return""+e+(0===r?"":" "+r/t.length*100+"%")+(r===t.length?"":" "+(r+1)/t.length*100+"%")}).join(",")+")"});n.length!==r.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var a=n.map(function(e,t){return 0===t?"0 0 ":"0 "+t/(n.length-1)*100+"%"}).join(","),o="100% "+100/n.length+"%";return{backgroundImage:n.join(","),backgroundPosition:a,backgroundSize:o,backgroundRepeat:"no-repeat"}},h=function(e){var t,r=e.pixels,n=e.info,s=r.map(function(e,t){return e.map(function(e,r){var n=e.a,s=o(e,i),c=void 0!==n?{fill:u(s),"fill-opacity":n}:{fill:u(s),"fill-opacity":1};return["rect",a({},c,{width:1,height:1,x:r,y:t})]})});s.length!==n.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var c=(t=[]).concat.apply(t,s);return["svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",shapeRendering:"crispEdges",preserveAspectRatio:"none",viewBox:"0 0 "+n.width+" "+n.height,style:{position:"absolute",top:"50%",left:"50%",transformOrigin:"top left",transform:"translate(-50%, -50%)",right:0,bottom:0}},c]},g=function(e,t){var r=void 0===t?{}:t,i=r.autoOrient,l=void 0!==i&&i,u=r.size,g=void 0===u?4:u,_=r.format,m=void 0===_?["png"]:_,f=r.brightness,v=void 0===f?1:f,x=r.saturation,b=void 0===x?1.2:x,w=r.removeAlpha,j=void 0!==w&&w,y=o(r,s);try{return Promise.resolve(n(e).metadata().then(function(e){var t=e.width,r=e.height,n=o(e,c);if(!t||!r)throw Error("Could not get required image metadata");return a({width:t,height:r},n)})).then(function(t){4<=g&&g<=64||console.error("Please enter a `size` value between 4 and 64");var r,o=(r=n(e).resize(g,g,{fit:"inside"})).toFormat.apply(r,m).modulate(a({brightness:v,saturation:b},null!=y&&y.hue?{hue:null==y?void 0:y.hue}:{},null!=y&&y.lightness?{lightness:null==y?void 0:y.lightness}:{})),i=!1===j?o:o.removeAlpha(),s=!1===l?i:i.rotate();return Promise.resolve(s.clone().stats().then(function(e){var t=e.dominant,r=t.r,n=t.g,a=t.b;return{r:r,g:n,b:a,hex:"#"+[r,n,a].map(function(e){return e.toString(16).padStart(2,"0")}).join("")}})).then(function(e){return Promise.resolve(s.clone().normalise().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,r=e.info;return"data:image/"+r.format+";base64,"+t.toString("base64")}).catch(function(e){throw console.error("base64 generation failed",e),e})).then(function(r){return Promise.resolve(s.clone().raw().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,r=e.info,n=p({data:t,info:r}),a=d({pixels:n,info:r}),o=h({pixels:n,info:r});return{pixels:n,css:a,svg:o}}).catch(function(e){throw console.error("pixel generation failed",e),e})).then(function(n){var a=n.pixels,o=n.css,i=n.svg;return{color:e,css:o,base64:r,metadata:t,pixels:a,svg:i}})})})})}catch(e){return Promise.reject(e)}};async function _(e){try{let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch image: ${t.status} ${t.statusText}`);let r=await t.arrayBuffer(),{base64:n}=await g(Buffer.from(r));return n}catch(e){e instanceof Error&&console.log(e.stack)}}},7833:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>i});let n=(0,r(6843).createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\Button.tsx`),{__esModule:a,$$typeof:o}=n,i=n.default},8375:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v,metadata:()=>f});var n=r(5036);r(2);var a=r(5575),o=r(2890),i=r.n(o),s=r(5904),c=r.n(s),l=r(7833),u=r(2091),p=r(5573),d=r.n(p),h=r(6647),g=r(646),_=r.n(g);let m=async()=>u.aT,f={title:"Услуги"},v=async()=>{let e=await m();return n.jsx(a.Z,{children:(0,n.jsxs)("main",{className:i().section,children:[n.jsx(_(),{className:i().section__button,href:"tel:+79602136949",children:n.jsx("button",{children:"заказать замер"})}),n.jsx("h1",{className:d()(i().section__title),children:"Виды услуг"}),n.jsx("div",{className:i().section__box,children:e.map(async(e,t)=>{let r=await (0,h.Z)(`http://localhost:3000/${e.name}/${e.image}`);return(0,n.jsxs)("div",{className:d()(i().card),children:[n.jsx(c(),{className:i().card__image,src:`/${e.name}/${e.image}`,loading:"lazy",width:400,height:300,alt:"services",placeholder:"blur",blurDataURL:r}),(0,n.jsxs)("div",{className:i().card__cont,children:[n.jsx("h3",{className:d()(i().card__cont_title),children:e.title}),n.jsx("p",{className:i().card__cont_text,children:e.description}),e.products&&e.products.length>0&&n.jsx(l.ZP,{path:e.name,className:i().card__cont_button,children:"Подробнее"})]})]},t)})})]})})}}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[638,71,904,759],()=>r(6390));module.exports=n})();