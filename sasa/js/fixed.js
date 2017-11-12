

 
$(function(){
    var w=$('body').width();
    console.log(w);
})

 $(window).scroll(function(){/*左边小固定*/
   
    if ($(window).scrollTop()>700){
         $("#menu").fadeIn(1000);
         $("#menu").show(1000);
        // 判断滚动 定义楼层的样式
        var a=$("#must-check").height()+700;
        var b=$("#limited-offer").height()+a;
        var c=$("#ranking").height()+a+b;
        // function addBg(){
        //     $(".taoba").removeClass("li_after");
        //     $(".taoba:eq(0)").addClass("li_after");
        // }
        if ( $(window).scrollTop()>=700 && $(window).scrollTop()<=a){
            $(".taoba").removeClass("li_after");
              $(".taoba:eq(0)").addClass("li_after");
            //addBg();
        }
        else if ( $(window).scrollTop()>a && $(window).scrollTop()<=b){
            $(".taoba").removeClass("li_after");
              $(".taoba:eq(1)").addClass("li_after");
            // addBg();
        }
        else if ( $(window).scrollTop()>b && $(window).scrollTop()<=c) {
            $(".taoba").removeClass("li_after");
              $(".taoba:eq(2)").addClass("li_after");
            //addBg()
        }
        
    }
    
    else
    {
        $("#menu").fadeOut(1000);
    }
   
    $(".taoba").click(function(){
         $(".taoba").removeClass("li_after");
         $(this).addClass("li_after");
          var index=$(this).attr("tit");//获取当前title的数字1/2/3
          console.log(index);
     	var id='#'+'tb-'+index //获取当前id=#tb-1/2/3
  	    var x=$(id).offset();//获取要跳转的位置
		$("html,body").animate({scrollTop: x.top}, 1000);//偏移到获取的指定id位置
		if (document.body.scrollTop === 0) {//取消setinterval设置的定时器，解决偏移时会出现页面不能滚动的状态
         clearInterval(time);
    }
    });
    
    
});
 