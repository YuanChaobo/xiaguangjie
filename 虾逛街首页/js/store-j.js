$(function(){
	$('.fenlei').find('a').click(function(){
		$(this).addClass('bor-bot ').siblings('a').removeClass('bor-bot');
		
	})
})