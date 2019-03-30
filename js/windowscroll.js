var posX = -200;

$(window).scroll(function() {

    posX -- ;
    posX = posX + (-2);
    var position = "translate(" + posX + "px,0)";
    $(".story").css({"-moz-transform" : position, "-webkit-transform" : position});
});
