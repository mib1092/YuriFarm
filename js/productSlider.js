$(document).ready(function(){
	var owl = $("#otherProductsCarousel");
        owl.owlCarousel({
          items : 3, //10 items above 1000px browser width
          itemsTablet: [768, 2], //2 items between 600 and 0
          pagination: false,
          autoPlay : true,
          stopOnHover : true,
          navigationText: false,
          navigation : true
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
});