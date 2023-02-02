let slidesContainer=document.querySelector(".slides-container");
let slides=document.querySelectorAll(".slides-container div");
let currentIndex=0;


let nextBtn=document.querySelector(".next");

let prevBtn=document.querySelector(".prev");




const slideLoop=()=>{
        slides.forEach((slide,i)=>{
                            slide.style.visible='hidden'

                slide.classList.remove("active");
                if(currentIndex==i){

        setTimeout(()=>{
                    slide.style.visible='visible'
                    
  

                    slide.classList.add("active");

        


        },600)
    }
    })
}
const nextSLide=()=>{
        currentIndex++;
    if(currentIndex>=slides.length){
        currentIndex=0;
    }
    slideLoop()

}

nextBtn.addEventListener("click",nextSLide)

prevBtn.addEventListener("click",()=>{
    currentIndex--;
    if(currentIndex<=0){
        currentIndex=slides.length-1;
    }
  slideLoop();
})


setInterval(()=>
nextSLide()
,6000)