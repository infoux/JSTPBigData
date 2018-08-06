$(document).ready(function() {

    $('.menu ul').hide();

    $('.menu a').on({
        mouseover: function() {
            $('.menu ul').stop().slideDown(200);
        },
        mouseout: function() {
            $('.menu ul').stop().slideUp(200);
        }
    });


});