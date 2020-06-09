$(function(){
    var header = $('.fixed-top');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        if(scroll>=500){
            header.addClass('nav-scrolled')
        }
        else{
            header.removeClass('nav-scrolled')
        }
    });
});