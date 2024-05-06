 // Responsive Design for Navbar

var midNavigation = document.querySelector('.mid-nav');
var menubutton = document.querySelector('.Menu');

menubutton.addEventListener('click', ()=> {
    midNavigation.classList.toggle('dropdown');
})

 
 var swiper = new Swiper(".mySwiper", {
    //   effect: "coverflow",
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
        delay: 1500,
    },
    });