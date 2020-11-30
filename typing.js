window.onload = function () {
	let paragraph = document.getElementById("message");
	let typingMessage = prompt("What do you want to type?");
	let color = prompt("What color do you want the message to be, if you want a shade of something do it like 'lightblue' not 'light blue'");
	let font = prompt("What font do you want? Choose from these: serif, sans-serif, cursive, monospace, or fantasy.");
	let j = 1000;
	for (let i = 0; i < typingMessage.length; i++) {
		if (font.toUpperCase() === "serif") {
			paragraph.style.fontFamily = serif;
		} else if (font.toUpperCase() === "sans-serif") {
			paragraph.style.fontFamily = sans-serif;
		} else if (font.toUpperCase() === "cursive") {
			paragraph.style.fontFamily = cursive;
		} else if (font.toUpperCase() === "monospace") {
			paragraph.style.fontFamily = monospace;
		} else if (font.toUpperCase() === "fantasy") {
			paragraph.style.fontFamily = fantasy;
		} else {
			
		}
		paragraph.style.color = color.toLowerCase();
		setTimeout(() => paragraph.textContent += typingMessage[i], j);
		j += 50;
	}
}