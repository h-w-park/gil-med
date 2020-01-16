

$(function() {
    $('.doctor-like').on('click',function(){
        $(this).toggleClass('on');
    })
    var $winHei = $('body').height();
    $('.dimm').css('height',$winHei+'px');
    $('.popup-close').on('click',function(){
        $(this).closest('.popup').hide();
        $('.dimm').hide();
    });

	/*길병원포커스 메인*/
	$(".news .contents").dotdotdot();

	$('.doctor').slick({
		
        dots: true,
        centerMode: true,
		centerPadding: '-320px',
        slidesToScroll: 5,
        infinite: true,
        variableWidth: true
	});

	$('.slide-logo').slick({
		//centerMode: true,
		centerPadding: '120px',
  variableWidth: true,
		  infinite: true,
		  variableWidth: true,
		  autoplay: true,
		  autoplaySpeed: 2000
	});



	$(window).on('scroll',function(){
        var scrX = $(window).scrollLeft()
        $('header').css('left','-'+scrX+'px')
    });
});