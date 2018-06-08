$(document).ready(function(){
	$('.qualSlick').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
	});
	$('.procSlick').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
	});
});

$(function(){
	var wh = $(window).height();
	var offset= wh/5;
	
	$('header').addClass('grayColor');

	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();

		if(scrollVal>offset){
			// $('header').addClass('sm');
			$('header').removeClass('grayColor');
		} else{
			// $('header').removeClass('sm');
			$('header').addClass('grayColor');
		}

	});
});	