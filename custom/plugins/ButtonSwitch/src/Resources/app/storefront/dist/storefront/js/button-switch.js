
let button= document.querySelector('btn-buy');



$( document ).ready(function() {
    $( ".btn-buy" ).click(function() {
      $( ".btn-buy:focus" ).css('background', '#625f5f');
      
      const buttonElement = document.getElementsByClassName("btn btn-block btn-buy")
      for(const button in buttonElement) {
        //hier muss noch ein funktionierendes if rein!!!
        if(buttonElement.click){
        buttonElement[button].innerText = "Will be added to cart"}}
      
      
      setTimeout(function() {
      $('.btn-buy').css('background', '#008490');
      for(const button in buttonElement) {
        buttonElement[button].innerText = "Add to shopping cart"}
       }, 1000); 
    });
});