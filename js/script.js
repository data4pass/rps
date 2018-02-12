let playerSelection = "";
let computerSelection = "";
let playerScore = 0;
let computerScore = 0;

let startButton = document.getElementById("start");
startButton.addEventListener("click", clicked);

function clicked(){
	// GAME START

	console.clear();
	playerScore = 0;						// restart player and computer score back to zero
	computerScore = 0;						//
	startButton.value = "Restart Game";

	for(round = 1 ; round < 6; round++){
		playerSelection = playerPlay();		// get R, P or S for human
		computerSelection = computerPlay(); // get R, P or S for computer

		if(playerSelection == `wrong`){ 	// reset the loop (and thus the round) 
			round--; continue; 				// if playerSelection is not
		}									// rock, paper or scissors

		console.log(`ROUND ${round}`);
		game(playerSelection, computerSelection);
	}
	wrapGame(playerScore, computerScore);

	//GAME WRAPPED
}

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min) ) + min;
}

function playerPlay(){
	let choice = prompt(`Rock, Paper, or Scissors?`).toLowerCase();

	if(choice == `rock` || choice == `paper` || choice == `scissors`){
		return choice;
	}
	else if(choice == `scissor`){
		return `scissors`;
	}
	else{
		alert(`Input "${choice}" invalid. Try again.`);
		return `wrong`;
	}
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

function game(playerSelection, computerSelection){
	playRound(playerSelection, computerSelection);
	wrapRound(playerScore, computerScore);
}

function playRound(playerSelection, computerSelection){
	if(playerSelection == computerSelection){
		playerScore += 0; computerScore += 0;
		console.log(`The round ends with a Draw.`);
	}
	else if(playerSelection == `rock` && computerSelection == `paper`){ //rock vs paper
		playerScore += 0; computerScore += 1;
		console.log(`You lose the round.`);
	}
	else if(playerSelection == `paper` && computerSelection == `rock`){ //paper vs rock
		playerScore += 1; computerScore += 0;
		console.log(`You win the round.`);
	}
	else if(playerSelection == `rock` && computerSelection == `scissors`){ //rock vs scissors
		playerScore += 1; computerScore += 0;
		console.log(`You win the round.`);
	}
	else if(playerSelection == `scissors` && computerSelection == `rock`){ //scissors vs rock
		playerScore += 0; computerScore += 1;
		console.log(`You lose the round.`);
	}
	else if(playerSelection == `paper` && computerSelection == `scissors`){ //paper vs scissors
		playerScore += 0; computerScore += 1;
		console.log(`You lose the round.`);
	}
	else if(playerSelection == `scissors` && computerSelection == `paper`){ //scissors vs paper
		playerScore += 1; computerScore += 0;
		console.log(`You win the round.`);
	}
	else{
		console.log(`Error: ${playerSelection} vs ${computerSelection}.`); //for unexpected throw (if there's any)
		playerScore += 0; computerScore += 0;
	}
	return;
}

function wrapRound(playerScore, computerScore){
	console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
	console.log(`You chose: ${playerSelection} vs Computer's ${computerSelection}`);
	console.log();
}

function wrapGame(playerScore, computerScore){
	console.log(`===OVERALL SCORE===`);
	console.log(`Player: ${playerScore} | Computer: ${computerScore}`);
	if(playerScore == computerScore){
		console.log(`Draw.`);
	}
	else if(playerScore > computerScore){
		console.log(`You have won.`)
	}
	else{
		console.log(`You have lost.`)
	}
	return;
}