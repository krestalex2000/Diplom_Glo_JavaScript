(()=>{"use strict";(()=>{const e=document.getElementById("callback"),t=document.querySelector(".header-modal"),l=document.querySelector(".overlay");document.body.addEventListener("click",(a=>{a.target===e&&(a.preventDefault(),t.style.display="block",l.style.display="block"),a.target.classList.contains("header-modal__close")&&(t.style.display="none",l.style.display="none")}))})()})();