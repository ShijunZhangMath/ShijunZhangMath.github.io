
/*input html tring in js
dddd<span id="zsj"></span>dddd
<script type="text/javascript">
	    var navBarItem=document.getElementById("zsj")
    document.write(navBarItem)
    navBarItem.innerHTML="zsjzsj"	
</script>*/

var	h=screen.height;
var	w=screen.width;
var	wc=window.innerWidth;
var	hc=window.innerHeight;
var phoneOrPc=0
if (w<h && wc<1200) {
	phoneOrPc=1
}
else{
	phoneOrPc=0
}

var zsjPhoto=document.getElementById("zsjPhoto")
if (phoneOrPc==1) {zsjPhoto.style.width=w*0.935 +"px"} else { zsjPhoto.style.width=w*0.35 +"px"}




if (phoneOrPc==0){
	document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.fontSize=w*0.0195421+"px";
document.getElementById("introduction").style.fontWeight=520;
}
else {document.getElementById("introduction").style.lineHeight=w*0.055421+"px";
document.getElementById("introduction").style.lineHeight=w*0.055421+"px";}


/*insert Css*/ 
var pageWidth=0
if (phoneOrPc==0) {pageWidth=0.85*w} else { pageWidth=0.99*w }
var insertHomeCss=".pageContainer { display:block;margin:0 auto;width:"+pageWidth+"px;}"
var styleInJsNew=document.getElementById("styleInJs");
styleInJs.innerHTML=insertStyle.join('')+insertHomeCss


