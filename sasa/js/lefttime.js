

var intDiff = parseInt(60);//倒计时总秒数量
function timer(intDiff){
    window.setInterval(function(){
    
    if(intDiff > 0){
    	var endtime=new Date("2017/10/01,09:00:00");
        var nowtime = new Date();
        var lefttime= parseInt((endtime.getTime() - nowtime.getTime()) / 1000); 
        d=  parseInt(lefttime/(24*60*60));
        h=  parseInt(lefttime/(60*60)%24);
        m=  parseInt(lefttime/60%60);
        s=  parseInt(lefttime%60);    
    }
    if (m<= 9) m= '0' +m;
    if (s <= 9) s = '0' + s;
    $('#day_show').html(d+"天");
    $('#hour_show').html('<s id="h"></s>'+h+'时');
    $('#minute_show').html('<s></s>'+m+'分');
    $('#second_show').html('<s></s>'+s+'秒');
    
    $('#day_show-2').html(d+"天");
    $('#hour_show-2').html('<s id="h"></s>'+h+'时');
    $('#minute_show-2').html('<s></s>'+m+'分');
    $('#second_show-2').html('<s></s>'+s+'秒');
    
    $('#day_show-3').html(d+"天");
    $('#hour_show-3').html('<s id="h"></s>'+h+'时');
    $('#minute_show-3').html('<s></s>'+m+'分');
    $('#second_show-3').html('<s></s>'+s+'秒');
    
    $('#day_show-4').html(d+"天");
    $('#hour_show-4').html('<s id="h"></s>'+h+'时');
    $('#minute_show-4').html('<s></s>'+m+'分');
    $('#second_show-4').html('<s></s>'+s+'秒');
    
    $('#day_show-5').html(d+"天");
    $('#hour_show-5').html('<s id="h"></s>'+h+'时');
    $('#minute_show-5').html('<s></s>'+m+'分');
    $('#second_show-5').html('<s></s>'+s+'秒');
    intDiff--;
    
    }, 1000);

} 
$(function(){
    timer(intDiff);
}); 