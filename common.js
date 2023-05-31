$(function() {

    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");

        if($(this).hasClass('is-active')){
            $('.mnu-top').slideDown(300);
        }else{
            $('.mnu-top').slideUp(300);
        }
        
    });
    
});