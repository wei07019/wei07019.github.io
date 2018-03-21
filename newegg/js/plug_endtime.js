$.fn.extend({
	endtime: function(endtime) {
		var that = this;
		setInterval(function() {
			var now = new Date();
			var hours = 23 - now.getHours();
			var minutes = 59 - now.getMinutes();
			var seconds = 59 - now.getSeconds();
			if(hours < 10) {
				hours =  "0" + hours;
			}
			if(minutes < 10) {
				minutes = "0" + minutes;
			}
			if(seconds < 10) {
				seconds = "0" + seconds;
			}
			that.find(".hours").eq(0).html(hours);
			that.find(".minutes").eq(0).html(minutes);
			that.find(".seconds").eq(0).html(seconds);
		},1000);		
	}
})
