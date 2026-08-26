
document.addEventListener("DOMContentLoaded",()=>{
 const menu=document.querySelector(".nav-links"),toggle=document.querySelector(".mobile-toggle");
 if(menu&&toggle){toggle.addEventListener("click",()=>menu.classList.toggle("open"));document.addEventListener("click",e=>{if(!menu.contains(e.target)&&!toggle.contains(e.target))menu.classList.remove("open")})}
 const els=document.querySelectorAll(".reveal");
 if("IntersectionObserver"in window){const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");o.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -30px"});els.forEach(el=>o.observe(el))}else els.forEach(el=>el.classList.add("visible"));
 document.querySelectorAll(".faq-q").forEach(b=>b.addEventListener("click",()=>{const i=b.closest(".faq-item"),open=i.classList.contains("open");document.querySelectorAll(".faq-item.open").forEach(x=>x.classList.remove("open"));if(!open)i.classList.add("open")}));
 const p=document.querySelector(".hero-panel");if(p&&matchMedia("(pointer:fine)").matches){p.addEventListener("mousemove",e=>{const r=p.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;p.style.transform=`perspective(1100px) rotateY(${x*5-2}deg) rotateX(${-y*4+1}deg) translateY(-3px)`});p.addEventListener("mouseleave",()=>p.style.transform="")}
});
