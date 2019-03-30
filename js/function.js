$(document).ready(function(){
var posX;
  $("#slider-drag")
.mouseup(function(){
  $(this).after("<p style='color:green;'>Mouse button released.</p>");
  
})
    .mousedown(function(e) {
      posX = e.pageX;
      alert( "Handler for .mousedown() called." );
      console.log('mouse downwnwnwn');
      var position = "translateX(" + 100 + "px)";
      //$("#slider-drag").css({"-moz-transform" : position, "-webkit-transform" : position});
       $("#slider-drag").css({"transform": position});

  })
});
