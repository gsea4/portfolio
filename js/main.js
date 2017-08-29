$(document).ready(function(){
    
    $(window).resize(function(){
        if($(window).width() < 768){
            $(".featurette").css("display", "none");
            $(".featurette-divider").css("display", "none");
            $("#myCarousel").css("display", "block");
        }else{
            $(".featurette").css("display", "block");
            $(".featurette-divider").css("display", "block");
            $("#myCarousel").css("display", "none");
        }
    });
    
    
    
    
});