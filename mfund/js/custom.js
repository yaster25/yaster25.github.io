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
        $('header').addClass('fadeInDown animated').css('animation-delay', '0.2s');
    }
    if(window.innerWidth>991){
        new WOW().init({
            mobile:false
        });
    }
 
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
    
    $('.scroll').click(function() {          
		  var target = $(this.hash);
		  if (target.length) {
			var tt= target.offset().top - $('.header').innerHeight();	
              
            if($('body').hasClass('menu-open')){
                $('body').removeClass('menu-open');
                $('.sidebar').hide();
                $('.mobile-trigger').removeClass('is-active');
            }
              
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
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
    
    $('.form-invite').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {
                'invite-name': "required",
                'invite-email': { required: true, email: true },
            },
            messages: {
                'invite-name': "Введите Ваше имя",
                'invite-email': { required: "Введите Ваше e-mail", email: "Введите правильный e-mail" },
            },
            submitHandler: function(form){
                if($(form).hasClass('form-invite-popup')){
                    $(form).parents('.popup').find('.popup-thank').fadeIn();
                }else{
                    $(form).parents('.section-top-form').find('.section-top-form-thank').fadeIn();
                }
                
            }
         });
    });
    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false       
    });
    
    $('.form-contact').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parent().append(error);
            },
            rules: {
                'contact-name': "required",
                'contact-phone': "required",
                'contact-message': "required",
            },
            messages: {
                'contact-name': "Введите Ваше имя",
                'contact-phone': "Введите Ваш телефон",
                'contact-message': "Введите Ваше сообщение",
            },
            submitHandler: function(form){
                $.fancybox.open({
                    src  : '#popup-contact',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false,                  
                    
                });
                
            }
         });
    });


});