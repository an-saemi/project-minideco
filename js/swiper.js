
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centerMode:true,
    autoHeight: true,
    loop: true,
    // cssMide:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
    mousewheel:true
});



let Y = '';
const section = document.querySelectorAll('section');



window.addEventListener('scroll',function(){
    Y = window.scrollY;
    console.log(Y);
    
    if(Y >= 200){
        section[1].classList.add('up');
    }else if(Y >= 880){
        section[2].classList.add('up');
    }
});


// for(let i=1; i<section.length; i++){
//     section[i].classList.add('up');
// }