//封装轮播图
//参数
//arg1 :存放图片的父元素

//在试用前需要在使用的页面设置css样式
/*
.pageControl {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border:2px solid white;
            position: absolute;
            cursor: pointer;
            z-index: 999;
    }
#scroll {
    margin: 0 auto;
    width: 1025px;
    position: relative;
    overflow: hidden;
    height: 340px;
}
#scroll > img {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: left .7s ease-in-out;
    border: 1px silid red;
}


*/
function lun(arg1){

    
    
        var sWidth = arg1.clientWidth;
        var imgs = arg1.querySelectorAll('img');
        for (var index = 0;index < imgs.length; index++) {
            imgs[index].style.left = index*sWidth +'px';
        }
        function moveLeft() {
            page++;
             if (page > imgs.length -1 ) {
                page = imgs.length -1;
             }
             move();
        }
        function move() {
            for (var index = 0;index < imgs.length;index++) {
                imgs[index].style.left = (index - page)*sWidth + 'px';
            }
            setTimeout(function() {
               if (page == imgs.length - 1) {
                     page = 0;
                     for(var index = 0;index < imgs.length;index++) {
                        imgs[index].style.transition = 'none';
                     }
                     for (var index = 0;index < imgs.length;index++) {
                        imgs[index].style.left = (index)*sWidth + 'px';
                     }
                     setTimeout(function(){
                        for(var index = 0;index < imgs.length;index++) {
                        imgs[index].style.transition = 'left .7s ease-in-out';
                     }
                     },100)
               }
            },700)
                pageControl.setPage(page);
        }
        var page = 0;
        for (var index = 0 ;index < imgs.length-1;index++) {
            var div = document.createElement('div');
            scroll.appendChild(div);
            div.classList.add('pageControl');
            div.style.top = '80%';
            div.style.left = (sWidth/2+index*20)-((imgs.length-1)*10 + (imgs.length-2)*10)/2 +'px';
            div.index = index;
            div.onmouseover = function(e) {
              page = e.target.index;
              clearInterval(timer);
              move();
           timer = setInterval(moveLeft,3000);
            }                                 
        }
        var pageControl = document.querySelectorAll('.pageControl');
        pageControl.setPage = function(p) {
            if (p == imgs.length - 1) {
               p = 0;
            }
            for (var index = 0;index < this.length;index++) {
                this[index].style.backgroundColor = '';
            }
            this[p].style.backgroundColor = 'red';  

        }
         pageControl.setPage(page);
         var timer = setInterval(moveLeft,3000); 

}