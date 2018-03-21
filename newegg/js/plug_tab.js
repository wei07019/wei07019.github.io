$.extend({
	//注: tab必须在一个盒子中并且这个盒子只能有tab元素
//	obj{tab:tab菜单jq元素集合,tabc:内容jq元素集合,active:菜单选择,activec:内容选择}
	tab_change: function(obj) {
		var $tab = obj.tab;
		var $tabc = obj.tabc;
		$tab.mouseover(function() {
			var index = $(this).index();
			$(this).addClass(obj.active).siblings().removeClass(obj.active);
			$tabc.removeClass(obj.activec).eq(index).addClass(obj.activec);
		})
	}
})
