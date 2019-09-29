jQuery(document).ready(function($) {

    $('.level-bar-inner-complete').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner-complete').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

       });
    });

jQuery(document).ready(function($) {

    $('.level-bar-inner-lapsed').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner-lapsed').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

      });

    });

jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

       $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });



});
