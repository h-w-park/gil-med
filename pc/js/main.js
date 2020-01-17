$(function() {
	/*메인 : 길병원포커스*/
	$(".news .contents").dotdotdot();

	/*메인 : 길병원 의료진*/
	$('.doctor').slick({
        dots: true,
        centerMode: true,
		centerPadding: '-320px',
        slidesToScroll: 5,
        infinite: true,
        variableWidth: true
	});

	/*메인 : 하단 로고*/
	$('.slide-logo').slick({
		//centerMode: true,
		centerPadding: '120px',
		variableWidth: true,
		infinite: true,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 2000
	}); 

});