window.onload = function () {
    setmarginimage();
    setResponseImage();
    $(".se-pre-con").hide();
}
window.onresize = function () {
    setmarginimage();
    setResponseImage();
    // $(".se-pre-con").hide();
}

function setResponseImage(){
    var width = $(window).width();
    if(width <= 640){

        $( ".img-rp-center" ).each(function( index ) {
            var delta = (width/2 - $(this).width()/2);
            $(this).css({'margin-left':delta,'max-width':'none'});
        });


    }
}
function setmarginimage(){
    var width = $(window).width();

    var height = $(window).height();
    //alert(width+"--"+height);
    var viewport_height = window.innerHeight;
    var margin_90 = 0;
    if(width <= 640){
        $('.img-responsive.is-cropped').css({'width':width*2,'margin-left':'-50%','max-width':'none'});
        $('.img-responsive.is-cropped-rituals').css({'width':640,'margin-left':'-50%','max-width':'none'});
        $('.img-rp-center-mobile').css({'width':width*2,'margin-left':'-50%','max-width':'none'});
    }else if(width > 640 && width<1400){
        var margin = 0-((1400-width)/2);

        if(width==768)
        {
            $('.bg-img-rp-l').css({'width':'1400px','margin-left':-298,'max-width':'none'});
            $('.bg-img-rp-l-ipad').css({'width':'1400px','margin-left':-394,'max-width':'none'});
            $('.bg-img-rp-l-full').css({'width':'1400px','margin-left':-142,'max-width':'none'});
            $('.bg-img-rp-r-full').css({'width':'1400px','margin-left':-142,'max-width':'none'});
            $('.bg-img-rp-c').css({'width':'1400px','margin-left':-304,'max-width':'none'});
            // $('.img-rp-center').css({'width':width*2,'margin-left':'-50%','max-width':'none'});
            $('.img-rp-center').css({'width':'100%','max-width':'none','margin-left':0});
            // $('.img-rp-center-mobile').css({'width':width*2,'margin-left':'-50%','max-width':'none'});
            $('.img-rp-center-mobile').css({'width':'100%','max-width':'none'});
            margin = 0-((1024-width)/2);
            $('.banner-520').css({'width':'1024px','margin-left':margin});
            $('.banner-380').css({'width':'1024px','margin-left':margin});
            $('.img-rp-center-ipad').css({'width':'1024px','margin-left':margin});
        }
        else if(width>=785 && width<=965){
            margin = 0-((1024-width)/2);
            $('.banner-380').css({'width':'1024px','margin-left':margin});
        }
        else{
            $('.bg-img-rp-l').css({'width':'1400px','margin-left':margin,'max-width':'none'});
            $('.bg-img-rp-c').css({'width':'1400px','margin-left':margin,'max-width':'none'});
            $('.img-rp-center').css({'width':'1400px','margin-left':margin,'max-width':'none'});
            $('.bg-img-rp-r').css({'width':'1400px','margin-left':margin,'max-width':'none'});
            $('.bg-img-rp-l-full').css({'width':'1400px','margin-left':margin,'max-width':'none'});
            $('.bg-img-rp-r-full').css({'width':'1400px','margin-left':margin,'max-width':'none'});

            // $('.img-rp-center-mobile').css({'width':width*2,'margin-left':'-50%','max-width':'none'});
        }

        // console.log(viewport_height+'===='+$('.banner-520').height()+'====='+viewport_height*67/100);
        if(viewport_height>650&&$('.banner-520').height() > viewport_height*67/100){
            var height_67 = $('.banner-520').height() - viewport_height*67/100;
            $('.banner-520').css({'margin-bottom':-height_67});
        }
        if(viewport_height>380&&$('.banner-380').height() > viewport_height*57/100){
            var height_57 = $('.banner-380').height() - viewport_height*57/100;
            $('.banner-380').css({'margin-bottom':-height_57});
        }
        var height_90 = $('.banner-770').height();
        if(viewport_height<height_90 && viewport_height > 650)
            margin_90 = height_90 - viewport_height;
        $('.banner-770').css({'margin-top':-margin_90});
    }
    else
    {
        $('.bg-img-rp-l').css({'width':'100%','margin-left':margin,'max-width':'none'});
        $('.bg-img-rp-c').css({'width':'100%','margin-left':margin,'max-width':'none'});
        $('.img-rp-center').css({'width':'100%','margin-left':0,'max-width':'none'});
        $('.bg-img-rp-l-full').css({'width':'100%','margin-left':margin,'max-width':'none'});
        $('.bg-img-rp-r-full').css({'width':'100%','margin-left':margin,'max-width':'none'});
        if(viewport_height>750&&$('.banner-520').height() > viewport_height*67/100){
            var height_67 = $('.banner-520').height() - viewport_height*67/100;
            $('.banner-520').css({'margin-top':-height_67});
        }
        if(viewport_height>380&&$('.banner-380').height() > viewport_height*57/100){
            var height_57 = $('.banner-380').height() - viewport_height*57/100;
            $('.banner-380').css({'margin-top':-height_57});
        }
        var height_90 = $('.banner-770').height();
        if(viewport_height < height_90 && viewport_height > 650)
            margin_90 = height_90 - viewport_height;
        $('.banner-770').css({'margin-top':-margin_90});
    }
}
