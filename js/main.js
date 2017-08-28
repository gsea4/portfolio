$(document).ready(function(){
    
    $(window).resize(function(){
        if($(window).width() < 768){
            $(".featurette").css("display", "none");
            $("#myCarousel").css("display", "block");
        }else{
            $(".featurette").css("display", "block");
            $("#myCarousel").css("display", "none");
        }
    });
    
    
    
    
});