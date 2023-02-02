let navIcon=document.getElementsByClassName("bars")[0];
let navMenu=document.getElementsByClassName("navbar")[0];
let overlay=document.getElementsByClassName("overlay")[0];
let closeNavBtn=document.getElementsByClassName("closenav")[0];


/*function on click navIcon     */
const clickNav=()=>{
    navMenu.classList.add("activeMenu");
    overlay.classList.add("activeOverlay");
    document.querySelector(".header-container").style.opacity=1;
        document.querySelectorAll("nav ul li a").forEach(font=>{
            font.style.color="#0b212d";
        })


}

navIcon.addEventListener('click',clickNav);

/* close nav or overlay */
const closeNav=()=>{
    navMenu.classList.remove("activeMenu");
    overlay.classList.remove("activeOverlay");
            document.querySelectorAll("nav a").forEach(font=>{
            font.style.color="white";
        })

}

overlay.addEventListener("click",closeNav);
closeNavBtn.addEventListener("click",closeNav);
/* on click esc close nav*/
let input = document.getElementById("myInput");

 