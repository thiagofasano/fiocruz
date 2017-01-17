$(document).ready(function(){

 $(window).scroll(function() { 

    if ( $(document).scrollTop() > 150 ) { 
      $('.header').addClass('header-menor'); 
    } else { 
      $('.header').removeClass('header-menor'); 
    } 

  }); 

});