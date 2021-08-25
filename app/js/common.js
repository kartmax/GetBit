// $(function() {
jQuery(function($) {
    "use strict";

	// Custom JS

    //menu
    $('#block-menu').append('<div class="mob-btn"><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div><div class="icon-bar"></div></div>');
    $('.mob-btn').click(function () {
        $(this).toggleClass('active-mob-btn');
        $('.menu-head').slideToggle(250);
    });

    $('#block-menu ul').parent('li').addClass('has-submenu');
    $('#block-menu li ul').addClass('submenu');

    $('#block-menu .has-submenu').hover(function () {
       $(this).children('.submenu').slideToggle(100);
    });

    //FormStyler
    $('select').styler();

    // for placeholder
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){
            $(this).attr('placeholder', placeholder);
        });
    });

    //slider
    $(".owl-carousel").owlCarousel({
        loop:true,
        items:1
    });

    //tabs
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
        $('.wow').removeClass('wow')
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
            .addClass('wow')
            new WOW().init()
    });

    $('.tabs__content, .post-card, .top-item')
        .addClass('wow fadeIn')
        .attr('data-wow-duration', '1s')
        .attr('data-wow-offset', '100')

    //popup
    $(".add-exchange").magnificPopup();
    

    // wow
    new WOW ().init();


    //-----for scroll to top------
    // hide #back-top first
    $(".scrolltop").hide();

    // fade in #back-top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('.scrolltop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    //-----END for scroll to top------

});
