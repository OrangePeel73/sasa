/*top触发事件*/
$(function() {
		
				$(".top-meau").hover(function() {
					$(this).children("ul").slideDown();
				},function(){
					$(this).children("ul").slideUp();
				});
	});
/*微信显示/隐藏事件*/
$(function() {
		
				$(".weixin").hover(function() {
					$(".weixin1").show();
				},function(){
					$(".weixin1").hide();
				});
	});
/*微博显示/隐藏事件*/
$(function() {
		
				$(".weibo").hover(function() {
					$(".weibo1").show();
				},function(){
					$(".weibo1").hide();
				});
	});
	


$(window).scroll(function(){/*返回顶部滚动/淡入效果事件*/
    if ($(window).scrollTop()>100){
        $("#back").fadeIn(1000);
    }
    else
    {
        $("#back").fadeOut(1000);
    }
    //当点击跳转链接后，回到页面顶部位置
    $("#back").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        if (document.body.scrollTop === 0) {
            clearInterval(time);
        }
    });
});






