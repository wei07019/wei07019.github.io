//login
$(function() {
	$("#yyw_username input").focus();
	var isLogin = false;
	$("#login_btn").on("click",function() {
		var username = $("#yyw_username input").val();
		var psd=$("#yyw_password input").val();
		if(/\w*/.test(username)) {
			$.ajax({
				url: "http://datainfo.duapp.com/shopdata/userinfo.php",
				type: "get",
				dataType: "json",
				data: {status:"login",userID:username,password:psd},
				success: function (data){
					if(data == 0) {
						$("#login_err").html("用户名不存在");
						 show_err();
					} else if(data == 2) {
						$("#login_err").html("密码错误");
						 show_err();
					} else {
						$("#login_err").html("登录成功");
						console.log(data);
						if(isLogin) {
							localStorage.setItem("maiya",username);
						} else {
							localStorage.removeItem("maiya");
							sessionStorage.setItem("maiya",username);
						}
						window.location.href = "my.html"
					}
				}
			})
		} else {
			$("#login_err").html("手机号不合法");
			 show_err();
		}
	});
	$("#auto_login").click(function() {
		if(isLogin) {
			$(this).removeClass("auto_login");
			isLogin = false;
		} else {
			$(this).addClass("auto_login");
			isLogin = true;
		}
	})
	function show_err() {
		$("#login_err").fadeIn(100,function() {
			setTimeout(function() {
				$("#login_err").fadeOut(300);
			},1000)
		});				
	}
})

//my
$("#yyw_content2").height($(window).height() - 100);
//登录
var username = localStorage.getItem("maiya") ? localStorage.getItem("maiya"):sessionStorage.getItem("maiya");
if(username) {
	$("#yyw_content2").css("display","block");
	$("#yyw_content1").css("display","none");
	$("#yyw_content2 .yyw_username").html(username);
	$.ajax({
		url: "http://datainfo.duapp.com/shopdata/getuser.php?callback=",
		type: "get",
		datatype: "jsonp",
		data: {userID:username},
		success: function(data) {
			var obj = JSON.parse(data.substring(2,data.length - 2));
			console.log(obj.userimg_url)
			$("#yyw_content2 .yyw_userimg").css("background-image","url(" + obj.userimg_url + ")");
		}
	})
} else {
	$("#yyw_content2").css("display","none");
	$("#yyw_content1").css("display","block");
	
}
var myScroll,
	hoverClassRegEx = new RegExp('(^|\\s)iScrollHover(\\s|$)'),
	removeClass = function () {
		if (this.hoverTarget) {
			clearTimeout(this.hoverTimeout);
			this.hoverTarget.className = this.hoverTarget.className.replace(hoverClassRegEx, '');
			this.target = null;
		}
	};

function loaded() {
	myScroll = new iScroll('wrapper', {
		onBeforeScrollStart: function (e) {
			var target = e.target;

			clearTimeout(this.hoverTimeout);

			while (target.nodeType != 1) target = target.parentNode;

			this.hoverTimeout = setTimeout(function () {
				if (!hoverClassRegEx.test(target.className)) target.className = target.className ? target.className + ' iScrollHover' : 'iScrollHover';
			}, 80);

			this.hoverTarget = target;
			
			e.preventDefault();
		},
		onScrollMove: removeClass,
		onBeforeScrollEnd: removeClass
	});
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', loaded, false);
	
//register
$(function() {
	var isfw = false;
	var regname;
	var regpsd;
	var ispsd;
	$("#yyw_fwtk").click(function() {
		if(isfw) {
			$(this).removeClass("yyw_fwtk");
			$("#register_btn").css("backgroundColor","#ccc");
			$("#register_btn").prop("disabled",true);
			isfw = false;
		} else {
			$(this).addClass("yyw_fwtk");
			$("#register_btn").css("backgroundColor","#489925");
			$("#register_btn").prop("disabled",false);
			isfw = true;					
		}
	});
	$("#register_btn").click(function(event) {
		
		regname = $("#yyw_regname input").val();
		regpsd = $("#yyw_regpsd input").val();
		ispsd = $("#yyw_ispassword input").val();
		if(/\w*/.test(regname)) {
			if(regpsd == ispsd) {
				$.ajax({
					url: "http://datainfo.duapp.com/shopdata/userinfo.php",
					data: {status:"register",userID:regname,password:regpsd},
					dataType: "json",
					success: function(data) {
						if(data == 0) {
							$("#reg_err").html("用户名已注册");
							reg_err();
						} else if(data == 2){
							$("#reg_err").html("数据库错误");
							reg_err();
						} else{
							$("#reg_err").html("登录成功,请登录");
							reg_err();
							setTimeout(function() {
								window.location.href = "login.html";
							},1000)									
						}
					}
				});
			} else {
				$("#reg_err").html("两次密码不相同");
				reg_err();
			}
		} else {
			$("#reg_err").html("手机号码不合法");
			reg_err();
		}
		event.stopPropagation();
	})
	function reg_err() {
		$("#reg_err").fadeIn(100,function() {
			setTimeout(function() {
				$("#reg_err").fadeOut(300);
			},1000)
		});				
	}
})
$(".ds_bottom .ds_home").click(function () {
	
	window.location.href="../index.html";
})

$(".ds_bottom .ds_divide").click(function () {
	
	window.location.href="../html/index_yzx.html";
	
})
$(".ds_bottom .ds_mine").click(function () {
	
	window.location.href="../html/my.html";
	
})
$(".ds_bottom .ds_shopcar").click(function () {
	
	window.location.href="../html/shopcar.html";
	
})
