$(document).ready(function () {


    //-- MENU 動態 --
    $('.hamburger').click(function (e) { 

       var tl = gsap.timeline();

       if($(this).hasClass('is-active')){
        $(this).removeClass('is-active');
        tl.to($('.menu_box .list_box'), 1, {left: '100%'});
       }
       else{
        $(this).addClass('is-active');

        tl.to($('.menu_box .list_box'), 1, {left: 0});
        $.each($('.menu_box .list_box a.ch_text'), function (index, valueOfElement) { 
            let delay_num= index==0 ? 0.6:0.2;
            tl.from($(this), 0.8, {y:20, opacity:0}, `<${delay_num}`);
        });
       }
    });
    //-- MENU 動態 END --
});