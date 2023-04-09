



let button= document.querySelector('btn-buy');



$( document ).ready(function() {
    $( ".btn-buy" ).click(function() {
      $( ".btn-buy:focus" ).css('background', '#625f5f');

        
        setTimeout(function() {
        
          $('.btn-buy').css('background', '#008490');
       }, 1000); 
    });
});