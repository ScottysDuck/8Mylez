



let button= document.querySelector('btn-buy');

$( document ).ready(function() {
    $( ".btn-buy" ).click(function() {
      $( ".btn-buy" ).css('background', 'grey');
       setTimeout(function() {
        $('.btn-buy').css('background', '#008490');
       }, 1000); 
    });
});