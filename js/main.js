$(window).load(function() {
    // Animate loader off screen
    $(".preloader").fadeOut(800);
});

//background video
$(function(){
// Helper function to Fill and Center the HTML5 Video
    $('video, object').maximage('maxcover');
    $('#maximage').show().css('width', '100%');
});

 

//Create expanding searchbox
$(document).ready(function(){

    var submitIcon = $('.searchbox-icon');
    var inputBox = $('.searchbox-input');
    var searchBox = $('.searchbox');
    var searchBoxWrap = $('.searchbox-wrap');
    var recallBtn = $('.top-navbar .recall');
    var isOpen = false;

    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            searchBoxWrap.addClass('searchbox-open');
            recallBtn.addClass('small-section');
            inputBox.show();
            isOpen = true;

        } else {
            searchBox.removeClass('searchbox-open');
            searchBoxWrap.removeClass('searchbox-open');
            recallBtn.removeClass('small-section');
            isOpen = false;
        }
    });

     submitIcon.mouseup(function(){
            return false;
        });
    searchBox.mouseup(function(){
            return false;
        });
});

function buttonUp(){
    var inputVal = $('.searchbox-input').val();
    inputVal = $.trim(inputVal).length;
    if( inputVal !== 0){
        $('.searchbox-icon').css('display','none');
    } else {
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
    }
}

$(document).ready( function(){  

// Create a function for sidemenu

   var sidemenuToggle = function() {

// Push the  sidemenu over by 285px over
	  $('.bars-btn').click(function() {
	    $('.sidemenu-wrap').animate({
	      right: "0"
	    }, 600);
	  });

	  // Then push them back
	  $('.close-btn').click(function() {
	    $('.sidemenu-wrap').animate({
	      right: "-256px"
	    }, 500);
	  });
	};

	sidemenuToggle();

    //masonry effect for search-list on product page
    $('.grid').masonry( {} );

    //dropdow select region
    //activate submenu in regions lsit
    $('.dropdown-submenu>a,.dropdown-menu>li>a').submenupicker();

    //блокировка стандартного поведения ссылок
    $('.bars-btn,.recall,.dropdown-submenu>a,.dropdown-menu>li>a,.close-btn,.btn-success').click(function(event){
        event.preventDefault();
    });

 
 //Simple counter for presonnel.page statistic
    
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 2500,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  
    });       
   

//skillbars
    $(function ($) {
     $('.easy-pie-chart').each(function () {
        var $this, $parent_width, $chart_size, height;
        $this = $(this);
        $parent_width = $(this).parent().width();
        $chart_size = $this.attr('data-size');
        if ($parent_width < $chart_size) {
            $chart_size = $parent_width;
        }
        
        height = parseInt($chart_size);

        $this.css('line-height', $chart_size + "px");
        $this.css('height', height + "px");

        $this.easyPieChart({
            animate: 2300,
            lineCap: 'butt',
            lineWidth: $this.attr('data-lineWidth'),
            size: $chart_size,
            barColor: $this.attr('data-barColor'),
            trackColor: $this.attr('data-trackColor'),
            scaleColor: 'transparent',
            onStep: function (from, to, value) {
                $(this.el).find('.percent-container .percent').html(Math.ceil(value) + "<span>%</span>");
                var $info =  $(this.el).find('.info');
                $info.css("margin-left", -($info.width() / 2));

             }
         });

        });

        var canvas_width = $('.easy-pie-chart canvas').width();
         $('.easy-pie-chart canvas').css('margin-left', -canvas_width/2);

    });
});
    
    //career toggle post info
    var moreBtn = $('.career .post .more');
    var closeBtn = $('.career .post .btn-close');
    var hideSection = $('.career .post .hideSection');

    moreBtn.click(function(event){
        event.preventDefault();
        if ( hideSection.is( ":hidden" ) ){
            $(this).siblings(hideSection).slideDown();
            closeBtn.show();
            $(this).hide();
          }
       
    });

    closeBtn.click(function(event){
        event.preventDefault();
        if ( hideSection.is( ":visible" ) ) {
            $(this).parent(hideSection).slideUp(200);
            $(this).hide();            
        }
       moreBtn.show();
    });

    //Customize select dropdowns
  $(function() {
    $("select.custom").each(function() {                    
        var sb = new SelectBox({
            selectbox: $(this),
            customScrollbar: true,
            height: 350
            });
        });
        
    });



//bootstrap verical slider
    $('#carousel-vertical').carousel();
/*
    var nextHeading = $('.item.active').next().data('heading');
    var prevHeading = $('.item.active').prev().data('heading');
    var currentHeading = $('.item.active').data('heading');

    console.log(currentHeading);
    //declare the first and the last slide's variables
    var prevSlide = $('.item').prev();
    var nextSlide = $('.item').next();
        if(prevSlide.length === 0) {
          prevSlide = $('.item').last();
          prev = $(prev).last();console.log(prev);
        }
        if(nextSlide.length === 0) {
          nextSlide = $('.item').first();
          next = $(next).first();
        }

    var nextc = $('.down span').html(nextHeading);
    var prevc = $('.up span').html(prevHeading);

    $('.down').on('click',function() {
        nextc.text(nextHeading);
        prevc.text(prevHeading);
        
        });

*/