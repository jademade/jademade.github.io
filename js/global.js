/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () {
    
    $("a").on('touchstart click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    
    $(".burger").on('touchstart tap', function () {
        $(".burger .burgerline:nth-of-type(1)").toggleClass("burgerline--1");
        $(".burger .burgerline:nth-of-type(2)").toggleClass("burgerline--2");
        $(".burger .burgerline:nth-of-type(3)").toggleClass("burgerline--3");
        
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
    });
});