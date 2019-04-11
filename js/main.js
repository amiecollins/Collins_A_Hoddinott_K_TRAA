(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#hamburgerIcon");
	var burgerCon = document.querySelector("#burgerCon");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	button.addEventListener("click", hamburgerMenu, false);
		
})();