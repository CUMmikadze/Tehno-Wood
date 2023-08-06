const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".main-text");
const navvMenu  = document.querySelector(".call-number");

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active"); 
    navMenu.classList.toggle("active"); 
    navvMenu.classList.toggle("active"); 
})

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName('dot');

    if (n >slides.length){
        slideIndex = 1
    }
    if (n < 1){
        slideIndex=slides.length
    }
    for (i=0; i <slides.length; i++){
        slides[i].style.display= "none";
    }
    for(i = 0; i< dots.length; i++){
        dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= "active"
} 


const wrapper = document.querySelector('.wrapper')
const btnPopup = document.querySelector('.button-title')
const close = document.querySelector('.icon-close')
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup')
})
close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup')
})



