$(function(){
	$('.content-left').find('li').click(function(){
		$(this).addClass('border-right-none').siblings('li').removeClass('border-right-none');
	})
})