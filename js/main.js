// Carousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,/*Чтоб зациклить */
    margin: 20,

    startPosition: 1, /*какой элемент будет активный*/
    items: 1,//Количество слайдов
    responsive : {
        540: {
            items: 3,
        },
        1200: {
            margin: 30,
            items: 3,
        },
}})

// Go to the next item
$('.slider_btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Go to the previous item
$('.slider_btn--prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

// Nav icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document. querySelector('.menu-icon');

navBtn.onclick = function() {
    nav.classList.toggle('nav--mobile'),
    menuIcon.classList.toggle('menu-icon--active'),
    document.body.classList.toggle('no-scroll');
};