$(document).ready(function() {
    $('.doctor-like').on('click',function(){
        $(this).toggleClass('on');
    })
    var $winHei = $('body').height();
    $('.dimm').css('height',$winHei+'px');
    $('.popup-close').on('click',function(){
        $(this).closest('.popup').hide();
        $('.dimm').hide();
    });

	$(window).on('scroll',function(){
        var scrX = $(window).scrollLeft()
        $('header').css('left','-'+scrX+'px')
    });  

	$(".nav li a").hover(function(e){
		e.preventDefault();
		$( ".gnb_wp" ).animate({
			height: "445px"
		}, 200, function() {
			// Animation complete.
		});
	});


	$(".gnb_wp").hover(function(){
	//
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
  });