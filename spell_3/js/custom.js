$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
    setTimeout(function(){
        $('body').removeClass('loaded');
    }, 100);
    
    
    if(window.innerWidth>991){    
        //$('header').addClass('fadeInDown animated').css('animation-delay', '0.2s');
    }
    
    new WOW().init({});

 
});


$(document).ready(function(){
    
     var ll = new LazyLoad({
        elements_selector: ".lazyload",
    });
    
    ll.loadAll();

	function showDiv() {
		if ($(window).scrollTop() > 80) {			
			$("#header").addClass('fixed');
			$("body").addClass('body-fixed');
		}else {
            $("#header").removeClass('fixed');	
            $("body").removeClass('body-fixed');
		}
	}
    showDiv();
	$(window).scroll(showDiv);	    
    
    $.mask.definitions['9'] = false;
    $.mask.definitions['q'] = "[0-9]";
    $(".input-phone").mask("+380 (qq) qqq-qq-qq", {placeholder:"_"});
    
    $('select').selectric({
        disableOnMobile: false,
        nativeOnMobile: false,
        arrowButtonMarkup: '<b class="button"><svg width="16" height="9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.688 8.958l.683-.73L15.377.73 14.694 0 7.688 7.497.683 0 0 .73l7.006 7.497.682.731z"/></svg></b>',
        onChange: function() {
            $(this).parents('.selectric-wrapper').addClass('selectric-wrapper-selected');
        }        
    });
    
    var gallery=new Swiper('.js-slider-gifts', {
        slidesPerView:3,
        spaceBetween:0,
        autoplay:true,
        speed:600,             
        effect:"coverflow",
        centeredSlides:true,
        loop: true,
        coverflowEffect:{
            rotate: 0,
            stretch: 50,
            depth: 220,
            modifier: 1,
            slideShadows:false
        },
        navigation: {
            nextEl: '.js-slider-gifts .swiper-button-next',
            prevEl: '.js-slider-gifts .swiper-button-prev',
        },
         pagination: {
            el: ".js-slider-gifts .swiper-pagination",   
            clickable: true,
        },
        breakpoints:{
            767:{
                effect:"none",
                slidesPerView:1
            },
    
            991:{
                effect:"none",
         }
        }
    });
    

    $('.form-subscribe').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);
            },
            highlight: function(element) {
                $(element).parents('.form-col').addClass('form-col_error');
            },
            unhighlight: function(element) {
                $(element).parents('.form-col').removeClass('form-col_error');
            },
            rules: {
                'email': { required: true, email: true },
            },
            messages: {               
                'email': { required: "Це поле обов’язкове", email: "Дані введено не вірно" },
            },
            submitHandler: function(form){
               form.submit();                
            }
         });
    });
    
    $('.form-phone').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);
            },
            highlight: function(element) {
                $(element).parents('.form-col').addClass('form-col_error');
            },
            unhighlight: function(element) {
                $(element).parents('.form-col').removeClass('form-col_error');
            },
            rules: {
                'phone': { required: true},
            },
            messages: {               
                'phone': { required: "Це поле обов’язкове"},
            },
            submitHandler: function(form){
               form.submit();                
            }
         });
    });
    

    $('.form-contact').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            highlight: function(element) {
                $(element).parents('.form-col').addClass('form-col_error');
            },
            unhighlight: function(element) {
                $(element).parents('.form-col').removeClass('form-col_error');
            },
            rules: {
                'name': "required",
                'phone': "required",
                'email': { required: true, email: true },
                'type': "required"               
            },
            messages: {
                'name': "Дані введено не вірно/Це поле обов’язкове",
                'phone': "Дані введено не вірно/Це поле обов’язкове",
                'type': "Дані введено не вірно/Це поле обов’язкове",
                'email': { required: "Дані введено не вірно/Це поле обов’язкове", email: "Дані введено не вірно/Це поле обов’язкове" },
            },
            submitHandler: function(form){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });              
            }
         });
    });
        
    $('.form-contact-phone').each(function() {  
        $(this).validate({  
             ignore: ':hidden:not(select)',
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.form-col').append(error);                                  
            },
            highlight: function(element) {
                $(element).parents('.form-col').addClass('form-col_error');
            },
            unhighlight: function(element) {
                $(element).parents('.form-col').removeClass('form-col_error');
            },
            rules: {
                'name': "required",
                'phone': "required"             
            },
            messages: {
                'name': "Дані введено не вірно/Це поле обов’язкове",
                'phone': "Дані введено не вірно/Це поле обов’язкове"
            },
            submitHandler: function(form){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });              
            }
         });
        
    });
    
    $('select').on('selectric-change', function() { 
        $(this).valid(); 
    });
    
     $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false        
    });
   
    $('.mobile-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            $('.sidebar').show();
            $('.mobile-trigger').addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').hide();
            $('.mobile-trigger').removeClass('is-active');
        }
        return false;
	});
    
    $('.logos').slick({
        infinite: true,
        arrows:false,
        dots:false,
        slidesToShow:1,
        slidesToScroll: 1,
        swipeToSlide:true,
         responsive: [
             {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 991,
                settings: {
                   slidesToShow: 3,    
                    //variableWidth:true, 
                    centerMode:true,
                }
            },
            {
                breakpoint: 639,
                settings: {
                   slidesToShow: 2,    
                    //variableWidth:true, 
                    centerMode:true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                   slidesToShow: 1,    
                    variableWidth:true, 
                    centerMode:true,
                }
            }
        ]
    });


});