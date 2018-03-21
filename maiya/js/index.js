$('.ds_content').height($(window).height()-50-56);
$(".ds_find").click(function () {
	window.location.href = "html/search.html";
})
var username;
$(".ds_nav_search").click(function () {
	if(username == null){
		$(".ds_zz").css("display","block");
		$(".zzp_go").click(function () {
			window.location.href = "html/login.html";
		})	
	}else{
		window.location.href = "html/ddcx.html";
	}
	

})
$(".ds_nav_shoucang").click(function () {
	if(username == null){
		$(".ds_zz").css("display","block");
		$(".zzp_go").click(function () {
			window.location.href = "html/login.html";
		})	
	}else{
		window.location.href = "html/scgl.html";
	}
})
$(".ds_bottom .ds_home").click(function () {

	window.location.href="index.html";
})

$(".ds_bottom .ds_divide").click(function () {

	window.location.href="html/index_yzx.html";
	
})
$(".ds_bottom .ds_mine").click(function () {

	window.location.href="html/my.html";
	
})
$(".ds_bottom .ds_shopcar").click(function () {

	window.location.href="html/shopcar.html";
	
})