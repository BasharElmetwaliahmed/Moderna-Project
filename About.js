let numIncrease=document.querySelectorAll(".numincrease");

const startCount=(ele)=>{
    let goal= ele.dataset.num;
    let count=setInterval(()=>{
   ele.textContent++;
   if(goal==ele.textContent){
    clearInterval(count);
   }
    },0.5/goal)
}



fadeinCount=document.querySelectorAll(".counter");

const countFunObserve=(entries,obsever)=>{
  const [entry]=entries;
    if(!entry.isIntersecting) return
    entry.target.classList.remove('hidden-sec');
    
numIncrease.forEach(ele=>{
 
   startCount(ele);   
})

    obsever.unobserve(entry.target)
}

const countObserve=new IntersectionObserver(countFunObserve,{
    root:null,
    threshold:0.15,
})
fadeinCount.forEach(section=> {
    countObserve.observe(section)
    section.classList.add("hidden-sec");
    
});














/* slider */
let slides=document.querySelectorAll(".slide");
let wrapper=document.querySelector(".wrapper");
let bullets=document.querySelectorAll(".bullets span")
let bulletsContainer=document.querySelector(".bullets");
let current=0;

let goToSlide=(current)=>{
        wrapper.style.transform=`translateX(-${current*100}%)`;
    bullets.forEach((bullet)=>bullet.classList.remove("active-bullet"))
    bullets[current].classList.add("active-bullet");
}
slides.forEach((slide,i)=>{
    slide.style.left=`${i*100}%`
})
let changeSlide=setInterval(()=>{

    current++;
        if(current==slides.length){
        current=0
    }
    goToSlide(current);

},4000)

/*on click any bullet  =>event delegation */
bulletsContainer.addEventListener('click',(event)=>{
    if(event.target.classList.contains('bullet')){
      current=event.target.dataset.index;
      goToSlide(current);
    }
})
