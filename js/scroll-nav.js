$( document ).ready(function() {
    var with_windows = $(window).width();
    if( with_windows <= 767 ) {
        $('#rootwizard').addClass('touch-screen');
        $('#rootwizard1').addClass('touch-screen');
        showing_nav(0);
    }


    var regHeight;
    window.onscroll = function() {
        if(regHeight < window.innerHeight){
            showing_nav(0);
        }else{
            showing_nav(60);
        }

    };
    // window.scrollTo(0,1);
    regHeight = window.innerHeight;
});

function showing_nav(bottombar){

    var with_windows = $(window).width();
    if( with_windows <= 767 ){
        var position_scroll = $(window).scrollTop();

        var window_height = $(window).height() - 60 - bottombar;

        if(typeof($('#rootwizard').offset()) != "undefined"){
            var top = $('#rootwizard').offset().top - 65;
            var height_img = $('#rootwizard .tab-layout.active .row-image a img.visible-xs').height()/2;
            var bottom = top + $('#rootwizard').outerHeight()/2 + height_img;
            if(position_scroll>=top && position_scroll<=bottom){
                $('#wizard-nav').css({'top':window_height/2+15});
                $('#wizard-nav').fadeIn();
            }
            else
                $('#wizard-nav').hide();
        }

        if(typeof($('#rootwizard1').offset()) != "undefined"){
            var top = $('#rootwizard1').offset().top - 65;
            var height_img = $('#rootwizard1 .tab-layout.active .row-image a img.visible-xs').height()/2;
            var bottom = top + $('#rootwizard1').outerHeight()/2 + height_img;
            if(position_scroll>=top && position_scroll<=bottom){
                $('#wizard-nav-1').css({'top':window_height/2+15});
                $('#wizard-nav-1').fadeIn();
            }
            else
                $('#wizard-nav-1').hide();
        }
    }
}
