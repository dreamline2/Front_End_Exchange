$(function(){

$(window).scroll(function(){
	if($(window).scrollTop()>200){
	$('#scroll_top').stop(true,false).animate({bottom:0},800,"easeInBounce");
	}else{$('#scroll_top').stop(true,false).animate({bottom:-350},800,"easeOutBounce");}
	//兔子TOP按鈕

   if($(window).scrollTop()>500){
	$('.role2').stop(true,false).animate({top:0},1000,"easeOutBounce",function(){
	$(".skateboard").stop().animate({top:0,left:0},1200,"easeInOutBack");});
	}else{$('.role2').stop(true,false).animate({top:-1500},1000);
	$(".skateboard").stop(true,false).animate({top:-2500,left:-2500},1200);}
	//第二個區塊跑動畫

console.log($(window).scrollTop());
});//scroll


	var NOW;	
	var MOVE;
	var HEIGHT = $(".bg_1").innerHeight();

	$('#scroll_top').click(function gotop(){
		$('body,html').stop(true,false).animate({scrollTop:0},2000,"easeOutBounce");});	

	$(".nav li").click(function(){		
		NOW = $(this).index();		
		MOVE = NOW * HEIGHT * 1;	
		$("body,html").stop(true,false).animate({scrollTop:MOVE},1500,"easeOutBounce");
		return false;		
});//卷軸畫面

$(".role").stop(true,false).animate({width:424,height:424},500,"easeOutBounce",
	function(){
	$(".bigstar").stop(true,false).animate({top:0,width:"100%",height:"100%",left:0},1000,"easeOutBounce",
	function(){	$(".logo").stop(true,false).animate({width:750,height:301,top:"30%"},800,"easeOutBounce");});});
	//進場動畫	


 $(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});

});