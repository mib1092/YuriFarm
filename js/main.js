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


//$('.sidemenu').jScrollPane();

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


/*
//mobile menu add caption to submenues
$(document).ready(function(){
        function submenuCaption(){
            if($(window).width() <= 640){
            

                $('.selected-region.dropdown-toggle').click(function(){
                    $('.menu-title').remove();
                    if($('.open>.reg-list').is(':hidden')){
                        $('.menu-title').remove();
                    }
                        $('.reg-list').prepend('<li class="menu-title">Вибір регіону</li>');
                        $('.control-panel').show();
                   
                    });
                    $('.dropdown-submenu').remove('.menu-title');
                    $('.dropdown-submenu>a').click(function(){
                            var submenuTitle = $(this).text();

                            $(this).siblings().prepend('<li class="menu-title">' + submenuTitle + '</li>');
                            $('.control-panel .back').show();
                        });
                   
                  
                    $('.control-panel').click(function(){$('.control-panel').hide();});
                    
                   $('.control-panel .times').click(function(){ 
                        $('.dropdown-menu li').removeClass('open');
                        console.log('work');
                        $('.content .region-select-wrap .dropdown').removeClass('open');
                        $('.content .region-select-wrap .dropdown').addClass('open');
                   });
                    $('.dropdown-menu li').click(function(){
                        $('.dropdown, dropdown-menu, dropdown-menu li').removeClass('open');
                        $('.control-panel .back').hide();
                    });
                   $('.dropdown-submenu .sub-menu>li>a').click(function(){
                        $('.dropdown').removeClass('open');
                        $('.control-panel ').hide();
                   });               
            }
           
        }

        submenuCaption();
        $(window).resize(submenuCaption);
});
   */ 


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
            inputBox.attr('placeholder', 'Пошук').fadeIn(800);
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
        $('.bars-btn').click(function() {
            $('.sidemenu-wrap').addClass('open-menu'); 
            $('body').addClass('fixed');
        }); 

        $('.top-navbar .recall').click(function(){
            $('.sidemenu-wrap').removeClass('open-menu');
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


    //masonry effect for search-list on product page
    $('.grid').masonry();
    $(window).resize(function() {
    if( $(this).width() > 640 ) {
         $('.grid').masonry( {} );
    }else if ($(this).width() <= 640 ){
        $('.grid').masonry( 'destroy' );
    }

    
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
                $(this.el).find('.percent-container .percent')
                          .html(Math.ceil(value) + "<span>%</span>");

                var $info =  $(this.el).find('.info');
                $info.css("margin-left", -($info.width() / 2));

             }
         });

        });

      });

        
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
        $('#addMed').click(function(){
            console.log($('.medicament-card'));
            $('#addMed').click(function(){
                $('.medicament-card.initial').next().css({'display': 'block'});
            });    
        });
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

//toggle input field
   $(function(){ 
    $('#patientDie').change(function(){
        if($('#patientDie').is(':checked')){
                $('#patientDieInput').fadeIn().css('display','table');
            }
        });
        $('#categoryPR input[type="radio"]').not('#patientDie').click(function(){
            $('#patientDieInput').fadeOut();
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
