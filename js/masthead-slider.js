$(document).ready(function() {
    $("#masthead-slider").swiperight(function() {
        if($(window).width()<640)
            $(this).carousel('prev');
    });
    $("#masthead-slider").swipeleft(function() {
        if($(window).width()<640)
            $(this).carousel('next');
    });
});
