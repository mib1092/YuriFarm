//set height for slider-wrap
function setHeiHeight() {
        $('.slider-wrap, .screen ').css({
            height: $(window).height() + 'px'
        });
    }
    setHeiHeight();
    $(window).resize( setHeiHeight );

//Create expanding serchbox
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
   
        $(document).mouseup(function(){
            if(isOpen == true){
                $('.searchbox-icon').css('display','block');
                submitIcon.click();
            }
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
	      right: "0px"
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

//dropdow select region
          //activate submenu in regions lsit
   $('.dropdown-submenu > a').submenupicker();
  
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

//---------------------------------------------------------------
    
    //Customize select dropdowns

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
       // $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();

            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
    $(".sidebar-filter aside").affix({
        offset: { 
            top: 105 
        }
    });

});

//bootstrap slider
    $('#carousel-vertical').carousel();