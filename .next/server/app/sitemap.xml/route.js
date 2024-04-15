"use strict";(()=>{var e={};e.id=717,e.ids=[717],e.modules={517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},1691:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>w,originalPathname:()=>A,patchFetch:()=>$,requestAsyncStorage:()=>h,routeModule:()=>y,serverHooks:()=>g,staticGenerationAsyncStorage:()=>v,staticGenerationBailout:()=>x});var a={};r.r(a),r.d(a,{default:()=>p});var o={};r.r(o),r.d(o,{GET:()=>b});var i=r(5419),n=r(9108),s=r(9678),l=r(9647);let u=async()=>{try{return(await fetch("http://wclouds.ru/api/categories?populate=*",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer 4ee73f8dcbdd3f42ddd8b786c9d4f18eadf6539e7c87c202d68f475498beca9be1bef67ff2b6f2058a7f77c2bd3015e1ed4f59d3fdcbfc2974b2b33366459d558587b06b5299a14ff9104652461b8a67835d12081782001029d5cb0345875bb0a9feb65b35aeea8931a212e471f74a3b01fe3414c4d24faaf17147dbb53fa451"}})).json()}catch(e){console.log(e)}},p=async()=>{let e=(await u()).data,t=e.map(({attributes:e})=>({url:`https://ptz-potolki.ru/services/${e.title}`})),r=[];return e.map(e=>{e.attributes.products.data.map(({attributes:t})=>{r.push(`https://ptz-potolki.ru/services/${e.attributes.title}/${t.title}`)})}),[{url:"https://ptz-potolki.ru/"},{url:"https://ptz-potolki.ru/reviews"},{url:"https://ptz-potolki.ru/works"},...t,...r.map(e=>({url:e}))]};var f=r(7252);let c={...a},d=c.default,m=c.generateSitemaps;if("function"!=typeof d)throw Error('Default export is missing in "G:\\projects\\GitHub\\potolki\\app\\sitemap.ts"');async function b(e,t){let r;let{__metadata_id__:a=[],...o}=t.params||{},i=a[0],n=m?await m():null;if(n&&null==(r=n.find(e=>e.id.toString()===i)?.id))return new l.NextResponse("Not Found",{status:404});let s=await d({id:r}),u=(0,f.resolveRouteData)(s,"sitemap");return new l.NextResponse(u,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}let y=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap",bundlePath:"app/sitemap.xml/route"},resolvedPagePath:"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&isDynamic=1!G:\\projects\\GitHub\\potolki\\app\\sitemap.ts?__next_metadata_route__",nextConfigOutput:"export",userland:o}),{requestAsyncStorage:h,staticGenerationAsyncStorage:v,serverHooks:g,headerHooks:w,staticGenerationBailout:x}=y,A="/sitemap.xml/route";function $(){return(0,s.patchFetch)({serverHooks:g,staticGenerationAsyncStorage:v})}},7252:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveRobots:function(){return o},resolveSitemap:function(){return i},resolveManifest:function(){return n},resolveRouteData:function(){return s}});let a=r(9926);function o(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,a.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,a.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,a.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,a.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function i(e){let t="";for(let r of(t+='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n',e)){if(t+=`<url>
<loc>${r.url}</loc>
`,r.lastModified){let e=r.lastModified instanceof Date?r.lastModified.toISOString():r.lastModified;t+=`<lastmod>${e}</lastmod>
`}r.changeFrequency&&(t+=`<changefreq>${r.changeFrequency}</changefreq>
`),"number"==typeof r.priority&&(t+=`<priority>${r.priority}</priority>
`),t+="</url>\n"}return t+"</urlset>\n"}function n(e){return JSON.stringify(e)}function s(e,t){return"robots"===t?o(e):"sitemap"===t?i(e):"manifest"===t?n(e):""}},9926:(e,t)=>{function r(e){return Array.isArray(e)?e:[e]}function a(e){if(null!=e)return r(e)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{resolveAsArrayOrUndefined:function(){return a},resolveArray:function(){return r}})}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[638,266],()=>r(1691));module.exports=a})();