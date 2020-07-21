$(document).ready(function() {

    $("header").height($(".gr-tg-top-head").outerHeight());

    $('.gr-tg-humbarger').hover(function(){
        $(this).addClass('active');
        $('.gr-tg-menuclick,.gr-tg-bg-op-active').addClass('active');
    });

    $('.gr-tg-bg-op-active').hover(function(){
        $(this).removeClass('active');
        $('.gr-tg-menuclick,.gr-tg-humbarger').removeClass('active');
    });

    $('.gr-tg-tab > ul > li').click(function(){
        $('.gr-tg-tab > ul > li').removeClass('active');
        $(this).addClass('active');
    });

    var topBtn = $('.gr-tg-scroll'); 
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

});