$(function(){
	var sw = 0;
	$(".hotPic .num span").mouseover(function(){
		sw = $(".hotPic .num span").index(this);
		myShow(sw);
	});
	function myShow(i){
		$(".hotPic .num span").eq(i).addClass("cur").siblings("span").removeClass("cur");
		$(".hotPic .pic li").eq(i).stop(true,true).fadeIn(600).siblings("li").fadeOut(600);
		/*$(".hotPic .text p").eq(i).show().siblings("p").hide();*/
	}
	//滑入停止动画，滑出开始动画
	$(".hotPic").hover(function(){
		if(myTime){
		   clearInterval(myTime);
		}
	},function(){
		myTime = setInterval(function(){
		  myShow(sw)
		  sw++;
		  if(sw==$(".hotPic .pic li").length){sw=0;}
		} ,3000);
	});
	//自动开始
	var myTime = setInterval(function(){
	   myShow(sw)
	   sw++;
	   if(sw==$(".hotPic .pic li").length){sw=0;}
	} , 3000);
});
/*
本代码由97站长网收集并编辑整理;
尊重他人劳动成果;
转载请保留97站长网链接 - www.97zzw.com
*/
