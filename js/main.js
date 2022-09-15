$(document).ready(function () {


    //-- MENU 動態 --
    $('.hamburger').click(function (e) { 

       var tl = gsap.timeline();

       if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        tl.to($('.menu_box .list_box'), 0.5, {left: '100%'});
       }
       else{
        $(this).addClass('is-active');

        tl.to($('.menu_box .list_box'), 0.5, {left: 0});
        
       }
    });
    //-- MENU 動態 END --
});