$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});

	$('#submit').click(function(){
		var name = $('#name').val();
		var phone = $('#phone').val();
		var company = $('#company').val();

		if(name=="" || name==null){
			alert("请输入姓名");
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		if(company==''){
			alert("不能为空");
			return false;
		}
		
		window.location.href="Submit-success.html";

		// $.ajax({
		// 	type : "post",
		// 	url : "XXXXXX",
		// 	// dataType : "json",
		// 	data : {
		// 		"name": name, 
		// 		"phone": phone,
		// 		"company": company,
		// 	},
		// 	success : function(data) {
		// 		window.laction.href = "Submit-success.html";
		// 	},
		// 	error : function() {
		// 		alert("页面出错！");
		// 	}
		// });
	})
})