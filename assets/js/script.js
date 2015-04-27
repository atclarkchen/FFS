$(document).ready(function(){
/*cannot do transitions with display*/	
	/*$("#hiw-button .myButton").click(function(){
		$(".hide-show").show();
	})*/


/*
	$("#hiw-button .myButton").click(function(){
		$(".hide-show").css("height", 600);
		$(".hide-show").css("position", "relative");

	})
*/


	$("#hiw-button .myButton").click(function(){
		if (! $(".wrapper-shift").hasClass("wrapper-shift-active")) {/*click and hide-show NOT VISIBLE*/
			//$(".hide-show").addClass("hide-show-active");
			$(".wrapper-shift").addClass("wrapper-shift-active");
			$(".how-it-works-section").addClass("how-it-works-section-active");
		}
	})

	/* Lock wrapper-shift to top when scrolled past certain height AND HIW is ACTIVATED  */
	$(window).scroll(function(){
		var height = $(window).scrollTop();
		if (height > 650 && $(".wrapper-shift").hasClass("wrapper-shift-active")) {
			// $(".hide-show").removeClass("hide-show-active");
			$(".wrapper-shift").removeClass("wrapper-shift-active");
			$(".how-it-works-section").removeClass("how-it-works-section-active");	
		}
	})


});