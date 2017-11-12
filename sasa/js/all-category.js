/*$(function(){
		$(" .level-1").hover(function(){
			
			$(this).addClass('current')   
		 
			.find('i').addClass('down')   
			.parent().next().slideDown('slow','easeOutQuad') 
		
		},function(){
					
		    $(this).children('ul').slideUp('slow')	
		});
	})



*/

$(function() {
		
				$(".level-11").hover(function() {
					$(this).children("ul").show();
				},function(){
					$(this).children("ul").hide();
				});
	});