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


        //swipe menu left for close
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() < 650) {
            $(".sidemenu-wrap").swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingers){
              if (phase == "move" && direction == "left"){
                $(".sidemenu-wrap").removeClass("open-menu");
                $('body').removeClass('fixed');
                return false;
              }
            }, allowPageScroll:"vertical"

          });  

        }

        (function (window) {
    // This library re-implements setTimeout, setInterval, clearTimeout, clearInterval for iOS6.
    // iOS6 suffers from a bug that kills timers that are created while a page is scrolling.
    // This library fixes that problem by recreating timers after scrolling finishes (with interval correction).
    // This code is free to use by anyone (MIT, blabla).
    // Original Author: rkorving@wizcorp.jp
    var timeouts = {};
    var intervals = {};
    var orgSetTimeout = window.setTimeout;
    var orgSetInterval = window.setInterval;
    var orgClearTimeout = window.clearTimeout;
    var orgClearInterval = window.clearInterval;
    // To prevent errors if loaded on older IE.
    if (!window.addEventListener) return false;
    // This fix needs only for iOS 6.0 or 6.0.1, continue process if the version matched.
    if (!navigator.userAgent.match(/OS\s6_0/)) return false;
    function createTimer(set, map, args) {
        var id, cb = args[0],
            repeat = (set === orgSetInterval);

        function callback() {
            if (cb) {
                cb.apply(window, arguments);
                if (!repeat) {
                    delete map[id];
                    cb = null;
                }
            }
        }
        args[0] = callback;
        id = set.apply(window, args);
        map[id] = {
            args: args,
            created: Date.now(),
            cb: cb,
            id: id
        };
        return id;
    }

    function resetTimer(set, clear, map, virtualId, correctInterval) {
        var timer = map[virtualId];
        if (!timer) {
            return;
        }
        var repeat = (set === orgSetInterval);
        // cleanup
        clear(timer.id);
        // reduce the interval (arg 1 in the args array)
        if (!repeat) {
            var interval = timer.args[1];
            var reduction = Date.now() - timer.created;
            if (reduction < 0) {
                reduction = 0;
            }
            interval -= reduction;
            if (interval < 0) {
                interval = 0;
            }
            timer.args[1] = interval;
        }
        // recreate
        function callback() {
            if (timer.cb) {
                timer.cb.apply(window, arguments);
                if (!repeat) {
                    delete map[virtualId];
                    timer.cb = null;
                }
            }
        }
        timer.args[0] = callback;
        timer.created = Date.now();
        timer.id = set.apply(window, timer.args);
    }
    window.setTimeout = function () {
        return createTimer(orgSetTimeout, timeouts, arguments);
    };
    window.setInterval = function () {
        return createTimer(orgSetInterval, intervals, arguments);
    };
    window.clearTimeout = function (id) {
        var timer = timeouts[id];
        if (timer) {
            delete timeouts[id];
            orgClearTimeout(timer.id);
        }
    };
    window.clearInterval = function (id) {
        var timer = intervals[id];
        if (timer) {
            delete intervals[id];
            orgClearInterval(timer.id);
        }
    };
    //check and add listener on the top window if loaded on frameset/iframe
    var win = window;
    while (win.location != win.parent.location) {
        win = win.parent;
    }
    win.addEventListener('scroll', function () {
        // recreate the timers using adjusted intervals
        // we cannot know how long the scroll-freeze lasted, so we cannot take that into account
        var virtualId;
        for (virtualId in timeouts) {
            resetTimer(orgSetTimeout, orgClearTimeout, timeouts, virtualId);
        }
        for (virtualId in intervals) {
            resetTimer(orgSetInterval, orgClearInterval, intervals, virtualId);
        }
    });
}(window));  

         
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


    //Customize select dropdowns
    $(function() {
        $("select.custom").each(function() {
            var sb = new SelectBox({
                selectbox: $(this),
                customScrollbar: true,
                height: 300
            });
        });
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


// filter content
function submitForm() {
    setTimeout(submitForm,10);
    $('.filter-form-wrap .customSelect dd').on('click', function(){
        var dataOption = $(this).data('info');
        $(this).parents('.customSelect').find('select').val(dataOption);
        $('.filter-form-wrap .filter-post').submit();
    });
}
submitForm();

// filter sidebar
function submitSideForm() {
    setTimeout(submitSideForm,10);
    $('.sidebar .customSelect dd').on('click', function(){
        var dataOption = $(this).data('info');
        $(this).parents('.customSelect').find('select').val(dataOption);
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

    $(".inject dd:last-child").on('click', function(){
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.additional-field').fadeIn('500').css('display','block');
    });
    $(".inject > select option:last-child").on('click', function(){
        $(this).parent().parent().parent().parent().parent().find('.additional-field').fadeIn('500').css('display','block');
    });

    $(".inject dd").not('.inject dd:last-child').on('click', function(){
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.additional-field').fadeOut('500');
        $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().find('.additional-field input').val('');
    });
    $(".inject > select option").not('.inject > select option:last-child').on('click', function(){
        $(this).parent().parent().parent().parent().parent().find('.additional-field').fadeOut('500');
        $(this).parent().parent().parent().parent().parent().find('.additional-field input').val('');
    });
}
injectClick();


// цвет selectValue в зависимости от выбранной опции месяца
function colorSelectValue() {
    setTimeout(colorSelectValue,10);

    $(".modal .selectList dl dd").not('.modal .selectList dl dd:first-child').on('click', function(){
        $(this).parents('.customSelect').find('.selectedValue').css('color','#444444');
    });
    $(".modal .customSelect > select option").not('.modal .customSelect > select option:first-child').on('click', function(){
        $(this).parents('.customSelect').find('.selectedValue').css('color','#444444');
    });

    $(".modal .selectList dl dd:first-child").on('click', function(){
        $(this).parents('.customSelect').find('.selectedValue').css('color','');
    });
    $(".modal .customSelect > select option:first-child").on('click', function(){
        $(this).parents('.customSelect').find('.selectedValue').css('color','');
    });
}
colorSelectValue();
