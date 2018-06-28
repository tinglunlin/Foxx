$(document).ready(function(){
	var screenH = $(window).height();
	// $('#kv').css('height',screenH);

	var headerBarH = $('header .container-fluid.nav-right').height();
  	var s2Offset = $("#s2-dream").offset().top - headerBarH;
  	var s3Offset = $("#s3-teacher").offset().top - headerBarH;

  	//scroll to
	$("#scrollNav a[href='#kv']").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#kv").offset().top
	    }, 800);
	});
	$("#scrollNav a[href='#s2-dream']").click(function() {
	    $('html, body').animate({
	        scrollTop: s2Offset
	    }, 800);
	});
	$("#scrollNav a[href='#s3-teacher']").click(function() {
	    $('html, body').animate({
	        scrollTop: s3Offset
	    }, 800);
	});
	$("#kv .scroll a").click(function() {
	    $('html, body').animate({
	        scrollTop: s2Offset
	    }, 800);
	});

	// Slick
	$('.teacherSlick').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.teacherSlick-txt',
		responsive: [
		    // {
		    //   breakpoint: 768,
		    //   settings: {
		    //     slidesToShow: 1,
		    //     slidesToScroll: 1
		    //   }
		    // },
		    {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
	});
  	$('.teacherSlick-txt').slick({
  		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.teacherSlick'
	});

  	// resize width
    w = $( window ).width();
    $( window ).resize( function(){
        var screenH = $(window).height();
		$('#kv').css('height',screenH);
    });
	// resize width end

});

// Youtube Video
var player;
function onYouTubePlayerAPIReady() {

    player = new YT.Player('player', {
		// videoId: 'kIAs-5qLmTE',
		playerVars: {
		autoplay: 0,        // 在讀取時自動播放影片
		controls: 1,        // 在播放器顯示暫停／播放按鈕
		showinfo: 0,        // 隱藏影片標題
		modestbranding: 0,  // 隱藏YouTube Logo
		loop: 1,            // 讓影片循環播放
		autohide: 0,        // 當播放影片時隱藏影片控制列
		rel: 0
		}
    });
}

$('.teacherSlick .slideCard').click(function(){
	if ( $(this).hasClass('slick-center') ){
		var vd_data = $(this).attr('data-rel');
		player.loadVideoById(vd_data, 0, "default");
		show_VD();
	}	
});

$('#kv .img .playbutton').click(function(){
		var vd_data = $(this).attr('data-rel');
		player.loadVideoById(vd_data, 0, "default");
		show_VD();
});

function show_VD() {
	var VD = $('#youtube-vd');
	VD.fadeIn(300);
}
function closebtnVD() {
	var VD = $('#youtube-vd');
	VD.fadeOut(300);
	player.pauseVideo();
}