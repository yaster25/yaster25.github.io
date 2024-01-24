$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


$(document).ready(function(){
    
    
    if($('.js-slider-main').length){             
        $('.js-slider-main').slick({
            infinite: true,
            arrows:false,
            dots:true,
            slidesToShow:1,
            slidesToScroll: 1,
            fade:true,          
            autoplay:true
        });   
    }
    
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    
    $(".input-phone").mask("+7 (999) 999-99-99").on('click', function () {
        if ($(this).val() === '+7 (___) ___-__-__') {
           $(this).setCursorPosition(4);
        }
    });
    
    $('.form-consult').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);
            },
            rules: {              
                name: { required: true},
                phone: { required: true}
            },
            messages: {                
                name: { required: "Обязательное поле" },
                phone: { required: "Обязательное поле" }
            },
            submitHandler: function(form){
                form.submit();
            }
         });
    });
    
    
    $('.menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').addClass('active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active');
            
            $('.nav').removeClass('nav_subnav-open');
            $('.nav-item_parent').removeClass('nav-item_subnav-open');
            $('.subnav-wrapper').hide();
            
        }
        return false;
	});
    
    $('.main-wrapper__before').on('click', function(event) {
        if($('body').hasClass('menu-open')){
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active');
        }
        return false;
    });
    
    if($('.js-slider-doctors').length){
        $('.js-slider-doctors .y-row').slick({
            infinite:true,
            arrows:false,
            dots:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            swipeToSlide:true,           
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3, 
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2, 
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }); 

        $(window).on('resize orientationchange', function() {
          $('.js-slider-doctors .y-row').slick('resize');
        });
        
    }
    
    if($('.js-slider-reviews').length){
        $('.js-slider-reviews .y-row').slick({
            infinite:true,
            arrows:false,
            dots:true,
            slidesToShow: 2,
            slidesToScroll: 1,
            swipeToSlide:true,           
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2, 
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1, 
                    }
                }
            ]
        }); 

        $(window).on('resize orientationchange', function() {
          $('.js-slider-reviews .y-row').slick('resize');
        });
        
    }
    
    if($('.js-slider-sertificates').length){
        $('.js-slider-sertificates .y-row').slick({
            infinite:true,
            arrows:false,
            dots:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide:true,           
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4, 
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3, 
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2, 
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        slidesToShow: 1, 
                    }
                }
            ]
        }); 

        $(window).on('resize orientationchange', function() {
          $('.js-slider-sertificates .y-row').slick('resize');
        });
        
    }
    
    $('.text-overflow__more').on('click', function(event) {
        $(this).parents('.text-overflow').toggleClass('show');
        if($(this).parents('.text-overflow').hasClass('show')){
            $(this).text($(this).attr('data-hide'));
        }else{
            $(this).text($(this).attr('data-show'));
        }
       return false; 
    });
    
    
    $('.nav-item_parent .nav-item__link').on('click', function(event) {
        if(window.innerWidth<992){
            if($(this).parent('.nav-item_parent').hasClass('nav-item_subnav-open')){
                $(this).parents('.nav').removeClass('nav_subnav-open');
                $(this).parent('.nav-item_parent').removeClass('nav-item_subnav-open');
                $(this).next('.subnav-wrapper').hide();
            }
            else{
                $(this).parents('.nav').addClass('nav_subnav-open');
                $(this).parent('.nav-item_parent').addClass('nav-item_subnav-open');
                $(this).next('.subnav-wrapper').fadeIn(300);
            }
            
            return false;
        }
    });
    
    function showDiv() {
		if ($(window).scrollTop() > 60) {			
			$("#header").addClass('fixed');
			$("body").addClass('body-fixed');
		}else {
            $("#header").removeClass('fixed');	
            $("body").removeClass('body-fixed');
		}
        
	}
    showDiv();
	$(window).scroll(showDiv);
    
    $('.slick-cloned').removeAttr('data-fancybox'); 
    $('.slick-cloned a').removeAttr('data-fancybox'); 
    
    $('#aside').stickySidebar({
        topSpacing: 30,
        bottomSpacing: 30,
        minWidth: 991
    });
    
    $('.services-list__title').on('click', function(event) {
        if(window.innerWidth<992){
            $(this).toggleClass('active');
            $(this).next('.services-list__content').slideToggle();
           return false; 
        }
    });
    
    $('.header__search-mobile').on('click', function(event) {
        $('.header__search').toggleClass('active');
        return false;
    });
    
    $('.scroll-nav-item__link').click(function() {          
		  var target = $(this.hash);
		  if (target.length) {              
            var hh=0;              
            if(window.innerWidth<992){
                hh=95;
            }
			var tt= target.offset().top - hh;					 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
    });
    
    $('.prices-item-list__more a').on('click', function(event) {
        $(this).parents('.prices-item-list__more').prev('.prices-item-list').slideToggle();
        $(this).toggleClass('show');
        if($(this).hasClass('show')){
            $(this).text($(this).attr('data-hide'));
        }else{
            $(this).text($(this).attr('data-show'));
        }
       return false; 
    });
    
    if($('.js-scroll-nav').length){
        $('.js-scroll-nav').slick({
            infinite:false,
            arrows:true,
            dots:false,
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth:true,
            swipeToSlide:true, 
            prevArrow:'<button type="button" class="slick-prev"><svg width="9" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 1 2 7l6 6"  stroke-width="2" stroke-linecap="round"/></svg></button>',
            nextArrow:'<button type="button" class="slick-next"><svg width="9" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 1 6 6-6 6" stroke-width="2" stroke-linecap="round"/></svg></button>',
            responsive: [            
                {
                    breakpoint: 9999,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1 
                    }
                }
            ]
        }); 

        $(window).on('resize orientationchange', function() {
          $('.js-scroll-nav').slick('resize');
        });
        
    }

});


