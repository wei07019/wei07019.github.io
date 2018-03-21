$(".ds_logo").click(function () {
	window.location.href = "../index.html"
})
//百度搜索框

    $(function () {
        //给输入框添加键盘弹起事件
        $(".ds_find").keyup(function () {
            //发起一个jsonp请求
            $.ajax({
                url: "http://datainfo.duapp.com/shopdata/selectGoodes.php?callback=",
                dataType: "JSONP",//使用script标签来实现请求而不是xhr
                data:{selectText:$(".ds_find").val()},
                success: function (res) {
                    //res从服务器获取到数据
                     	 console.log(res);
                    var arr = res;//获取搜索的结果
                    
                    var htmlstr = "";
                   
                    for(var i= 0,len=arr.length;i<len;i++) {
                    	 var goodsName = arr[i].goodsName;
                    	 var goodsListImg = arr[i].goodsListImg;
                    	 var price = arr[i].price;
                        htmlstr += "<li>"
                        		+ "<img src='"
                        		+	goodsListImg
                        		+ "'>"				
								+ "<div class='ds_search_price'>"
								+ "<p>"
								+ goodsName
								+ "</p>"
								+ "<p>"
								+ "<span>"
								+" ￥" 
								+ price
								+ "</span>"
							    + "<span>"
								+ "<img src='../img/addgouwu_ic_press.png'>"
								+ "</span>"
								+ "</p>"
								+ "</div>"
								+ "</li>";
                    }
                    //显示到列表中
                    $(".ds_search_content ul").html(htmlstr);
                }
            });
        });
    })	