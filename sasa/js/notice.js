
$(function() {
	var num = $('.notice_active').find('li').length;
	if(num > 1) {
		var time = setInterval('timer1($(".notice_active"))', 3000);
		
	}
});

function timer1(opj) {
	$(opj).find('ul').animate({
		marginTop: "-28px" /*大小跟蚊子区域一致 否则滑动达不到预期效果*/
	}, 1000, function() {
		$(this).css({ marginTop: "0" }).find("li:first").appendTo(this);
	});
}