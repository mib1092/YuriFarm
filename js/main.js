$(window).load(function() {
    // Animate loader off screen
    $(".preloader").fadeOut(700);
});
 
//make header block with video flexible
$(function(){
    var h = $(window).height();
     var scr = $('.screen').height(h);
     $('.sub-nav-wrap').attr('data-offset-top',  scr.height());
       
        $(window).resize(function(){
            var heightWindow = $(window).height();
            var h = $('.screen').height(heightWindow);
     
            $('.sub-nav-wrap').attr('data-offset-top',  h.height()-60); 
            
        console.log(h);
    })

});

 


//custom scroll sidemenu
var sideNav = $(window).height();
$('.sidemenu-inner-wrap').css('height', sideNav);

$(function(){
    $('.sidemenu-inner-wrap').jScrollPane();
});

//background video
$(function(){
// Helper function to Fill and Center the HTML5 Video
    $('video, object').maximage('maxcover');
    $('#maximage').show();
});
  

  //make modal crossbrowser  for IE 
$(".modal").appendTo($("body"));
if($(".modal-backdrop ").is(':visible')){
    $('body').css('padding-right', '0');
    
}

//Create expanding searchbox
$(document).ready(function(){


    var submitIcon = $('.searchbox-icon'),
        inputBox = $('.searchbox-input'),
        searchBox = $('.searchbox'),
        searchBoxWrap = $('.searchbox-wrap'),
        recallBtn = $('.top-navbar .recall'),
        logo = $('.navbar-brand.mob'),
        isOpen = false;

    submitIcon.click(function(){
        if(isOpen == false){
            searchBox.addClass('searchbox-open');
            searchBoxWrap.addClass('searchbox-open');
            recallBtn.addClass('small-section');
            inputBox.attr('placeholder', 'Пошук').fadeIn(800);
            logo.hide();
            inputBox.show();
            isOpen = true;
        }else {
            searchBox.removeClass('searchbox-open');
            searchBoxWrap.removeClass('searchbox-open');
            recallBtn.removeClass('small-section');
            inputBox.removeAttr("placeholder");
            logo.show(950);
            isOpen = false;
        }
    });

    recallBtn.click(function(){
        if(isOpen == true){
            searchBox.removeClass('searchbox-open');
            searchBoxWrap.removeClass('searchbox-open');
            recallBtn.removeClass('small-section');
            isOpen = false;
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        } 
    });

    $('.bars-btn').click(function(){
        searchBox.removeClass('searchbox-open');
        searchBoxWrap.removeClass('searchbox-open');
        recallBtn.removeClass('small-section');
        $('.searchbox-input').val('');
        $('.searchbox-icon').css('display','block');
        isOpen = false;
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

$(window).ready( function(){  

// Create a function for sidemenu
    
   
   var sidemenuToggle = function() {

// Push the  sidemenu over 
	        var windowWidth = $(window).width();
    
        if(windowWidth > 640){
            $('.sidemenu-wrap').css({
                'left': 'auto',
                'right': '-266px',
                'max-width': '255px' 
            });
            $('.bars-btn').click(function() {
                $('.sidemenu-wrap').animate({
                  right: "-7px"
                }, 600).addClass('open-menu');

            $('.top-navbar .recall').click(function(){
                $('.sidemenu-wrap').animate({
                      right: "-266px"
                    }, 500).removeClass('open-menu');
                });
                $('.modal-recall').removeClass('modal-center');
              });
            $('.close-btn').click(function() {
                $('.sidemenu-wrap').animate({
                  right: "-266px"
                }, 500).removeClass('open-menu');
              });

        } 
        else if(windowWidth < 640){

            $('.sidemenu-wrap').css({
                'left': '-600px',
                'right': '0'
                 
            });

            $('.bars-btn').click(function() {
                $('.sidemenu-wrap').animate({
                  left: "-7px"
                }, 600).addClass('open-menu');

            $('.top-navbar .recall').click(function(){
                $('.sidemenu-wrap').animate({
                      left: "-600px"
                    }, 500).removeClass('open-menu');
                });
                $('.modal-recall').removeClass('modal-center');
              });
            $('.close-btn').click(function() {
                $('.sidemenu-wrap').animate({
                  left: "-600px"
                }, 500).removeClass('open-menu');
              });
        }
	  
 
            
    
   	};

	$(window).on('resize', sidemenuToggle());

    //popup recall sidemenu
    $('.sidemenu .recall').click(function(){
        $('.modal-recall').addClass('modal-center');
        $('.sidemenu-wrap').animate({right: "-256px"}, 500);
    });

    $('.top-navbar .recall').click(function(){
        $('#recallModal').removeClass('modal-center');
    });


    //masonry effect for search-list on product page
    $('.grid').masonry( {} );


    //dropdow select region
    //activate submenu in regions lsit
    $('.dropdown-submenu>a,.dropdown-menu>li>a').submenupicker();


    //блокировка стандартного поведения ссылок
    function prevent(){
        $('.prevent').on('click', function(event){
            event.preventDefault();
        });
    };
    prevent();

 //Simple counter for presonnel.page statistic
    
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },

      {
        duration: 3500,
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
            animate: 3500,
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
    function vacancyToggle(){
        var moreBtn = $('.page-template-page-career .post .more');
        var closeBtn = $('.page-template-page-career .post .btn-close');
        var hideSection = $('.page-template-page-career .post .hideSection');

        moreBtn.on('click', function(event){
            event.preventDefault();
            if ( hideSection.is( ":hidden" ) ){
                $(this).siblings(hideSection).slideDown();
                closeBtn.show();
                $(this).hide();
            }
        });

        closeBtn.on('click', function(event){
            event.preventDefault();
            if ( hideSection.is( ":visible" ) ) {
                $(this).parent(hideSection).slideUp(200);
                $(this).hide();
            }
            moreBtn.show();
        });
    };
    vacancyToggle();


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
// filter content
function submitForm() {
    setTimeout(submitForm,10);
    $('.filter-form-wrap .customSelect dd').on('click', function(){
        var dataOption = $(this).data('info');
        $(this).parent().parent().parent().parent().find('select').val(dataOption);
        $('.filter-form-wrap .filter-post').submit();
    });
}
submitForm();

// filter sidebar
function submitSideForm() {
    setTimeout(submitSideForm,10);
    $('.sidebar .customSelect dd').on('click', function(){
        var dataOption = $(this).data('info');
        $(this).parent().parent().parent().parent().find('select').val(dataOption);
        $('.sidebar .filter-post').submit();
    });
}
submitSideForm();


function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
    });
}


$(document).ready(function(){
    var hDocument = $(document).height(),
        hContent = $('#contact-box').height() + 112;
    map = $('#map > iframe'),
        diff = hDocument - hContent

    if(diff > 400) {
        map.height(diff);
    }
});
