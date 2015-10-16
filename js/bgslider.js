$(function(){
	$('#maximage').maximage({
		cycleOptions: {
			fx: 'fade',
			speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
			timeout: 0,
			pager: ".slider-pagination ul",
			pagerAnchorBuilder: function(slide) {
   				 return '<li><a href="#" rel="nofollow"></a></li>';
			},
			pause: 0,
			after: function(last,current){
				if(!$.appName == 'Microsoft Internet Explorer' || 'Mozilla Firefox' || "Google Chrome"){
					if($(last).find('video').length > 0) $(last).find('video')[0].pause();
					if($(current).find('video').length > 0) $(current).find('video')[0].play();
				}
			}
		},

		onFirstImageLoaded: function(){
			jQuery('#cycle-loader').hide();
			jQuery('#maximage').fadeIn('fast');
		},
		debug:true
	});
		
 	var bgSlide = $('.slider-pagination .activeSlide').index();
	
	    $('.slider-pagination ul li').click(function(){
	    	for(i>0; i<bgSlide; i++){
	    		$('.slider-pagination ul li a').addClass('viewed');
	    	}
	    });

	// Helper function to Fill and Center the HTML5 Video
	$('.html5video').maximage('maxcover');
		
	// To show it is dynamic html text
	$('.in-slide-content').delay(1200).fadeIn();


    //set height for slider-wrap
    function setHeiHeight() {
        var newScreenSize = $(window).height();
        $('.slider-wrap').css({
            height: newScreenSize + 'px'
        });
    }

    setHeiHeight();
    $(window).resize( setHeiHeight );
});