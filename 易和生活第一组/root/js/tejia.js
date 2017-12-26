//轮播图
window.onload=function(){
//封装轮播图	
function banner(scroll,imgs,sWidth){
	
	place(0);
	var page=0;
	var ipage=imgs.length-1;

	function moveLeft(){
		page++;
		if(page>imgs.length-1){
			page=imgs.length-1;
		}
	move(ipage,0);
	}
	function move(arg1,arg2){
		place(page);
		setTimeout(function(){
			if(page==arg1){
				page=arg2;
				for(var index=0;index<imgs.length;index++){
					imgs[index].style.transition='none';
				}
				//把所有的图片回归初始位置
				place(page);
				setTimeout(function(){
					for(var index=0;index<imgs.length;index++){
						imgs[index].style.transition='left 0.7s ease-in-out';
					}
				},100)
			}

		},700);
		pas.setPege(page);
		}
		var page=0;
		var timer=setInterval(moveLeft,2000);
		function clearTimer(t){
			clearInterval(t);
	}
	function place(page){
		for(var index=0;index<imgs.length;index++){
					imgs[index].style.left=(index-page)*sWidth+'px';
			//page=1时    第一张是-1  第二张是0  第三张是1  第四张是2  第五张是3  第六张是4
			//  page就是当前显示的那一张图片 
				}
	}
	for(var index=0;index<imgs.length-1;index++){			
			var pa=document.createElement('span');
			pa.className='aspan';
			pa.innerHTML=index+1;
			pages.appendChild(pa);

		}
		var pas=document.querySelectorAll('#pages span');
		for(var index=0; index<pas.length;index++){
			pas[index].select=index;
			pas[index].onclick=function(e){
				page=e.target.select;
				move(ipage,0);
				clearInterval(timer);
				timer=setInterval(moveLeft,3000);
			}
		}

	pas.setPege=function(p){
		if (p == imgs.length - 1){
				p = 0;
			}

			for (var index = 0; index < this.length ;index++){
				this[index].style.backgroundColor = '';
			}

			this[p].style.backgroundColor = 'deeppink';
	}
	pas.setPege(0);
 }

	var scroll=document.getElementsByClassName('scroll')[0];
	var sWidth=scroll.clientWidth;
	var imgs=document.querySelectorAll('.scroll>li');
	var pages=document.getElementById('pages');
banner(scroll,imgs,sWidth);
//第二部分的轮播

		


















}