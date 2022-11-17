$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });



  var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,/*Чтоб зациклить */
    margin: 30,

    startPosition: 1, /*какой элемент будет активный*/
    items: 3,
});

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