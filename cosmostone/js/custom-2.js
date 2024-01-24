 $(document).ready(function(){
    
     
    $(".pr-sort__title").click(function(){ 
        if(!$(this).hasClass('active')){
            $(this).addClass('active');     
            $(this).next('.pr-sort__content').slideDown();     
        }else{
            $(this).removeClass('active');     
            $(this).next('.pr-sort__content').slideUp();     
        }
       
        return false;
    });
     
     $(document).bind("click touchstart",function(event) {
        if ($(event.target).closest(".pr-sort__title, .pr-sort").length) return;
        $(".pr-sort__title").removeClass('active');     
        $('.pr-sort__content').slideUp();   
         event.stopPropagation();
      });
     
     /* mobile filter*/
     
    $('.js-filter-mobile-new').on('click', function(event) {
        if(!$('body').hasClass('filter-open')){
            event.preventDefault();		
            $('body').addClass('filter-open');
            $('.aside-inner').addClass('aside-active');
            var h=$('#aside-filter').innerHeight();
            $('.section-aside').css('min-height', h + 'px');
        }
	});	

	$('.js-filter-close').on('click', function(event) {        
        if($('body').hasClass('filter-open')){ 
            $('body').removeClass('filter-open');
            $('.aside-inner').removeClass('aside-active');					
        }
        return false;        
	});
     
     $(document).bind("click",function(event) {

         
        if ($(event.target).closest(".aside, .js-filter-mobile-new, .aside-filter-price, .mobile-filter-title").length) return;
        if($('body').hasClass('filter-open')){  
            event.preventDefault();
            $('body').removeClass('filter-open');
            $('.aside-inner').removeClass('aside-active');	
            //event.preventDefault();
            event.stopPropagation();
            return false;
        }
         event.stopPropagation();
      });
     
    /* mobile filter*/
     
     
     $('[data-fancybox="images-product"]').fancybox({
      //infobar : false,
      //buttons : false,
         arrows:false,
        
      afterLoad : function( instance, current ) {
        if ( instance.group.length > 1 && current.$content ) {
          current.$content.append('<a data-fancybox-next class="button-next" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"></path></svg></a> <a data-fancybox-prev class="button-prev" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"></path></svg></a>');
        }

        //current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;">×</a>');
      }
    })
     
     $('.js-product-sort').on('click', function(event) {
         $('body').toggleClass('aside-product-sort-open');
         $('.aside-product-sort').slideToggle();
         return false;
	});	
     
     $(document).bind("click",function(event) {         
        if ($(event.target).closest(".aside-product-sort, .js-product-sort").length) return;
        if($('body').hasClass('aside-product-sort-open')){              
            $('body').removeClass('aside-product-sort-open');
            $('.aside-product-sort').slideUp();
            return false;
        }
         event.stopPropagation();
      });
     
     
 });
