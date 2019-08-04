$(document).ready(function() {


    $(".nav a").mPageScroll2id({
        offset : 200
    });

    $(".go__top").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.go__top').fadeIn(400);
        } else {
            $('.go__top').fadeOut(400);
        }
    });
    
    $('.go__top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 1500);
        return false;
    });

});

