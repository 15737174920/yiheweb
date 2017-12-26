function printStar(arg,arg2) {
	for (var index = 0;index <arg;index++) {
		var s = '<span class="p-w-word-star"></span>';
		$(arg2).append(s);
	}
	for (var i = 0;i <(5-arg);i++) {
		var s = '<span class="p-w-word-star-black"></span>';
		$(arg2).append(s);
	}
}
function drawImg(num,arg) {
	for (var index = 0;index <num;index++) {
		var s = '<img src="./images/p-word-ps.png" class="p-w-recoad-img1">';
		$(arg).append(s);
	}
}
var show = $('#p-w-recoad-result').children();
show = $.makeArray(show);
var lis = $('#p-w-recoad').children().children();
lis = $.makeArray(lis);
var selectDiv = lis[0];
lis.forEach(function (t,index) {
   $(t).attr('select',index);
   $(t).click(function () {
       $(selectDiv).removeClass('p-w-record-select');
       selectDiv = this;
       $(selectDiv).addClass('p-w-record-select');
       show.forEach(function (t2) {
          $(t2).css('display','none');
       });
       var index = $(this).attr('select');
       if (index != 0) {
           $(show[index]).css('display','block').children('.p-w-recoad-list').css('display','none');
       }else {
           show.forEach(function (t2) {
    $(t2).css('display','block').children('.p-w-recoad-list').css('display','block');
           });
       }
   });
});
$('#p-w-na').click(function(){
	$('#p-w-uinput').val(parseInt($('#p-w-uinput').val())-1);
});
$('#p-w-nd').click(function(){
	$('#p-w-uinput').val(parseInt($('#p-w-uinput').val())+1);
});
var usize;
var ucolor;
$('.p-w-sizeN').click(function() {
	if ($(this).hasClass('p-w-sizeNone')) {
		alert('库存紧张,这个尺码已经售完!');
	}
	else{
		$(this).css('border','2px solid #f06b0f');
	     usize = $(this).html();
	}
	
});
$('.p-w-colorC').click(function() {
	if ($(this).hasClass('p-w-colorNone')) {
		alert('库存紧张,这个颜色已经售完!');
	}else {
		$(this).css('border','2px solid #f06b0f');
	   ucolor = $(this).html();
	}
});
$('#p-w-join').click(function() {
	if (parseInt($('#p-w-uinput').val())<=0 ) {
		alert('请选择数量');
	}
	else if (usize== null) {
		alert('请选择尺码');
	}else if (ucolor == null) {
		alert('请选择颜色');
	}else {
		$('#p-w-join').css('opacity','.7');
		$('#p-meng-div').css({
			"display":"block",
			"width":$(document.body).width()+'px',
			"height":$(document.body).height()+'px'
		});
		$('#p-meng-show').css({
			"display":"block",
			"left":$(window).width()/2-650/2+'px',
			"top":$(window).height()/2-310/2+'px'
		});		
	}
});
$('#p-w-buy').click(function() {
	
});
var imgs = $('#p-w-scroll').children();
imgs = $.makeArray(imgs);
var now = 0;
imgs.forEach(function(t,index) {
		$(t).css('left',(index-now)*80+'px');
});
$('#p-w-show-Bleft').click(function() {
	if(imgs.length - now > 4) {now++}
	imgs.forEach(function(t,index) {
    $(imgs[index]).animate({'left':(index-now)*80+'px'},500);
	})
});
$('#p-w-show-Bright').click(function() {
	if(now > 0) {now--}
	imgs.forEach(function(t,index) {
    $(imgs[index]).animate({'left':(index-now)*80+'px'},500);
	})
});
//评价
var now = 1;
var data =26;
var totalPage = Math.ceil(data/5);
//生成页面数据
function addDiv(now) {
	//先清空数据
	$('#p-w-recoad-custom>.p-w-recoad-custom1').remove();
	//数据
	var l= now*5;
	if (now*5>data) {
		l = data;
	}
	for (var index = (now-1)*5;index < l;index++) {
		var div = '<div class="p-w-recoad-custom1"></div>';
		var div1 = '<div class="p-w-recoad-custom-left"><img src="./images/p-word-p.png"> 张***</div>';
		var div2 = '<div class="p-w-recoad-custom-right"></div>';
		var div21 = '<div class="p-w-recoad-time">2016-04-27</div>';
		var div22 = '<div class="p-w-recoad-word">'+now+'很好吃,昨天收到就弄了一些吃,刚刚又弄了点直接凉拌吃,一个都没坏,卖家人也很热情,货也实惠,买的五斤发六斤,下回吃完还买哈</div>';
		var div23 = '<div class="p-w-recoad-img"></div>';
		$('#p-w-recoad-custom').append(div);
		var child = $('#p-w-recoad-custom').children('div.p-w-recoad-custom1').last();
		$(child).append(div1).append(div2);
var right = $('div.p-w-recoad-custom1').children('div.p-w-recoad-custom-right').last();
$(right).append(div21).append(div22).append(div23);
var ar =$(right).children('div.p-w-recoad-time');
var ars =$(right).children('div.p-w-recoad-img'); 
printStar(4,ar);
drawImg(4,ars);
	}
	$('.l-number').html(data);
	$('.l-page').html(totalPage);
}
addDiv(now)
	var spans = $('.page-show');
var first =$('#p-w-custom-firstPage');
var up = $('#p-w-custom-upPage');
var next = $('#p-w-custom-nextPage');
var uinput = $('#p-w-custom-pageSure');
var unumber = $('#p-w-custom-data-toPage');
pageDraw(totalPage,spans,now,first,up,next,uinput,addDiv,unumber);
//成交记录
var Ppage = 1;
var Pdata =101;
var totalP = Math.ceil(Pdata/10);
function recoad(page) {
	//先清空数据
	$('#p-w-recoad-td').children().remove();
	//数据
	var l= page*10;
	if (l>Pdata) {
		l = Pdata;
	}
	var ths = '<tr><th>买家</th><th>价格</th><th>数量</th><th>付款时间</th></tr>';
	$('#p-w-recoad-td').append(ths);
	for (var index = (page-1)*10;index < l;index++) {
		var tr = '<tr><td>'+page+'张*****</td><td>&yen;699.00</td><td>1</td><td>2015-09-10&nbsp;&nbsp;16:09:14</td></tr>';
		$('#p-w-recoad-td').append(tr);
	}
	$('.p-pageData').html(Pdata);
	$('.p-total').html(totalP);
}
recoad(1);
var spans1 = $('.page-show1');
var first1 =$('#p-w-recoad-firstPage');
var up1 = $('#p-w-recoad-upPage');
var next1 = $('#p-w-recoad-nextPage');
var uinput1 = $('#p-w-recoad-pageSure');
var uinputs = $('#p-w-recoad-data-toPage');
pageDraw(totalP,spans1,Ppage,first1,up1,next1,uinput1,recoad,uinputs);
$('#p-meng-sure').click(function() {
	$('#p-meng-div').css("display","none");
		$('#p-meng-show').css("display","none");
})

$('#p-meng-looser').click(function() {
	window.location = 'l-index07.html';
})

        
        
        
        
 