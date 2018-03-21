$.fn.extend({
	//注: round必须放在一个盒子中,并且这个盒子只能有round元素
    //obj{imgs:图片jqy元素集合,rounds:索引元素集合,selector:选中索引类名}
    playImg: function(obj) {
        var preindex = 0;
        var index = 0;
        var timer = null;
        var $imgs = obj.imgs;
        var $navs = obj.rounds;
        var end = $imgs.width();
        var that = this;
        var canmove = true;
        function autoPlay() {
            index++;
            if(index > $imgs.size() - 1) {
                index = 0;
            }
            moveLeft();               
        }
        timer = setInterval(autoPlay,3000);
        that.hover(function() {
            that.find(".prev,.next").stop(true).fadeIn(400);
            clearInterval(timer);
        },function() {
            that.find(".prev,.next").stop(true).fadeOut(400);
            timer = setInterval(autoPlay,3000);
        })
        function moveLeft() {
        	canmove = false;
            $imgs.eq(preindex).stop(true).animate({left:-end});
            $imgs.eq(index).stop(true).css({left:end}).animate({left:0},function() {
            	canmove = true;
            });
            $navs.eq(index).addClass(obj.selector).siblings().removeClass(obj.selector);
            preindex = index;
        }
        //上一张,下一张
        that.find(".next").click(function() {
            autoPlay();
        });

        that.find(".prev").click(function() {
            index--;
            if(index < 0) {
                index = $imgs.size();
            }
            moveRight();
        });
        function moveRight() {
        	canmove = false;
            $imgs.eq(index).stop(true).css({left:-end}).animate({left:0});
            $imgs.eq(preindex).stop(true).animate({left:end},function() {
            	canmove = true;
            });
            $navs.eq(index).addClass(obj.selector).siblings().removeClass(obj.selector);
            preindex = index;
        }

        //小圆点悬浮,根据preindex与index的大小判断运动向
        $navs.mouseenter(function() {
        	if(canmove) {
        		index = $(this).index();
	            if(preindex < index) {
	                moveLeft();
	            } else if(preindex > index) {
	                moveRight();
	            } 
        	}            
        })
        //使元素可以链式操作,返回this
        return this;
    }
});