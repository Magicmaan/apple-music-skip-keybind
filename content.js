// delay to let page load
setTimeout(() => {
	const p = document.querySelector(".chrome-player");

	// `document.querySelector` may return null if the selector doesn't match anything.
	if (p) {
		// disable mouse buttons
		document.addEventListener("keyup", (e) => {
			if (e.button === 4 || e.button === 3) {
				preventDefault();
				e.preventDefault();
			}
		});

		// get the next and previous buttons
		const next = p.shadowRoot
			.querySelector(".chrome-player__playback-controls")
			.firstChild.shadowRoot.querySelector(".next").shadowRoot.firstChild;

		const previous = p.shadowRoot
			.querySelector(".chrome-player__playback-controls")
			.firstChild.shadowRoot.querySelector(".previous").shadowRoot.firstChild;

		function mouseHandler(e) {
			if (e.button === 4) {
				next.click();
			} else if (e.button == 3) {
				previous.click();
			}
		}
		document.addEventListener("mouseup", mouseHandler);
	} else {
		console.log("Couldn't find media player");
	}
}, 2000);
