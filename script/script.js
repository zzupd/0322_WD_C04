$(function() {

    /* GNB */
    $("#gnb li").mouseover(function(){
        $(this).children("ul.subMenu").stop().fadeIn(1000);
    });
    $("#gnb li").mouseout(function(){
        $(this).children("ul.subMenu").stop().fadeOut(800);
    });
    /* GNB */


    /* slideshow */
    setInterval(fnSlide, 3000);
    function fnSlide() {
        $("#slide a:first-child").fadeOut(600);
        $("#slide a:nth-child(2)").fadeIn(
            1000,
            function() {
                $("#slide a:first-child").insertAfter("#slide a:last-child");
            }
        );
    }

    /* slideshow */

    /* modalLayerPopup */
    $(".layerPopupPoint").click(function(){
        $("#layerBG").css({"display": "block"});
    });

    $("#layerBG #closeBtn").click(function(){
        $("#layerBG").css({"display": "none"});
    });
    /* modalLayerPopup */

});






