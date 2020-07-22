$(document).ready(function() {
    var $width_body = $("body").width();

    if($height_body < 951 ) {
        $('.gr-tg-humbarger').hover(function(){
            $(this).addClass('active');
            $('.gr-tg-menuclick,.gr-tg-bg-op-active').addClass('active');
        });

        $('.gr-tg-bg-op-active').hover(function(){
            $(this).removeClass('active');
            $('.gr-tg-menuclick,.gr-tg-humbarger').removeClass('active');
        });
    }

    $("header").height($(".gr-tg-top-head").outerHeight());

    
    $('.gr-tg-tab > ul > li').click(function(){
        $('.gr-tg-tab > ul > li').removeClass('active');
        $(this).addClass('active');
    });

    $('.gr-tg-humbarger').click(function(){
        console.log('123');
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