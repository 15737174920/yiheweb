window.onload=function(){
var hfl=document.getElementsByClassName('hfl')[0];
var hmenu =document.getElementsByClassName('meau-drop')[0];
var  sub =document.getElementsByClassName('sub-meau')[0];
var blis=sub.querySelectorAll('.item-list');
var alis=hmenu.querySelectorAll('.meau-drop .fir-item');
hfl.onmouseover=function(){
	hmenu.classList.add('dis');
	console.log('dkjfkd')
}
hfl.onmouseout=function(){
	hmenu.classList.remove('dis');
}
function tabChange(nIndex){
	for(var i=0;i<alis.length;i++){
	alis[i].classList.remove('bgc');
	blis[i].classList.remove('active');

}
	alis[nIndex].classList.add('bgc');
	blis[nIndex].classList.add('active');
}	

for(var i = 0; i <alis.length; i++){
	alis[i].zky = i ;
	alis[i].onmouseover = function(){
		tabChange(this.zky);
	}

}    var galleryTop = new Swiper('.gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10,
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;
    

//////////////////////////////////////

var p2=document.getElementsByClassName('part2')[0];
var olis=p2.querySelectorAll('.part2 >ul > li');
var odivs=p2.querySelectorAll('.part2 > div');
function change(nIndex){
	for(var index=0;index<olis.length;index++){
		olis[index].classList='';
	odivs[index].classList='';

}
	olis[nIndex].classList.add('selecta');
	odivs[nIndex].classList.add('selectb');
	
}
for(var i=0;i<olis.length;i++){
	olis[i].a=i;
	olis[i].onmouseover=function(){
		change(this.a);
	}
}

































}