/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 // jquery for circle effects



$( document ).ready(function() {
        $('#myStathalf').circliful();
        $('#myStat').circliful();
        $('#myStathalf2').circliful();
        $('#myStat2').circliful();
    $('#myStat3').circliful();
    $('#myStat4').circliful();
    $('#myStathalf3').circliful();
    
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
     if ($(".navbar").offset().top > $("#about").offset().top-2) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        // $('.navbar-collapse').toggle();
        event.preventDefault();
    });
});
});


