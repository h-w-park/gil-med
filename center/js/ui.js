

function maps(){

	var img = $("#level1");
	var img2 = $(".level2 figure");  

	$("#maps area[href^='#']").click(function(e) {
		e.preventDefault();
		//왼쪽 맵 변경하기
		var href = $(this).attr("href");
		var map = href.substring(href.lastIndexOf("#")+1);
		//seoul, busan ...
		img.attr("src", "../../img/map/"+map+".png");		
		
		//오른쪽 맵 변경하기
		$(img2).each(function() {   
			$(this).removeClass("active");
			$(this).css("z-index", "0");           
			if ($(this).hasClass(map)) {   
				$(this).addClass("active")
				$(this).css("z-index", "2");       
			}  
		});
	});  

	$(".mapSm area[href^='#']").click(function(e) {
		e.preventDefault();
		var href22 = $(this).attr("href");
		var map22 = href22.substring(href22.lastIndexOf("#")+1);
		console.log(map22);
		var aktiv = $("figure.active");
		var href = $(aktiv).attr("class");
		console.log(href);
		var map = href.substring(0, href.length - 7);
		console.log(map);

		$(aktiv).each(function() {         
			$('img', $(this)).attr("src", "../../img/map/"+map+"/"+map22+".png");	
		});
	});  

}



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