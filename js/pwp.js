/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

 // jquery for circle effects



$( document ).ready(function() {
        
    
// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
     if ($(".navbar").offset().top > $("#about").offset().top-2) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jquery for effects in skills

$(function(){
    var iseffectsViewed=false;

    $(window).scroll(function() {   
       if(isScrolledIntoView($('#skills')) && iseffectsViewed==false){
        $('#myStathalf').circliful();
        $('#myStat').circliful();
        $('#myStathalf2').circliful();
        $('#myStat2').circliful();
        $('#myStat3').circliful();
        $('#myStathalf3').circliful();
        iseffectsViewed=true;}
    });

    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height() - 20; //the 20 is the amount pixels from the bottom to consider the element in view
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom < docViewBottom) && (elemTop > docViewTop));
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


