/*global $,window,*/


$(function () {
    
    "use strict";
    
        // Customize the Slider Height 
        // use inner or outer not just height to iclude padding , margin and border
       
    var topH = $(".top-bar").outerHeight(),
        navH = $(".navbar").outerHeight(),
        windowH = $(window).height();
    
    $(".slider, .carousel-item").height(windowH - (topH + navH));
    
    // Customize the Shuffle images section 
    
    $(".featured-work ul li").click(function () {
         
        $(this).addClass("active").siblings().removeClass("active");
        
        if ($(this).data("value") === "all") {
            
            $(".featured-work .shuffle .row .col-md").css("opacity", "1");
            
        } else {
            
            $(".featured-work .shuffle .row .col-md").css("opacity", ".08");
            
            $("." + ($(this).data("value"))).css("opacity", "1");
            
        }
 
    });
    
    
    // Showing Back to top Button $(this).data("value")
    
    $(window).scroll(function () {
        
        if (($(this).scrollTop()) > 300) {
        
            $(".button").fadeIn();
        
        } else {
                     
            $(".button").fadeOut();
        }
    });
    
    $(".button").click(function () {
        
        $("html, body").animate({
            
            scrollTop : "0"
        }, 1500);
    });
    
});