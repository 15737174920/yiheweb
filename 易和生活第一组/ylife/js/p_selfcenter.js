function addAdress(arg) {
	var ths = '<tr><th>序号</th><th>收货人</th><th>所在区域</th><th>所在地址</th><th>联系电话</th><th>备注</th><th>操作</th></tr>';
	$('#p-td').append(ths);
	for (var index = 1;index <= arg;index++) {
		var trs = '<tr><td>'+index+'</td><td>张强强</td><td>北京 北京市 朝阳区</td><td>朝阳奥运媒体村(北苑天畅园)c3-2506室</td><td>18331205623</td><td>家里的地址</td><td><span class="p-moren">设为默认</span><span class="p-modify">修改</span><span class="p-delete">删除</span></td></tr>';
		$('#p-td').append(trs);
	}
}
addAdress(8);
$('span.p-delete').click(function() {
	if(confirm('你确定删除吗?')) {
		$(this).parents("tr").remove();
	}	 
})
$('span.p-moren').click(function() {
	$(this).css("display",'none');
})
