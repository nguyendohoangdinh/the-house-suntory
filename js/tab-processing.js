$( document ).ready(function() {
    //Tab action
    realclick = true;
    if($("#rootwizard").length){
        $('#rootwizard').bootstrapWizard({
            onShow: function(tab, nav, obj){
                var with_windows = $(window).width();
                $('#rootwizard .tab-content .tab-pane').each(function(index, el){
                    if (with_windows <= 767 && $(el).find('.btn-show-popup').length == 1 && $(el).find('.btn-open-link').length == 1){
                        $(el).find('.btn-open-link').hide();
                    }
                })

                if (tab.attr('id') == 'location'){
                    initMap();
                }
            },
            onTabClick: function(tab, nav, obj, clickedIndex, clickedTab) {
                var tabsize = parseInt($('#rootwizard .nav-pills a').size()); //console.log(tabsize);
                reset_center(clickedTab, '#rootwizard .inner', tabsize);
                var id = clickedTab.attr('id');
                if (realclick) {
                    history.pushState(null, '#'+id,  '#'+id);
                }

                if (clickedTab.attr('id') == 'location'){
                    setTimeout(function(){ initMap(); }, 500);
                }
                if (clickedTab.attr('id') == 'follow-toki'){
                    if ($('.crt-post-c').length == undefined || $('.crt-post-c').length == 0){
                        var widget = new Curator.Carousel({
                            container:'#curator-feed-default',
                            // feedId:'6f8a382c-afe8-4596-87a7-bedc13de',
                            feedId: '5a413f02-5b19-4aa5-81a6-7b500da2fec3',
                            minWidth:415,
                            // postsPerPage:40,
                            carousel:{
                                autoPlay:false,    // carousel will auto rotate
                                autoLoad:true,    // carusel will auto load new when it reaches the end of the current page of posts
                                minWidth:415,     // the minimum width of the post, used when calculating
                                // infinite:true
                            }
                        });
                        // $('.crt-panel-prev crt-panel-arrow').on('click', function(){
                        //   console.log('pre');
                        // });
                    }
                }
            }
        });
    }

    if($("#rootwizard1").length){
        $('#rootwizard1').bootstrapWizard({
            onShow: function(){
                var with_windows = $(window).width();
                $('#rootwizard1 .tab-content .tab-pane').each(function(index, el){
                    if (with_windows <= 767 && $(el).find('.btn-show-popup').length == 1 && $(el).find('.btn-open-link').length == 1){
                        $(el).find('.btn-open-link').hide();
                    }
                })
            },
            onTabClick: function(tab, nav, obj, clickedIndex, clickedTab) {
                var tabsize1 = parseInt($('#rootwizard1 .nav-pills a').size());
                reset_center(clickedTab, '#rootwizard1 .inner', tabsize1);
            }
        });
    }

    if (location.hash!='') { // if has hash
        id = $(location.hash).attr('id');
        setTimeout(function(){ $('#'+id + ' a').trigger('click'); }, 10);
    }

    realclick = true;

    $(window).on('hashchange', function(e){ // triggered by browser, previous and next button
        var id ='';
        realclick = false;
        if (location.hash!='') { // if has hash
            id = $(location.hash).attr('id');
            $('#'+id + ' a').trigger('click');
        }
        else { // no hash = initial page
            id = $($('#rootwizard  li:first-child')[0]).attr('id');
            $('#'+id + ' a').trigger('click');
        }
        realclick = true;
    });

    //Popup video youtube
    // $(".youtube").YouTubeModal({autoplay:0, width:640, height:480});

    // Tab short and long
    var tabsize = parseInt($('#rootwizard .nav-pills a').size()); //console.log(tabsize);
    var tabsize1 = parseInt($('#rootwizard1 .nav-pills a').size()); //console.log(tabsize);
    var with_windows = $(window).width();
    if( with_windows <= 767 ) {
        // .tab-style .navbar .navbar-inner .container::after
        if ($('#rootwizard .tabs-2').length == 2) {
            // width_li = (with_windows - $($('#rootwizard .tabs-2')[1]).width() - $($('#rootwizard .tabs-2')[1]).width()) / 2;
            // padding_li = $($('#rootwizard .tabs-2')[1]).width() - $($('#rootwizard .tabs-2')[0]).width();
            var haft_width = with_windows/2;
            // if (width_li > 0){
            // $('#rootwizard ul li.tabs-2:first-child').css({'margin-left':width_li + padding_li +'px'});
            // alert(haft_width);
            $('#rootwizard ul li.tabs-2:first-child').css({'margin-left':haft_width - $($('#rootwizard .tabs-2')[0]).width()+'px'});
            $('#rootwizard ul li.tabs-2:first-child a').css({'padding-left':'20px'});
            $('#rootwizard ul li.tabs-2:first-child a').css({'padding-right': '20px'});
            if (haft_width < 170){
                $('#ice-ball').css({'margin-left': '36px'});
            }
            // }
            // else {
            //   $('#rootwizard ul li.tabs-2:first-child').css({'margin-left':48+'px'});
            //   $('#rootwizard ul li.tabs-2:first-child a').css({'padding-left': '20px'});
            //   $('#rootwizard ul li.tabs-2:first-child a').css({'padding-right': '20px'});
            //   $('#rootwizard ul li.tabs-2:last-child a').css({'padding-left': '5px'});
            //   $('#rootwizard ul li.tabs-2:last-child a').css({'padding-right': '5px'});
            // }
        }
    }
    if (with_windows <= 1023) {

        $("#rootwizard .nav-pills .active a").each(function( i ) {
            reset_css_li(this, '#rootwizard .nav-pills', tabsize);
        });
        $("#rootwizard1 .nav-pills .active a").each(function( i ) {
            reset_css_li(this, '#rootwizard1 .nav-pills', tabsize1);
        });

        $('#rootwizard .flipper-prev.previous, #rootwizard .flipper-next.next').on('click', function(e){
            setTimeout(function(e) {
                reset_center('#rootwizard .nav-pills .active', '#rootwizard .inner', tabsize);
            }, 10);
        })

        $('#rootwizard1 .flipper-prev.previous.item-1, #rootwizard1 .flipper-next.next.item-1').on('click', function(e){
            setTimeout(function() {
                reset_center('#rootwizard1 .nav-pills .active', '#rootwizard1 .inner', tabsize1);
            }, 10);
        })
    }

    function reset_css_li(element, root_el, tabsize){
        if(tabsize > 2 && $(window).width() <= 1023){
            var first_width = $(root_el).children('li:first-child').width();
            var last_width = $(root_el).children('li:last-child').width();
            var this_screen = $(window).width();  //console.log(this_screen);

            if(tabsize > 2 && $(window).width() <= 767 || tabsize >= 5 && $(root_el).parent().parent().parent().parent().parent().parent().hasClass('tablet-only') && $(window).width() > 767) {
                var margin_left = (this_screen-first_width)/2;
                var margin_right = (this_screen-last_width)/2;
                //only for tablet
                if ($(window).width() >= 768){
                    margin_left += 5;
                    margin_right -= 10;
                }
                $(root_el).children('li:first-child').css({'margin-left':margin_left+'px'});
                $(root_el).children('li:last-child').css({'margin-right':margin_right+'px'});
            }
        }
    }

    function reset_center(element, root_el, tabsize){
        if(tabsize > 2 && $(window).width() <= 1023) {
            var maxScrollLeft=$(root_el).scrollLeft('root_el').prop('scrollWidth') - $(root_el).width();
            var left = $(element).offset().left
            var width = $(root_el).width();

            var this_with = $(element).width();

            var diff = left - width/2 + this_with/2;
            if ($(window).width() >= 768){
                diff -= 10;
            }
            $(root_el).scrollLeft($(root_el).scrollLeft()+diff)
            return false;
        }
    }

    $(window).resize(function() {
        // if (window.RT) clearTimeout(window.RT);
        // window.RT = setTimeout(function()
        // {
        //   this.location.reload(false); /* false to get page from cache */
        // }, 100);
    });
})
