(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1428:function(e,a,t){"use strict";t.d(a,{A:function(){return _},o:function(){return l}});let o="https://api.telegram.org/bot".concat("6841645013:AAH7MLTiHJGMFUXy5V3C9zkzBPaFu-iGh-A","/sendMessage"),l=async e=>{let{name:a,adress:t,phone:l}=e,_="\n    Заявка на замер потолка: \n    Имя: ".concat(a,",\n    адрес: ").concat(t," ,\n    телефон: ").concat(l);try{if((await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"@PtzPotolki",text:_})})).ok)return!0;return!1}catch(e){console.log(e)}},_=async e=>{let{name:a,rewiev:t,phone:l,rating:_}=e,r="\n    Отзыв: \n    Имя: ".concat(a,",\n    Отзыв: ").concat(t," ,\n    телефон: ").concat(l,",\n    рейтинг: ").concat(_);try{if((await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chat_id:"@PtzPotolki",text:r})})).ok)return!0;return!1}catch(e){console.log(e)}}},4851:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var o=t(7437);t(2265);var l=t(1480),_=t.n(l),r=t(2744),n=t.n(r),s=t(6691),c=t.n(s),i={src:"/_next/static/media/tel.2cef5a55.svg",height:32,width:32,blurWidth:0,blurHeight:0},m={src:"/_next/static/media/what.e3aef60a.svg",height:512,width:512,blurWidth:0,blurHeight:0},d=t(1396),u=t.n(d),h=()=>(0,o.jsxs)("div",{id:"contacts",className:n()(_().cont),children:[(0,o.jsx)(u(),{className:n()(_().cont__phone),href:"tel:+79602136949",children:"+7 (960) 213-69-49"}),(0,o.jsx)(u(),{href:"https://t.me/maxsavinec",target:"_blank",children:(0,o.jsx)(c(),{className:n()(_().cont__image),src:i,alt:"telegram",width:50,height:50})}),(0,o.jsx)(u(),{href:"https://wa.me/79602136949",target:"_blank",children:(0,o.jsx)(c(),{className:n()(_().cont__image),src:m,alt:"telegram",width:50,height:50})})]})},9013:function(e,a,t){"use strict";t.r(a);var o=t(7437),l=t(2265),_=t(6893),r=t.n(_),n=t(2744),s=t.n(n),c=t(1428),i=t(6691),m=t.n(i),d=t(919),u=t(5794),h=t.n(u);a.default=()=>{let[e,a]=(0,l.useState)(!1),[t,_]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),[u,f]=(0,l.useState)(""),[g,p]=(0,l.useState)(""),[x,v]=(0,l.useState)(!1),[b,j]=(0,l.useState)(!0),N=e=>/^\d{11}$/.test(e),w=()=>{a(e=>!e)},k=async e=>{if(e.preventDefault(),""===t||""===n||""===u||!b){p("Заполните все поля ввода");return}v(await (0,c.o)({name:t,adress:n,phone:"+".concat(u)}))};return(0,l.useEffect)(()=>{if(x){let e=setTimeout(()=>{w()},5e3);return()=>clearTimeout(e)}},[x]),(0,o.jsxs)("div",{className:s()(r().container),children:[(0,o.jsx)("button",{className:s()(r().container__button),onClick:w,children:"Заявка на замер"}),e&&(0,o.jsx)("div",{onClick:w,className:s()(r().modal),children:(0,o.jsxs)("form",{onClick:e=>{e.stopPropagation()},className:s()(r().modal__form),children:[(0,o.jsx)("button",{className:s()(r().modal__close),onClick:w,children:(0,o.jsx)(m(),{src:d.Z,alt:"close",width:18,height:18})}),x?(0,o.jsx)("p",{className:s()(r().modal__form_text),children:" Спасибо за ваше обращение, в ближайшее время с вами свяжутся \uD83D\uDE09"}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:s()(r().modal__form_box),children:[(0,o.jsx)("label",{className:s()(r().modal__form_label),htmlFor:"",children:"Имя"}),(0,o.jsx)("input",{value:t,onChange:e=>{e.preventDefault(),_(e.target.value),p("")},className:s()(r().modal__form_input),type:"text",placeholder:"Введите свое имя..."})]}),(0,o.jsxs)("div",{className:s()(r().modal__form_box),children:[(0,o.jsx)("label",{className:s()(r().modal__form_label),htmlFor:"",children:"Адрес"}),(0,o.jsx)("input",{value:n,onChange:e=>{e.preventDefault(),i(e.target.value),p("")},className:s()(r().modal__form_input),type:"text",placeholder:"Введите адрес: город, улица, дом, кв..."})]}),(0,o.jsx)("div",{className:s()(r().modal__form_box),children:(0,o.jsxs)("label",{className:s()(r().modal__form_label),htmlFor:"",children:["Телефон",(0,o.jsx)(h(),{specialLabel:"",disableCountryGuess:!0,inputClass:s()(r().modal__form_input),country:"ru",value:u,onChange:e=>{f(e),j(N(e)),p("")},placeholder:"+7 (900) 123-45-67"})]})}),(0,o.jsx)("div",{className:s()(r().modal__form_error),children:g}),(0,o.jsx)("button",{disabled:""!==g,onClick:k,className:s()(r().modal__form_button),children:"Отправить заявку"})]})]})})]})}},4420:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var o=t(7437),l=t(2265),_=t(358),r=t.n(_),n=t(6691),s=t.n(n),c=t(1848),i=t.n(c);let m=(e,a)=>'\n    \n    <svg width="'.concat(e,'" height="').concat(a,'" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">\n        <defs>\n            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">\n                <stop stop-color="#fff" stop-opacity="0" offset="0%"/>\n                <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>\n                <stop stop-color="#fff" offset="100%"/>\n            </linearGradient>\n        </defs>\n        <g fill="none" fill-rule="evenodd">\n            <g transform="translate(1 1)">\n                <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">\n                    <animateTransform\n                        attributeName="transform"\n                        type="rotate"\n                        from="0 18 18"\n                        to="360 18 18"\n                        dur="2s"\n                        repeatCount="indefinite" />\n                </path>\n                <circle fill="#fff" cx="36" cy="18" r="1">\n                    <animateTransform\n                        attributeName="transform"\n                        type="rotate"\n                        from="0 18 18"\n                        to="360 18 18"\n                        dur="2s"\n                        repeatCount="indefinite" />\n                </circle>\n            </g>\n        </g>\n    </svg>\n    '),d=e=>window.btoa(e);var u=t(919),h=e=>{let{src:a,setSrc:t}=e,l=()=>{t("")};return(0,o.jsxs)("div",{onClick:l,className:i().modal,children:[(0,o.jsx)(s(),{onClick:l,className:i().modal_close,src:u.Z,alt:"крестик",width:30,height:30}),(0,o.jsx)(s(),{onClick:e=>{e.stopPropagation()},className:i().modal_image,src:"".concat(a),placeholder:"data:image/svg+xml;base64,".concat(d(m(700,475))),alt:"fullImage",width:4e3,height:4e3})]})},f=t(6226);let g={offscreen:{y:100,opacity:0},onscreen:{y:0,rotate:0,opacity:1,transition:{type:"spring",duration:.8,bounce:.35}}};var p=e=>{let{images:a}=e,[t,_]=(0,l.useState)(""),n=e=>{_(e.target.id)};return(0,o.jsxs)(o.Fragment,{children:[""!==t&&(0,o.jsx)(h,{src:t,setSrc:_}),(0,o.jsx)("div",{className:r().box,children:a.data.map((e,a)=>(0,o.jsx)(f.E.div,{className:r().block,initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.3},children:(0,o.jsx)(f.E.div,{className:r().cont,variants:g,children:(0,o.jsx)(s(),{onClick:n,className:r().box__image,id:"".concat("https://wclouds.ru").concat(e.attributes.url),src:"".concat("https://wclouds.ru").concat(e.attributes.url),alt:"workImage",placeholder:"data:image/svg+xml;base64,".concat(d(m(240,180))),width:400,loading:"lazy",height:300},a)})}))})]})}},9799:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return p}});var o=t(7437),l=t(2265),_=t(1396),r=t.n(_),n=t(2803),s=t.n(n),c=t(2009),i=t.n(c),m=t(2744),d=t.n(m),u=e=>{let{setActive:a,active:t}=e;return(0,o.jsxs)("button",{onClick:a,className:d()(i().burger,"".concat(t?i().active:"")),children:[(0,o.jsx)("div",{className:d()(i().burger__line,"".concat(t?i().up:""))}),(0,o.jsx)("div",{className:d()(i().burger__line,"".concat(t?i().center:""))}),(0,o.jsx)("div",{className:d()(i().burger__line,"".concat(t?i().down:""))})]})},h=t(5839),f=t.n(h),g=e=>{let{setActive:a}=e;return(0,o.jsxs)("nav",{className:f().nav,children:[(0,o.jsx)(r(),{onClick:a,className:f().nav_link,href:"/",children:"Главная"}),(0,o.jsx)(r(),{onClick:a,className:f().nav_link,href:"/services",children:"Услуги"}),(0,o.jsx)(r(),{onClick:a,className:f().nav_link,href:"/works",children:"Наши работы"}),(0,o.jsx)(r(),{onClick:a,className:f().nav_link,href:"/reviews",children:"Отзывы"}),(0,o.jsx)(r(),{onClick:a,className:f().nav_link,href:"#contacts",children:"Контакты"})]})},p=()=>{let[e,a]=(0,l.useState)(!1),[t,_]=(0,l.useState)(!1),n=()=>{if(console.log("object"),_(e=>!e),e){let e=setTimeout(()=>{a(e=>!e)},500);return()=>clearTimeout(e)}a(e=>!e)};return(0,o.jsxs)("header",{className:d()(s().header,t?s().active:""),children:[(0,o.jsx)(r(),{className:d()(s().nav_link),href:"/",children:(0,o.jsx)("svg",{className:s().header__logo,width:"80",height:"80",viewBox:"0 0 100 100",children:(0,o.jsx)("g",{id:"Слой_x0020_1",children:(0,o.jsxs)("g",{children:[(0,o.jsx)("path",{className:s().header__logo_path,stroke:"#f2f2f2",fill:"#f2f2f2",d:"M14 32l-4 6 24 -2 0 -32 13 -2 -1 90 -12 -5 0 -39 -21 0 0 28 -12 -7 1 -58 12 -2 0 23zm83 -19c-13,-6 -28,-12 -46,-12l0 90 14 -5 0 -71 -5 -4c9,3 18,5 26,10l0 51c5,-3 6,-1 12,-6l0 -53zm-50 11l-13 6 13 -6zm-13 2l13 -6 -13 6zm13 -9l-13 6 13 -6zm-13 2l13 -6 -13 6z"}),(0,o.jsx)("path",{className:s().header__logo_path,id:"1",stroke:"#f2f2f2",fill:"#f2f2f2",d:"M14 32l-4 6 24 -2 0 -32 13 -2 -1 90 -12 -5 0 -39 -21 0 0 28 -12 -7 1 -58 12 -2 0 23zm83 -19c-13,-6 -28,-12 -46,-12l0 90 14 -5 0 -71 -5 -4c9,3 18,5 26,10l0 51c5,-3 6,-1 12,-6l0 -53zm-50 11l-13 6m0 -4l13 -6m0 -3l-13 6m0 -4l13 -6"})]})})})}),(0,o.jsx)("div",{className:s().box,children:(0,o.jsx)(g,{})}),(0,o.jsx)(u,{setActive:n,active:t}),e&&(0,o.jsx)("div",{className:d()(s().menu,!t&&e?s().close:""),children:(0,o.jsx)(g,{setActive:n})})]})}},1480:function(e){e.exports={cont:"Contacts_cont__TkRxM",cont__phone:"Contacts_cont__phone__9Zgfu",cont__image:"Contacts_cont__image__0VD6V"}},4224:function(e){e.exports={footer:"Footer_footer__1yt0L"}},6893:function(e){e.exports={container__button:"FormTelegram_container__button__Vp8zF",down:"FormTelegram_down__aA6ff",cont:"FormTelegram_cont__mx_u0",modal:"FormTelegram_modal__O5BtC",modal__form:"FormTelegram_modal__form__ZoA3_",opacity:"FormTelegram_opacity__PrqOm",modal__form_box:"FormTelegram_modal__form_box__G7l3M",modal__form_label:"FormTelegram_modal__form_label__C3OM8",modal__form_input:"FormTelegram_modal__form_input__fbSxv",modal__form_error:"FormTelegram_modal__form_error__LJgEf",modal__form_button:"FormTelegram_modal__form_button__dY6rr",modal__form_text:"FormTelegram_modal__form_text__D48xy",modal__close:"FormTelegram_modal__close__o7OrO",vibration:"FormTelegram_vibration__foYmW",modal_image:"FormTelegram_modal_image__huuFO",scale:"FormTelegram_scale__A6yGG",left:"FormTelegram_left__j8M3E",up:"FormTelegram_up__lJL_J",right:"FormTelegram_right__h_4Ve"}},358:function(e){e.exports={box:"FullImage_box__sjduO",box__image:"FullImage_box__image__wTpKP",block:"FullImage_block__b_cgy",cont:"FullImage_cont__6Zjht",left:"FullImage_left__ybInM",up:"FullImage_up__8PY15",right:"FullImage_right__Xlq_3",down:"FullImage_down__GIoH1",scale:"FullImage_scale__O_acj",opacity:"FullImage_opacity___9i_W",vibration:"FullImage_vibration__tnJfD"}},1848:function(e){e.exports={modal:"Modal_modal__3XThs",modal_close:"Modal_modal_close__XUcEt",vibration:"Modal_vibration__0lbk_",modal_image:"Modal_modal_image__JLDdO",scale:"Modal_scale__qQdiV",left:"Modal_left__jvovU",up:"Modal_up__o0Fkl",right:"Modal_right__7Rwft",down:"Modal_down__44GkP",opacity:"Modal_opacity___eXpo"}},5839:function(e){e.exports={nav:"Nav_nav___pvUa",nav_link:"Nav_nav_link__JUeDQ"}},2009:function(e){e.exports={burger:"Burger_burger__tdQJI",burger__line:"Burger_burger__line__4Xlud",up:"Burger_up__6qajG",center:"Burger_center__1LaPL",down:"Burger_down__RPG12"}},2803:function(e){e.exports={header:"Header_header__rEoCd",up:"Header_up__2urlZ",header__logo:"Header_header__logo___VJvt",header__logo_path:"Header_header__logo_path__GIX7s",menu:"Header_menu__IYKEg",mymove:"Header_mymove__wHqDw",deactive:"Header_deactive__raGw7",close:"Header_close__AF5v4",moveClose:"Header_moveClose__ch2Uq",box:"Header_box__Am7Kb",left:"Header_left__QlmB_",right:"Header_right__uc8_U",down:"Header_down__xT9bA",scale:"Header_scale__dGSK4",opacity:"Header_opacity__nTt9Q",vibration:"Header_vibration__qL4gE"}},919:function(e,a){"use strict";a.Z={src:"/_next/static/media/krestik.b5b0eb52.svg",height:612,width:612,blurWidth:0,blurHeight:0}}}]);