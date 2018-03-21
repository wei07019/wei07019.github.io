			var jt_value = "";
			var realPrice = 0;
			var amout = document.getElementById("amout");
			function car() {
				$.ajax({
					type:"get",
					url:"http://datainfo.duapp.com/shopdata/getCar.php",
					data:{"userID":"maiya"},
					dataType:'JSONP',
					success:function(data){
						console.log(data);
						jt_value = data;
						console.log(jt_value);
						var len = data.length;
						console.log(data);
						//var str = jt_value.substring(1,len-1);  // 截取json字符串
						//var result = JSON.parse(str);  //将json字符串转换为对象
						for(var k = 0; k < jt_value.length; k++) {
							jt_value[k].ifExit = 0;
						}
						var li='';
						for(var i in data){
							var goodsListImg = data[i].goodsListImg;
							var goodsName = data[i].goodsName;
							var price = data[i].price;
							var discount = data[i].discount;
							var goodsID = data[i].goodsID;
							var number = data[i].number;

							if(discount == "0"){  // 判断是否有折扣
								realPrice = price;
							}else{
								realPrice = price*discount/10;
							}
							li += '<div class="goods">'
								+ '<div class="goods-li">'
								+ '<div class="jt-xuanzhong"></div>'
								+ '<div class="jt-imgs">'
								+ '<img src="' + goodsListImg + '" />'
								+ '</div>'
								+ '<div class="jt-datas">'
								+ '<div class="jt-data1">'
								+ '<div class="jt-data1-1">'
								+ goodsName
								+ '</div>'
								+ '<div class="jt-data1-2">'
								+ '<p class="price1">¥'+ realPrice +'</p>'
								+ '<p class="price2">¥' + price + '</p>'
								+ '</div>'
								+ '</div>'
								+ '<div class="jt-data2">'
								+ '<div class="jt-data2-1">'
								+ '<form class="js">'
								+ '<button id="jian" name="btn2">-</button>'
								+ '<input type="text" value="' + number + '" id="txt" />'
								+ '<button id="add" name="btn1" >+</button>'
								+ '</form>'
								+ '</div>'
								+ '<div class="jt-data2-2">有货</div>'
								+ '<div class="jt-data2-4"></div>'
								+ '<div class="jt-data2-3">'
								+ '</div></div></div></div></div></div></div>'
						}

						$('.jt-goods').html(li);
						computing();
						jisuan();
					}
				});
			}
			car();

        function computing() {
    		var totalCount = 0;
    		var totalAmount = 0;
			var z_num = 0;
    		for(var i = 0; i < jt_value.length; i++ ) {
    			if(jt_value[i].ifExit == 1 ) {
					var obj = jt_value[i];//购物车商品对象
					totalCount += 1;
					totalAmount += obj.number * $(".price1").html().substring(1);
				}
    		}
	    	//显示数量和金额
	    	$(".zong-price").html(totalAmount);
			$(".coument").html("(" + totalCount + ")");
    	}

		function gengxin(gID,num){
			$.ajax({
				type:"get",
				url:"http://datainfo.duapp.com/shopdata/updatecar.php",
				data:{"userID":"maiya","goodsID":gID,"number":num},
				async:true,
				success:function(data){
					console.log(data);
				}
			});
		};

       //给列表添加事件
		  function jisuan() {
			  $(".js button").click(function(){
				  var amount = "";
				  var index = $(this).parent().index(".js");
				  if($(this).attr("name") == "btn1") {
					  console.log("aaa");
					  amount = parseInt($(this).prev().val());
					  amount += 1;
					  $(this).prev().val(amount);
				  } else if($(this).attr("name") == "btn2") {
					  console.log("aaa");
					  amount = parseInt($(this).next().val());
					  console.log(index);
					  if (amount == 1) {
						  $(this).attr("disabled", "disabled");
					  } else {
						  amount -= 1;
					  }
					  $(this).next().val(amount);
					  //var amountId = jt_value[index].goodsID;
					  //jt_value[index].number = amount;
					  //gengxin(amountId, amount);
					  //computing();
				  }
				  var amountId = jt_value[index].goodsID;
				  jt_value[index].number = amount;
				  gengxin(amountId,amount);
				  computing();
			  });
			  $(".js input").blur(function () {
				  var num = $(this).val();
				  var index = $(this).parent().index(".js");
				  var reg = /[1-99]/;
				  if(reg.test(num)) {
					  jt_value[index].number = num;
					  var amountId = jt_value[index].goodsID;
					  gengxin(amountId, jt_value[index].number);
				  } else {
					  $(this).val(jt_value[index].number);
				  }
				  computing();
			  });

			  $(".jt-data2-3").click(function () {
				  var index = $(this).index();
				  $(this).parent().parent().parent().parent().remove();
				  var amountId = jt_value[index].goodsID;
				  gengxin(amountId,0);
				  computing();
			  });
			  var a = true;
			  $(".goods-li").children().eq(0).click(function () {
				  var index = $(".goods-li").index();
				  console.log(index);
				  if(a) {
					  $(this).removeClass("jt-xuanzhong").addClass("jt-xuanzhongs");
					  a = false;
					  jt_value[index].ifExit = 1;
				  } else {
					  $(this).removeClass("jt-xuanzhongs").addClass("jt-xuanzhong");
					  a = true;
					  jt_value[index].ifExit = 0;
				  }
				  computing();
			  });

			  $(".quanxuan").click(function () {
				  if(a) {
					  for(var i = 0; i < jt_value.length; i++) {
						  $("quanxuan").removeClass("quanxuan").addClass("quanxuans");
						  $(".jt-xuanzhong").removeClass("jt-xuanzhong").addClass("jt-xuanzhongs");
						  a = false;
						  jt_value[i].ifExit = 1;
					  }
				  } else {
					  for(var i = 0; i < jt_value.length; i++) {
						  $(".quanxuans").removeClass("quanxuans").addClass("quanxuan");
						  $(".jt-xuanzhongs").removeClass("jt-xuanzhongs").addClass("jt-xuanzhong");
						  a = true;
						  jt_value[i].ifExit = 0;
					  }
				  }
				  computing();
			  })
		  }
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
