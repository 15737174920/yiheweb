var Ppage = 1;
var Pdata =321;
var totalP = Math.ceil(Pdata/20);
function recoad(page) {
	//先清空数据
	$('#p-td').children().remove();
	//数据
	var l= page*20;
	if (l>Pdata) {
		l = Pdata;
	}
	var ths = '<tr><th>兑换日期</th><th>积分</th><th>兑换商品</th></tr>';
	$('#p-td').append(ths);
	for (var index = (page-1)*20;index < l;index++) {
		var tr = '<tr><td>'+page+'2015-04-05 16:20:10</td><td>+80</td><td>毛巾</td></tr>';
		$('#p-td').append(tr);
	}
	$('.p-data').html(Pdata);
	$('.p-page').html(totalP);
}
recoad(1);
var spans1 = $('.page-show');
var first1 =$('#p-firstPage');
var up1 = $('#p-upPage');
var next1 = $('#p-nextPage');
var uinput1 = $('#p-pageSure');
var uinputs = $('#p-data-toPage');
pageDraw(totalP,spans1,Ppage,first1,up1,next1,uinput1,recoad,uinputs);