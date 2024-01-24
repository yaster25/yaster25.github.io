$(window).on('load', function () {
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
		$('body').addClass('ios');
	} else {
		$('body').addClass('web');
	};

});


$(document).ready(function () {

	function fixedHeader() {
		if ($(window).scrollTop() > 50) {
			$("#header").addClass('fixed');
			$('body').addClass('header-fixed');
		} else {
			$("#header").removeClass('fixed');
			$('body').removeClass('header-fixed');
		}
	}

	fixedHeader();
	$(window).scroll(fixedHeader);

	$('.mobile-trigger').on('click', function (event) {
		if (!$('body').hasClass('menu-open')) {
			event.preventDefault();
			$('body').addClass('menu-open');
			$('.header-nav').addClass('header-nav--active');
			$('.mobile-trigger').addClass('is-active');
		} else {
			$('body').removeClass('menu-open');
			$('.header-nav').removeClass('header-nav--active');
			$('.mobile-trigger').removeClass('is-active');
		}
		return false;
	});

	$('.js-popup').fancybox({
		touch: false,
		closeExisting: true,
		autoFocus: false,
		afterShow: function (instance, current) {

		}
	});



	var image = document.getElementsByClassName('y-par');
	new simpleParallax(image, {
		orientation: 'up',
		overflow: true,
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
	});

	var image = document.getElementsByClassName('y-par-2');
	new simpleParallax(image, {
		scale: 2,
		orientation: 'down',
		overflow: true,
		delay: .6,
		transition: 'cubic-bezier(0,0,0,1)'
	});


});
