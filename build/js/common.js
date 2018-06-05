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

    $('#nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });

    
});