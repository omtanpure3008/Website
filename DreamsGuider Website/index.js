// Responsive Design for Navbar

var midNavigation = document.querySelector('.mid-nav');
var menubutton = document.querySelector('.Menu');

menubutton.addEventListener('click', ()=> {
    midNavigation.classList.toggle('dropdown');
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    autoplay: {
        delay: 1500,
    },
  });