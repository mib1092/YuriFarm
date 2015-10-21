$(function(){
		$('#maximage').maximage({
			cycleOptions: {
				fx: 'fade',
				speed: 1000,  
				timeout: 0,
				fillElement: '.slider-wrap',
				pager: ".slider-pagination ul",
				pagerAnchorBuilder: function(slide) {
	   				 return '<li><a href="#" rel="nofollow"></a></li>';
				},
				pause: 1
				
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
	});

	$(function pagin(){
	var bgSlide = $('.slider-pagination .activeSlide').index();
		 setTimeout(pagin, 30);
		 $('.slider-pagination ul li').click(function(){
		for(i>0; i<bgSlide; i++){
			$('.slider-pagination ul li a').addClass('viewed');
		}
	});
 


    
    //set height for slider-wrap
    function setHeiHeight() {
        var newScreenSize = $(window).height();
        $('.slider-wrap').css({'top': newScreenSize});
        console.log($(window).height());
    }

    setHeiHeight();
    $(window).resize( setHeiHeight );
});
