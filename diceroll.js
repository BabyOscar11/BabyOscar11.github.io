window.onload = function () {
	let result = document.getElementById("roll");
	let rollDie = document.getElementById("rollMe");
	rollDie.addEventListener("click", () => { 
		let something = true;
		for (let i = 1000; i < 2000; i+=50) {
			if (something) {
				i = 0;
			}
			setTimeout(() => result.textContent = Math.floor(Math.random() * 6 + 1), i);
			something = false;
		}

		var startTime = new Date().getTime();
		var goRight = function () {
			var currTime = new Date().getTime();
			var secondsElapsed = ((currTime - startTime)/1000)
			var newLeft = secondsElapsed * 100;
			result.style.left = newLeft+"px";
			if (newLeft < 200) {
				window.requestAnimationFrame(goRight);
			}
		}
		goRight();
	});
}
