$('.h-dh').click(function() {
		$('#p-meng-div').css({
			"display":"block",
			"width":$(document.body).width()+'px',
			"height":$(document).height()+'px'
		});
		$('#p-meng-show').css({
			"display":"block",
			"left":$(window).width()/2-650/2+'px',
			"top":$(window).height()/2-400/2+'px'
		});	
})
$('#p-uback').click(function() {
	$('#p-meng-div').css("display","none");
	$('#p-meng-show').css("display","none");
})