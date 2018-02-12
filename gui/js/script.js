let playerScore = 0;
let computerScore = 0;

let hand = document.querySelectorAll(`.hand`);
hand.forEach(handUsed => handUsed.addEventListener(`click`, playGame));

function playGame(e){
	let playerSelection = e.target.id;
	let computerSelection = computerPlay();
	analyzeGame(playerSelection, computerSelection);

	document.querySelector(`.playerHand`).textContent = playerSelection + ` vs `;
	document.querySelector(`.compHand`).textContent = computerSelection + `: `;

	document.querySelector(`.playerScore`).textContent = playerScore;
	document.querySelector(`.compScore`).textContent = computerScore + `.`;

	if(playerScore == 5){
		document.querySelector(`.gameResult`).textContent = ` You won.`;
	}
	else if(computerScore == 5){
		document.querySelector(`.gameResult`).textContent = ` You lose.`;
	}
	return;
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function computerPlay(){
	let choice = getRndInteger(0,3);
	switch(choice){
		case 0:
			return `rock`;
		case 1:
			return `paper`;
		case 2:
			return `scissors`;
	}
}

function analyzeGame(playerSelection, computerSelection){
	if(playerSelection == computerSelection){
		playerScore += 0; computerScore += 0;
		console.log(`${playerSelection} vs ${computerSelection}: Draw.`);
	}
	else if(playerSelection == `rock` && computerSelection == `paper`){ //rock vs paper
		playerScore += 0; computerScore += 1;
		console.log(`${playerSelection} vs ${computerSelection}: Lose.`);
	}
	else if(playerSelection == `paper` && computerSelection == `rock`){ //paper vs rock
		playerScore += 1; computerScore += 0;
		console.log(`${playerSelection} vs ${computerSelection}: Win.`);
	}
	else if(playerSelection == `rock` && computerSelection == `scissors`){ //rock vs scissors
		playerScore += 1; computerScore += 0;
		console.log(`${playerSelection} vs ${computerSelection}: Win.`);
	}
	else if(playerSelection == `scissors` && computerSelection == `rock`){ //scissors vs rock
		playerScore += 0; computerScore += 1;
		console.log(`${playerSelection} vs ${computerSelection}: Lose.`);
	}
	else if(playerSelection == `paper` && computerSelection == `scissors`){ //paper vs scissors
		playerScore += 0; computerScore += 1;
		console.log(`${playerSelection} vs ${computerSelection}: Lose.`);
	}
	else if(playerSelection == `scissors` && computerSelection == `paper`){ //scissors vs paper
		playerScore += 1; computerScore += 0;
		console.log(`${playerSelection} vs ${computerSelection}: Win.`);
	}
	else{
		console.log(`${playerSelection} vs ${computerSelection}: ERROR.`); //for unexpected throw (if there's any)
		playerScore += 0; computerScore += 0;
	}
	return;
}