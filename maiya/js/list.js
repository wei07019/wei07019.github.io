$("#list_yzx").height($(window).height() - 100 + "px");
var username = localStorage.getItem("maiya") ? localStorage.getItem("maiya"):sessionStorage.getItem("maiya");
$.ajax({
	type:"get",
	url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
	datatype:'JSONP',
	success:function(data){
		
		var len=data.length;
		var result=data.substring(1, len-1);
		var qqq=JSON.parse(result);
		var htmlStr = "";
		for(var i in qqq){
			var goodsID = qqq[i].goodsID;
			var discount = qqq[i].discount;
			var goodsListImg = qqq[i].goodsListImg;
			var goodsName = qqq[i].goodsName;
			var price = qqq[i].price;
			htmlStr += "<li><a>"
					+	"<div id='goodsImg_yzx'><img src='" + goodsListImg + "'/></div>"
					+	"<div id='price_yzx'>"
					+	"<p>" + goodsName + "</p>"	
					+		"<span>￥" + price + "</span>"
					+	"</div>"
					+	"<div id='cart_yzx' name='"+ goodsID + "'>"
					+	"</div>"
					+"</a></li>"
		}
		$("#list_yzx ul").html(htmlStr)
	}
});
$("#kind div:nth-child(1)").on("tap",function() {
	$("#shade_yzx").css("display","flex");
	$("#list_yzx").css("overflow","hidden");
})
$("#shade_yzx li:last-child").on("tap",function() {
	$("#shade_yzx").css("display","none");
	$("#list_yzx").css("overflow","auto");
})



$("#list_yzx").on("tap","#cart_yzx",function() {
	if(username == null) {
		window.location.href = "login.html";
	} else {
		var gID = $(this).attr("name");
		function gengxin(gID,num){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{"userID":username,"goodsID":gID,"number":num},
				async:true,
				success:function(data){
					//console.log(data);
				}
			});
		}
		
		$.ajax({
			url: "http://datainfo.duapp.com/shopdata/getCar.php?callback=",
			type: "get",
			datetype: "JSONP",
			data: {userID:username},
			success: function(data) {
				var you = false;
				var obj = JSON.parse(data.substring(1,data.length -1));
				if(obj) {					
					console.log(obj);
					for(var i = 0;i < obj.length; i ++) {
						if(obj[i].goodsID == gID) {
							gengxin(gID,Number(obj[i].number) + 1);
							you = true;
						}
					}
					
				}
				if(you) {						
				} else {
					gengxin(gID,1);
				}
			}
		})
	}
})
$("#cartFix_yzx").on("tap",function() {
	
	if(username == null) {
		window.location.href = "shopCart.html";
	} else {
		window.location.href = "login.html";
	}
})
$("#sidebar").height($(window).height() - 100 + "px"); 
$("#contentWrapper").height($(window).height() - 100 + "px") 



var scrollContent,
	scrollNav;

function loaded() {
	scrollContent = new iScroll('contentWrapper');
	scrollNav = new iScroll('navWrapper');
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);

var pre = $("#contentWrapper ul");
$("#navWrapper li").on("tap",function() {
	var index = $(this).index();
	pre.eq(index).css("display","block").siblings().css("display","none");
	$(this).css("background-color","#fff").siblings().css("background-color","#ececec");
})
var rexArr = [false,false,false];
$("#rex img").on("tap",function() {
	var index = $("#rex img").index($(this));

	for(var i = 0;i < 3;i++) {
		rexArr[i] = false;
	} 
	rexArr[index] = true;
	$("#rex img").attr("src","img/xuanzhongno_ic.png");
	$(this).attr("src","img/xuanzhong_ic.png");
	check();
})

function check() {
	var sex = null;
	var name = $("#infoContent_yzx > div").eq(1).children("input").val();
	var birthday = $("#infoContent_yzx > div").eq(3).children("input").val();
	var phone = $("#infoContent_yzx > div").eq(4).children("input").val();
	for(var i = 0;i < 3;i++) {
		if(rexArr[i]){
			sex = i;
		}
	}
	if(name && birthday && /^\d{11}$/.test(phone) && sex != null) {
		$("#infoContent_yzx > div").eq(5).children().css("background-color","#489925");
	} else {
		$("#infoContent_yzx > div").eq(5).children().css("background-color","#ccc");
	}	
}
$("input[type='text']").keyup(check);
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

