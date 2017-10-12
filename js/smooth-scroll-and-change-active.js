$(document).ready(function() {
   
   var scrollLink = $('.scroll');

   //smooth scrolling
   scrollLink.click(function(e){
      e.preventDefault();
      $('body, html').animate({
         scrollTop: $(this.hash).offset().top
      }, 1000);
   });

   //active link switching
   $(window).scroll(function() {
      var scrollbarLoc = $(this).scrollTop();

      scrollLink.each(function(){
         var sectionOffset = $(this.hash).offset().top;

         if ( sectionOffset <= scrollbarLoc ){
            $(this).addClass('current');
            $(this).siblings().removeClass('current');
         }
      });
   });
});