$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
  	{
  	items: 1,
  	loop: true,
  	nav: true,
  	lazyLoad: true,
  	autoHeight: true,
  	slideTransition: `ease-in-out`	
  	});
});


(function($){
  $(function() {
    $('.menu__icon').on('click', function() {
      $(this).closest('.menu')
        .toggleClass('menu_state_open');
    });
    
    $('.menu__links-item').on('click', function() {
      // do something

      $(this).closest('.menu')
        .removeClass('menu_state_open');
    });
  });
})(jQuery);