//封装评分系统
//arg代表父元素
function star1(arg) {
	var score = 0;
var stars = arg.children;
function images(a) {
		for (var index = 0;index < a ;index++) {
			if (!stars[index].select) {
				stars[index].select = true;
              stars[index].style.backgroundImage = 'url(./images/p-star-or.png)';
			}                
	   }		
 }
//function score() {
//	var score=0;
//	var spas = arg.children;
//	
//	for (var index = 0;index < spas.length;index++) {
//	if (spas[index].select) {
//		score++;
//	}
//	console.log('打分'+score);
//}
//}
for (var index = 0;index <stars.length;index++) {
	stars[index].value = index+1;
	stars[index].select = false;
	stars[index].onmouseover = function(e) {
        images(e.target.value); 
//      score();
	}
}
arg.addEventListener('mouseover',function() {
	for (var index = 0;index <stars.length;index++) {
		stars[index].style.backgroundImage = 'url(./images/p-star-g.png)';
		stars[index].select = false;
	}
},true);	
return score;
}
//上传显示图片
function reads(fil,arg){
		var reader = new FileReader();
		reader.readAsDataURL(fil);
		reader.onload = function()
		{
		 document.getElementById(arg).innerHTML = '';
		document.getElementById(arg).innerHTML += "<img src='"+reader.result+"'>";
		};
}
function score(arg) {
	var ar = document.getElementById(arg);
	var score=0;
	var spas = ar.children;	
	for (var index = 0;index < spas.length;index++) {
	if (spas[index].select) {
		score++;
	}
	
}
//	console.log('打分'+score);
	return score;
}