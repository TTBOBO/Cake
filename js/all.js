    	function js()
		{
				var e = document.getElementById("username").value;
				var p = document.getElementById("password").value;
				var y = document.getElementById("password").value;
				if(e=="" && e!="请输入用户名")
				{
					document.getElementById("u").innerHTML="*你的用户没有输入";
					document.getElementById("u").innerHTML.focus();
					return false;
					
				}else{
					document.getElementById("u").innerHTML="";
					if(e.length<6){
						alert("用户名不能少于6位");
						return false;
					}
				}
				if(p=="" && p!="请输入用户名")
				{
					document.getElementById("p").innerHTML="*你的密码没有输入";
					document.getElementById("p").innerHTML.focus();
					return false;
					
				}
				else{
					document.getElementById("p").innerHTML="";
					if(p.length<6){
						alert("密码不能少于6位");
						return false;
					}
				}
				
				var inputCode = document.getElementById("yzm").value;
				  if (inputCode.length <= 0) {
				    document.getElementById("y").innerHTML="*请输入验证码";
				  } else if (inputCode != code) {
				  	document.getElementById("y").innerHTML="*验证码输入错误！";
				   
				  createCode();//刷新验证码  
				  }else{
				  	document.getElementById("y").innerHTML="";
				  }
		}
		

function check(){
	if(regFrom.username.value=='' || regFrom.username.value=='邮箱地址'){
		alert("用户名不能为空!");
		regFrom.username.focus();
		return (false);
	}else{
		if(regFrom.username.value.length<6){
			alert("用户名不能少于六位数！");
			regFrom.username.focus();
			return false;
		}
	}
	
	if(regFrom.password.value==''){
		alert("密码不能为空!");
		regFrom.username.focus();
		return (false);
	}else{
		if(regFrom.password.value.length<6){
			alert("密码不能少于六位数!");
			regFrom.password.focus();
			return false;
		}
	}
	
	if(regFrom.username.value == regFrom.password.value){
		alert("用户名不能跟密码相同");
		regFrom.password.focus();
			return false;
	}

	
	if(regFrom.regpassword.value==''){
		alert("确认密码不能为空！");
		regFrom.regpassword.focus();
		return false;
	}else{
		if(regFrom.regpassword.value.length<6){
			alert("确认密码不能少于6位数");
			regFrom.regpassword.focus();
			return false;
		}
	}
	
	if(regFrom.regpassword.value !=regFrom.password.value){
		alert("两次密码不一致，请重新填写!");
		regFrom.regpassword.focus();
		return false;
	}
	
	if(regFrom.tell.value=='' || regFrom.tell.value=='手机号码'){
		alert("手机号码必须填写");
		regFrom.tel.focus();
		return false;
	}else{
		if(regFrom.tell.value.length!=11){
			alert("你所输入的手机号格式不正确！");
			regFrom.tel.focus();
			return false;
			
		}
	}
	  var inputCode = document.getElementById("yzm").value;
		  if (inputCode.length <= 0) {
		    alert("请输入验证码！");
		  } else if (inputCode != code) {
		    alert("验证码输入错误！");
		  createCode();//刷新验证码  
		  }
	}

/*验证码*/

var code; //在全局 定义验证码  
function createCode() {
  code = "";
  var codeLength = 6;//验证码的长度  
  var checkCode = document.getElementById("checkCode");
  var selectChar = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');//所有候选组成验证码的字符，当然也可以用中文的
  
  for (var i = 0; i < codeLength; i++) {
    var charIndex = Math.floor(Math.random() *36);
    code += selectChar[charIndex];
  }
  //alert(code);
  if (checkCode) {
    checkCode.className = "code";
    checkCode.value = code;
  }
}
  
