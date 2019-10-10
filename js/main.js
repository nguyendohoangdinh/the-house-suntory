var is_opened = false;
// var _check_load_url = true;
$( document ).ready(function() {
    // when resize page load again please note for any new page
    // window.onresize = function () {
    //   var load = true;
    //   var pages_notload = ['contact-us'];
    //   $.each( pages_notload, function( key, value ) {
    //     if(window.location.href.indexOf(value) != -1)
    //       load = false;
    //   });

    //   if(typeof getCookie('check-age') == 'undefined')
    //     load = false;

    //   if($(window).width()<767)
    //     load = false;
    //   location.reload();
    // }
    // setInterval(function(){
    //     var country = getCookie('country');
    //     var url_check = "/en/"+country;
    //     if(window.location.href.indexOf(url_check) == -1 && typeof country != 'undefined'){
    //       window.location.href = window.location.origin+url_check;
    //     }
    // }, 10000);
    $(window).on('scroll',function(){
        if($(this).scrollTop() >=60){
            $('.nav-second').addClass('fixed');
        }else{
            $('.nav-second').removeClass('fixed');
        }
    });
    if($(window).width()<=767){
        $('.sub-memu-mobile').on('hide.bs.collapse', function () {

            var heading = $( this ).prev(0).attr('id'); //console.log(heading);
            //$('#'+ heading).find('a').removeAttr('href');
            $('#'+ heading).find('span').removeClass('animate');
            if (!is_opened){
                $("#menu-collapse").animate({
                    top: "30px",
                }, 300);
            } else {
                is_opened = false;
            }
        })

        $('.sub-memu-mobile').on('show.bs.collapse', function () {
            var heading = $( this ).prev(0).attr('id');
            //$('#'+ heading).find('a').removeAttr('href');

            $('#'+ heading).find('span').addClass('animate');
            $("#menu-collapse").animate({
                top: "0px",
            }, 300);
            is_opened = $('#menu-collapse').find('.collapse.in').length > 0 && !$(this).is($('#menu-collapse').find('.collapse.in').first())
            $('#menu-collapse').find('.collapse.in').collapse('hide');
            $('body').css('overflow', 'hidden');
        })
    }

    $('#slideshow-home').bcSwipe({ threshold: 50 });

    // popup modal
    var clicked_obj = undefined;
    var pos_top = -1;
    $('.sun-btn-lg, .tab-pane img').on('click',function() {
        clicked_obj = $(this);
        var with_windows = $(window).width();
        var _this = $(this);
        var _id = _this.data('target');
        var _parent = _this.closest('.tab-pane');
        var _off_parent = _parent.offset();
        eTop = 0;
        if(typeof _off_parent != "undefined")
            eTop = _off_parent.top;
        var delta_height = 64;
        if (_id == '#myModals-1'){
            delta_height = 35;
        }
        else if (_id == '#myModals-3'){
            delta_height = 75;
        }
        else if (_id == '#myModals-2') {
            delta_height = 105;
        } else if (_id == '#myModals-4') {
            delta_height = 105;
        } else if (_id == '#myModals-5') {
            delta_height = 125;
        } else if ($(_id).hasClass('product-popup-detail')){
            delta_height = 65;
        } else if ($(_id).hasClass('popup-how-to')){
            delta_height = 75;
        }


        if (with_windows < 768 && _id != '' && _id != undefined){
            $(_id).find('.close-div').fadeOut();
            $(_id).find('.modal-body ').hide();

            pos_top = eTop - $(window).scrollTop() - delta_height;
            $(_id).show()
                .css({top: pos_top})
                .animate({top:0}, 500, function() {
                    $(_id).find('.close-div').fadeIn();
                    $(_id).find('.modal-body').fadeIn();
                });
        }
    });

    $('.close-div .close').on('click', function() {
        $('.close-div').fadeOut();
        $(this).closest('.view-mobile')
            .css({top: 0})
            .animate({top:pos_top}, 300, function(){
                $(this).closest('.view-mobile').fadeOut();
            });

        $(this).closest('.view-mobile').delay(100).fadeOut('slow');
        setTimeout(function(){
            $(this).closest('.view-mobile').modal("hide");
        }, 200);
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    });

    $(".modal").on('hidden.bs.modal', function (event) {
        if (clicked_obj != undefined){
            clicked_obj.trigger('click');
        }
    });



    var itemDurVal = $(".carousel").data("duration"); /*get data-duration value of my carousel */
    $.fn.carousel.Constructor.TRANSITION_DURATION = itemDurVal;
    $(".carousel-inner .item").css({
        '-webkit-transition-duration': itemDurVal + 'ms',
        '-moz-transition-duration': itemDurVal + 'ms',
        'transition-duration': itemDurVal + 'ms'
    });


    $('.export-more-sku-list').addClass('owl-carousel owl-theme');
    // $('.export-more-sku-list').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     // responsive:{
    //     //     0:{ items:1 },
    //     //     320:{ items:3 },
    //     //     768:{ items:5 }
    //     // }
    // });
    $('.flipper-prev.small').addClass("disible_flipper")
    $('.flipper-prev.small').click(function(){
        $('.export-more-sku-list').trigger('prev.owl');
        $('.best-enjoyed-list').trigger('prev.owl');
        $('.flipper-next.small').removeClass("disible_flipper");
        if($('.owl-item:first').hasClass("active")){
            $('.flipper-prev.small').addClass("disible_flipper");
        }
    });
    $('.flipper-next.small').click(function(){
        $('.export-more-sku-list').trigger('next.owl');
        $('.best-enjoyed-list').trigger('next.owl');
        $('.flipper-prev.small').removeClass("disible_flipper");
        if($('.owl-item:last').hasClass("active")){
            $('.flipper-next.small').addClass("disible_flipper");
        }
    });

    $('.best-enjoyed .best-enjoyed-list').addClass('owl-carousel owl-theme');
    $('.best-enjoyed-list').owlCarousel({
        // loop: true,
        margin: 10,
        responsive: {
            0: { items: 1 },
            768: { items: 3 },
            1000: { items: 3 }
        }
    });
    // Main Navigation Effect Js
    $('.toggle-menu').hover(function() {
        $(this).children('.sub-hover').stop().slideToggle();
        //$(this).children('.sub-hover').stop().show();
    });

    //JS FOR RESPONSIVE SCREEN
    var with_windows = $(window).width();

    if(with_windows <= 767){
        var current_pos = $('body').scrollTop();
        /* Js header mobile */
        $('#menu-collapse').hide();
        $('.navbar-toggle').on('click', function(e){
            if($(this).hasClass('oppenned') )
            {
                $('#menu-collapse').slideToggle(); //console.log('menu close');
                $('body').css({'overflow-y':''});
                $('html').css({'overflow-y':''});
                $('body').scrollTop(current_pos);
                $('.navbar-header .logo-left').attr('href', '/where-to-find');

            }else {
                current_pos = $('body').scrollTop();
                $('#menu-collapse').fadeIn(); //console.log('menu open');
                $('body').css({'overflow-y':'hidden'});
                $('html').css({'overflow-y':'hidden'});
                $('.sub-memu-mobile').addClass('collapse');
                $('.navbar-header .logo-left').removeAttr("href");
            }
        });

        /* End header mobile */

        /* Collapse footer menu */
        $('.footer-top ul').addClass('collapse');

        $('.footer-top .ft-togle').on('hide.bs.collapse', function () {
            var heading = $( this ).prev(0).attr('id');
            $('#'+ heading).find('span').removeClass('animate');
        })
        $('.footer-top .ft-togle').on('show.bs.collapse', function () {
            var heading = $( this ).prev(0).attr('id');

            $('#'+ heading).find('span').addClass('animate');
            $('.footer-topmenu').find('.collapse.in').collapse('hide');
        })
        /* End Collapse footer menu */

        $('.export-more .export-more-list').addClass('owl-carousel owl-theme');
        $('.export-more-list, .img-popup-list').owlCarousel({
            // loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{ items:1 },
                768:{ items:3 },
                1000:{ items:3 },
            }
        });

        $('.best-enjoyed .best-enjoyed-list').addClass('owl-carousel owl-theme');
        var $best_owl = $('.best-enjoyed-list').owlCarousel({
            // loop: true,
            margin: 10,
            nav:true,
            responsive: {
                0: { items: 1 },
                768: { items: 3 },
                1000: { items: 3 }
            }
        });

        $('.spring-caro .caro-container').addClass('owl-carousel owl-theme export-more-list');
        $('.spring-caro .caro-container').owlCarousel({
            // loop: true,
            margin: 10,
            nav:true,
            responsive: {
                0: { items: 1 },
                768: { items: 1 },
            }
        });

    }
    //End script on Mobile

    // Responsive Tabled
    if( (with_windows >= 768) && (with_windows <= 1024) ) {
        //$('body').css('overflow','auto');

        $('#menu-collapse').hide();
        $('.navbar-toggle').on('click', function(e){
            if($(this).hasClass('oppenned') )
            {
                $('#menu-collapse').slideToggle(); //console.log('menu close');
                $('body').css('overflow', 'auto');
                $('.navbar-header .logo-left').attr('href', '/where-to-find');
                $('.marks').hide();
            }else {
                $('#menu-collapse').fadeIn(); //console.log('menu open');
                $('body').css('overflow', 'hidden');
                $('.navbar-header .logo-left').removeAttr("href");
                $('.marks').show();
            }
        });
        $('.marks').click(function(){
            $('#sun_menu_button').trigger( "click" );
        });

        $('#footer-topmenu h4').find('span').removeClass('fa-plus');
        $('#footer-topmenu h4').removeAttr( "data-toggle" );
    }

    if(with_windows <= 320){
        $('.g-recaptcha').children(":first").addClass('sun-captcha');
    }

    if(with_windows > 1024) {
        $('.footer-top .heading').removeAttr('data-toggle');
    }

    // $("a.youtube").YouTubePopUp({ autoplay: 1 });

    $(document).delegate('.navbar-toggle', 'click', function(event){
        $('#nav-top .navbar-header').addClass('oppenned');
        $(this).addClass('oppenned');
        $(this).addClass('close');
        $('.logo-center').addClass('open');
        $('.logo-left').removeClass('closed');
        $('.logo-left').addClass('open');
        event.stopPropagation();
    })
    $(document).delegate('.navbar-toggle.close', 'click', function(event){
        $('#nav-top .navbar-header').removeClass('oppenned');
        $(this).removeClass('oppenned');
        $(this).removeClass('close');
        $('.logo-center').removeClass('open');
        $('.logo-left').removeClass('open');
        $('.logo-left').addClass('closed');
        event.stopPropagation();
    });

    $('li.award-item a.btn-more').on('click', function(e){
        if ($(this)[0].innerText == "SHOW MORE"){
            desc_box = $(this).parent().parent().parent();
            autoHeight = desc_box.css('height', 'auto').height();
            desc_box.height(104);
            desc_box.animate({height:autoHeight},200);
            $(this)[0].innerText = "SHOW LESS";
        }
        else {
            $(this).parent().parent().parent().animate({height:104},200);
            $(this)[0].innerText = "SHOW MORE";
        }
    });

    $('div.heading-block .heading-inner').on('click', function(e){
        var thisblock = $(this).closest('div.heading-block').attr('rel'); //console.log(thisblock);
        if (! $('#'+thisblock).is(':visible')){  console.log(thisblock);
            $(this).find('span').addClass('animate');
        } else {
            $(this).find('span').removeClass('animate');
        }
        $('#'+thisblock).toggle(200);
    });


    //How enjoyed tab click
    $('.best-tab').hide();
    $('#best-1').show();
    $('#best-1 .owl-controls').hide();

    $('.rituals-how-to-enjoy #highball').on('click', function(e){
        $('#best-1').show();
        $('#best-2').hide(); $('#best-3').hide(); $('#best-4').hide(); $('#best-5').hide(); $('#best-6').hide();
        $('#best-1 .owl-controls').hide();
    });
    $('.rituals-how-to-enjoy #neat').on('click', function(e){
        $('#best-2').show();
        $('#best-1').hide(); $('#best-3').hide(); $('#best-4').hide(); $('#best-5').hide(); $('#best-6').hide();
        $('.owl-dot:nth-child(1)').trigger('click');
    });
    $('.rituals-how-to-enjoy #on-the-rocks').on('click', function(e){
        $('#best-3').show();
        $('#best-1').hide(); $('#best-2').hide(); $('#best-4').hide(); $('#best-5').hide(); $('#best-6').hide();
        $('.owl-dot:nth-child(1)').trigger('click');
    });
    $('.rituals-how-to-enjoy #half-rock').on('click', function(e){
        $('#best-4').show();
        $('#best-1').hide(); $('#best-2').hide(); $('#best-3').hide(); $('#best-5').hide(); $('#best-6').hide();
        $('.owl-dot:nth-child(1)').trigger('click');

    });
    $('.rituals-how-to-enjoy #whisky-water').on('click', function(e){
        $('#best-5').show();
        $('#best-1').hide(); $('#best-2').hide(); $('#best-3').hide(); $('#best-4').hide(); $('#best-6').hide();
        $('#best-5 .owl-controls').hide();
        $('.owl-dot:nth-child(1)').trigger('click');
    });
    $('.rituals-how-to-enjoy #hot-whisky').on('click', function(e){
        $('#best-6').show();
        $('#best-1').hide(); $('#best-2').hide(); $('#best-3').hide(); $('#best-4').hide(); $('#best-5').hide();
        $('#best-6 .owl-controls').hide();
        $('.owl-dot:nth-child(1)').trigger('click');
    });

    //Enjoyed On mobile
    $('.rituals-how-to-enjoy #best-modal-0').on('click', function(e) {
        $('.popup-how-to #best1_mb').show();
        $('.popup-how-to #best2_mb').hide();
        $('.popup-how-to #best3_mb').hide();
        $('.popup-how-to #best4_mb').hide();
        $('.popup-how-to #best5_mb').hide();
        $('.popup-how-to #best6_mb').hide();
    });

    $('.rituals-how-to-enjoy #best-modal-1').on('click', function(e) {
        $('.popup-how-to #best2_mb').show();
        $('.popup-how-to #best1_mb').hide();
        $('.popup-how-to #best3_mb').hide();
        $('.popup-how-to #best4_mb').hide();
        $('.popup-how-to #best5_mb').hide();
        $('.popup-how-to #best6_mb').hide();
    });

    $('.rituals-how-to-enjoy #best-modal-2').on('click', function(e) {
        $('.popup-how-to #best3_mb').show();
        $('.popup-how-to #best1_mb').hide();
        $('.popup-how-to #best2_mb').hide();
        $('.popup-how-to #best4_mb').hide();
        $('.popup-how-to #best5_mb').hide();
        $('.popup-how-to #best6_mb').hide();
    });

    $('.rituals-how-to-enjoy #best-modal-3').on('click', function(e) {
        $('.popup-how-to #best4_mb').show();
        $('.popup-how-to #best1_mb').hide();
        $('.popup-how-to #best2_mb').hide();
        $('.popup-how-to #best3_mb').hide();
        $('.popup-how-to #best5_mb').hide();
        $('.popup-how-to #best6_mb').hide();
    });

    $('.rituals-how-to-enjoy #best-modal-4').on('click', function(e) {
        $('.popup-how-to #best5_mb').show();
        $('.popup-how-to #best1_mb').hide();
        $('.popup-how-to #best2_mb').hide();
        $('.popup-how-to #best3_mb').hide();
        $('.popup-how-to #best4_mb').hide();
        $('.popup-how-to #best6_mb').hide();
    });

    $('.rituals-how-to-enjoy #best-modal-5').on('click', function(e) {
        $('.popup-how-to #best6_mb').show();
        $('.popup-how-to #best1_mb').hide();
        $('.popup-how-to #best2_mb').hide();
        $('.popup-how-to #best3_mb').hide();
        $('.popup-how-to #best4_mb').hide();
        $('.popup-how-to #best5_mb').hide();
    });
    //End How enjoyed


    $(window).scroll(function () {
        if(typeof($('.bg-banner-top').position()) != "undefined" && $(window).width()>768){
            if($(document).scrollTop()<=$('.bg-banner-top').position().top)
                $('#nav-top').css({'background-color':'rgba(255, 255, 255, 0.8)'});
            else
                $('#nav-top').css({'background-color':'#fff'});
        }
        else if(typeof($('.bg-banner-top').position()) == "undefined" && $(window).width()>768){
            $('#nav-top').css({'background-color':'#fff'});
        }
    });

    // Resize screen
    $( window ).resize(function() {

        if( $(window).width() <= 767 ) {
            $('#menu-collapse').hide();

            $('.navbar-toggle').on('click', function(e){
                if($(this).hasClass('oppenned') )
                {
                    $('#menu-collapse').slideUp();
                }else {
                    $('#menu-collapse').fadeIn();
                    $('.sub-memu-mobile').addClass('collapse');
                }
            });

            // $('.tab-philosophy ul.nav-pills li').css({'float':'none'});
        }

        if( $(window).width() > 768 && $(window).width() <= 1024  ) {
            $('#menu-collapse').hide();

            $('.navbar-toggle').on('click', function(e){
                if($(this).hasClass('close') )
                {
                    $('#menu-collapse').slideUp();
                }else {
                    $('#menu-collapse').fadeIn();
                }
            });
        }

        if( $(window).width() > 1024) {
            $('#menu-collapse').show();
        }

    });

    if( $(window).width() > screen.width ) {
        //alert('z - not full width: window width is: ' + $(window).width() + ' - screen width is: ' +  screen.width);
        // $('.bg-banner-top').css({'bottom':'-1px'});
    }
    //alert(screen.width);

});

function checkMobile(){
    if($(window).width()>768)
        return false;
    return true;
}
function generalSlug(name){
    return name.replace(' ','-');
}

function getCookie(c_name) {
    //return localStorage.getItem(c_name);
    return $.cookie(c_name);
}

function setCookie(c_name, value) {
    return localStorage.setItem(c_name, value);

    //document.cookie = c_name + "=" + value + ";";
}

function get_url(c_name) {
    return localStorage.getItem(c_name);
}
function set_url(c_name, value) {
    //console.log('set url');
    window.localStorage.setItem(c_name, value);
}

function none(){};
