exports.id=279,exports.ids=[279],exports.modules={3515:(e,t,a)=>{Promise.resolve().then(a.bind(a,3087)),Promise.resolve().then(a.bind(a,7830)),Promise.resolve().then(a.bind(a,442)),Promise.resolve().then(a.t.bind(a,1476,23))},8424:(e,t,a)=>{Promise.resolve().then(a.bind(a,3087)),Promise.resolve().then(a.bind(a,442))},3904:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2583,23)),Promise.resolve().then(a.t.bind(a,6840,23)),Promise.resolve().then(a.t.bind(a,8771,23)),Promise.resolve().then(a.t.bind(a,3225,23)),Promise.resolve().then(a.t.bind(a,9295,23)),Promise.resolve().then(a.t.bind(a,3982,23))},2685:()=>{},8620:(e,t,a)=>{"use strict";a.d(t,{A:()=>o,o:()=>s});let r="https://api.telegram.org/bot6841645013:AAH7MLTiHJGMFUXy5V3C9zkzBPaFu-iGh-A/sendMessage",s=async({name:e,adress:t,phone:a})=>{let s=`
    Заявка на замер потолка: 
    Имя: ${e},
    адрес: ${t} ,
    телефон: ${a}`;try{if((await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"@PtzPotolki",text:s})})).ok)return!0;return!1}catch(e){console.log(e)}},o=async({name:e,rewiev:t,phone:a,rating:s})=>{let o=`
    Отзыв: 
    Имя: ${e},
    Отзыв: ${t} ,
    телефон: ${a},
    рейтинг: ${s}`;try{if((await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"@PtzPotolki",text:o})})).ok)return!0;return!1}catch(e){console.log(e)}}},3087:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(5344);a(3729);var s=a(3694),o=a.n(s),l=a(4132),_=a.n(l),n=a(1223),i=a.n(n);let c={src:"/_next/static/media/tel.2cef5a55.svg",height:32,width:32,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/what.e3aef60a.svg",height:512,width:512,blurWidth:0,blurHeight:0};var m=a(783),h=a.n(m);let u=()=>(0,r.jsxs)("div",{id:"contacts",className:_()(o().cont),children:[r.jsx(h(),{className:_()(o().cont__phone),href:"tel:+79602136949",children:"+7 (960) 213-69-49"}),r.jsx(h(),{href:"https://t.me/maxsavinec",target:"_blank",children:r.jsx(i(),{className:_()(o().cont__image),src:c,alt:"telegram",width:50,height:50})}),r.jsx(h(),{href:"https://wa.me/79602136949",target:"_blank",children:r.jsx(i(),{className:_()(o().cont__image),src:d,alt:"telegram",width:50,height:50})})]})},7830:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});var r=a(5344),s=a(3729),o=a(2859),l=a.n(o),_=a(4132),n=a.n(_),i=a(8620),c=a(1223),d=a.n(c),m=a(7556),h=a(2767),u=a.n(h);let g=()=>{let[e,t]=(0,s.useState)(!1),[a,o]=(0,s.useState)(""),[_,c]=(0,s.useState)(""),[h,g]=(0,s.useState)(""),[x,v]=(0,s.useState)(""),[f,p]=(0,s.useState)(!1),[j,b]=(0,s.useState)(!0),N=e=>/^\d{11}$/.test(e),F=()=>{t(e=>!e)},k=async e=>{if(e.preventDefault(),""===a||""===_||""===h||!j){v("Заполните все поля ввода");return}p(await (0,i.o)({name:a,adress:_,phone:`+${h}`}))};return(0,s.useEffect)(()=>{if(f){let e=setTimeout(()=>{F()},5e3);return()=>clearTimeout(e)}},[f]),(0,r.jsxs)("div",{className:n()(l().container),children:[r.jsx("button",{className:n()(l().container__button),onClick:F,children:"Заявка на замер"}),e&&r.jsx("div",{onClick:F,className:n()(l().modal),children:(0,r.jsxs)("form",{onClick:e=>{e.stopPropagation()},className:n()(l().modal__form),children:[r.jsx("button",{className:n()(l().modal__close),onClick:F,children:r.jsx(d(),{src:m.Z,alt:"close",width:18,height:18})}),f?r.jsx("p",{className:n()(l().modal__form_text),children:" Спасибо за ваше обращение, в ближайшее время с вами свяжутся \uD83D\uDE09"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:n()(l().modal__form_box),children:[r.jsx("label",{className:n()(l().modal__form_label),htmlFor:"",children:"Имя"}),r.jsx("input",{value:a,onChange:e=>{e.preventDefault(),o(e.target.value),v("")},className:n()(l().modal__form_input),type:"text",placeholder:"Введите свое имя..."})]}),(0,r.jsxs)("div",{className:n()(l().modal__form_box),children:[r.jsx("label",{className:n()(l().modal__form_label),htmlFor:"",children:"Адрес"}),r.jsx("input",{value:_,onChange:e=>{e.preventDefault(),c(e.target.value),v("")},className:n()(l().modal__form_input),type:"text",placeholder:"Введите адрес: город, улица, дом, кв..."})]}),r.jsx("div",{className:n()(l().modal__form_box),children:(0,r.jsxs)("label",{className:n()(l().modal__form_label),htmlFor:"",children:["Телефон",r.jsx(u(),{specialLabel:"",disableCountryGuess:!0,inputClass:n()(l().modal__form_input),country:"ru",value:h,onChange:e=>{g(e),b(N(e)),v("")},placeholder:"+7 (900) 123-45-67"})]})}),r.jsx("div",{className:n()(l().modal__form_error),children:x}),r.jsx("button",{disabled:""!==x,onClick:k,className:n()(l().modal__form_button),children:"Отправить заявку"})]})]})})]})}},442:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var r=a(5344),s=a(3729),o=a(783),l=a.n(o),_=a(2141),n=a.n(_),i=a(2748),c=a.n(i),d=a(4132),m=a.n(d);let h=({setActive:e,active:t})=>(0,r.jsxs)("button",{onClick:e,className:m()(c().burger,`${t?c().active:""}`),children:[r.jsx("div",{className:m()(c().burger__line,`${t?c().up:""}`)}),r.jsx("div",{className:m()(c().burger__line,`${t?c().center:""}`)}),r.jsx("div",{className:m()(c().burger__line,`${t?c().down:""}`)})]});var u=a(4271),g=a.n(u);let x=({setActive:e})=>(0,r.jsxs)("nav",{className:g().nav,children:[r.jsx(l(),{onClick:e,className:g().nav_link,href:"/",children:"Главная"}),r.jsx(l(),{onClick:e,className:g().nav_link,href:"/services",children:"Услуги"}),r.jsx(l(),{onClick:e,className:g().nav_link,href:"/works",children:"Наши работы"}),r.jsx(l(),{onClick:e,className:g().nav_link,href:"/reviews",children:"Отзывы"}),r.jsx(l(),{onClick:e,className:g().nav_link,href:"#contacts",children:"Контакты"})]}),v=()=>{let[e,t]=(0,s.useState)(!1),[a,o]=(0,s.useState)(!1),_=()=>{if(console.log("object"),o(e=>!e),e){let e=setTimeout(()=>{t(e=>!e)},500);return()=>clearTimeout(e)}t(e=>!e)};return(0,r.jsxs)("header",{className:m()(n().header,a?n().active:""),children:[r.jsx(l(),{className:m()(n().nav_link),href:"/",children:r.jsx("svg",{className:n().header__logo,width:"80",height:"80",viewBox:"0 0 100 100",children:r.jsx("g",{id:"Слой_x0020_1",children:(0,r.jsxs)("g",{children:[r.jsx("path",{className:n().header__logo_path,stroke:"#f2f2f2",fill:"#f2f2f2",d:"M14 32l-4 6 24 -2 0 -32 13 -2 -1 90 -12 -5 0 -39 -21 0 0 28 -12 -7 1 -58 12 -2 0 23zm83 -19c-13,-6 -28,-12 -46,-12l0 90 14 -5 0 -71 -5 -4c9,3 18,5 26,10l0 51c5,-3 6,-1 12,-6l0 -53zm-50 11l-13 6 13 -6zm-13 2l13 -6 -13 6zm13 -9l-13 6 13 -6zm-13 2l13 -6 -13 6z"}),r.jsx("path",{className:n().header__logo_path,id:"1",stroke:"#f2f2f2",fill:"#f2f2f2",d:"M14 32l-4 6 24 -2 0 -32 13 -2 -1 90 -12 -5 0 -39 -21 0 0 28 -12 -7 1 -58 12 -2 0 23zm83 -19c-13,-6 -28,-12 -46,-12l0 90 14 -5 0 -71 -5 -4c9,3 18,5 26,10l0 51c5,-3 6,-1 12,-6l0 -53zm-50 11l-13 6m0 -4l13 -6m0 -3l-13 6m0 -4l13 -6"})]})})})}),r.jsx("div",{className:n().box,children:r.jsx(x,{})}),r.jsx(h,{setActive:_,active:a}),e&&r.jsx("div",{className:m()(n().menu,!a&&e?n().close:""),children:r.jsx(x,{setActive:_})})]})}},3694:e=>{e.exports={cont:"Contacts_cont__TkRxM",cont__phone:"Contacts_cont__phone__9Zgfu",cont__image:"Contacts_cont__image__0VD6V"}},1315:e=>{e.exports={footer:"Footer_footer__1yt0L"}},2859:e=>{e.exports={container__button:"FormTelegram_container__button__Vp8zF",down:"FormTelegram_down__aA6ff",cont:"FormTelegram_cont__mx_u0",modal:"FormTelegram_modal__O5BtC",modal__form:"FormTelegram_modal__form__ZoA3_",opacity:"FormTelegram_opacity__PrqOm",modal__form_box:"FormTelegram_modal__form_box__G7l3M",modal__form_label:"FormTelegram_modal__form_label__C3OM8",modal__form_input:"FormTelegram_modal__form_input__fbSxv",modal__form_error:"FormTelegram_modal__form_error__LJgEf",modal__form_button:"FormTelegram_modal__form_button__dY6rr",modal__form_text:"FormTelegram_modal__form_text__D48xy",modal__close:"FormTelegram_modal__close__o7OrO",vibration:"FormTelegram_vibration__foYmW",modal_image:"FormTelegram_modal_image__huuFO",scale:"FormTelegram_scale__A6yGG",left:"FormTelegram_left__j8M3E",up:"FormTelegram_up__lJL_J",right:"FormTelegram_right__h_4Ve"}},4271:e=>{e.exports={nav:"Nav_nav___pvUa",nav_link:"Nav_nav_link__JUeDQ"}},2748:e=>{e.exports={burger:"Burger_burger__tdQJI",burger__line:"Burger_burger__line__4Xlud",up:"Burger_up__6qajG",center:"Burger_center__1LaPL",down:"Burger_down__RPG12"}},2141:e=>{e.exports={header:"Header_header__rEoCd",up:"Header_up__2urlZ",header__logo:"Header_header__logo___VJvt",header__logo_path:"Header_header__logo_path__GIX7s",menu:"Header_menu__IYKEg",mymove:"Header_mymove__wHqDw",deactive:"Header_deactive__raGw7",close:"Header_close__AF5v4",moveClose:"Header_moveClose__ch2Uq",box:"Header_box__Am7Kb",left:"Header_left__QlmB_",right:"Header_right__uc8_U",down:"Header_down__xT9bA",scale:"Header_scale__dGSK4",opacity:"Header_opacity__nTt9Q",vibration:"Header_vibration__qL4gE"}},5557:e=>{e.exports={section:"NotFound_section__B43_6",section__text:"NotFound_section__text__FF4c5",link:"NotFound_link__VloJl",g:"NotFound_g__6nNOj",svgOne:"NotFound_svgOne__gHYrT","animate-svg-stroke-1":"NotFound_animate-svg-stroke-1__OLB5e",svgTwo:"NotFound_svgTwo__m4HXU","animate-svg-stroke-2":"NotFound_animate-svg-stroke-2__b_29D",svgThree:"NotFound_svgThree__EDZDa","animate-svg-stroke-3":"NotFound_animate-svg-stroke-3__IsoAT",svgFour:"NotFound_svgFour__C64aA","animate-svg-stroke-4":"NotFound_animate-svg-stroke-4__VTSpF"}},971:e=>{e.exports={section:"loading_section__LK_tr",loader:"loading_loader__S_Lol",rotate:"loading_rotate__i31ty",prixClipFix:"loading_prixClipFix__UjZAQ"}},680:(e,t,a)=>{"use strict";a.d(t,{ZP:()=>l});let r=(0,a(6843).createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\FormTelegram\FormTelegram.tsx`),{__esModule:s,$$typeof:o}=r,l=r.default},5575:(e,t,a)=>{"use strict";a.d(t,{Z:()=>x});var r=a(5036);a(2);var s=a(6843);let o=(0,s.createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\header\Header.tsx`),{__esModule:l,$$typeof:_}=o,n=o.default;var i=a(1315),c=a.n(i);let d=(0,s.createProxy)(String.raw`G:\projects\GitHub\potolki\app\components\Contacts\Contacts.tsx`),{__esModule:m,$$typeof:h}=d,u=d.default,g=()=>r.jsx("footer",{className:c().footer,children:r.jsx(u,{})}),x=({children:e})=>(0,r.jsxs)(r.Fragment,{children:[r.jsx(n,{}),e,r.jsx(g,{})]})},2917:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d,metadata:()=>c});var r=a(5036),s=a(9856),o=a.n(s);a(3440);var l=a(5573),_=a.n(l),n=a(342),i=a.n(n);let c={metadataBase:new URL("https://wclouds.ru"),title:{default:"Натяжные потолки | Петрозаводск, Кондопога",template:"Натяжные потолки | %s"},description:"Производим установку натяжных потолков в Петрозаводске, Кондопоге и соседних районах по выгодным ценам. Занимаемся производством потолочных конструкций из качественых матералов.",openGraph:{title:"",description:"",images:[{url:"https://wclouds.ru/uploads/light_2_c4fedcaf67.jpg",width:800,height:600}]},twitter:{card:"summary_large_image"}};function d({children:e}){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[r.jsx("link",{rel:"svg",href:"/icon?<generated>",type:"image/<generated>",sizes:"<generated>"}),r.jsx("link",{rel:"apple-touch-icon",href:"/apple-icon?<generated>",type:"image/<generated>",sizes:"<generated>"})]}),r.jsx("html",{lang:"ru",children:r.jsx("body",{className:_()(o().className),children:e})})]})}},7984:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>_});var r=a(5036);a(2);var s=a(5575),o=a(971),l=a.n(o);let _=()=>r.jsx(s.Z,{children:r.jsx("section",{className:l().section,children:r.jsx("span",{className:l().loader})})})},1429:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var r=a(5036);a(2);var s=a(5575),o=a(5557),l=a.n(o),_=a(646),n=a.n(_),i=a(680);let c=async()=>r.jsx(s.Z,{children:(0,r.jsxs)("main",{className:l().section,children:[r.jsx(i.ZP,{}),r.jsx("svg",{height:"50%",version:"1.1",viewBox:"0 0 24 24",width:"50%",children:(0,r.jsxs)("g",{className:l().g,id:"Social-/-5---Social,-emoticon,-neutral,-somewhat-icon",children:[r.jsx("path",{d:"M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z",id:"Path",className:l().svgOne}),r.jsx("line",{id:"Path",stroke:"#f2f2f2",x1:"15.0043926",x2:"15",y1:"8",y2:"8",className:l().svgTwo}),r.jsx("line",{id:"Path",stroke:"#f2f2f2",x1:"9.00439261",x2:"9",y1:"8",y2:"8",className:l().svgThree}),r.jsx("line",{id:"Path",stroke:"#f2f2f2",x1:"9",x2:"15",y1:"15",y2:"15",className:l().svgFour})]})}),(0,r.jsxs)("h1",{className:l().section__text,children:["К сожалению данной страницы не существует, перейдите на"," ",r.jsx(n(),{className:l().link,href:"/",children:"главную"})]})]})})},7556:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r={src:"/_next/static/media/krestik.b5b0eb52.svg",height:612,width:612,blurWidth:0,blurHeight:0}},3226:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(337);let s=e=>[{type:"image/png",sizes:"180x180",url:(0,r.fillMetadataSegment)(".",e.params,"apple-icon.png")+"?901ee409e0a4c35b"}]},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(337);let s=e=>[{type:"image/x-icon",sizes:"48x48",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},4697:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(337);let s=e=>[{type:"image/svg+xml",sizes:"any",url:(0,r.fillMetadataSegment)(".",e.params,"icon.svg")+"?6adde667b5ffe6cc"}]},3440:()=>{}};