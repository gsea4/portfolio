$(document).ready(function(){
    
    //Check which module to display for project section
    //chkProjSec();
    
    $(window).resize(function(){
        //chkProjSec();
    });
    
    
    $('a[href="#project"], a[href="#contact"]').on("click", function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
        return false;
        
        
    });
    
});


function chkProjSec(){
    if($(window).width() < 768){
            $(".featurette").css("display", "none");
            $(".featurette-divider").css("display", "none");
            $("#myCarousel").css("display", "block");
        }else{
            $(".featurette").css("display", "block");
            $(".featurette-divider").css("display", "block");
            $("#myCarousel").css("display", "none");
        }
}