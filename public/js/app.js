(function($) {
    $(document).ready(function() {
        // Transition effect for navbar
        $(window).scroll(function() {
            // checks if window is scrolled more than 500px, adds/removes solid class
            if($(this).scrollTop() > 500) {
                $('.navbar').addClass('solid');
            } else {
                $('.navbar').removeClass('solid');
            }
        });
    });
    $('a.smooth-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top + 20
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    })
    $('.jumbotron').paroller();

})(jQuery); // End of use strict
