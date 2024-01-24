$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
    new WOW().init({ });
    
    $('body').removeClass('loaded');
    
});


$(document).ready(function(){
    
    var ll = new LazyLoad({
            elements_selector: ".lazyload",
    });
    
    ll.loadAll();
    
  
    setTimeout(function(){
        $('body').removeClass('loaded');        
    }, 2000);

    
    $(window).scroll(function(){
        $('.title-box .title').each(function(){
          var windowHeight = $(window).height();
          var scroll = $(window).scrollTop();
          var hogePoint = $(this).offset().top;
          if (scroll > hogePoint - windowHeight){
            $(this).css('opacity',1).textillate({
              in: {
                effect: 'fadeInUp',
                delay: 15,
                delayScale: 3,
              }});
          }
        });
      });
   
    if($('.js-slider-news').length){
    $('.js-slider-news .y-row').slick({
        infinite:true, 
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" clip-rule="evenodd"" d="M12.1,1.4c0.6,0.6,0.6,1.5,0,2.1l-7,7H26c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5H5.1l7,7c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-9.5-9.5c-0.6-0.6-0.6-1.5,0-2.1L10,1.4C10.6,0.8,11.5,0.8,12.1,1.4z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5147 1.39344L27.0607 10.9394C27.6464 11.5252 27.6464 12.4749 27.0607 13.0607L17.5147 22.6066C16.9289 23.1924 15.9792 23.1924 15.3934 22.6066C14.8076 22.0209 14.8076 21.0711 15.3934 20.4853L22.3787 13.5L1.5 13.5C0.671574 13.5 1.03809e-06 12.8285 9.65667e-07 12C8.93244e-07 11.1716 0.671576 10.5 1.5 10.5L22.3787 10.5L15.3934 3.51476C14.8076 2.92897 14.8076 1.97923 15.3934 1.39344C15.9792 0.807653 16.9289 0.807653 17.5147 1.39344Z"/></svg></button>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
            }
        },
       {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite:true, 
              }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                infinite:true, 
              }
        }
        ]
    });
    }
    
    if($('.js-distributors-slider').length){
    $('.js-distributors-slider').slick({
        infinite:true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" clip-rule="evenodd"" d="M12.1,1.4c0.6,0.6,0.6,1.5,0,2.1l-7,7H26c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5H5.1l7,7c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-9.5-9.5c-0.6-0.6-0.6-1.5,0-2.1L10,1.4C10.6,0.8,11.5,0.8,12.1,1.4z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5147 1.39344L27.0607 10.9394C27.6464 11.5252 27.6464 12.4749 27.0607 13.0607L17.5147 22.6066C16.9289 23.1924 15.9792 23.1924 15.3934 22.6066C14.8076 22.0209 14.8076 21.0711 15.3934 20.4853L22.3787 13.5L1.5 13.5C0.671574 13.5 1.03809e-06 12.8285 9.65667e-07 12C8.93244e-07 11.1716 0.671576 10.5 1.5 10.5L22.3787 10.5L15.3934 3.51476C14.8076 2.92897 14.8076 1.97923 15.3934 1.39344C15.9792 0.807653 16.9289 0.807653 17.5147 1.39344Z"/></svg></button>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
            }
        },
       {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
              }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
              }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
               infinite:true, 
              }
        }
        ]
    });
    }
    if($('.js-slider-sertificates').length){
    $('.js-slider-sertificates').slick({
        infinite:true, 
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" clip-rule="evenodd"" d="M12.1,1.4c0.6,0.6,0.6,1.5,0,2.1l-7,7H26c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5H5.1l7,7c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-9.5-9.5c-0.6-0.6-0.6-1.5,0-2.1L10,1.4C10.6,0.8,11.5,0.8,12.1,1.4z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5147 1.39344L27.0607 10.9394C27.6464 11.5252 27.6464 12.4749 27.0607 13.0607L17.5147 22.6066C16.9289 23.1924 15.9792 23.1924 15.3934 22.6066C14.8076 22.0209 14.8076 21.0711 15.3934 20.4853L22.3787 13.5L1.5 13.5C0.671574 13.5 1.03809e-06 12.8285 9.65667e-07 12C8.93244e-07 11.1716 0.671576 10.5 1.5 10.5L22.3787 10.5L15.3934 3.51476C14.8076 2.92897 14.8076 1.97923 15.3934 1.39344C15.9792 0.807653 16.9289 0.807653 17.5147 1.39344Z"/></svg></button>',
        responsive: [
        {
            breakpoint: 992,
            settings: {
               slidesToShow: 3,
            }
        },
       {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
              }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
              }
        },{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
               infinite:true, 
              }
        }
        ]
    });
    }
    
    $('.menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').addClass('active');
            $('.menu-trigger').addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active');
            $('.sidebar-form').removeClass('active');
            $('.menu-trigger').removeClass('is-active');
        }
        return false;
	});
    
    $(document).bind("click touchstart",function(event) {
        if($('body').hasClass('menu-open')){
            if ($(event.target).closest(".sidebar, .sidebar-form, .menu-trigger").length) return;
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active') ;
            $('.sidebar-form').removeClass('active') ;
            $('.menu-trigger').removeClass('is-active');
            event.stopPropagation();
        }        
     });   
    
    $('.js-consultant-more').on('click', function(event) {       
       $(this).parents('.section').find('.consultant .consultant_hidden').removeClass('consultant_hidden');  
        return false;
	});
    
    $('.slick-cloned a').removeAttr('data-fancybox');
    
    if($('.js-slider-production').length){
    $('.js-slider-production').slick({
        infinite:true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots:false,
        swipeToSlide:true,
        prevArrow:'<button type="button" class="slick-prev"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill-rule="evenodd" clip-rule="evenodd"" d="M12.1,1.4c0.6,0.6,0.6,1.5,0,2.1l-7,7H26c0.8,0,1.5,0.7,1.5,1.5c0,0.8-0.7,1.5-1.5,1.5H5.1l7,7c0.6,0.6,0.6,1.5,0,2.1c-0.6,0.6-1.5,0.6-2.1,0l-9.5-9.5c-0.6-0.6-0.6-1.5,0-2.1L10,1.4C10.6,0.8,11.5,0.8,12.1,1.4z"/></svg></button>',
        nextArrow:'<button type="button" class="slick-next"><svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5147 1.39344L27.0607 10.9394C27.6464 11.5252 27.6464 12.4749 27.0607 13.0607L17.5147 22.6066C16.9289 23.1924 15.9792 23.1924 15.3934 22.6066C14.8076 22.0209 14.8076 21.0711 15.3934 20.4853L22.3787 13.5L1.5 13.5C0.671574 13.5 1.03809e-06 12.8285 9.65667e-07 12C8.93244e-07 11.1716 0.671576 10.5 1.5 10.5L22.3787 10.5L15.3934 3.51476C14.8076 2.92897 14.8076 1.97923 15.3934 1.39344C15.9792 0.807653 16.9289 0.807653 17.5147 1.39344Z"/></svg></button>',
        appendArrows:$('.slider-production-arrows'),
        fade:true
    });
    }
    
    $('.js-aside-title').on('click', function(event) {     
        if($(window).innerWidth()<768){
            $(this).next('.aside-list').toggleClass('active');
        }      
        return false;
	});
       
    if($('.product-images-nav__item').length>3){
        $('.product-images-nav').slick({
            infinite:true, 
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            swipeToSlide:true
        });
    }

    $('.product-images-nav__item').on('click', function(event) {     
        $('.product-images-nav__item').removeClass('active');
        $(this).addClass('active');
        $('.product-images__large').html($(this).html());
        return false;
	});
    
     if($('#aside').length){ 
          var stickySidebar = new StickySidebar('#aside', {
            topSpacing: 150,
            bottomSpacing: 20,
            minWidth: 767,
            containerSelector: '.section-aside',
          });
     }
    
    $('.distributors-item__title').on('click', function(event) {     
        $(this).toggleClass('active');
        $(this).next('.distributors-item__content').slideToggle();
        return false;
	});
    
    $('.product-variants__item').on('click', function(event) {     
        $('.product-variants__item').removeClass('active');
        $(this).addClass('active');      
        return false;
	});
    

    if($('#map').length){
        loadScript();
    }
    
});

function initMap() {
    if($('#map').length){
      const myLatLng = { lat:50.467214, lng: 30.4709563 };
      const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 17,
            center: myLatLng,
            disableDefaultUI: true,
      });
      new google.maps.Marker({
        position: myLatLng,
        map,
      });
    }
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAyXAJNEvQPZcZAxNHixA3k5fwEwiBu3MM&callback=initMap&libraries=&v=weekly';
    document.body.appendChild(script);
}

