(function(){
	"use strict";
	
	console.log("fired");

	var button = document.querySelector("#hamburgerIcon");
	var burgerCon = document.querySelector("#burgerCon");
	var backToTop = document.querySelector("#bottomFloat");
	var theButtons = document.querySelectorAll(".pastEventsTitle");
	var galleryIcon = document.querySelectorAll(".pastEvent");
	var thelightBox = document.querySelector(".lightBox");
	var lightBoxImg = document.querySelector("#focusedImage");
	var lightBoxArticle = document.querySelector("#focusedArticle");
	var closeButton = document.querySelector("#close-button");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slideToggle");
		button.classList.toggle("expanded");
	}

	function scrollToTop() {
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0
	}

	function toggleContent() {
		// Toggle Past Event Content
		console.log(this.id);
		document.getElementById(this.id+"Content").classList.toggle("visible");	
	}

	function LightBoxOn() {
		console.log(this.id);
		thelightBox.classList.add("light-box-visible");
		var eventNum = this.id.replace("Event", "");
		lightBoxImg.classList.add(`Img${eventNum}`);
		lightBoxArticle.innerHTML = document.getElementById(`Img${eventNum}`).innerHTML;
	}

	function LightBoxOff() {
		console.log(this.textContent);
		thelightBox.classList.remove("light-box-visible");
	}


	button.addEventListener("click", hamburgerMenu, false);
	backToTop.addEventListener("click", scrollToTop);
	theButtons.forEach(currentButton => currentButton.addEventListener("click", toggleContent));
	galleryIcon.forEach(icon => icon.addEventListener("click", LightBoxOn));
	closeButton.addEventListener("click", LightBoxOff, false);
})();