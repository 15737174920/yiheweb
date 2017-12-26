/*首页*/
$(function(){

    $(".shop").on("click","li",function () {
        var index = $(this).index();
        $(this).addClass("actived").siblings().removeClass("actived");
        $(this).parents("#search").find(".yh-hot .hot").eq(index).removeClass("none").siblings().addClass("none");
    });
    //下拉菜单
    $(".firs").on("mouseover",".fir-item", function() {
        var index = $(this).index();
        $(this).addClass("selector").siblings().removeClass("selector");
        $(this).parents(".first-meau").find(".item-list").eq(index).addClass("active").siblings().removeClass("active");
    });
//选项卡

    $(".blist").on("click","li",function(){
        var index = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).parents(".yh-wrap").find(".blsit-list li").eq(index).show().siblings().hide();
    });


//鼠标滑动事件
function move(part) {
    var lis=$(part).find(".blist li");
    var leader=0;
    var target=0;
    var current=0;
    for(var i=0;i<lis.length;i++){
        lis[i].onmouseover=function(){
            target=this.offsetLeft;
        };
        lis[i].onmouseout=function(){
            target=current;
        };
        lis[i].onclick=function(){
            current=this.offsetLeft;
        }
    }
    setInterval(function(){
        leader=leader+(target-leader)/20;
        // console.log(leader);
        $(part).find("h4.cur").css({left:leader+'px'});
    },10);

}
move(".part1");
move(".part2");
move(".part3");
move(".part4");
move(".part5");



    //personal 手风琴
    $(".per-left ul li ").click(function(){
        $(this).children("ul .per-meau").slideToggle();

        //siblings() 表示当前元素的所有同胞元素
        $(this).siblings().children("ul .per-meau").slideUp();

    });

});











