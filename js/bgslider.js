$(function(){
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000,  
			timeout: 0,
			fillElement: '.slider-wrap',
			pager: ".slider-pagination ul",
			prev: '#arrow_left',
			next: '#arrow_right',
			pagerAnchorBuilder: function(slide) {
   				 return '<li><a href="#" rel="nofollow"></a></li>';
			},
			pause: 1,
			after: function(last,current){
				if($(last).find('video').length > 0) $(last).find('video')[0].pause();
				if($(current).find('video').length > 0) $(current).find('video')[0].play();
			}
		},
		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
		},
		debug:true
	});
		
	// Helper function to Fill and Center the HTML5 Video
	jQuery('.html5video').maximage('maxcover');
		
	// To show it is dynamic html text
	jQuery('.in-slide-content').delay(1200).fadeIn();
})

	$(function pagin(){
	var bgSlide = $('.slider-pagination .activeSlide').index();
		 setTimeout(pagin, 30);
		 $('.slider-pagination ul li').click(function(){
		for(i>0; i<bgSlide; i++){
			$('.slider-pagination ul li a').addClass('viewed');
		}
	});
 

});
