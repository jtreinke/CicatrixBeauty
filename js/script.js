var winHeight = $(window).innerHeight(); // setting winHeight to be the variable for browser height
	
$(document).ready(function() {

    $(".panel").height(winHeight);
    $("body").height(winHeight*$(".panel").length*0.5); // sets height of body based on number of divs on the page


    // Jenifer, add all new code here, please!


});

window.addEventListener('resize', function (event) {
    $(".panel").height($(window).innerHeight()); // resizes each panel for responsiveness
});

$(window).on('scroll',function(){
    $(".panel_left").css('bottom',$(window).scrollTop()*-1); // enables reverse scrolling of left side of the screen
});
	