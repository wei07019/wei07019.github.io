$(document).ready(function(){
//	$.ajax({
//		type:'get',
//		url:'http://datainfo.duapp.com/shopdata/getBanner.php?callback=',
//		data:{
//			
//		},
//		datatype:'JSONP',
//		success:function(data){
//			var len=data.length;
//			console.log(typeof data);
//			var qq=data.substring(1,len-1)
//			var url=JSON.parse(qq)
//			console.log(url);
//			var b='<div class="swiper-wrapper">';
//			for(var i in url){
//				var url_b=url[i].goodsBenUrl;
//				var aaa=JSON.parse(url_b)
//				
//				b+='<div class="swiper-slide"><img src="'+aaa[1]+'"/></div>'
//				
//			}
//			b+='</div>'
//			$('.swiper-container').append(b);
//			 var mySwiper = new Swiper ('.swiper-container', {
//			    
//			    loop: true,
//			 
//			    pagination: '.swiper-pagination',
//			  
//			 
//			  })        
//		}
//	})
	
	
	$.ajax({
		type:"get",
		url:"http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
		dataType:'JSONP',
		data:{
			
		},
		success:function(data){
			
			var len = data.length;
			console.log(data);
//			var str = data.substring(1,len-1);  // 截取json字符串
//			var result = JSON.parse(str);  //将json字符串转换为对象
			var li='<ul>'
			for(var i in data){
				var goodsListImg = data[i].goodsListImg;
				var goodsName = data[i].goodsName;
				var price = data[i].price;
				var discount = data[i].discount;
				var goodsID = data[i].goodsID;
				var realPrice = 0;
				if(discount == "0"){  // 判断是否有折扣
					realPrice = price;
				}else{
					realPrice = price*discount/10;
				}
				li += '<li class="ds_goodlist_li">'
				    + '<div class="ds_goodlist_div">'
					+ '<div class="ds_goodlist_img">'
					+ '<img src="' + goodsListImg + '">'
					+ '</div>'
					+ '<p class="ds_goodlist_p1">' + goodsName + '</p>'
					+ '<div class="ds_price_div">'
					+ '<p class="ds_nowprice">¥' + realPrice + '</p>'
					+ '<del>¥' + price + '</del>'						
					+ '</div></div></li>'
				
//				li+='<li class="ds_goodlist_li" goodsID="'+goodsID+'">';
//				li+='<div class="ds_goodlist_div"><div class="ds_goodlist_img"><img src="'+goodsListImg+'"/></div>';
//				li+='p class="ds_goodlist_p1"'+goodsName+'</p>';
//				li+='div class="ds_price_div"<p class="ds_nowprice">'+realPrice+'<del>'+price+'</del></div>';
//				li+='</div></li>'
			
			}
			li+='</ul>'
			$('.ds_goodlist').html(li)
		}
	});
})
