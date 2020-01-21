$(function() {


	$('#fullpage-wrap').fullpage({
		anchors: ['intro', 'doctors', 'focus', 'info', 'footer' ],
		menu: '#menu',
		slidesNavigation: true,				
		verticalCentered: false,
		scrollBar: false,
		easing: 'easeInOutCubic',
		afterLoad: function(anchorLink, index){
			if(index == 1){	
				$('#menu, header').removeClass("bk", 500);
				$(".nav li a").hover(function(e){
					e.preventDefault(); 
					$('header').addClass("bk", 500);
				} , function() {
				// Animation complete. 
				});

				$(".gnb_wp").hover(function(){
				}, function(){
					$('header').removeClass("bk", 500);
				});
			}else if(index >= 2){
				$('#menu, header').addClass("bk", 500);
			}
		}
	});



	 $('.rsv__wrap').slick({
	  asNavFor: '.rsv__wrap_nav',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  centerMode: true,
	  draggable: false

	  //fade: true,
	});
	$('.rsv__wrap_nav').slick({
		asNavFor: '.rsv__wrap',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false, 
		arrows: false,
		focusOnSelect: true,
		draggable: false,
		swipe: false,
		variableWidth: true
	});

	 $('.focus__wrap').slick({
	  asNavFor: '.focus__wrap_nav > ul',
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  centerMode: false,
	  draggable: false
	});
	$('.focus__wrap_nav > ul').slick({
		asNavFor: '.focus__wrap',
		dots: true, 
		vertical: true,
		focusOnSelect: true,
		slidesToShow: 5,
		slidesToScroll: 5
	});




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