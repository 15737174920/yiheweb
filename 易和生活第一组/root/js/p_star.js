$(".inputs").change(function () {
	console.log($($(this).parent('.p-file')).attr("id"));
	console.log('12');
		var fil = this.files;
		console.log(fil);
		for (var i = 0; i < fil.length; i++) {
		reads(fil[i],$($(this).parent('.p-file')).attr("id"));
		}
});
$('#p-word').click(function() {
var shopS = score('p-star-show1');
var 	serveS = score('p-star-show2');
var descS = score('p-star-show3');
var word = $('.p-uinput').val();
})
$('#p-word').click(function() {
		$('#p-meng-div').css({
			"display":"block",
			"width":$(document.body).width()+'px',
			"height":$(document.body).height()+'px'
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
