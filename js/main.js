//set height for slider-wrap
function setHeiHeight() {
        $('.slider-wrap ').css({
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
        var placeholder = $('.searchbox-input');
        console.log(placeholder);
        var isOpen = false;

        submitIcon.click(function(){
            if(isOpen == false){
                searchBox.addClass('searchbox-open');
                searchBoxWrap.addClass('searchbox-open');
                recallBtn.addClass('small-section');
                placeholder.attr('placeholder="Пошук"');
                inputBox.focus();
                isOpen = true;
                
            } else {
                searchBox.removeClass('searchbox-open');
                searchBoxWrap.removeClass('searchbox-open');
                recallBtn.removeClass('small-section');
                placeholder.removeAttr('placeholder');
                inputBox.focusout();
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
  
        $('.region').css("border-radius","5px");
   

});