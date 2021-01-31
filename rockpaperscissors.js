try {
	let counter = 0;
	while (true) {
		let rockpaperscissors = function() {
			let choose = prompt('Rock , Paper , or Scissors?');
            if (choose.toUpperCase() === 'ROCK') {
                let choices = ['Rock', 'Paper', 'Scissors'];
                let AI_choose = choices[Math.floor(Math.random() * 3)];
                if (AI_choose === 'Rock') {
                    alert(`It's a tie! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Paper') {
                    alert(`You lost! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Scissors') {
                    alert(`You win! AI chose ${AI_choose}, and you chose ${choose}!`); 
                }
            } else if (choose.toUpperCase() === 'PAPER') {
                let choices = ['Rock', 'Paper', 'Scissors'];
                let AI_choose = choices[Math.floor(Math.random() * 3)];
                if (AI_choose === 'Rock') {
                    alert(`You win! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Paper') {
                    alert(`It's a tie! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Scissors') {
                    alert(`You lost! AI chose ${AI_choose}, and you chose ${choose}!`);
                }
            } else if (choose.toUpperCase() === 'SCISSORS') {
                let choices = ['Rock', 'Paper', 'Scissors'];
                let AI_choose = choices[Math.floor(Math.random() * 3)];
                if (AI_choose === 'Rock') {
                    alert(`You lost! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Paper') {
                    alert(`You win! AI chose ${AI_choose}, and you chose ${choose}!`);
                } else if (AI_choose === 'Scissors') {
                    alert(`It's a tie! AI chose ${AI_choose}, and you chose ${choose}!`);
                }
            }
		};
		if (counter === 0) {
			rockpaperscissors();
		}
		let tryagain = prompt('Would you like to play again?');
		if (tryagain.toUpperCase() === 'YES') {
			rockpaperscissors();
		} else if (tryagain.toUpperCase() === 'NO') {
			alert('Okay.');
			break;
		} else {
			alert('Please enter a valid answer. Reload the page to try again.');
			break;
		}
		counter = 1;
	};
} catch (err) {
	console.log(err.message)
}
