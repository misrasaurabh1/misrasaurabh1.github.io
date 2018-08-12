jQuery(window).on("load resize scroll",function(e){
    "use strict";
});

(function($) {

    $('.photoset-grid').photosetGrid({
        highresLinks: true,
        gutter: '10px',
        lowresWidth: 300,
        rel: 'gallery-01',

        onInit: function(){},
        onComplete: function()
        {
            $('.photoset-grid').css({
                'visibility': 'visible'
            });
        }
    });

    $('.photoset-grid').magnificPopup({
        delegate: 'a',
        type: 'image',

        image: {
            titleSrc: 'title'
        },

        gallery: {
            enabled: true
        }

    });

    $('.gallery-item a').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image'
    });


    // Sidebar Toggle for left menu nav
    $("#menu-toggle").on('click',function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled clickmenuNav");
    });

    // START SIDE MENU
    $('#sb-trigger').click(function(){
        $('.sb-right').removeClass('hide').toggle();
    });

    // MENU TRANSITION ICONS
    $.each($('.sidebar-nav .drilldown-container .drilldown-root li').has('ul.drilldown-sub'), function() {
        $(this).find('a').first().prepend('<span><i class="fa fa-angle-right"></i></span>');
    });

    $.each($('.drilldown-container-alt > nav > ul.style-2 > li').has('ul.sub-menu-child'), function() {
        $(this).find('a').first().after('<i class="fa-margin fa fa-angle-down"></i>');
    });

    // MENUS
    $('#sidebar-wrapper .drilldown').drilldown();

    $('.drilldown-container-alt > nav > ul.style-2 > li > a').click(function(e){
        var childSize = $(this.parentNode.children).length;

        if(childSize > 1) {
            e.preventDefault();
            $(this).parent("li").find('ul.sub-menu-child').slideToggle();
        }
    });

    $('.drilldown-container-alt > nav > ul.style-2 > li > ul > li > a').click(function(){
        $(this).parent().find('.grandchild-menu').slideToggle();
    });

    // Sidebar toggle for right widget area

    // OPEN
    $('#widget-icon').click(function(e){
        e.preventDefault();
        console.log("open...");
        $('.toggled').removeClass();
        $('#panel-container').toggle();
        $('body').toggleClass("rts-open");
        $('#widget-icon').hide();
        $('.slideout-menu-close-btn').show();
    });

    // Collapse
    $('.slideout-menu-close-btn').click(function(e){
        e.preventDefault();
        $('#panel-container').toggle();
        $('body').removeClass("rts-open");
        $('.slideout-menu-close-btn').hide();
        $('#widget-icon').show();
    });

})(jQuery);
