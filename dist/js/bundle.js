(()=>{"use strict";const e=({modalSelector:e,modalOpen:t,modalClose:o,list:l})=>{const n=document.querySelector(e),r=document.querySelector(".overlay");let c;c=l?document.querySelectorAll(t):document.querySelector(t),document.body.addEventListener("click",(e=>{c.length>1?c.forEach((t=>{e.target===t&&(e.preventDefault(),n.style.display="block",r.style.display="block")})):e.target===c&&(e.preventDefault(),n.style.display="block",r.style.display="block"),(e.target.classList.contains(o)||e.target===r)&&(n.style.display="none",r.style.display="none")}))},t=({sliderSelector:e,slidesSelector:t,arrowLeftSelector:o,arrowRightSelector:l,countSlideDesktop:n,countSlideMobile:r,timeInterval:c,auto:a})=>{const s=document.querySelector(e),d=s.querySelectorAll(t);let i,m=0;const u=()=>{d.forEach((e=>{e.style.transform=`translateX(${m*e.clientWidth}px)`}))},y=()=>{d.forEach((e=>{e.style.transform=`translateX(${m*-e.clientWidth}px)`}))},h=()=>{u(),m++,(m>=d.length-(n-1)&&document.body.clientWidth>=576||document.body.clientWidth<576&&m>=d.length)&&(m=0),y()};s.addEventListener("click",(e=>{e.preventDefault(),u(),e.target.closest(o)?m--:e.target.closest(l)&&m++,(m>=d.length-(n-1)&&document.body.clientWidth>=576||document.body.clientWidth<576&&m>=d.length)&&(m=0),m<0&&document.body.clientWidth<576?m=d.length-r:m<0&&(m=d.length-n),y()}),!0),a&&((e=1500)=>{i=setInterval(h,e)})(c)},o=({deadline:e,selector:t})=>{const o=document.querySelector(`${t} .count_1 span`),l=document.querySelector(`${t} .count_2 span`),n=document.querySelector(`${t} .count_3 span`),r=document.querySelector(`${t} .count_4 span`),c=()=>{const t=(new Date(e).getTime()-(new Date).getTime())/1e3;let o=Math.floor(t/60/60/24),l=Math.floor(t/60/60)%24,n=Math.floor(t/60%60),r=Math.floor(t%60);return 1===o.toString().length&&(o="0"+o),1===l.toString().length&&(l="0"+l),1===n.toString().length&&(n="0"+n),1===r.toString().length&&(r="0"+r),{timeRemaining:t,days:o,hours:l,minutes:n,seconds:r}};c().timeRemaining>0&&setInterval((()=>{const e=c();o.textContent=e.days,l.textContent=e.hours,n.textContent=e.minutes,r.textContent=e.seconds}),1e3)},l=({formId:e,someElement:t=[]})=>{const o=document.getElementById(e),l=document.createElement("div");try{if(!o)throw new Error("Верните форму на место");o.addEventListener("submit",(e=>{e.preventDefault(),(()=>{const e=o.querySelectorAll('input[type="text"]'),n=new FormData(o),r={};var c;o.append(l),setInterval((()=>{l.remove()}),3e3),n.forEach(((e,t)=>{r[t]=e})),t.forEach((e=>{const t=document.getElementById(e.id);"block"===e.type&&t?r[e.id]=t.textContent:"input"===e.type&&t&&(r[e.id]=t.value)})),(e=>{let t=!0;const o=/^\+\d{11,16}/,l=/[а-яА-ЯЁёa-zA-Z]/;return e.forEach((e=>{"phone"===e.name&&!o.test(e.value)||"fio"===e.name&&!l.test(e.value)||""===e.value?(t=!1,e.classList.add("error")):(t=!0,e.classList.remove("error"))})),t})(e)?(c=r,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((()=>{l.textContent="Спасибо! Наш менеджер с вами свяжется",e.forEach((e=>{e.value=""}))})).catch((()=>{l.textContent="Ошибка..."})):alert("Данные не валидны")})()}))}catch(e){console.log(e.message)}};e({modalOpen:"#callback",modalSelector:".header-modal",modalClose:"header-modal__close",list:!1}),e({modalOpen:".service-modal-btn",modalSelector:".services-modal",modalClose:"services-modal__close",list:!0}),t({sliderSelector:"#benefits",slidesSelector:".benefits__item",arrowRightSelector:".benefits__arrow--right",arrowLeftSelector:".benefits__arrow--left",countSlideDesktop:3,countSlideMobile:1,auto:!0,timeInterval:2e3}),t({sliderSelector:"#services .row",slidesSelector:".service__item",arrowRightSelector:".services__arrow--right",arrowLeftSelector:".services__arrow--left",countSlideDesktop:2,countSlideMobile:1,auto:!1,timeInterval:2e3}),o({deadline:(new Date).getTime()+1728e5,selector:"#order_1"}),o({deadline:(new Date).getTime()+1728e5,selector:"#order_2"}),l({formId:"form-1",someElement:[{type:"input",id:"calc-total"}]}),l({formId:"form-2",someElement:[{type:"input",id:"calc-total"}]}),(()=>{const e=document.getElementById("calc"),t=document.getElementById("calc-type"),o=document.getElementById("calc-type-material"),l=document.getElementById("calc-input"),n=document.getElementById("calc-total");e.addEventListener("input",(e=>{(e=>{e.target.matches("#calc-input")&&(e.target.value=e.target.value.replace(/\D/,""))})(e),e.target!==t&&e.target!==o&&e.target!==l||(()=>{const e=t.options[t.selectedIndex].value,r=o.options[o.selectedIndex].value,c=l.value;let a=0;a=t.value&&o.value?c*e*r:0,n.value=a})()}))})()})();