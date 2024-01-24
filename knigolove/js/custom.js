$(document).ready(function () {

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.header').addClass('header-fixed');
		} else {
			$('.header').removeClass('header-fixed');
		}

	});

	// lang dropdown
	$('.lang__title').click(function () {
		var el = $(this).parents('.lang');
		if (el.hasClass('active')) {
			el.removeClass('active');
			el.find('.lang__content').fadeOut(100);
		} else {
			el.addClass('active');
			el.find('.lang__content').fadeIn(100);
		}
		return false;
	});

	$(document).bind("click touchstart", function (event) {
		if ($(event.target).closest(".lang").length) return;
		$('.lang').removeClass('active');
		$('.lang__content').hide();
		event.stopPropagation();
	});
	// end lang dropdown

	// //main slider
	$('.js-slider-main').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		fade: false,
		pauseOnHover: true,
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></button>'
	});
	// //end main slider

	// betseller slider
	$('.js-slider-products .y-row').each(function () {
		var options = {
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			centerMode: false,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			swipeToSlide: true,
			prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></button>',
			appendArrows: $(this).parents('.slider-container').find('.slider-nav'),
			responsive: [
				{
					breakpoint: 1280,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 3,
						adaptiveHeight: true,
					}
				},
				{
					breakpoint: 577,
					settings: {
						slidesToShow: 2,
						adaptiveHeight: true,
					}
				}
			]

		};
		$(this).on('init', function (slick) { }).on('beforeChange', function (slick, currentSlide, nextSlide) { }).slick(options);


	})
	//end bestseller slider

	// blog slider
	$('.js-slider-blog .y-row').each(function () {
		$(this).slick({
			infinite: true,
			arrows: true,
			dots: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnHover: true,
			swipeToSlide: true,
			//variableWidth: true,
			prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></button>',
			nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></button>',
			appendArrows: $(this).parents('.slider-container').find('.slider-nav'),
			responsive: [
				{
					breakpoint: 1440,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						variableWidth: true,
					}
				}
			]
		});
	})
	//end blog slider

	//product fav
	$('.product__fav').on('click', function (event) {
		$(this).toggleClass('active');
		return false;
	});
	//end product fav

	// footer nav
	$('.footer__title--toggle').click(function () {
		if (window.innerWidth < 768) {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next('.footer-nav').slideUp();
			} else {
				$(this).addClass('active');
				$(this).next('.footer-nav').slideDown();
			}
		}

		return false;
	});
	// end footer nav


	//mobile menu
	$('.menu-trigger').on('click', function (event) {
		if (!$('body').hasClass('menu-open')) {
			event.preventDefault();
			$('body').addClass('menu-open');
			$('.aside').addClass('active');
			$('.menu-trigger').addClass('is-active');
			$('.main-wrapper__before').fadeIn();
		} else {
			$('body').removeClass('menu-open');
			$('.aside').removeClass('active');
			$('.menu-trigger').removeClass('is-active');
			$('.main-wrapper__before').fadeOut();
		}
		return false;
	});
	$('.main-wrapper__before').on('click', function (event) {
		$('body').removeClass('menu-open');
		$('.aside').removeClass('active');
		$('.menu-trigger').removeClass('is-active');
		$('.main-wrapper__before').fadeOut();
		return false;
	});
	//end mobile menu

	// catalog sort
	$('.sort__title').click(function () {
		var el = $(this).parents('.sort');
		if (el.hasClass('active')) {
			el.removeClass('active');
			el.find('.sort__content').fadeOut(100);
		} else {
			//if (window.innerWidth > 991) {
			$('.sort').removeClass('active');
			$('.sort__content').fadeOut(100);
			//}
			el.addClass('active');
			el.find('.sort__content').fadeIn(200);
		}
		return false;
	});

	$(document).bind("click touchstart", function (event) {
		if ($(event.target).closest(".sort").length) return;
		//if (window.innerWidth > 991) {
		$('.sort').removeClass('active');
		$('.sort__content').hide();
		//}
		event.stopPropagation();
	});
	//end catalog sort

	//mobile filter
	$('.js-filter-mobile').on('click', function (event) {
		if (!$('body').hasClass('filter-open')) {
			event.preventDefault();
			$('body').addClass('filter-open');
			$('.section-catalog__aside').addClass('active');
			$('.main-wrapper__before').fadeIn();
		} else {
			$('body').removeClass('filter-open');
			$('.section-catalog__aside').removeClass('active');
			$('.main-wrapper__before').fadeOut();
		}
		return false;
	});
	$('.main-wrapper__before, .filters__close').on('click', function (event) {
		$('body').removeClass('filter-open');
		$('.section-catalog__aside').removeClass('active');
		$('.main-wrapper__before').fadeOut();
		return false;
	});
	//end mobile filter

	//main product slider
	$('.slider-main-product-images').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		asNavFor: '.slider-main-product-images-nav',
	});
	$('.slider-main-product-images-nav').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-main-product-images',
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		swipeToSlide: true,
		verticalSwiping: true,
		prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3.06 11.288 4.89-4.89a1.49 1.49 0 0 1 2.1 0l4.89 4.89"/></svg></button>',
		nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.94 6.712-4.89 4.89a1.49 1.49 0 0 1-2.1 0l-4.89-4.89"/></svg></button>',
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					vertical: false,
					verticalSwiping: false,
					prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></button>',
					nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></button>',
				}
			},
			{
				breakpoint: 1000,
				settings: {
					vertical: true,
					prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m3.06 11.288 4.89-4.89a1.49 1.49 0 0 1 2.1 0l4.89 4.89"/></svg></button>',
					nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path  stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14.94 6.712-4.89 4.89a1.49 1.49 0 0 1-2.1 0l-4.89-4.89"/></svg></button>',
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,

				settings: {
					slidesToShow: 3,
					vertical: false,
					verticalSwiping: false,
					prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></button>',
					nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></button>',
				}
			},
		]
	});

	$(".slider-main-product-images, .slider-main-product-images-nav").each(function () {
		this.slick.getSlideCount = function () {
			var _ = this,
				slidesTraversed, swipedSlide, centerOffset;

			centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

			if (_.options.swipeToSlide === true) {
				_.$slideTrack.find('.slick-slide').each(function (index, slide) {
					var offsetPoint = slide.offsetLeft,
						outerSize = $(slide).outerWidth();
					if (_.options.vertical === true) {
						offsetPoint = slide.offsetTop;
						outerSize = $(slide).outerHeight();
					}
					if (offsetPoint - centerOffset + (outerSize / 2) > (_.swipeLeft * -1)) {
						swipedSlide = slide;
						return false;
					}
				});
				slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;
				return slidesTraversed;
			} else {
				return _.options.slidesToScroll;
			}

		};

		this.slick.getNavigableIndexes = function () {
			var _ = this,
				breakPoint = 0,
				counter = 0,
				indexes = [],
				max;

			if (_.options.infinite === false) {
				max = _.slideCount;
			} else {
				breakPoint = _.options.slideCount * -1;
				counter = _.options.slideCount * -1;
				max = _.slideCount * 2;
			}
			while (breakPoint < max) {
				indexes.push(breakPoint);
				breakPoint = counter + _.options.slidesToScroll;
				counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
			}
			return indexes;
		};
	});



	//end main product slider

	//calc
	$('.calc__plus').on('click', function (event) {
		var val = $(this).parents('.calc').find('.calc__input').val();
		var new_val = parseInt(val) + 1;
		$(this).parents('.calc').find('.calc__input').val(new_val)
		return false;
	});

	$('.calc__minus').on('click', function (event) {
		var val = $(this).parents('.calc').find('.calc__input').val();
		var new_val = parseInt(val) - 1;
		if (new_val < 1) new_val = 1;
		$(this).parents('.calc').find('.calc__input').val(new_val)
		return false;
	});
	//end calc



	//main-product-text dotdot
	if ($('.main-product-info__col-1').length) {
		if (window.innerWidth > 999) {
			$('.main-product-info__col-2').height($('.main-product-info__col-1').height());
		}
	}
	if ($('.main-product-info__col-2').length) {
		if (window.innerWidth < 1000) {
			if ($('.main-product-info__col-2').height() > 517) {
				$('.main-product-info__col-2').height(517);
			}
		}
	}

	var t = $(".main-product-text").dotdotdot({
		height: "watch",
		wacth: true
	});
	var n = t.data("dotdotdot");
	$('.main-product-text__toggle').on("click", function (e) {
		e.preventDefault();
		if (t.hasClass("ddd-truncated")) {
			$('.main-product-info__col-2').addClass('height-auto');
			n.restore(), t.addClass("full-story");
			$(this).text($(this).attr('data-hide'));
		}
		else {
			$('.main-product-info__col-2').removeClass('height-auto');
			t.removeClass("full-story"), n.truncate(), n.watch();
			$(this).text($(this).attr('data-show'));
		}
	})

	$(window).on('resize', function () {

		if ($('.main-product-info__col-1').length) {
			if (window.innerWidth > 999) {
				$('.main-product-info__col-2').css('height', '');
				$('.main-product-info__col-2').height($('.main-product-info__col-1').height());

			}
		}
		if ($('.main-product-info__col-2').length) {
			if (window.innerWidth < 1000) {
				if ($('.main-product-info__col-2').height() > 517) {
					$('.main-product-info__col-2').height(517);
				}
			}
		}
		$(".main-product-text").trigger("update");
		if (t.hasClass("ddd-truncated")) {
			//n.truncate(), n.watch();
		}
	})
	// end main-product-text dotdot

	//must have products
	$(".js-toggle-text").dotdotdot({});
	//var n = t.data("dotdotdot");
	$('.js-toggle-link').on("click", function (e) {
		e.preventDefault();
		t = $(this).prev('.js-toggle-text');
		var n = t.data("dotdotdot");
		if (t.hasClass("ddd-truncated")) {
			n.restore(), t.addClass("height-auto");
			$(this).text($(this).attr('data-hide'));
		}
		else {
			t.removeClass("height-auto"), n.truncate(), n.watch();
			$(this).text($(this).attr('data-show'));
		}
	})
	//end must have products

	// product tabs
	$('.product-tabs-nav__item').on('click', function (event) {
		var tt = $(this).attr('data-tab');
		$('.product-tabs-nav__item').removeClass('active');
		$(this).addClass('active');
		$('.product-tabs-content').hide();
		$('.product-tabs-content[data-tab="' + tt + '"]').fadeIn();
		$(".js-toggle-text").dotdotdot({});
		return false;
	});

	$('.rating__reviews').on('click', function (event) {
		$('.product-tabs-nav__item[data-tab="tab-reviews"]').click();
		$('body,html').animate({ scrollTop: $('.product-tabs').offset().top }, 400);

		return false;
	});
	// end product tabs

	// fancybox popup 
	$('.js-popup').fancybox({
		touch: false,
		closeExisting: true,
		autoFocus: false,
		btnTpl: {
			smallBtn:
				'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.531 17 14-14m0 14-14-14"/></svg>' +
				"</button>"
		},
		afterLoad: function () {

		}
	});
	$('.js-popup-close').click(function () {
		$.fancybox.close();
		return false;
	})

	$().fancybox({
		selector: '.js-popup-gallery:not(.slick-cloned)',
		hash: false,
		baseClass: "custom-gallery",
		thumbs: {
			autoStart: true,
			axis: 'x',
			parentEl: '.fancybox-custom-nav'
		},
		loop: true,
		infobar: false,
		margin: 0,
		gutter: 0,
		btnTpl: {
			close:
				'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
				'<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.531 17 14-14m0 14-14-14"/></svg>' +
				"</button>",
			arrowLeft:
				'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
				'<div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m11.288 15.105-4.89-4.89a1.49 1.49 0 0 1 0-2.1l4.89-4.89"/></svg></div>' +
				"</button>",

			arrowRight:
				'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
				'<div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="none"><path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m6.712 3.225 4.89 4.89a1.49 1.49 0 0 1 0 2.1l-4.89 4.89"/></svg></div>' +
				"</button>",
		},
		buttons: [
			'close',
		],

		clickContent: function (current, event) {
			return current.type === "image" ? "zoom" : false;
		},

		baseTpl:
			'<div class="fancybox-container" role="dialog" tabindex="-1">' +
			'<div class="fancybox-bg"></div>' +
			'<div class="fancybox-outer">' +
			'<div class="fancybox-toolbar">{{buttons}}</div>' +
			'<div class="fancybox-inner">' +
			'<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
			'<div class="fancybox-stage"></div>' +
			'<div class="fancybox-caption"><div class=""fancybox-caption__body"></div></div>' +
			'</div>' +
			'</div>' +
			'<div class="fancybox-custom-nav">' +
			'{{arrows}}' +
			'</div> ' +
			'</div>',

		onInit: function (instance) {
			console.info(instance.group.length);
			if (instance.group.length < 2) {
				$('.fancybox-custom-nav').hide();
				$('.custom-gallery').addClass('custom-gallery--single');
			}
		},
		afterLoad: function () {
		}
	});

	$(document).on('click', '.js-popup-gallery.slick-cloned', function (e) {
		var $slides = $(this)
			.parent()
			.children('.slick-slide:not(.slick-cloned)');

		$slides
			.eq(($(this).attr("data-slick-index") || 0) % $slides.length)
			.trigger("click.fb-start", { $trigger: $(this) });

		return false;
	});

	// end fancybox popup 


	//form validate
	$('.js-form-auth').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'email': {
					"required": true, "email": true
				},
				'password': "required",
			},
			messages: {
				'email': "Введіть ваш e-mail",
				'password': "Введіть ваш пароль",
			},
			// submitHandler: function (form) {			
			// }
		});
	});

	$('.js-form-password').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'email': {
					"required": true, "email": true
				},
			},

			messages: {
				'email': "Введіть ваш e-mail",
			},
			// submitHandler: function (form) {
			// }
		});
	});

	jQuery.validator.addMethod("lettersonly", function (value, element) {
		return this.optional(element) || /^[А-Яа-яёЁЇїІіЄєҐґ]+$/i.test(value);
	}, "Letters only please");

	$('.js-form-register').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'name': {
					"lettersonly": true, "required": true
				},
				'lastname': {
					"lettersonly": true, "required": true
				},
				'phone': "required",
				'email': {
					"required": true, "email": true
				},
				'password': "required",
			},
			messages: {
				'name': {
					"lettersonly": "Введіть Ім’я кирилицею", "required": "Введіть ваш Ім’я"
				},
				'lastname': {
					"lettersonly": "Введіть Прізвище кирилицею", "required": "Введіть ваш Прізвище"
				},
				'phone': "Введіть ваш Телефон",

				'email': "Введіть ваш e-mail",
				'password': "Введіть ваш пароль",
			},
			// submitHandler: function (form) {			
			// }
		});
	});

	$('.js-form-question').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'name': {
					"lettersonly": true, "required": true
				},
				'email': {
					"required": true, "email": true
				},
				'question': "required",
			},
			messages: {
				'name': {
					"lettersonly": "Введіть Ім’я кирилицею", "required": "Введіть ваш Ім’я"
				},
				'email': "Введіть ваш e-mail",
				'question': "Напишіть своє запитання",
			},
			// submitHandler: function (form) {			
			// }
		});
	});

	$('.js-form-review').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'rating': "required",
				'message': "required",
			},
			messages: {
				'rating': "Ваша оцінка",
				'message': "Напишіть своє враження",
			},
			submitHandler: function (form) {
				$.fancybox.close();
				$.fancybox.open({
					src: '#popup-review-thanks',
					type: 'inline',
					touch: false,
					closeExisting: true,
					autoFocus: false,
				});
			}
		});
	});

	$('.js-form-offer').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'name': {
					"lettersonly": true, "required": true
				},
				'company': {
					"required": true
				},
				'phone': "required",
				'email': {
					"required": true, "email": true
				},
			},
			messages: {
				'name': {
					"lettersonly": "Введіть Ім’я кирилицею", "required": "Введіть ваш Ім’я"
				},
				'company': {
					"required": "Введіть вашу компанію"
				},
				'phone': "Введіть ваш Телефон",

				'email': "Введіть ваш e-mail",
				'password': "Введіть ваш пароль",
			},
			// submitHandler: function (form) {			
			// }
		});
	});

	$('.js-form-checkout').each(function () {
		$(this).validate({

			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'name': {
					"lettersonly": true, "required": true
				},
				'lastname': {
					"lettersonly": true, "required": true
				},
				'phone': "required",
				'email': {
					"required": true, "email": true
				},
				'payment': "required",
				'delivery': "required",
			},
			messages: {
				'name': {
					"lettersonly": "Введіть Ім’я кирилицею", "required": "Введіть ваш Ім’я"
				},
				'lastname': {
					"lettersonly": "Введіть Прізвище кирилицею", "required": "Введіть ваш Прізвище"
				},
				'phone': "Введіть ваш Телефон",

				'email': "Введіть ваш e-mail",
				'payment': "Оберіть спосіб оплати",
				'delivery': "Оберіть спосіб доставки",
			},
			submitHandler: function (form) {
				form.submit();
				// $.fancybox.close();
				// $.fancybox.open({
				// 	src: '#popup-checkout-thanks',
				// 	type: 'inline',
				// 	touch: false,
				// 	closeExisting: true,
				// 	autoFocus: false,
				// });
			}
		});
	});

	$('.js-form-profile').each(function () {
		$(this).validate({
			errorElement: 'div',
			errorPlacement: function (error, element) {
				element.parents('.form-input-wrap').append(error);
			},
			rules: {
				'name': {
					"lettersonly": true, "required": true
				},
				'lastname': {
					"lettersonly": true, "required": true
				},
				'phone': "required",
				'email': {
					"required": true, "email": true
				}
			},
			messages: {
				'name': {
					"lettersonly": "Введіть Ім’я кирилицею", "required": "Введіть ваш Ім’я"
				},
				'lastname': {
					"lettersonly": "Введіть Прізвище кирилицею", "required": "Введіть ваш Прізвище"
				},
				'phone': "Введіть ваш Телефон",

				'email': "Введіть ваш e-mail",

			},
			// submitHandler: function (form) {			
			// }
		});
	});


	// phone country codes
	function runIntlTelInput(element, countryCallback) {


		let iti = window.intlTelInput(element, {
			formatOnDisplay: true,
			hiddenInput: "full_number",
			preferredCountries: ['ua'],
			localizedCountries: {
				ua: "Україна/Ukraine",
			},
			initialCountry: "ua",
			autoInsertDialCode: true,
			separateDialCode: true,
			nationalMode: true,
			customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
				if (selectedCountryData.iso2 == 'ua')
					return "(0__) ___-__-__";
				else return selectedCountryPlaceholder;
			},
			utilsScript: "js/utils.js"
		});
		$(element).on("countrychange", function (event) {
			// Get the selected country data to know which country is selected.
			var selectedCountryData = iti.getSelectedCountryData();
			//console.log(selectedCountryData);

			// Get an example number for the selected country to use as placeholder.
			newPlaceholder = intlTelInputUtils.getExampleNumber(selectedCountryData.iso2, true, intlTelInputUtils.numberFormat.INTERNATIONAL),

				// Reset the phone number input.
				iti.setNumber("");

			// Convert placeholder as exploitable mask by replacing all 1-9 numbers with 0s
			mask = newPlaceholder.replace(/[1-9]/g, "0");
			//console.log(mask);

			// Apply the new mask for the input
			$(this).mask(mask, { clearIfNotMatch: true });

			if (selectedCountryData.iso2 == 'ua') {
				$(this).mask('(0xx) xxx-xx-xx', {
					clearIfNotMatch: true,
					translation: {
						'x': {
							pattern: /[0-9]/
						}
					}
				});
				//$(this).attr('placeholder', '__ ___-__-__')
			}

		});
		// When the plugin loads for the first time, we have to trigger the "countrychange" event manually, 
		// but after making sure that the plugin is fully loaded by associating handler to the promise of the 
		// plugin instance.

		iti.promise.then(function () {
			$(element).trigger("countrychange");
		});
		return iti;
	}
	$(function () {
		$(".form-phone").each(function () {
			runIntlTelInput($(this)[0]);
		});
	});

	//end phone country codes

	// selects
	$('.js-select').select2({
		minimumResultsForSearch: -1,
		width: '100%',
		language: {
			errorLoading: function () { return "Неможливо завантажити результати" },
			inputTooLong: function (e) { return "Будь ласка, видаліть " + (e.input.length - e.maximum) + " " + n(e.maximum, "літеру", "літери", "літер") },
			inputTooShort: function (n) { return "Будь ласка, введіть " + (n.minimum - n.input.length) + " або більше літер" },
			loadingMore: function () { return "Завантаження інших результатів…" },
			maximumSelected: function (e) { return "Ви можете вибрати лише " + e.maximum + " " + n(e.maximum, "пункт", "пункти", "пунктів") },
			noResults: function () { return "Нічого не знайдено" },
			searching: function () { return "Пошук…" },
			removeAllItems: function () { return "Видалити всі елементи" }
		}
	});

	$('#delivery').on('select2:select', function (e) {
		var data = e.params.data;
		//console.log(data.id);
		$('.checkout-delivery').hide();
		$('#' + data.id).show();
	});
	$('.js-select-search').select2({
		minimumResultsForSearch: 0,
		width: '100%',
		language: {
			errorLoading: function () { return "Неможливо завантажити результати" },
			inputTooLong: function (e) { return "Будь ласка, видаліть " + (e.input.length - e.maximum) + " " + n(e.maximum, "літеру", "літери", "літер") },
			inputTooShort: function (n) { return "Будь ласка, введіть " + (n.minimum - n.input.length) + " або більше літер" },
			loadingMore: function () { return "Завантаження інших результатів…" },
			maximumSelected: function (e) { return "Ви можете вибрати лише " + e.maximum + " " + n(e.maximum, "пункт", "пункти", "пунктів") },
			noResults: function () { return "Нічого не знайдено" },
			searching: function () { return "Пошук…" },
			removeAllItems: function () { return "Видалити всі елементи" }
		}
	});

	$(".js-select-city").on("click", function () {
		var v = $(this).attr('data-value');
		$(this).parents('.form-input-wrap').find('.js-select').val(v).trigger("change");
		return false
	});

	$(".js-select").on("select2:close", function (e) {
		$(this).valid();
	});
	// end selects

	//delivery comment
	$('.delivery-comment-toggle').on('click', function (e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$(this).next('.delivery-comment').hide();
			$(this).text($(this).attr('data-show'));
			$(this).removeClass('active');
		} else {
			$(this).next('.delivery-comment').show();
			$(this).text($(this).attr('data-hide'));
			$(this).addClass('active');
		}
		return false;
	});
	//end delivery comment

	// datepicker
	let max_Date = new Date();
	if ($('#datepicker').length) {
		new AirDatepicker('#datepicker', {
			maxDate: max_Date,
			autoClose: true,
			locale: {
				days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'],
				daysShort: ['Нед', 'Пнд', 'Вів', 'Срд', 'Чтв', 'Птн', 'Сбт'],
				daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
				monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
				today: 'Сьогодні',
				clear: 'Очистити',
				dateFormat: 'dd.MM.yyyy',
				timeFormat: 'HH:mm',
				firstDay: 1
			}
		});
	}
	//end datepicker

	//orders toggle
	$('.order-main__more').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.order').find('.order-content').slideToggle();
		$(this).toggleClass('active');
		return false;
	});
	//end orders toggle
});

