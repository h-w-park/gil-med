function history(){
	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		var position1 = $(".timeline").offset().top;
		var position2 = $($(this).attr("href")).offset().top;
		var position3 = position2 - position1;
		var content = $(".timeline dl");
		$(content).animate({
			top: -position3
		}, 500 );
	});  
}


function popup(){
	
    $('.popup-close, .pop-close').on('click',function(e){
		e.preventDefault();
        $(this).closest('.popup').hide();
        $('.dimm').hide();
    });
	$(".pop a[href^='#']").click(function(e) {
		e.preventDefault();
		var popup = $($(this).attr("href"));
		var dim = $('.dimm');
		$(popup ).show();
        $('.dimm').show();

	});

}

function headerOn(){
	
	$(".nav li a").hover(function(e){
		e.preventDefault();
		$( ".gnb_wp" ).animate({
			height: "445px"
		}, 200, function() {
			// Animation complete.
		});
	});

	$(".gnb_wp").hover(function(){ 
	}, function(){
		$( this ).animate({
			height: "0"
		}, 150, function() {
		// Animation complete.
		});
	});


	$(".nav_wp > ul").hover(function(){
		var num = $(this).index();
		//console.log(num + "번째");
		switch (num) { 
			case 0: 
				$(".nav ul li:nth-child(1) a").addClass("active");
				break;
			case 1: 
				$(".nav ul li:nth-child(2) a").addClass("active");
				break;
			case 2: 
				$(".nav ul li:nth-child(3) a").addClass("active");
				break;		
			case 3: 
				$(".nav ul li:nth-child(4) a").addClass("active");
				break;
			case 4: 
				$(".nav ul li:nth-child(5) a").addClass("active");
				break;
			default:
				alert('Nobody Wins!');
		}

	}, function(){ 
			$(".nav ul li a").removeClass("active");
	});
}

$(document).ready(function() {

	popup();
/*
    $('.doctor-like').on('click',function(){
        $(this).toggleClass('on');
    })
    var $winHei = $('body').height();
    $('.dimm').css('height',$winHei+'px');

	$(window).on('scroll',function(){
        var scrX = $(window).scrollLeft()
        $('header').css('left','-'+scrX+'px')
    });  */

  });
