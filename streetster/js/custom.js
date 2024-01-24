$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});



$(document).ready(function(){
    
    function showDiv() {
		if ($(window).scrollTop() > 0) {			
			$("#header").addClass('fixed');
		}else {
            $("#header").removeClass('fixed');			
		}
	}
    showDiv();
	$(window).scroll(showDiv);	
    
    
    $('.js-slider-catalog').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,
        fade:false,
        variableWidth:true,
        centerMode:true,
        prevArrow:'<button type="button" class="slick-prev"><span class="icon-arrow-left"></button>',
        nextArrow:'<button type="button" class="slick-next"><span class="icon-arrow-right"></button>',
        responsive: [                
            {
                breakpoint: 992,
                settings: {
                    
                }
            }
        ]
    });
    
     $('.js-slider-news .y-row').slick({
        infinite: true,
        arrows:true,
        dots:false,
        slidesToShow:3,
        slidesToScroll: 1,
        fade:false,
        prevArrow:'<button type="button" class="slick-prev"><span class="icon-arrow-left"></button>',
        nextArrow:'<button type="button" class="slick-next"><span class="icon-arrow-right"></button>',
        responsive: [                
            {
                breakpoint: 992,
                settings: {
                    slidesToShow:2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    });
    
    $(document).on('change keydown paste input','.header-search__input',function(){ 
        if($(this).val().length>1){
            $(this).parents('.header-search').addClass('active');
            $(this).parents('.header-search').find('.search-hints').slideDown();
            $('.main-wrapper').addClass('main-wrapper-search');
        }
        else{
            $(this).parents('.header-search').find('.search-hints').slideUp();
            $(this).parents('.header-search').removeClass('active');
            $('.main-wrapper').removeClass('main-wrapper-search');
        }   
    });    
    
    $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-search, .search-hints").length) return;
         $('.header-search').removeClass('active');
         $('.search-hints').hide();
         $('.main-wrapper').removeClass('main-wrapper-search');
         event.stopPropagation();
     });
    
    
    $('.header-cart__link').on('click', function(event) {
        $('.header-cart-box').toggle();
        $('.main-wrapper').toggleClass('main-wrapper-cart');
        $('.fixed-panel').removeClass('active');
        $('body').removeClass('menu-open');        
        $('.header-menu').removeClass('is-active');
        return false;
    });

    $('.header-cart-info__close').on('click', function(event) {
        $('.header-cart-box').hide();
        $('.main-wrapper').removeClass('main-wrapper-cart');
        return false;
    });

    
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".header-cart__link, .header-cart-box").length) return;
        $('.header-cart-box').hide();
        $('.main-wrapper').removeClass('main-wrapper-cart');
         event.stopPropagation();
      });
    
    $(".js-aside-menu").click(function(){    
        $('#fixed-panel').addClass('active');
        $('body').addClass('menu-open');  
        $('.header-menu').addClass('is-active');
        return false;
    });  
     
     $('.js-aside-menu-close').click(function(){    
         $('#fixed-panel').removeClass('active');
         $('body').removeClass('menu-open');    
         $('.header-menu').removeClass('is-active');
        return false;
     });
    
    $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".fixed-panel").length) return;
        $('.fixed-panel').removeClass('active');
        $('body').removeClass('menu-open');        
        $('.header-menu').removeClass('is-active');
        event.stopPropagation();
      });
    
    
    $('.form-subscribe').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {              
                's-email': { required: true, email: true },
            },
            messages: {                
                's-email': { required: "", email: "" },
            },
            submitHandler: function(form){
                form.submit();
                
            }
         });
    });
    
    
    $('.header-search-mobile').on('click', function(event) {
        $('.header__center').toggleClass('header__center_active');
        $('body').toggleClass('mobile-search');    
        return false;
    });
    
    
    $('.js-slider-product').each(function() {
        $(this).slick({
            infinite: true,
            arrows:true,
            dots:true,
            slidesToShow:1,
            slidesToScroll: 1,
            fade:false,
            prevArrow:'<button type="button" class="slick-prev"><span class="icon-arrow-left"></button>',
            nextArrow:'<button type="button" class="slick-next"><span class="icon-arrow-right"></button>',
            appendDots:$(this).next('.slider-product-dots'),
            responsive: [                
                {
                    breakpoint: 992,
                    settings: {

                    }
                }
            ]
        })
    })
    
    
    $('input[type=radio][name=color]').on('change', function() {
       $('.product-color-value').text($(this).attr('data-color'));
    });
    $('input[type=radio][name=size]').on('change', function() {
       $('.product-size-value').text($(this).attr('data-size'));
    });
    
    $('.product-add-item__button').on('click', function(event) {
        $(this).toggleClass('added');
        return false;
    })
    
    $('.calc-form__minus').click(function() {   
        var old_v=$(this).parents('.calc-form').find('.calc-form__input').val();     
        var new_v=parseInt(old_v)-1;
        if(new_v<1){
            new_v=1            
        }
        $(this).parents('.calc-form').find('.calc-form__input').val(new_v);
        return false;
    });
    $('.calc-form__plus').click(function() {   
        var old_v=$(this).parents('.calc-form').find('.calc-form__input').val();     
        var new_v=parseInt(old_v)+1;
        if(new_v<1){
            new_v=1            
        }
        $(this).parents('.calc-form').find('.calc-form__input').val(new_v);
        return false;
    });
    
    if($('.custom-select').length){
        $('.custom-select').selectric({
            maxHeight: 220,
            disableOnMobile: false,
            nativeOnMobile: true
          });
    }
    
    $(".input-phone").mask("+38 (999) 999 99 99");
    
    
    $('.form-checkout').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {     
                name:  { required: true },
                lastname:  { required: true },
                phone:  { required: true },
                email: { required: true, email: true },
                 delivery:  { required: true },
                 payment:  { required: true },
                 city:  { required: true },
                 address:  { required: true },
            },
            messages: {                
                'email': { required: "", email: "" },
                 name:  { required: "" },
                lastname:  { required: "" },
                phone:  { required: "" },
                 delivery:  { required: "" },
                 payment:  { required: "" },
                 city:  { required: ""},
                 address:  { required: ""},
            },
             highlight: function(element, errorClass, validClass) {
                $(element).addClass("error");
                $(element).parents('.selectric-custom-select').addClass("error");
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).removeClass("error");
                $(element).parents('.selectric-custom-select').removeClass("error");
            },
            submitHandler: function(form){
                form.submit();
                
            }
         });
    });
    
    $('.form-checkout select').on('change', function() { // fires when the value changes
        $(this).valid(); // trigger validation on hidden select
    });

   
    
    
 });
