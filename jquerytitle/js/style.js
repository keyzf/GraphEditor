
// 图片高亮
$(function() {
	$('img').mouseover(function(e) {
		$(this).parents().siblings().stop().fadeTo(500, 0.4);
		$(this).siblings().stop().fadeTo(500, 0.4);
	});
	$('img').mouseout(function(e) {
		$(this).parents().siblings().stop().fadeTo(500, 1);
		$(this).siblings().stop().fadeTo(500, 1);
	});
})

// title样式
jQuery(document).ready(function($) {
	var sweetTitles = {
		x: 10,
		y: 20,
		tipElements: "a,span,img,div ",
		noTitle: false,
		init: function() {
			var noTitle = this.noTitle;
			$(this.tipElements).each(function() {
				$(this).mouseover(function(e) {
					if (noTitle) {
						isTitle = true;
					} else {
						isTitle = $.trim(this.title) != '';
					}
					if (isTitle) {
						this.myTitle = this.title;
						this.title = "";
						var tooltip =
							"<div class='tooltip'><div class='tipsy-inner'>" + this.myTitle +
							"</div></div>";
						$('body').append(tooltip);
						$('.tooltip').css({
							"top": (e.pageY + 20) + "px",
							"left": (e.pageX - 20) + "px"
						}).show('fast');
					}
				}).mouseout(function() {
					if (this.myTitle != null) {
						this.title = this.myTitle;
						$('.tooltip').remove();
					}
				}).mousemove(function(e) {
					$('.tooltip').css({
						"top": (e.pageY + 20) + "px",
						"left": (e.pageX - 20) + "px"
					});
				});
			});
		}
	};
	$(function() {
		sweetTitles.init();
	});
});
