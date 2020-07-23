$(document).ready(function() {
    
    $("header").height($(".gr-tg-top-head").outerHeight());

    
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

    if($(document).width()<768){
        $(".all_item01 .item").each(function(i){
            if($(".div_hover",this).find(".txt").html() != null){
                $div_hove = $(".div_hover",this).html();
                $(".div_hover",this).remove();
                $(this).before("<div class='div_hover'>"+$div_hove+"</div>");
            }else{
                $(".div_hover",this).remove();
            }
        })
    }


});