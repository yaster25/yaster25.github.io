$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });
    
    ll.loadAll();
    
    $('.js-slider-main').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,
        fade:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>'
    });
    
    
    $('.js-slider-projects').on('init', function(event, slick){
        slideCount = slick.slideCount;
        var $el = $('.js-slider-projects').next('.slider-nav').find('.slider-nav-count__total');
          if(slideCount<10) slideCount='0' + slideCount;  
          $el.text(slideCount);
          setCurrentSlideNumber(slick.currentSlide);
    });

    
    $('.js-slider-projects').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-projects').parents('.slider-wrapper').find('.slider-nav'),
        swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 768,
                settings: {
                    adaptiveHeight:true
                    //arrows:false,
                    //dots:true
                }
            }
        ]
    });
    
    
    $('.js-slider-projects').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber(nextSlide);
    });

    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.js-slider-projects').next('.slider-nav').find('.slider-nav-count__current');
        currentSlide = currentSlide + 1;
        if(currentSlide<10) currentSlide='0' + currentSlide;  
        $el.text(currentSlide);
    }
    
    $('.js-slider-letters').on('init', function(event, slick){
        slideCount = slick.slideCount;
        var $el = $('.js-slider-letters').parents('.slider-wrapper').find('.slider-nav-count__total');
          if(slideCount<10) slideCount='0' + slideCount;  
          $el.text(slideCount);
          setCurrentSlideNumber2(slick.currentSlide);
    });    
    $('.js-slider-letters').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-letters').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-letters').parents('.slider-wrapper').find('.slider-nav'),
         swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true
                }
            }
        ]
    });
    $('.js-slider-letters').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber2(nextSlide);
    });

    function setCurrentSlideNumber2(currentSlide) {
        var $el = $('.js-slider-letters').parents('.slider-wrapper').find('.slider-nav-count__current');
        currentSlide = currentSlide + 1;
        if(currentSlide<10) currentSlide='0' + currentSlide;  
        $el.text(currentSlide);
    }
    
    $('.js-slider-news').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        centerMode:true,
        variableWidth:true,
        initialSlide:1,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-news').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-news').parents('.slider-wrapper').find('.slider-nav'),
         
        responsive: [   
            {
                breakpoint: 1200,
                settings: {
                    variableWidth:false,
                     centerMode:false,
                    initialSlide:0,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    variableWidth:false,
                     centerMode:false,
                    initialSlide:0,
                   // slidesToShow:2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                     centerMode:false,
                    initialSlide:0,
                   // slidesToShow:2,
                }
            }
        ]
    });
    
    $('.js-slider-license').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:5,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-license').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-license').parents('.slider-wrapper').find('.slider-nav'),
         swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:4,
                }
                
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
                
            },
        ]
    });
    
    $('.js-slider-partners').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:5,
        slidesToScroll: 1,
        variableWidth:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-partners').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-partners').parents('.slider-wrapper').find('.slider-nav'),
         swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    //arrows:false,
                    //dots:true
                }
            }
        ]
    });
    
    
    
    
    $('.slick-cloned a').removeAttr('data-fancybox');
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false,
        btnTpl: {  
            smallBtn:
                '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 0C5.82864 0 0 5.82864 0 13C0 20.1714 5.82864 26 13 26C20.1714 26 26 20.1714 26 13C26 5.82864 20.1714 0 13 0ZM13 24.6878C6.56103 24.6878 1.31221 19.439 1.31221 13C1.31221 6.56103 6.56103 1.31221 13 1.31221C19.439 1.31221 24.6878 6.56103 24.6878 13C24.6878 19.439 19.439 24.6878 13 24.6878Z" /><path d="M13.9155 12.939L17.7301 9.12445C17.9742 8.88032 17.9742 8.45309 17.7301 8.20895C17.486 7.96482 17.0587 7.96482 16.8146 8.20895L13.0001 12.0235L9.1855 8.20895C8.94137 7.96482 8.51414 7.96482 8.27001 8.20895C8.02588 8.45309 8.02588 8.88032 8.27001 9.12445L12.0846 12.939L8.27001 16.723C8.02588 16.9672 8.02588 17.3944 8.27001 17.6385C8.39208 17.7606 8.57518 17.8216 8.72776 17.8216C8.88034 17.8216 9.06344 17.7606 9.1855 17.6385L13.0001 13.824L16.8146 17.6385C16.9367 17.7606 17.1198 17.8216 17.2724 17.8216C17.4249 17.8216 17.608 17.7606 17.7301 17.6385C17.9742 17.3944 17.9742 16.9672 17.7301 16.723L13.9155 12.939Z"/></svg>' +
                "</button>"
            },
        afterLoad: function(){

        }
    });
    
    $(".input-phone").mask("+7 (999) 999-99-99").on('click', function () {
        if ($(this).val() === '+7 (___) ___-__-__') {
           $(this).setCursorPosition(3);
        }
    });
    
    $('.form-consult').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true},
                email: {email:true}
            },
            messages: {                
                name: { required: "Введите Ваше имя" },
                phone: { required: "Введите Ваш номер телефона" },
                email: { email: "Не корректный ввод email" },
            },
            submitHandler: function(form){
                
                
            }
         });
    });
    
    $('.js-menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').addClass('active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active');
        }
        return false;
	});
    
    $('.nav-item_parent .nav-item__link').click(function () {
        console.log('1');
        if($(window).innerWidth()<992){    
            
            $(this).next('.subnav-wrapper').addClass('active');
            $('.subnav__back').addClass('active');
            return false;
        }
    })
    
    $(document).bind("click touchstart",function(event) {
        if($('body').hasClass('menu-open')){
            if ($(event.target).closest(".sidebar, .js-menu-trigger").length) return;
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active') ; 
            $('.subnav-wrapper').removeClass('active');
            $('.subnav__back').removeClass('active');
            event.stopPropagation();
        }        
     });  
    
    $('.subnav__back').click(function () {       
        $('.subnav-wrapper').removeClass('active');
        $('.subnav__back').removeClass('active');
        return false;       
    })
    
    $('.js-slider-license-2').on('init', function(event, slick){
        slideCount = slick.slideCount;
        var $el = $('.js-slider-license-2').parents('.slider-wrapper').find('.slider-nav-count__total');
          if(slideCount<10) slideCount='0' + slideCount;  
          $el.text(slideCount);
          setCurrentSlideNumber3(slick.currentSlide);
    });    
    
    
    
    $('.js-slider-license-2').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:4,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendDots:$('.js-slider-license-2').parents('.slider-wrapper').find('.slider-nav'),
        appendArrows:$('.js-slider-license-2').parents('.slider-wrapper').find('.slider-nav'),
         swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
                
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
                
            },
        ]
    });
    
    $('.js-slider-license-2').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      setCurrentSlideNumber3(nextSlide);
    });
    
    function setCurrentSlideNumber3(currentSlide) {
        var $el = $('.js-slider-license-2').parents('.slider-wrapper').find('.slider-nav-count__current');
        currentSlide = currentSlide + 1;
        if(currentSlide<10) currentSlide='0' + currentSlide;  
        $el.text(currentSlide);
    }
    
    
    $('.js-photos').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5L5 10L6.46667 8.53333L4 6H38.6667V4H4L6.46667 1.46667L5 0L0 5Z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="39" height="10" viewBox="0 0 39 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.6667 5L33.6667 10L32.2 8.53333L34.6667 6H2.28882e-05V4H34.6667L32.2 1.46667L33.6667 0L38.6667 5Z"/></svg></button>',
        appendArrows:$('.js-photos').parents('.slider-wrapper').find('.slider-nav'),
         swipeToSlide:true,
        responsive: [   
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
                
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth:true,
                }
                
            },
        ]
    });
    
    $('.projects-sort__title').click(function () {       
        $(this).next('.projects-sort-list').toggle();
        return false;       
    })
    
    $(document).bind("click touchstart",function(event) {
       
            if ($(event.target).closest(".projects-sort__title, .projects-sort-list").length) return;
            $('.projects-sort-list').hide();
            event.stopPropagation();
              
     }); 
    
    
    if($('#map').length){
        loadScript();
    }
    
    
});


function initMap() {
    if($('#map').length){
        var icon='img/icon-map.png';
      const myLatLng = { lat:55.7641481, lng: 37.5961366 };
      const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 10,
            center: myLatLng,
            disableDefaultUI: true,
          styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
      });
      new google.maps.Marker({
        position: myLatLng,
        map:map,
        icon:icon
      });
    }
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyXAJNEvQPZcZAxNHixA3k5fwEwiBu3MM&callback=initMap&libraries=&v=weekly';
    document.body.appendChild(script);
}

