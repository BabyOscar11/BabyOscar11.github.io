window.onload = function () {
	let paragraph = document.getElementById("message");
	let typingMessage = prompt("What do you want to type?");
	let color = prompt("What color do you want the message to be, if you want a shade of something do it like 'lightblue' not 'light blue'");
	let j = 1000;
	for (let i = 0; i < typingMessage.length; i++) {
		paragraph.style.color = color.toLowerCase();
		setTimeout(() => paragraph.textContent += typingMessage[i], j);
		j += 50;
	}
}