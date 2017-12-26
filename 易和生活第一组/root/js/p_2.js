//动态生成页数
//totalpage总页数
//arg 显示页数的父元素
//now当前页数
//arg2 第一页的按钮
//arg3  上一页的按钮
//arg4   下一页的按钮
//arg5  输入框的确定按钮
//addDiv是添加数据的功能函数 把函数作为参数传进来
//input用户输入框跳转到第几页
//前提是需要在之前引入的js中先把addDiv() 添加数据的功能函数完成
function pageDraw(totalPage,arg,now,arg2,arg3,arg4,arg5,addDiv,inputs) {
function pageShow() {
	if (totalPage <=8) {
		for (var index = 0;index < totalPage;index++) {
		var span = '<span class="l-bnum" >'+(1+index)+'</span>';
	$(arg).append(span);
	    }
	}
	else {
		for (var index = 0;index < 4;index++) {
		var span = '<span class="l-bnum" >'+(1+index)+'</span>';
	       $(arg).append(span);
	    }
		var span1 = '<span class="l-bnum" >'+'...'+'</span>';
		var span2 = '<span class="l-bnum" >'+'...'+'</span>';
	   var span3 = '<span class="l-bnum" >'+(totalPage-1)+'</span>';
	  var span4 = '<span class="l-bnum" >'+totalPage+'</span>';
	$(arg).append(span1).append(span2).append(span3).append(span4);
	}	
}
pageShow();	
$(arg).on('click','span.l-bnum',function() {
	$('.l-bnum').css('background','white');
	$(this).css('background','red');
	now = parseInt($(this).html());
	if (now >= 4&&totalPage >8&&now<=(totalPage-3)&&(now+2)<=(totalPage-1)) {
		 $(arg).children('span').remove();
		for (var index = 1;index < 3;index++) {
		var span = '<span class="l-bnum" >'+index+'</span>';
	       $(arg).append(span);
	    }
		var span1 = '<span class="l-bnum" >'+'...'+'</span>';
		$(arg).append(span1);
		for (var index = 0;index < 3;index++) {
			if(index == 0) {
	var span = '<span class="l-bnum" style="background:red;">'+now+'</span>';
			}else {
				var span = '<span class="l-bnum" >'+(now+index)+'</span>';
			}
	       $(arg).append(span);
	   }
	   var span4 = '<span class="l-bnum" >'+'...'+'</span>';
	  var span5 = '<span class="l-bnum" >'+totalPage+'</span>';
	  $(arg).append(span4).append(span5);
	}else if(now <=2){
		$(arg).children('span').remove();
		pageShow();
	$($(arg).children('span.l-bnum')[now-1]).css('background-color','red');
	}
	addDiv(now);
})

$(arg2).click(function() {
	now = 1;
	addDiv(now);
})
$(arg3).click(function() {
	if (now == 1) {
		alert('已经是第一页了');
	}else {
		now -= 1;
		console.log('p-2函数'+now);
		addDiv(now);
	}
})
$(arg4).click(function() {
	if (now == totalPage) {
		alert('已经是最后一页了');
	}else {
		now += 1;
		addDiv(now);
	}
})
$(arg5).click(function() {
	if (parseInt($(inputs).val()) > totalPage) {
		alert('超出范围');
	}else {
		now = parseInt($(inputs).val());
	   addDiv(now);
	}	
})
}