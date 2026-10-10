/* menu mobile */
const burger=document.querySelector(".burger"),menu=document.getElementById("menu");
burger.onclick=()=>{const o=menu.classList.toggle("open");burger.setAttribute("aria-expanded",o)};

/* carrossel (só na Home) */
const hero=document.querySelector(".hero");
if(hero){
 const track=hero.querySelector(".slides"),n=track.children.length,dots=hero.querySelector(".dots");
 let i=0,timer;
 for(let k=0;k<n;k++){const b=document.createElement("button");b.setAttribute("aria-label","Ir para o slide "+(k+1));b.onclick=()=>go(k);dots.appendChild(b)}
 function go(x){i=(x+n)%n;track.style.transform=`translateX(-${i*100}%)`;[...dots.children].forEach((d,k)=>d.setAttribute("aria-current",k===i))}
 function play(){if(!matchMedia("(prefers-reduced-motion:reduce)").matches)timer=setInterval(()=>go(i+1),6000)}
 hero.querySelector(".prev").onclick=()=>go(i-1);
 hero.querySelector(".next").onclick=()=>go(i+1);
 hero.onmouseenter=()=>clearInterval(timer);hero.onmouseleave=play;
 go(0);play();
}

/* ampliar foto do produto (só em Produtos) */
const lb=document.getElementById("lightbox");
if(lb){
 const fotos=[...document.querySelectorAll(".card .ph")],img=lb.querySelector("img"),cap=lb.querySelector("figcaption");
 let idx=0;
 const show=i=>{idx=(i+fotos.length)%fotos.length;const f=fotos[idx].querySelector("img");img.src=f.src;img.alt=f.alt;cap.textContent=f.alt};
 fotos.forEach((f,i)=>f.onclick=()=>{show(i);lb.showModal()});
 lb.querySelector(".lb-close").onclick=()=>lb.close();
 lb.querySelector(".lb-prev").onclick=()=>show(idx-1);
 lb.querySelector(".lb-next").onclick=()=>show(idx+1);
 lb.onclick=e=>{if(!e.target.closest("figure,button"))lb.close()};
 lb.addEventListener("keydown",e=>{if(e.key==="ArrowLeft")show(idx-1);if(e.key==="ArrowRight")show(idx+1)});
}