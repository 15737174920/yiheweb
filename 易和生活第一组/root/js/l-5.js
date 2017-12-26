var jsonP = {
	obj0:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj1:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr1 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj2:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr1 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr2 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr3 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj3:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj4:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj5:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj6:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr1 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj7:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr1 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr2 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr3 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj8:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj9:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj10:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj11:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机'],
		arr1 : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
	},
	obj12:{
		arr : ['手机商家','电脑配件','厨房电器件','智能生活','个体保健','显示器','油烟机']
}
}
var lis = $.makeArray($('.l-sellone').children('li'));
lis.forEach(function(t,index) {
	$(t).attr('select',index);
})
$('.sellone').hover(function() {
	var div = '<div class="hove-show"></div>'
	$(this).append(div);
	var num = $(this).attr('select');
	num = parseInt(num);
for (var index in jsonP) {
		if (num == index[3]) {
//			console.log(jsonP[index]);
			for (var i in jsonP[index] ) {
//				console.log(jsonP[index][i]);
				var div1 = '<div></div>';
	$($(this).children('.hove-show')).append(div1);
	var divs = $(this).children('.hove-show').children('div').last();
				jsonP[index][i].forEach(function(t,index) {
					var a = '<a href="www.baidu.com" class="l-city">'+t+'</a>';
		     var divText = $(divs).html();
		     $(divs).html(divText+a);
				})
			}
	}
}},function() {
	$('.sellone>.hove-show').remove();
})
var li_select;
$('.sellone').on('click','a.l-city',function(event) {
			event.preventDefault();
	if ($($(li_select).children('span')).hasClass('add-span')) {
		$($(li_select).children('span')).remove('.add-span');
	}
		var span = '<span class="add-span">'+$(this).html()+'</span>';
		li_select=$(this).parents('.sellone');
		$($(this).parents('.sellone').children('.sellthree')).after(span);
})      
var now = 1;
var data =443;
var totalPage = Math.ceil(data/40);
//生成首页的40个div
function addDiv() {
	//先清空数据
	$('.l-selfright>.l-redcar').remove();
	//数据
	var l= now*40;
	if (now*40>data) {
		l = data;
	}
	for (var index = (now-1)*40;index < l;index++) {
		var div = '<div class="l-redcar"></div>';
		var div1 = '<div class="redcar"><span>同城汽车装饰中心</span></div>';
		var div2 = '<div class="l-cardown"></div>';
		var div21 = '<div class="cardown1"><span>李杰</span></div>';
		var div22 = '<div class="cardown2"><span>18838900316</span></div>';
		var div23 = '<div class="cardown3"><span>河南省郑州市二七区'+now+'</span></div>';
		$('.l-selfright').children('.l-button').before(div);
		var child = $('.l-selfright').children('div.l-redcar').last();
		$(child).append(div1).append(div2);
$($('.l-selfright').children('div.l-redcar').last()).append(div21).append(div22).append(div23)
	}
	$('.l-number').html('共'+data+'条');
	$('.l-page').html('共'+totalPage+'页');
}
addDiv();
$('.l-first').click(function() {
	now = 1;
	addDiv();
})
$('.l-before').click(function() {
	if (now == 1) {
		alert('已经是第一页了');
	}else {
		now -= 1;
		addDiv();
	}
})
$('.l-after').click(function() {
	if (now == totalPage) {
		alert('已经是最后一页了');
	}else {
		now += 1;
		addDiv();
	}
})
$('.l-bsure').click(function() {
	console.log($('.l-buttons').val());
	if (parseInt($('.l-buttons').val()) > totalPage) {
		alert('超出范围');
	}
	now = parseInt($('.l-buttons').val());
	addDiv();
})
//动态生成页数
function pageShow() {
	if (totalPage <=8) {
		for (var index = 0;index < totalPage;index++) {
		var span = '<span class="l-bnum" >'+(1+index)+'</span>';
	$('.page-show').append(span);
	    }
	}
	else {
		for (var index = 0;index < 4;index++) {
		var span = '<span class="l-bnum" >'+(1+index)+'</span>';
	       $('.page-show').append(span);
	    }
		var span1 = '<span class="l-bnum" >'+'...'+'</span>';
		var span2 = '<span class="l-bnum" >'+'...'+'</span>';
	   var span3 = '<span class="l-bnum" >'+(totalPage-1)+'</span>';
	  var span4 = '<span class="l-bnum" >'+totalPage+'</span>';
	$('.page-show').append(span1).append(span2).append(span3).append(span4);
	}	
}
pageShow();
$('.page-show').on('click','span.l-bnum',function() {
	$('.l-bnum').css('background','white');
	now = parseInt($(this).html());
	if (now >= 4&&totalPage >8&&now<=(totalPage-3)&&(now+2)<=(totalPage-1)) {
		 $('.page-show').children('span').remove();
		for (var index = 1;index < 3;index++) {
		var span = '<span class="l-bnum" >'+index+'</span>';
	       $('.page-show').append(span);
	    }
		var span1 = '<span class="l-bnum" >'+'...'+'</span>';
		$('.page-show').append(span1);
		for (var index = 0;index < 3;index++) {
			if(index == 0) {
	var span = '<span class="l-bnum" style="background:red;">'+now+'</span>';
			}else {
				var span = '<span class="l-bnum" >'+(now+index)+'</span>';
			}
	       $('.page-show').append(span);
	   }
	   var span4 = '<span class="l-bnum" >'+'...'+'</span>';
	  var span5 = '<span class="l-bnum" >'+totalPage+'</span>';
	  $('.page-show').append(span4).append(span5);
	}else if(now <=2){
		$('.page-show').children('span').remove();
		pageShow();
	$($('.page-show').children('span.l-bnum')[now-1]).css('background-color','red');
	}
	addDiv();
})
$('.l-redcar').click(function() {
	window.location = 'p_shopWord.html';
})

