$(function(){
    var wh = $(window).height();
    var offset= wh/5;

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();

        if(scrollVal>offset){
            $('header').addClass('sm');
        } else{
            $('header').removeClass('sm');
            $('header').removeClass('hidden');
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('#scrolltop').fadeIn();
        } else {
            $('#scrolltop').fadeOut();
        }
    }); 

    $("#scrolltop").click(function() {
	    $('html, body').animate({
	        scrollTop: 0
	    }, 600);
	});

    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    
});