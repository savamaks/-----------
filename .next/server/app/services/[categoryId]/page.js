(()=>{var e={};e.id=102,e.ids=[102],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},446:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>h,tree:()=>l});var r=a(482),n=a(9108),i=a(2563),o=a.n(i),s=a(8300),c={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>s[e]);a.d(t,c);let l=["",{children:["services",{children:["[categoryId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,4426)),"G:\\projects\\GitHub\\potolki\\app\\services\\[categoryId]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e),async e=>(await Promise.resolve().then(a.bind(a,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(a.bind(a,3226))).default(e)],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,2917)),"G:\\projects\\GitHub\\potolki\\app\\layout.tsx"],loading:[()=>Promise.resolve().then(a.bind(a,7984)),"G:\\projects\\GitHub\\potolki\\app\\loading.tsx"],"not-found":[()=>Promise.resolve().then(a.bind(a,1429)),"G:\\projects\\GitHub\\potolki\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e),async e=>(await Promise.resolve().then(a.bind(a,4697))).default(e)],apple:[async e=>(await Promise.resolve().then(a.bind(a,3226))).default(e)],openGraph:[],twitter:[],manifest:void 0}}],d=["G:\\projects\\GitHub\\potolki\\app\\services\\[categoryId]\\page.tsx"],u="/services/[categoryId]/page",p={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/services/[categoryId]/page",pathname:"/services/[categoryId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},4107:(e,t,a)=>{Promise.resolve().then(a.bind(a,5596)),Promise.resolve().then(a.bind(a,3087)),Promise.resolve().then(a.bind(a,7830)),Promise.resolve().then(a.bind(a,442)),Promise.resolve().then(a.t.bind(a,1900,23)),Promise.resolve().then(a.t.bind(a,1476,23))},5596:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i});var r=a(5344),n=a(2254);a(3729);let i=({children:e,className:t,path:a})=>{let i=(0,n.useRouter)();return r.jsx("button",{onClick:e=>{i.push(`/services/${a}`)},className:t,children:e})}},2254:(e,t,a)=>{e.exports=a(4767)},3229:e=>{e.exports={section:"page_section__BYPBK",section__nav:"page_section__nav__thf59",down:"page_down__7BsyT",section__title:"page_section__title__6NnwG",section__box:"page_section__box__i54Rb",card:"page_card__C6rig",card__image:"page_card__image__SFQ0E",card__cont:"page_card__cont__EAeOn",card__cont_title:"page_card__cont_title__cr2e4",card__cont_text:"page_card__cont_text__QDVV_",card__cont_button:"page_card__cont_button__ayZCl",block:"page_block__kEB7B",left:"page_left__46_yX",up:"page_up__xPtfr",right:"page_right__tQoGS",scale:"page_scale__9J3aJ",opacity:"page_opacity__vkLby",vibration:"page_vibration__FUkly"}},6647:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});let r=require("sharp");function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}var o=["a"],s=["autoOrient","size","format","brightness","saturation","removeAlpha"],c=["width","height"],l=function e(t,a){return t.length>a?[t.slice(0,a)].concat(e(t.slice(a),a)):[t]},d=function(e){var t=e.r,a=e.g,r=e.b,n=e.a;return void 0===n?"rgb("+[t,a,r].join(",")+")":"rgba("+[t,a,r,n].join(",")+")"},u=function(e){var t,a=e.data,r=e.info,i=r.channels,o=r.width,s=l((t=[]).concat.apply(t,a),i);return l(s,o).map(function(e){return e.map(function(e){var t=e[0],a=e[1],r=e[2],i=e[3];return n({r:t,g:a,b:r},void 0===i?{}:{a:Math.round(i/255*1e3)/1e3})})})},p=function(e){var t=e.pixels,a=e.info,r=t.map(function(e){var t=e.map(function(e){return d(e)});return"linear-gradient(90deg, "+t.map(function(e,a){return""+e+(0===a?"":" "+a/t.length*100+"%")+(a===t.length?"":" "+(a+1)/t.length*100+"%")}).join(",")+")"});r.length!==a.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var n=r.map(function(e,t){return 0===t?"0 0 ":"0 "+t/(r.length-1)*100+"%"}).join(","),i="100% "+100/r.length+"%";return{backgroundImage:r.join(","),backgroundPosition:n,backgroundSize:i,backgroundRepeat:"no-repeat"}},h=function(e){var t,a=e.pixels,r=e.info,s=a.map(function(e,t){return e.map(function(e,a){var r=e.a,s=i(e,o),c=void 0!==r?{fill:d(s),"fill-opacity":r}:{fill:d(s),"fill-opacity":1};return["rect",n({},c,{width:1,height:1,x:a,y:t})]})});s.length!==r.height&&console.error("Woops! Something went wrong here and caused the color height to differ from the source height.");var c=(t=[]).concat.apply(t,s);return["svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",shapeRendering:"crispEdges",preserveAspectRatio:"none",viewBox:"0 0 "+r.width+" "+r.height,style:{position:"absolute",top:"50%",left:"50%",transformOrigin:"top left",transform:"translate(-50%, -50%)",right:0,bottom:0}},c]},f=function(e,t){var a=void 0===t?{}:t,o=a.autoOrient,l=void 0!==o&&o,d=a.size,f=void 0===d?4:d,g=a.format,_=void 0===g?["png"]:g,b=a.brightness,m=void 0===b?1:b,v=a.saturation,x=void 0===v?1.2:v,y=a.removeAlpha,w=void 0!==y&&y,j=i(a,s);try{return Promise.resolve(r(e).metadata().then(function(e){var t=e.width,a=e.height,r=i(e,c);if(!t||!a)throw Error("Could not get required image metadata");return n({width:t,height:a},r)})).then(function(t){4<=f&&f<=64||console.error("Please enter a `size` value between 4 and 64");var a,i=(a=r(e).resize(f,f,{fit:"inside"})).toFormat.apply(a,_).modulate(n({brightness:m,saturation:x},null!=j&&j.hue?{hue:null==j?void 0:j.hue}:{},null!=j&&j.lightness?{lightness:null==j?void 0:j.lightness}:{})),o=!1===w?i:i.removeAlpha(),s=!1===l?o:o.rotate();return Promise.resolve(s.clone().stats().then(function(e){var t=e.dominant,a=t.r,r=t.g,n=t.b;return{r:a,g:r,b:n,hex:"#"+[a,r,n].map(function(e){return e.toString(16).padStart(2,"0")}).join("")}})).then(function(e){return Promise.resolve(s.clone().normalise().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,a=e.info;return"data:image/"+a.format+";base64,"+t.toString("base64")}).catch(function(e){throw console.error("base64 generation failed",e),e})).then(function(a){return Promise.resolve(s.clone().raw().toBuffer({resolveWithObject:!0}).then(function(e){var t=e.data,a=e.info,r=u({data:t,info:a}),n=p({pixels:r,info:a}),i=h({pixels:r,info:a});return{pixels:r,css:n,svg:i}}).catch(function(e){throw console.error("pixel generation failed",e),e})).then(function(r){var n=r.pixels,i=r.css,o=r.svg;return{color:e,css:i,base64:a,metadata:t,pixels:n,svg:o}})})})})}catch(e){return Promise.reject(e)}};async function g(e){try{let t=await fetch(e);if(!t.ok)throw Error(`Failed to fetch image: ${t.status} ${t.statusText}`);let a=await t.arrayBuffer(),{base64:r}=await f(Buffer.from(a));return r}catch(e){e instanceof Error&&console.log(e.stack)}}},8523:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>o});let r=(0,a(6843).createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\Button\Button.tsx`),{__esModule:n,$$typeof:i}=r,o=r.default},4426:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>y,generateMetadata:()=>x,generateStaticParams:()=>v});var r=a(5036);a(2);var n=a(5575),i=a(3229),o=a.n(i),s=a(5904),c=a.n(s),l=a(8523),d=a(5573),u=a.n(d),p=a(646),h=a.n(p),f=a(6647),g=a(680),_=a(1429);let b=async()=>{try{return(await fetch("https://wclouds.ru/api/categories?populate[products][populate][0]=images",{method:"GET",next:{revalidate:300},headers:{"Content-Type":"application/json",Authorization:"Bearer 4ee73f8dcbdd3f42ddd8b786c9d4f18eadf6539e7c87c202d68f475498beca9be1bef67ff2b6f2058a7f77c2bd3015e1ed4f59d3fdcbfc2974b2b33366459d558587b06b5299a14ff9104652461b8a67835d12081782001029d5cb0345875bb0a9feb65b35aeea8931a212e471f74a3b01fe3414c4d24faaf17147dbb53fa451"}})).json()}catch(e){console.log(e)}},m=async()=>{try{return(await fetch("https://wclouds.ru/api/categories?populate=*",{method:"GET",next:{revalidate:300},headers:{"Content-Type":"application/json",Authorization:"Bearer 4ee73f8dcbdd3f42ddd8b786c9d4f18eadf6539e7c87c202d68f475498beca9be1bef67ff2b6f2058a7f77c2bd3015e1ed4f59d3fdcbfc2974b2b33366459d558587b06b5299a14ff9104652461b8a67835d12081782001029d5cb0345875bb0a9feb65b35aeea8931a212e471f74a3b01fe3414c4d24faaf17147dbb53fa451"}})).json()}catch(e){console.log(e)}},v=async()=>(await b()).data.map(({attributes:e})=>e.title),x=async({params:e})=>{let t=(await m()).data.filter(t=>t.attributes.title===e.categoryId);return t.length<=0?{}:{title:t[0].attributes.name,description:t[0].attributes.description,authors:[{name:"Maksim Savinec"}],openGraph:{images:[{url:"https://wclouds.ru"+t[0].attributes.image.data.attributes.formats.small.url,width:800,height:600}]},twitter:{card:"summary_large_image"}}},y=async({params:e})=>{let t=(await b()).data.filter(t=>t.attributes.title===e.categoryId);return 0!==t.length?r.jsx(n.Z,{children:(0,r.jsxs)("main",{className:o().section,children:[r.jsx(g.ZP,{}),r.jsx("nav",{className:o().section__nav,children:(0,r.jsxs)("p",{children:[r.jsx(h(),{href:"/services",children:"Услуги"})," > ",t[0].attributes.name]})}),r.jsx("h1",{className:u()(o().section__title),children:t[0].attributes.name}),t[0].attributes.products.data.map(async(e,a)=>{let n="";null!==e.attributes.images.data?n+="https://wclouds.ru"+e.attributes.images.data[0].attributes.formats.small.url:n+="https://wclouds.ru/uploads/assets_0f9f13cb55.png";let i=await (0,f.Z)(n);return r.jsx(r.Fragment,{children:(0,r.jsxs)("div",{className:o().card,children:[r.jsx(c(),{className:o().card__image,src:`${n}`,loading:"lazy",width:400,height:300,alt:"services",placeholder:"blur",blurDataURL:i}),(0,r.jsxs)("div",{className:o().card__cont,children:[r.jsx("h3",{className:u()(o().card__cont_title),children:e.attributes.name}),r.jsx("p",{className:o().card__cont_text,children:e.attributes.description}),r.jsx(l.ZP,{path:`${t[0].attributes.title}/${e.attributes.title}`,className:o().card__cont_button,children:"Подробнее"})]})]},a)})})]})}):r.jsx(_.default,{})}}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[638,281,904,279],()=>a(446));module.exports=r})();