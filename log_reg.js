function check(regFrom){
	if(regFrom.username.value=='' || regFrom.username.value=='邮箱地址'){
		alert("用户名不能为空!");
		regFrom.username.focus();
		return (false);
	}
	if(regFrom.password.value==''){
		alert("密码不能为空!");
		regFrom.username.focus();
		return (false);
	}
}
