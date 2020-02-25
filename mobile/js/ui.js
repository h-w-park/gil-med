$(document).ready(function() {

	$('a[data-rel=popup], a[data-icon=bars]').click(function (){
		$("html, body").addClass("modal-open");
	});

	$('a[data-rel=back], a[data-rel=close], .ui-panel-dismiss-open').click(function (){
		$("html, body").removeClass("modal-open");
	});

	$("#datepicker, #datepicker2").datepicker({
		changeYear: true,
		changeMonth: true,
		minDate: 0, maxDate: "+1M +10D", // 클릭할 수 있는 최소값, 최대값을 정함
		showMonthAfterYear: true,
		//yearSuffix: "년",
		monthNamesShort: [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
		dayNamesMin: [ "일", "월", "화", "수", "목", "금", "토" ]
	});

    $(".doctor-like").on('click',function(){
        $(this).toggleClass('on');
    });

	if ($(".expand ul li:nth-child(3)").hasClass("on")){
		var left = $(".expand ul li:nth-child(3)").offset().left;
		setTimeout(function(){ 
			$(".expand").animate({
				scrollLeft: left - 20
			}, 500 );
		}, 200);
	}
	if ($(".expand ul li:nth-child(n+4)").hasClass("on")){
		var left = $(".expand ul li:nth-child(3)").offset().left;
		setTimeout(function(){ 
			$(".expand").animate({
				scrollLeft: left
			}, 500 );
		}, 200);
	}


	$('select.sel_floor').each(function(index){
		$(this).attr('data-index',index+1);
		var ind = index + 1;
		$(this).on('change',function(){
			let selector = $(this).val();
			$(".sel_div" + ind + " > option").hide();
			$(".sel_div" + ind + " > option").filter(function(){return $(this).data('floor') == selector}).show();
		});
	});


});
