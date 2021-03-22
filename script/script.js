$(function() {

    /* GNB */
    $("#gnb li").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(1000);
    });
    $("#gnb li").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(800);
    });
    /* GNB */


});
