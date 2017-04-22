$(function(){
	var carouselList = $("#carousel ul");

	 

	function changeLeftSlide() {
		carouselList.animate({'marginLeft':-1200}, 1200, moveFirstSlide);
	}

	$('.previous').click(function() {
		changeLeftSlide();
	});
	//setInterval(changeLeftSlide, 8000);


	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	function changeRightSlide() {
		moveLastSlide();
		carouselList.animate({'marginLeft':0}, 1200);

	}

	$('.next').click(function() {
		changeRightSlide();
	});

	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-1200});
	}
});