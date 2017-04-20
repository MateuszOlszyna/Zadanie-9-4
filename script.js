$(function() {
	var carouselList = $("#carousel ul");

	function changeSlide() {
		carouselList.animate({'marginLeft': -1200}, 2000, moveFirstSlide);
		carouselList.animate({'marginRight': 0}, 2000, moveLastSlide);
	};
	setInterval(changeSlide, 6000);
	

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	};
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft: 0});
	};
});
