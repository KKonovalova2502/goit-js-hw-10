import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as h,i as y}from"./assets/vendor-BbbuE1sJ.js";const s=document.querySelector("#datetime-picker"),e=document.querySelector("button[data-start]"),p=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),q=document.querySelector("[data-seconds]");let a,i;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],a<=new Date?(y.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),e.disabled=!0):e.disabled=!1}};e.disabled=!0;h(s,D);e.addEventListener("click",()=>{i=setInterval(()=>{const n=a-new Date;if(n<=0){clearInterval(i),e.disabled=!0,s.disabled=!1;return}const{days:d,hours:c,minutes:u,seconds:r}=E(n);p.textContent=o(d),b.textContent=o(c),S.textContent=o(u),q.textContent=o(r),e.disabled=!0,s.disabled=!0},1e3)});function E(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:m,seconds:f}}function o(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
