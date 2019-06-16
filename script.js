

$(function() {
  $("#search").on("click", function() {
    var value = $("#myInput").val().toLowerCase();
    $("* #div").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $(".btn-outline-primary").click(function(e){
    e.preventDefault() ;
    $('#recent').removeClass('show','hide' ) ;
    $('#popular').removeClass('show','hide') ;
    $('.hidden-card').removeClass('d-none') ;
  $('.hidden-card').addClass('d-flex') ;
    
  
  });
  $('#recent-button').click(function(e){
      e.preventDefault() ;
      $('#popular').addClass('hide') ;
      $('#recent').removeClass('show') ;
  })
  $('#popular-button').click(function(e){
    e.preventDefault() ;
    $('#recent').addClass('hide') 
    $('#popular').removeClass('show')  ;
})
}) ;