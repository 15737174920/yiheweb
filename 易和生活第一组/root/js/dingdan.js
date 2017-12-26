window.onload=function(){
	var area=document.getElementsByClassName('area')[0];
	var areacy=document.getElementById('areacy');

	area.onmouseover=function(){
		areacy.style.display='block';
		
	}
	area.onmouseout=function(){
		areacy.style.display='none';
			
	}
}