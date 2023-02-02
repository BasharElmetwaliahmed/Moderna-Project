let primarySection=document.getElementsByClassName("primary-section")[0];
fadeinSec=document.querySelectorAll(".animation-sec");


window.addEventListener('load',()=>{
    primarySection.style.transform='translateY(0px)';
    primarySection.style.opacity=1;
    if(window.scrollY>=10){
   fadeinSec.forEach(section=>{
            section.classList.remove("hidden-sec")

   })
    }
})


const funObserve=(entries,obsever)=>{
  const [entry]=entries;
  console.log(entry)
    if(!entry.isIntersecting) return
    entry.target.classList.remove('hidden-sec');
    obsever.unobserve(entry.target)
}

const secObserve=new IntersectionObserver(funObserve,{
    root:null,
    threshold:0.15,
})
fadeinSec.forEach(section=> {
    secObserve.observe(section)
    section.classList.add("hidden-sec");
    
});



/* fixed top */
const funObserveTop=(entries,obsever)=>{
  const [entry]=entries;
    if(!entry.isIntersecting){document.querySelector('.header-container').classList.add("fixedTop");
       document.querySelector(".scrollTop").classList.add("activeTop")

}
    else   {  document.querySelector('.header-container').classList.remove("fixedTop");
    document.querySelector(".scrollTop").classList.remove("activeTop")


}

}
/* on click scroll to top button
document.querySelector(".scrollTop").onclick=()=>{
    document.querySelector('.header-container').classList.remove("fixedTop");
    document.querySelector(".scrollTop").classList.remove("activeTop")
    
}

const topObserve=new IntersectionObserver(funObserveTop,{
    root:null,
    threshold:0.15,
})
    topObserve.observe(primarySection)




 /* scroll to top */
