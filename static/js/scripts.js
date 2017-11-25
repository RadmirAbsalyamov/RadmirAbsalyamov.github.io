$(document).ready(function () {

    $('.submenu-articles-container').mouseover(function () {
        $('.submenu-articles-container_content').removeClass('hidden');
    });

    $('.submenu-articles-container').mouseout(function () {
        $('.submenu-articles-container_content').addClass('hidden');
    });

});