$(function(){
	 $('.now-buying').find('.now-buying-bai .bai-number').each(function(){
		var text =Number( $(this).text().replace(/[^0-9]/ig,'') );
		console.log(text);
		$(this).parent('.now-buying-bai').find('.progress-bar span').width(text+'%');
	});
	// console.log(text);
})