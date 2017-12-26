var obj = {
	arr1 : ['阿拉善','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr2 : ['北京','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜'],
	arr3 : ['承德','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏'],
	arr4 : ['大同','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr5 : ['鄂尔多斯','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr6 : ['抚顺','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr7 : ['赣州','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr8 : ['邯郸','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['晋城','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['开封','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['廊坊','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['牡丹江','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['南京','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉'],
	arr9 : ['盘锦','鞍山','安庆','安阳','阿贝藏族羌族','安顺','阿里','安康','阿克苏','克孜勒苏柯尔克孜','阿勒泰','澳门','安丘','安吉']
}
var arrC = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var a = 0;
//for (var index in obj) {
//	var li = document.createElement('li');
//	document.getElementById('p-c-list').appendChild(li);
//	var div1 = document.createElement('div');
//	var div2 = document.createElement('div');
//	div1.innerHTML = arrC[a];
//	document.getElementById('p-c-list').children[a].appendChild(div1);
//	document.getElementById('p-c-list').children[a].appendChild(div2);
//	for (var i = 0;i<obj[index].length;i++) {
//		var spans = document.createElement('span');
//		spans.innerHTML = obj[index][i]
//		div2.appendChild(spans)	
//	}
//	a++;
//}
for (var index in obj) {
	var li = '<li></li>';
	$('#p-c-list').append(li);
    var div1 = '<div>'+arrC[a]+'</div>';
	var div2 = '<div></div>';
	var lis = $('#p-c-list').children('li')[a];
	$(lis).append(div1).append(div2);
	for (var i = 0;i<obj[index].length;i++) {
		var spans = '<span class="city-select">'+obj[index][i]+'</span>';
		var first = $($(lis).children()[1]).html();
		$($(lis).children()[1]).html(first+spans);
	}
	a++;
}
$('#p-c-list').on('click','span.city-select',function() {
	var spanText = $(this).html();
    $('.p-now-lo').html(spanText);
    $('.show-city').html(spanText);
})

