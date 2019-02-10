// Javascript Doc
(() => {

	console.log("Javascript is linked up");

	var theButtons = document.querySelectorAll('.pastEventsTitle');

	function toggleContent() {
		// Toggle Past Event Content
		console.log(this.id);
		document.getElementById(this.id+"Content").classList.toggle("visible");	
	}

	theButtons.forEach(currentButton => currentButton.addEventListener('click', toggleContent));
})();
