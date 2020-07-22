$(document).ready(function() {
    
    $("header").height($(".gr-tg-top-head").outerHeight());

    
    $('.gr-tg-tab > ul > li').click(function(){
        $('.gr-tg-tab > ul > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.gr-tg-humbarger').click(function(){
        $(this).toggleClass('active');
        $('.gr-tg-menuclick,.gr-tg-bg-op-active').toggleClass('active');
    }); 
   

    $('.gr-tg-bg-op-active').click(function(){
        $(this).removeClass('active');
        $('.gr-tg-menuclick,.gr-tg-humbarger').removeClass('active');
    });

    var topBtn = $('.gr-tg-scroll'); 
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

});