$('#p-bang').click(function() {
	var ret = /^1[3|4|5|7|8][0-9]{9}$/;
	var ret1 = /^[\d]{5,20}$/;
	var a =$('#p-unumber').val();
	var b = $('#p-upass').val();
	var c = $('#p-upass1').val()
	if (!ret.test(a)) {
		alert('手机号码输入不正确!');
	}else if (!ret1.test(b)) {
		alert('密码格式输入不正确!');
	}else if (b != c) {
		alert('两次密码输入不同!');
	}else {
		$('#p-meng-div').css({
			"display":"block",
			"left":$(window).width()/2-455/2+'px',
			"top":$(window).height()/2-180/2+'px'
		});
		$('#p-meng-show').css({
			"display":"block",
			"left":$(window).width()/2-260/2+'px',
			"top":$(window).height()/2-60/2+'px'
		});
	}		
})