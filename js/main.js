// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	var theButtons = document.querySelectorAll('.pastEventsTitle');

	function toggleContent() {
		// Toggle Past Event Content
		console.log(this.id);
		var contentHeight = document.getElementById(this.id + "Content").style.height;
		console.log(this.id+"Content");
		if (contentHeight = "0px") {
			document.getElementById(this.id + "Content").style.height = "auto";
		} else {
			document.getElementById(this.id + "Content").style.height = "0px";
	}	}

	theButtons.forEach(currentButton => currentButton.addEventListener('click', toggleContent));
})();
