$('#p-a-suggest').click(function() {
	console.log('2')
	$('#p-a-meng-div').css({
			"display":"block",
			"width":$(document.body).width()+'px',
			"height":$(document.body).height()+'px'
		});
		$('#p-a-meng-show').css({
			"display":"block",
			"left":$(window).width()/2-655/2+'px',
			"top":$(window).height()/2-440/2+'px'
		});	
})
$('#p-a-meng-sure').click(function() {
	$('#p-a-meng-div').css("display","none");
	$('#p-a-meng-show').css("display","none");
})
$('#p-a-meng-looser').click(function() {
	
})
