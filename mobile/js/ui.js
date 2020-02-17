$(document).ready(function() {
	
	$( "#accordion" ).accordion();


	$("#datepicker").datepicker({
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

});