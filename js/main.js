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
     
        $('.sub-nav-wrap').attr('data-offset-top',  h.height()-50); 
    })
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
        bars = $('.bars-btn');
        logo = $('.navbar-brand.mob'),
        isOpen = false;
        
        function openSearch(){
            searchBox.addClass('searchbox-open');
            searchBoxWrap.addClass('searchbox-open');
            recallBtn.addClass('small-section');
            inputBox.attr('placeholder', 'Пошук');
            logo.hide();
            inputBox.show();
            isOpen = true;
        }
        
        function closeSearch(){
            searchBox.removeClass('searchbox-open');
            searchBoxWrap.removeClass('searchbox-open');
            recallBtn.removeClass('small-section');
            inputBox.removeAttr("placeholder");
            if($(window).width() <= 640){
                function showLogo(){
                    logo.show()
                };
                setTimeout(showLogo, 1500);
                
            }
            isOpen = false;
        }

    submitIcon.click(function(){
        if(isOpen == false){
           openSearch();
        }else {
            closeSearch();
        }
    });

    recallBtn.click(function(){
        if(isOpen == true){
            closeSearch();
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
        } 
    });

    bars.click(function(){
        if(isOpen == true){
            closeSearch();
            $('.searchbox-input').val('');
            $('.searchbox-icon').css('display','block');
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

$(window).ready( function(){

// Create a function for sidemenu

    var sidemenuToggle = function() {

// Push the  sidemenu over
        
        var open = false;

        $('.bars-btn').click(function() {
            $('.sidemenu-wrap').addClass('open-menu'); 
            $('body').addClass('fixed');
        }); 

        $('.top-navbar .recall').click(function(){
            $('.sidemenu-wrap').removeClass('open-menu');
            $('body').removeClass('fixed');
        });
        $('.modal-recall').removeClass('modal-center');

        $('.close-btn').click(function() {
            $('.sidemenu-wrap').removeClass('open-menu');
            $('body').removeClass('fixed');
        }); 
 
    };

    sidemenuToggle();
    $(window).on('resize', function(){
        sidemenuToggle();
        
    });

    //popup recall sidemenu
    $('.sidemenu .recall').click(function(){
        $('.modal-recall').addClass('modal-center');
        //$('.sidemenu-wrap').removeClass('open-menu');
    });
    $('.top-navbar .recall').click(function(){
        $('#recallModal').removeClass('modal-center');
    });

    //dropdow select region
    //activate submenu in regions lsit
    $('.dropdown-submenu>a, .dropdown-menu>li>a').submenupicker();

    //make link clickable
     $('.dropdown .dropdown-submenu a:not(a[href="#"])').on('click', function() {
        self.location = $(this).attr('href');
    });

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
  $(function chart () {
     
       
    
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
                $(this.el).find('.percent-container .percent')
                          .html(Math.ceil(value) + "<span>%</span>");

                var $info =  $(this.el).find('.info');
                $info.css("margin-left", -($info.width() / 2));

             }
         });

        });
       
      });
         if($(window).width()<645){
            $('.easy-pie-chart').attr('data-size', 300)
                                .attr('data-lineWidth', 20)
                                .addClass('big');
        }
        if($(window).width()>645){
            $('.easy-pie-chart').removeClass('big');
        }


    });
    
   


    //toggle filter product search results
    $(function(){
        if( $(window).width() <= 640 ){
            $('#filter-toggle').click(function(){
                $('#toggleProduct').toggle();
            });   
        }
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


    //add new medicament
    $(function(){
        $('.addMed').click(function(){
            $(this).closest('.medicament-card').next().show();
            $(this).hide();
        });
    });
    $('#trigger-btn').click(function(){
        $('.suspect-med').addClass('no-margin');
    });


//toggle input field
 
$(document).ready(function(){
    $('#patientDieInput').appendTo('#categoryPR-medstaf .wpcf7-list-item.first');

    $('#categoryPR-medstaf .wpcf7-list-item.first input:radio').change(function(){
     if($('#categoryPR-medstaf .wpcf7-list-item.first input:radio').is(':checked')){
            $('#patientDieInput').fadeIn().css('display','table');
        }
    });
    $('#categoryPR-medstaf input:radio').not('#categoryPR-medstaf .wpcf7-list-item.first input:radio').click(function(){
        $('#patientDieInput').fadeOut();
    });
});


$(function(){ 
    $('#medtherapy-medstaf input[type="radio"] ').change(function(){
      if($('#medtherapy-medstaf input[type="radio"]').is(':checked')){
            $('.long-form .correction .textarea-wrap').fadeIn().css('display','block');
          }
    });
    $('.long-form .correction input[name="corMethod_correction"]').not('#medtherapy-medstaf input[type="radio"]').click(function(){
        $('.long-form .correction .textarea-wrap').fadeOut();
    });
});

// long-form toggles
$('#cancellationCorrect-medstaf input[type="checkbox"]').click(function(){
    $('.hide-1').toggle();
});
$('#repeatedCorrect-medstaf input[type="checkbox"]').click(function(){
    $('.hide-2').toggle();
});
$('#changeCorrect-medstaf input[type="checkbox"]').click(function(){
    $('.hide-3').toggle();
});
        
//bootstrap verical slider
$('#carousel-vertical').carousel();



// calc height of a map
$(document).ready(function(){
    var hDocument = $(document).height(),
        hContent = $('#contact-box').height() + 107,
        map = $('#map'),
        diff = hDocument - hContent;

    if(diff > 400) {
        map.height(diff);
    }
});


$(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(":checked")){
            $(this).parent().parent().addClass('checked');
        }
        else if($(this).is(":not(:checked)")){
            $(this).parent().parent().removeClass('checked');
        }
    });
});


//выплывание доп.поля при выборе Способа введення - Інше
function injectClick() {
    setTimeout(injectClick,10);

    $(".modal .inject + .chosen-container-single .chosen-results li:last-child").on('click touchstart', function(){
        $(this).parents('.method-box').siblings('.additional-field').fadeIn('500').css('display','block');
    });
    $(".modal .inject option:last-child").on('click touchstart', function(){
        $(this).parents('.method-box').siblings('.additional-field').fadeIn('500').css('display','block');
    });

    $(".modal .inject + .chosen-container-single .chosen-results li").not('.modal .inject + .chosen-container-single .chosen-results li:last-child').on('click touchstart', function(){
        $(this).parents('.method-box').siblings('.additional-field').fadeOut('500');
        $(this).parents('.method-box').siblings('.additional-field').find('input').val('');
    });
    $(".modal .inject option").not('.modal .inject > select option:last-child').on('click touchstart', function(){
        $(this).parents('.method-box').siblings('.additional-field').fadeOut('500');
        $(this).parents('.method-box').siblings('.additional-field').find('input').val('');
    });
}
injectClick();


// цвет selectValue в зависимости от выбранной опции месяца
function colorSelectValue() {
    setTimeout(colorSelectValue,10);

    $(".modal .month-select + .chosen-container-single .chosen-results li").not('.modal .month-select + .chosen-container-single .chosen-results li:first-child').on('click touchstart', function(){
        $(this).parents('.chosen-drop').siblings('.chosen-single').css('color','#444444');
    });
    $(".modal .month-select option").not('.modal .month-select option:first-child').on('click touchstart', function(){
        $(this).parent().siblings('.chosen-container-single').find('.chosen-single').css('color','#444444');
    });

    $(".modal .month-select + .chosen-container-single .chosen-results li:first-child").on('click touchstart', function(){
        $(this).parents('.chosen-drop').siblings('.chosen-single').css('color','');
    });
    $(".modal .month-select option:first-child").on('click touchstart', function(){
        $(this).parent().siblings('.chosen-container-single').find('.chosen-single').css('color','');
    });
}
colorSelectValue();



//smoth scroll to anchor
$(function() {
 
  // scroll handler
  var scrollToAnchor = function( id ) {
 
    // grab the element to scroll to based on the name
    var elem = $("a[name='"+ id +"']");
 
    // if that didn't work, look for an element with our ID
    if ( typeof( elem.offset() ) === "undefined" ) {
      elem = $("#"+id);
    }
    // if the destination element exists

    if ( typeof( elem.offset() ) !== "undefined" ) {
 
      // do the scroll
      $('html, body').animate({
              scrollTop: elem.offset().top - 77
      }, 1000 );
 
    }
  };
 
  // bind to click event
  $(".sroll-ic").click(function( event ) {
 
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") ) {
 
      // cancel default event propagation
      event.preventDefault();
 
      // scroll to the location
      var href = $(this).attr('href').replace('#', '')
      scrollToAnchor( href );
    }
 
  });
 
});


// anime effects
(function($) {
    $.fn.animated = function(inEffect, outEffect) {
        $(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
            if (dir === "down") {
                $(this).addClass(inEffect).css("opacity", "1");
            } else {
                $(this).addClass(outEffect).css("opacity", "1");
            }
        }, {
            offset: "80%"
        });
    };
})(jQuery);

$(".page-template-page-our-activity .post").animated("swashIn");
$(".page-template-page-our-activity .post ").animated("swashIn");
$(".page-template-page-our-activity .distribution .text-wrap").animated("swashIn");


$(document).ready(function(){
    $(".custom").chosen({disable_search: true});
      if ($('.custom').length > 0) {
      $('.custom').on('touchstart', function(e){
        e.stopPropagation(); e.preventDefault();
        // Trigger the mousedown event.
        $(this).trigger('mousedown');
      });

    }
});

 
   
  