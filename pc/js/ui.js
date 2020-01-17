
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

	$(window).on('scroll',function(){
        var scrX = $(window).scrollLeft()
        $('header').css('left','-'+scrX+'px')
    });  

});