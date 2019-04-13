(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#hamburgerIcon");
	var burgerCon = document.querySelector("#burgerCon");
	var backToTop = document.querySelector("#bottomFloat");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function scrollToTop() {
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0
	}

	button.addEventListener("click", hamburgerMenu, false);
	backToTop.addEventListener("click", scrollToTop);
		
})();