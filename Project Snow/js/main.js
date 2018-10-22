$(".first ").click(function() {
    $('html,body').animate({
            scrollTop: $(".part2 ").offset().top
        },
        'slow');
});


$(document).ready(function() {
    $("#news-slider2").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsMobile: [600, 1],
        pagination: true,
        navigationText: false,
        autoPlay: true
    });
});