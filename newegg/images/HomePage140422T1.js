UI.Emailsuggest=function(I){var M=$(I.results);var L=$(I.input);var J=false;M.find("li").live("click",function(){L.val($(this).text());M.hide();J=true}).live("mouseenter",function(){$(this).addClass("cur").siblings("li").removeClass("cur")});var N={selectClass:"cur",delay:200};function B(){if(!M.is(":visible")){return false}var O=M.children("ul").children("li."+N.selectClass);if(!O.length){O=false}return O}function H(){$currentResult=B();if($currentResult){$currentResult.removeClass(N.selectClass).next().addClass(N.selectClass)}else{M.children("ul").children("li:first-child").addClass(N.selectClass)}}function F(){$currentResult=B();if($currentResult){$currentResult.removeClass(N.selectClass).prev().addClass(N.selectClass)}else{M.children("ul").children("li:last-child").addClass(N.selectClass)}}function A(){$currentResult=B();if($currentResult){L.val($currentResult.text());D=L.val();M.hide()}}var C=function(O){J=false;if((/27$|38$|40$/.test(O.keyCode)&&M.is(":visible"))||(/^13$|^9$/.test(O.keyCode)&&B())){if(O.preventDefault){O.preventDefault()}if(O.stopPropagation){O.stopPropagation()}O.cancelBubble=true;O.returnValue=false;switch(O.keyCode){case 38:F();break;case 40:H();break;case 13:A();return false;break;case 27:M.hide();break}}};function G(P){var R="";var V=["qq.com","hotmail.com","gmail.com","163.com","126.com","sina.com","sohu.com","msn.com","yahoo.cn","yahoo.com.cn","live.cn"];var T=new RegExp("(.*)@(.*)");var O=T.test(P);var S;var U;if(O){S=T.exec(P)[2];U=T.exec(P)[1]}for(var Q=0;Q<V.length;Q++){if(O){if(V[Q].indexOf(S)==0){R+='<li><a href="javascript:void(0)">'+U+"@"+V[Q]+"</a></li>"}else{}}else{R+='<li><a href="javascript:void(0)">'+P+"@"+V[Q]+"</a></li>"}}M.find("ul").html(R);if(M.find("li").length>0){if(J==false){M.show()}}else{M.hide()}}function K(){D=L.val();var O=$.trim(L.val());if(O.length>=1){G(O)}else{M.hide()}}if(!!window.ActiveXObject&&!window.XMLHttpRequest){L.keypress(C)}L.keydown(C);var D=L.val();var E=setInterval(function(){if(L.val()!=D&&L.is(".hasDefaultTextOn")){K()}},N.delay);$(document).bind("click",function(){M.hide()})};function lazySliderImg(C,B){if(C&&C.length>0){B=B||0;var A=0;C.each(function(){if(A++<B){return}var D=$(this).find("img");if(D&&D.length>0){D.each(function(){var E=$(this).attr("src2");E&&$(this).attr("src",E).removeAttr("src2")})}})}}$(function(){BindTemplate&&BindTemplate();var I=[];var B=UI.Xslider(".topslider",{autoScroll:neweggUI.robots()?20000:5000,dir:"F",showNav:false,beforeStart:function(K){$(".topslider .nav a").removeClass("current").eq(K.goIndex-1).addClass("current");B.go(K.goIndex);J.go(K.goIndex);changeSliderImg()}});var J=UI.Xslider("#topslider_child",{dir:"F",showNav:false});$(".topslider .nav a:eq(0)").addClass("current");$(".topslider .nav a").hover(function(){var K=$(this);UI.laterEvent(function(){B.go(K.index()+1);J.go(K.index()+1)},500,B)},function(){});$(".topslider").css("background","#fff");I.push(B);I.push(J);var E=function(){UI.Xslider(".hot_sale",{unitDisplayed:$(window).width()>=1200?4:3,numtoMove:$(window).width()>=1200?4:3,btnNext:"#hot_sale_a",afterEnd:function(K){if(K.EOF){$(".hot_title .agrayright").click(function(){E()})}}})};E();var C={Init:function(){UI.Xslider(".proslider",{unitDisplayed:$(window).width()>=1200?4:3,numtoMove:$(window).width()>=1200?4:3,beforeStart:function(K){lazySliderImg($(".timelimit .proslider .mover ul li"),this.numtoMove)}})}};C.Init();var D=function(){$(I).each(function(L,K){var M=K.getSet();var N=~~K.container.data("curindex");M.imgInit=N;K.init(M)});changeSliderImg()};$(window).bind("scroll resize",function(){sw=$(window).width()>=1200?1200:960;var K=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;toRight=($(window).width()-sw)/2-80;toRight=toRight>0?toRight:0;$("#sidefollow").css({right:toRight,display:"none"});if(K>50&&$(window).width()-sw>51*2){$("#sidefollow").fadeIn(300)}else{$("#sidefollow").fadeOut(400)}});$(window).resize(function(){UI.laterEvent(function(){sw=$(window).width();if(sw>=1200){if(!$("body").is(".sw")){$("body").addClass("sw");$(window).trigger("swChanged",[true]);C.Init();D();E();$("#topad img").each(function(){$(this).attr("src",$(this).attr("srca"))});var K=$(".index_bnr img");if(K.length){K.attr("src",K.attr("srca"))}}}else{if($("body").is(".sw")){$("body").removeClass("sw");$(window).trigger("swChanged",[false]);C.Init();D();E();$("#topad img").each(function(){$(this).attr("src",$(this).attr("srcb"))});var K=$(".index_bnr img");if(K.length){K.attr("src",K.attr("srcb"))}}}$(".floor .tab .now").trigger("mouseenter")},300,this)});$(".index_bnr .close").click(function(){$(".index_bnr").hide()});UI.Xslider(".bombshell",{showNav:".nav a",autoScroll:neweggUI.robots()?20000:6000,beforeStart:function(K){lazySliderImg($(".bombshell .prolist li:eq("+(K.goIndex-1)+")"),0)}});UI.Xslider(".lightning",{showNav:".nav a",autoScroll:neweggUI.robots()?20000:6000,dir:"noanim",beforeStart:function(K){lazySliderImg($(".lightning ul li:eq("+(K.goIndex-1)+")"),0)}});UI.Xslider(".news",{numtoMove:6,dir:"V"});UI.Emailsuggest({results:".emailtipinfo",input:".infobook .intxt"});if(!-[1,]&&!window.XMLHttpRequest){$(".brandlogo").find("img").hover(function(){$(this).css({marginTop:"-40px"})},function(){$(this).css({marginTop:0})})}$(".hotrank").each(function(){var K=$(this);K.find(".tab:eq(0)").children("a").each(function(L,M){$(this).bind("mouseover",function(){lazySliderImg(K.find(".tabc:eq("+L+")"),0)})})});$(".promotion .tab a").each(function(K,L){$(this).bind("mouseover",function(){lazySliderImg($(".promotion .tabc:eq("+K+")"),0)})});if(neweggUI.robots()){setTimeout(recProduct.LoadRecProducts,20000)}else{recProduct.LoadRecProducts()}$(".floor .tabc[autoLoadPosition]").each(function(){LoadRecommendTemp($(this).attr("autoLoadPosition"))});var A={Init:function(){setInterval(A.Clock,1000);setTimeout(A.AutoSlide,4000);$(".timelimit").mouseenter(function(){A.MouseHover=true}).mouseleave(function(){A.MouseHover=false})},Begin:parseInt($("#countDown").val()),Clock:function(){var K="0",N="0",L="0",M=parseInt((A.Begin-new Date().getTime())/1000);if(M>0){K=parseInt(M/3600).toString();N=parseInt((M%3600)/60).toString();L=((M%3600)%60).toString()}$(".timelimit .timeleft .hour").html(K.length==1?"0"+K:K);$(".timelimit .timeleft .minute").html(N.length==1?"0"+N:N);$(".timelimit .timeleft .second").html(L.length==1?"0"+L:L)},Flag:true,MouseHover:false,AutoSlide:function(){setTimeout(A.AutoSlide,6000);if(A.MouseHover){return}var L=$(".timelimit .aright:not(.agrayright)");var K=$(".timelimit .aleft:not(.agrayleft)");if(A.Flag&&L.length>0){L.trigger("click")}else{if(A.Flag&&L.length==0){A.Flag=false;K.trigger("click")}else{if(A.Flag==false&&K.length>0){K.trigger("click")}else{if(A.Flag==false&&K.length==0){A.Flag=true;L.trigger("click")}}}}}};A.Init();neweggUI.scrollOver.register($(".floor"),function(K){UI.Xslider(K.find(".ad_slider"),{showNav:".nav a",autoScroll:neweggUI.robots()?20000:6000})});neweggUI.scrollOver.register($(".ta-lazyload"),function(K){var K=$(K);K.html(K.text());$(".fadeSiblings").children().append("<span class='fademask'></span>");$(".fadeSiblings").children().each(function(){$(this).hover(function(){$(this).siblings().find(".fademask").stop().fadeTo(600,0.2)},function(){$(this).siblings().find(".fademask").stop().fadeOut(400)});$(this).css({position:"relative",display:"block",height:(!-[1,]&&!window.XMLHttpRequest)?$(this).height():"100%"})})});function F(K,M,L,R){var O=0,Q=0;var P=$(window).width();var K=K.get();for(a in K){if(P>=1200){N($(K[a]).attr("srca"),K[a],true)}else{N($(K[a]).attr("srcb"),K[a],false)}}function N(V,U,T){var S=new Image();S.onload=function(){O++;M&&M(O,K.length,V,U,T);L&&O==K.length&&L(Q)};S.onerror=function(){O++;Q++;R&&R(O,K.length,V,U)};S.src=V}}var G=function(L,K,O,N,M){if(M==clientWidth()>=1200){$(N).attr("src",O)}};var H=function(){$("#topad").slideDown(1000,function(){setTimeout(function(){$("#topad").animate({height:80},800,function(){$(this).find(".adpop").fadeOut(400);$(this).find(".adfix").fadeIn(400);navigation.dynamic=false;navigation.reset()});navigation.reset()},5000)})};F($("#topad img"),G,H);if($("#topad img").length){navigation.dynamic=true}omFunction()});function subScription(){var B=$.trim($("#txtEmail").val());if(B.length==0){alert(resources_Home.mailEmpty);return}var E=/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/;var F=/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;if(E.test(B)==true||F.test(B)==false){alert(resources_Home.addressError);return}var D=$("#subScriptionType").val();var A={txtEmail:escape(B),subType:D};var C=$.newegg.buildCurrent("Ajax/Common/AjaxSubscription.aspx");$.post(C,A,function(G){$.newegg._omCall("subScription",this,"homepage");alert(G.Description);$("#txtEmail").attr("value",resources_Home.mailInit);UI.defaultText();$("#txtEmail").addClass("hasDefaultText");$("#txtEmail").removeClass("hasDefaultTextOn");$(".emailtipinfo").hide()},"json")}function GroupBuyingLottery(A){if(mini.enable){return mini.checkLogin(A,3600)}return false}var recProduct={LoadRecProducts:function(){if($.trim($("#recPro").html())==""){var A=$.newegg.buildCurrent("Ajax/HomePage/AjaxRecommend_V1.aspx?commonCid=0");HomePageAjaxSubmit(A,null,recProduct.LoadRecProductsCallBack,null)}},LoadRecProductsCallBack:function(A,B){if($(A).html()){$("#recPro").empty().append(A);$("#recPro").removeClass("loading");$.newegg._omCall("recommendation_track",this,{id:["#recPro .img a","#recPro .title a"],pageName:"HomePage",name:"��Ҳ������Ȥ"})}}};function LoadRecommendTemp(A){if($("#ulProductList_"+A+" li").length!=0){return}for(var D=0;D<recommendProductTempSource.length;D++){if(recommendProductTempSource[D].Key!=A){continue}var F=recommendProductTempSource[D].Value;var G=[];var B={};if(F){for(var C=0;C<F.length;C++){var E=F[C];B[E.Index]=E}for(var C=0;C<8;C++){var E=B[C+1];if(E!=null){G.push(E)}else{G.push({Index:-1})}}}$.newegg.t("#productListTemp",G,"#ulProductList_"+A);return}}function HomePageAjaxSubmit(B,A,D,E){var C=30000;$.ajax({type:"GET",url:B,dataType:"html",timeout:C,cache:false,data:A,success:function(F){if(F&&F.indexOf("hiddenIsErrorPage")!=-1){return}var I=$(F);var H=I.find("#SOError");var G;if(H&&H.val()&&H.val()!=""){G=JSON.parse(H.val())}if(D){D(F,G,A)}},error:function(F,H,G){if(E){E()}}})}function LoadImgAll(A){if(typeof(A)!="undefined"){for(var D=0,B=A.length;D<B;D++){var C=A[D];var E;if(C.indexOf(".")==0||C.indexOf("#")==0){E=$(C)}else{E=$("#"+C)}if(E){E.find("img").each(function(){var F=$(this).attr("src2");if(F){$(this).attr("src",F).removeAttr("src2")}})}}}}function omFunction(){var K=[];var J=[];$.newegg._omCall("recommendation_track",this,{id:".timelimit a",pageName:"HomePage Countdown",name:"Countdown"});var D=$(".promotion .tabc");if(D){var B=$(".promotion .tab a");for(var H=1;H<B.length;H++){var I=B[H].innerText||B[H].textContent;if(!I){I=B.eq(H).attr("href")}J.push(I)}for(var H=1;H<D.length;H++){K.push($("a",D.eq(H)))}$.newegg._omCall("recommendation_track",this,{id:K,pageName:"HomePage",name:J})}$.newegg._omCall("recommendation_track",this,{id:".hot_sale .tabc a",pageName:"HomePage",name:"������"});var A=$(".cls .col720 .floor .tab");var L=$(".cls .col720 .floor .tabc");K=[];J=[];for(var H=0;H<A.length;H++){var E=$("a",A[H]);for(var F=0;F<E.length;F++){var I=E[F].innerText||E[F].textContent;if(!I){I=E.eq(F).attr("href")}I=H+"-||_||-"+I;J.push(I)}}for(var H=0;H<L.length;H++){K.push(L.eq(H))}$.newegg._omCall("recommendation_track",this,{live:true,container:K,elementType:"a",pageName:"HomePage",name:J});var G=$(".cls .col230 .hotrank .tab");var C=$(".cls .col230 .hotrank .tabc");idHotArray=[];nameHotArray=[];for(var H=0;H<G.length;H++){var E=$("a",G[H]);for(var F=0;F<E.length;F++){var I=E[F].innerText||E[F].textContent;if(!I){I=E.eq(F).attr("href")}I=H+"-||_||-"+I;J.push(I)}}for(var H=0;H<C.length;H++){K.push(C.eq(H))}$.newegg._omCall("recommendation_track",this,{live:true,container:idHotArray,elementType:"a",pageName:"HomePage",name:nameHotArray})}var PhoneRecharge={fullPriceHtml:"",phoneIsSupportMsg:"",phoneIsLoaded:false,init:function(){if(!PhoneRecharge.phoneIsLoaded){PhoneRecharge.loadPhoneList()}PhoneRecharge.fullPriceHtml=$("#divPhoneRecharge .egg_select_price ul").html();$("#phoneRechargePost").bind("click",function(){PhoneRecharge.postPhoneRecharge(this)});$("#divPhoneRecharge .egg_select_price").bind("mouseenter",function(){if($("#divPhoneRecharge .egg_select_price ul li").length>0){$("#divPhoneRecharge .egg_select_price ul").show()}});$("#divPhoneRecharge .egg_select_price").bind("mouseleave",function(){$("#divPhoneRecharge .egg_select_price ul").hide()});$("#divPhoneRecharge .egg_select_num .phoneSelect").bind("mouseenter",function(){if($("#divPhoneRecharge .egg_select_num ul li").length>0){$("#divPhoneRecharge .egg_select_num ul").show()}});$("#divPhoneRecharge .egg_select_num").bind("mouseleave",function(){$("#divPhoneRecharge .egg_select_num ul").hide()});$("#txtRechargePN").bind("keyup",function(){if(PhoneRecharge.phoneCheck()){PhoneRecharge.phoneInputFormat()}});PhoneRecharge.initPriceSelected()},initPriceSelected:function(){$("#divPhoneRecharge .egg_select_price li").bind("click",function(){var A=$(this);if(A.length>0){PhoneRecharge.phoneInfoSuccess(A.attr("price"),A.attr("neweggprice"),A.attr("rechargeid"));$("#divPhoneRecharge .egg_select_price ul").hide()}});$("#divPhoneRecharge .egg_select_price li").bind("mouseenter",function(){$(this).addClass("egg_select_hover")});$("#divPhoneRecharge .egg_select_price li").bind("mouseleave",function(){$(this).removeClass("egg_select_hover")})},phoneCheck:function(){var A=PhoneRecharge.getPhoneNumber();if($.trim(A)==""){PhoneRecharge.phoneInfoError(phoneRechargeResource.phoneErrorTip);PhoneRecharge.resetPriceSelected();return false}var B=/^1\d{10}$/;if(!B.test(A)){PhoneRecharge.phoneInfoError(phoneRechargeResource.phoneErrorTip);PhoneRecharge.resetPriceSelected();return false}return true},priceCheck:function(){var A=$("#hidRechargeID").val();if(!A){$("#divPhoneRecharge .mobile_address").show();$("#divPhoneRecharge .mobile_address span").text(phoneRechargeResource.mustSelectPriceTip);return false}return true},phoneInputFormat:function(){var B=PhoneRecharge.getPhoneNumber();var A=PhoneRecharge.getFormatPhoneNumber(B);$("#txtRechargePN").val(A);PhoneRecharge.resetLoadPrice()},check:function(){if(!PhoneRecharge.phoneCheck()){return false}if(!PhoneRecharge.priceCheck()){return false}if(PhoneRecharge.phoneIsSupportMsg!=""){PhoneRecharge.phoneInfoError(PhoneRecharge.phoneIsSupportMsg);return false}return true},phoneInfoSuccess:function(C,B,A){$("#hidSelecedPrice").val(C);$("#hidRechargeID").val(A);$("#divPhoneRecharge .egg_select_price .egg_select_value").text($.newegg.format(phoneRechargeResource.priceUnit,C));$("#divPhoneRecharge .mobile_recharge_choose").text((Math.round(B*100)/100).toFixed(2))},phoneInfoError:function(A){$("#divPhoneRecharge .mobile_address").show();$("#divPhoneRecharge .mobile_address span").text(A)},loadPhoneList:function(){PhoneRecharge.phoneIsLoaded=true;var A=$.newegg.buildCurrent("Ajax/PhoneRecharge/AjaxPhoneRecharge.aspx");$.ajax({type:"GET",url:A,dataType:"html",data:{action:"9"},success:function(D){if(D){var C=$(D);var E=C.children("#ulPhoneLoadList li");if(E.length>0){$("#divPhoneRecharge .egg_select_num ul").append(E);$("#divPhoneRecharge .egg_select_num li").bind("mouseenter",function(){$(this).addClass("egg_select_hover")});$("#divPhoneRecharge .egg_select_num li").bind("mouseleave",function(){$(this).removeClass("egg_select_hover")});$("#divPhoneRecharge .egg_select_num li").bind("click",function(){var F=$(this);if(F.length>0){$("#txtRechargePN").val(F.text());if(PhoneRecharge.phoneCheck()){PhoneRecharge.resetLoadPrice()}$("#divPhoneRecharge .egg_select_num ul").hide()}})}}var B=C.children("#ulPriceLoadList li");if(B.length>0){$("#divPhoneRecharge .egg_select_price ul").append(B);PhoneRecharge.phoneInfoSuccess(C.children("#hidCurrentSelPrice").val(),C.children("#hidCurrentSelNeweggPrice").val(),"");PhoneRecharge.initPriceSelected()}},error:function(){PhoneRecharge.phoneIsLoaded=true}})},resetLoadPrice:function(){var A=$("#hidSelecedPrice").val();var C=$("#hidRechargeID").val();var B=$.newegg.buildCurrent("Ajax/PhoneRecharge/AjaxPhoneRecharge.aspx");var D=$("#divPhoneRecharge .egg_select_price ul");D.empty();$.ajax({type:"GET",url:B,dataType:"json",data:{action:"3",phone:PhoneRecharge.getPhoneNumber(),rechargePrice:A},success:function(H){D.empty();if(H&&H.MessageData&&H.MessageData.PhoneRechargeDomainInfo&&H.MessageData.PhoneRechargeDomainInfo.TelecomOperator){var E=H.MessageData.PhoneRechargeDomainInfo;if(E.PhoneRechargeList&&E.PhoneRechargeList.length>0){$("#divPhoneRecharge .mobile_address").show();$("#divPhoneRecharge .mobile_address span").text(E.TelecomOperator.TelecomOperatorFullName);for(var F=0;F<E.PhoneRechargeList.length;F++){var G=E.PhoneRechargeList[F];D.append('<li price="'+G.ParValue+'" neweggprice="'+G.Price+'" rechargeid="'+G.SysNo+'">'+$.newegg.format(phoneRechargeResource.priceUnit,G.ParValue)+"</li>")}PhoneRecharge.initPriceSelected();PhoneRecharge.setPriceData(H);PhoneRecharge.phoneIsSupportMsg=""}else{PhoneRecharge.resetPriceSelected();PhoneRecharge.phoneInfoError(phoneRechargeResource.notSupportPriceTip);PhoneRecharge.phoneIsSupportMsg=phoneRechargeResource.notSupportPriceTip}}else{PhoneRecharge.resetPriceSelected();PhoneRecharge.phoneInfoError(phoneRechargeResource.serviceProviderError);PhoneRecharge.phoneIsSupportMsg=phoneRechargeResource.serviceProviderError}},error:function(){PhoneRecharge.initPriceSelected();PhoneRecharge.phoneInfoError(phoneRechargeResource.serviceProviderError);PhoneRecharge.phoneIsSupportMsg=phoneRechargeResource.serviceProviderError}})},setPriceData:function(C){if(C&&C.MessageData&&C.MessageData.PhoneRechargeDomainInfo&&C.MessageData.PhoneRechargeDomainInfo.CurrentPhoneRecharge){var A=C.MessageData.PhoneRechargeDomainInfo.CurrentPhoneRecharge;var B=C.MessageData.PhoneRechargeDomainInfo.PhoneChargeAmount;PhoneRecharge.phoneInfoSuccess(A.ParValue,A.Price,A.SysNo)}},resetPriceSelected:function(){var B=$("#divPhoneRecharge .egg_select_price ul");B.empty();B.append(PhoneRecharge.fullPriceHtml);var A=$("#hidSelecedPrice").val();$("#divPhoneRecharge .egg_select_price ul li").each(function(C){var D=$(this);if(D.attr("price")==A){PhoneRecharge.phoneInfoSuccess(D.attr("price"),D.attr("neweggprice"),D.attr("rechargeid"));return}});PhoneRecharge.initPriceSelected()},getPhoneNumber:function(){var A=$("#txtRechargePN").val();A=A.replace(/-/g,"");return $.trim(A)},getFormatPhoneNumber:function(B){B=$.trim(B);var A=B;if(B.length>3){A=B.substr(0,3)+"-";if(B.length>7){A+=B.substr(3,4)+"-"+B.substring(7,B.length)}else{A+=B.substr(3,B.length)}}return A},postPhoneRecharge:function(A){if(!PhoneRecharge.check()){return false}if(!mini.checkLogin($(A))){return false}location.href=phoneRechargeResource.phoneRechargeCheckOutUrl+"?phone="+PhoneRecharge.getPhoneNumber()+"&type="+$("#hidRechargeID").val()}};var HomePageTemplate={buildImgUrl:function(C,B,A){return $.newegg.format(resources_Home.productImgTemplate,C,B,A||"")},buildProductUrl:function(D,E,B){E=E||"";var C=B?$.newegg.format("&neg_sp=Home-_-{0}-_-{1}",D,B):"";var A="";if(E.length>0){A+=E}if(C.length>0){A+=C}if(A.length>0){return $.newegg.buildWWW("Product/"+D+".htm?"+A)}else{return $.newegg.buildWWW("Product/"+D+".htm")}},buildShoppingcartUrl:function(A,B){if(B){return $.newegg.buildWWW("Shopping/ShoppingCart.aspx?action=Add&productno="+A+"&quantity="+B)}else{return $.newegg.buildWWW("Shopping/ShoppingCart.aspx?action=Add&productno="+A)}},buildCustomerAvatar:function(B){if(B.AvatarAvailible&&B.Avatar&&B.Avatar.length>0){return $.newegg.format('<img width="48" src="{0}" />',$.newegg.format(resources_Home.avatarImgTemplate,B.Avatar))}else{var A="";switch(B.CustomerRank){case 0:A="anonymous";break;case 1:A="anonymous";break;case 2:A="userE";break;case 3:A="userD";break;case 4:A="userC";break;case 5:A="userB";break;case 6:A="userA";break;case 7:A="userSuper";break;default:A=string.Empty;break}return $.newegg.format('<span class="{0}"></span>',A)}},getReviewRankClass:function(A){return"rankB"+Math.ceil(A*2)}};