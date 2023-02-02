const catBtns=document.querySelector(".categories");
const categories=catBtns.children
const photos=document.querySelectorAll(".photo-container");
/* event delegation */
catBtns.onclick=(event)=>{
   
   if(event.target.classList.contains("category")){
    Object.values(categories).forEach(category => category.classList.remove("active"));
    
    event.target.classList.add("active");
    const selectedCategory=event.target.innerHTML;
         photos.forEach(photo=>{
            if(selectedCategory=="All"){
                                photo.style.display='block';

            }
            else if(photo.dataset.category==selectedCategory){
                                photo.style.display='block';

            }
            else{
                            photo.style.display='none';

            }
         })
    
   }
}



/* protfolio slider */
let overlaySlider=document.querySelector(".sliderovelay");
let overlaySliderCloseBtn=document.querySelector(".closeslider-overlay");
let sliderWrapper=document.querySelector(".slider-wrapper");
let leftBtn=document.querySelector(".btn-left");
let rightBtn=document.querySelector(".btn-right");
let sliderImg=document.querySelector(".slider-img");
let currentIdx=0;


photosbox=document.querySelector(".photos-box");
photosbox.onclick=(event)=>{
    if(event.target.classList.contains('protfolioslider')){
        overlaySlider.classList.remove("hiddenoverlay");
        sliderWrapper.classList.remove("hiddenprotfolio-slider");
        
    }
}


/* close overlay of slider*/
const closeSlider=()=>{
                overlaySlider.classList.add("hiddenoverlay");
                sliderWrapper.classList.add("hiddenprotfolio-slider");
}
overlaySliderCloseBtn.addEventListener('click',()=>{
    closeSlider();

})

overlaySlider.addEventListener('click',()=>{
  closeSlider()
})


/* arrange photos*/
if(currentIdx==0){
    leftBtn.style.display='none';
}


const sliderphoto=document.querySelectorAll(".slider-wrapper img");
sliderphoto.forEach((img,i)=>{
    img.style.transform=`translate(${i*100}%,-50%)`;
})

rightBtn.addEventListener('click',()=>{
            leftBtn.style.display='block'

    if(currentIdx==sliderphoto.length-2)
    {
        rightBtn.style.display="none"
    }
        currentIdx++;


    sliderImg.style.transform=`translate(-${(currentIdx*100)+50}%,-50%)`

})

leftBtn.addEventListener('click',()=>{
            rightBtn.style.display='block'

    if(currentIdx==1)
    {
         leftBtn.style.display='none';

    }
        currentIdx--;


    sliderImg.style.transform=`translate(-${(currentIdx*100)+50}%,-50%)`

})
// /* mouse move slider*/
// let startX;
// let isDown=false;
// sliderImg.addEventListener('mousedown',(e)=>{
//     console.log("Down")
//     isDown=true;
//     startX=e.pageX - sliderImg.offsetLeft;


// })
// sliderImg.addEventListener('mouseup',()=>{
//     isDown=false
// })
// sliderImg.addEventListener('mousemove',(e)=>{
//     if(!isDown) return;
//     e.preventDefault();
//     const endX=e.pageX-sliderImg.offsetLeft
//     const Walk=(endX-startX)*3;
    
//     moveSlide(Walk)
    
// })

// function moveSlide(Walk){
//         sliderImg.style.transform=`translate(-${(currentIdx*100)+50+Walk},-50%)`
//         console.log(Walk)


// }