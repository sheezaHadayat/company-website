// JavaScript code to initialize the Owl Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        loop: true,
        margin: 10,
      

        items: 3,
        autoplay: true,
        autoplayTimeout: 4000, // Change slide every 4 seconds
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});