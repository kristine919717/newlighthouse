$('#gotodonationimpact').click(function(){
  window.location.href = 'donation_impact.html';

})
$('#gotomap').click(function(){
  window.location.href = 'map2.html';

})
$('#gotostory').click(function(){
  window.location.href = 'tryanimetexttry_number.html';

})
$('#start').click(function(){
  window.location.href = 'tryanimetexttry_number.html';

})
$( ".nextsectionarrow").mouseenter(function() {
  $(".nextcontent").show();
  $( ".nextcontent" ).animate({
    opacity:0.8,
  },500,"linear",function(){
  });
});
$( ".nextsectionarrow").mouseleave(function() {
  $( ".nextcontent" ).animate({
    opacity:0,
  },500,"linear",function(){
    $(this).hide();
  });
});
$( ".previoussectionarrow").mouseenter(function() {
  $(".previouscontent").show();
  $( ".previouscontent" ).animate({
    opacity:0.8,
  },500,"linear",function(){
  });
});
$( ".previoussectionarrow").mouseleave(function() {
  $( ".previouscontent" ).animate({
    opacity:0,
  },500,"linear",function(){
    $(this).hide();
  });
});
