'use strict';

$(function() {
    var ww = $(window).width(),
    mm = 0;
    ww = $(window).width();
    mm = ww < 575 ? 120 : 0;
    $('.slider-container').slick({
        infinite: false,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4100,
        centerMode: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    $('.slider-illustration').slick({
        infinite: false,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4100,
        centerMode: false,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        vertical: true,
        verticalSwiping: true,
    });


    $("#mobile-menu").jqueryAccordionMenu({ clickEffect: false });

    $(".menu-opener").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(".nav-mobile").removeClass("active");

            if ( $("#mobile-menu .submenu").css("display") === "block") {
                $("#mobile-menu .submenu")
                    .parent()
                    .find("a")
                    .removeClass("submenu-indicator-minus");
                $("#mobile-menu .submenu").slideUp(300);

            }
        } else {
            $(this).addClass("active");
            $(".nav-mobile").addClass("active");
            $('#mobile-menu ul').css('display', 'block');
        }
    });

    
   
});