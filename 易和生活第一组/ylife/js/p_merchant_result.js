function drawData(arg) {
	for (var index =0;index < arg;index++) {
		var a = ' <a class="p-seaech-show1"></ a>';
		$("#p-search-show").append(a);
		var img = " <img src='"+"./images/car1.jpg"+"'>";
		var p1 = "<p class='p-search-name'>"+'李杰'+"</p>";
		var p2 = '<p class="p-search-tel">'+'18799563265'+'</p>';
		var p3 = '<p class="p-search-ad">'+'浙江省台州市温岭市人民西路281号'+'</p>';
		var div = '<div class="p-search-info" > <div class="p-search-meng"></div><p class="p-search-word">'+'同城汽车装饰中心'+'</p> </div>';
		$($("#p-search-show").children('a').last()).append(img).append(p1).append(p2).append(p3).append(div);
	}
}
drawData(6);