$(function()
	{  
		
		/*验证name*/
		$(".yourname").blur(function(){
	        var na=$(".yourname").val();
	        var divname=$("#divname")
	        if(na.length<1||na.length>8)
	        {
	        	divname.text("请正确输入字符");
	        	divname.css("color","red");
	        }
	        else
	        {
		        divname.text("输入正确");
		        divname.css("color","green");
	        }
	   });
	   /*验证密码  密码必须是数字与字母的组合*/
	   $(".yourpass").blur(function(){
	   	var psd1=$(".yourpass").val();
	   	var divpsw1=$("#divpassword1")
	   	
	   	var flagzm=false;
	   	var flagsz=false;
	   	var flagqt=false;
	   	if(psd1.length<6||psd1.length>12)
	   	{
	   		divpsw1.text("长度错误");
	   		divpsw1.css("color","red")
	   	}
	   	else{
	   		for(var i=0;i<psd1.length;i++)
	   		{
	   			if((psd1.charAt(i)<='A'&&psd1.charAt(i)>='Z')||(psd1.charAt(i)>='a'&&psd1.charAt(i)<='z'))
	   			{
	   				flagzm=true;
	   			}
	   			else if(psd1.charAt(i)>='0'&&psd1.charAt(i)>='9')
	   			{
	   				flagsz=true;
	   				
	   			}
	   			else
	   			{
	   				flagqt=true;
	   			}
	   			
	   		}
	   		
	   		
	   		if((flagzm&&flagsz)||(flagzm&&flagqt))
	   		{
	   			divpsw1.text("输入正确");
	   			divpsw1.css("color","green");
	   			
	   		}
	   		else
	   		{
	   			divpsw1.text("密码必须是字母数字的组合");
	   			divpsw1.css("color","red");
	   		}
	   	}
	   	
	   
	   });
	   
	   
	   
	   /*第二次验证密码*/
	  $(".yourpass1").blur(function(){
	  	
	   	if($(".yourpass").val()!=$(".yourpass1").val())
	   	{
	   		$("#divpassword2").text("您两次输入的密码不一样");
	   		$("#divpassword2").css("color","red");
	   	}
	   	else{
	   		if($(".yourpass").val()=="")
	   		{
	   			$("#divpassword2").text("请先输入密码");
	   			$("#divpassword2").css("color","red")
	   		}
	   		else{
	   			$("#divpassword2").text("输入正确");
	   			$("#divpassword2").css("color","green")
	   		}
	   	}
	   
	   });
	   
	   /*验证邮箱*/
	   $(".youremail").blur(function(){
	  	var a=$(".youremail").val().indexOf("@");
	  	var b=$(".youremail").val().lastIndexOf(".");
	  	if(a<1||b-a<2)
	  	{
	  		$("#divmail").text("输入错误");
	  		$("#divmail").css("color","red");
	  	}
	   	else
	   	{
	   		$("#divmail").text("输入正确");
	  		$("#divmail").css("color","green");
	   	}
	   
	   });
	   
	   /*验证登录*/
	   $(".submit").click(function(e){
	  	var na=$(".yourname").val();
	  	var psd1=$(".yourpass").val();
	  	var psd2=$(".yourpass1").val();
	  	
	  	var email=$(".youremail").val();
	  	
	  	if(psd1==psd2&&psd1!=""&&(psd1.length>=6)&&(psd1.length<=12)&&(psd2.length>=6)&&(psd2.length)<=12)
	  	{
	  		location.href="file:///E:/%E5%A4%A7%E4%B8%89/gezuxia/201400406068%20%E8%91%9B%E7%A5%96%E9%9C%9E/%E9%A1%B9%E7%9B%AE/index.html"
	  	}
	   	else
	   	{
	   		
	   		return false;
	   		
	   	}
	   
	   });
	   
	   /*暂不登录*/
	   $(".submit1").click(function(){
	   	location.href="http://127.0.0.1:8020/../index.html"
	   });
	   
	   
	
	
     
});

  
