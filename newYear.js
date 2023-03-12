				/***   TIC TAC TOE    **/

// 2 Players
const playerOne = 'X';
const playerTwo = 'O';

//active player 
let activePlayer = playerOne;
let winner = false;
let tileReset = false;
let tileCounter = 0;

//toggle players
function switchPlayer() {
	if(activePlayer == playerOne){
		activePlayer = playerTwo;
	} else {
		activePlayer = playerOne;
	}

	return activePlayer;
}

//Display symbols on the Buttons
function clickHandler(a){
	document.getElementById('tile-'+a).textContent = activePlayer;
	document.getElementById('tile-'+a).disabled = true;
	document.getElementById('tile-'+a).style.backgroundColor = 'lightseagreen';
	document.getElementById('tile-'+a).style.color = 'lightgrey';
	document.getElementById('tile-'+a).style.border = 'solid 1px lightgrey';
	document.getElementById('tile-'+a).style.borderRadius = '10px';
	document.getElementById('tile-'+a).style.transition = '1s';
	isWinner();
	tilesFull();
	switchPlayer();
	gameLoop();
}


function winning(){
	winner = true;
	return winner;
}

function tilesFull(){
	let x = 0;
	for(let x = 0; x < gameTiles.length; x++){
		if(gameTiles[x].textContent != '?' && gameTiles[x].disabled){
			tileCounter++;
		} else {
			tileCounter--;
		}
	}

	if(tileCounter === 9){
		tileReset = true;
	}
 
	return tileReset;
}

//WINNING CONDITIONS

const gameTiles = document.getElementsByClassName('tile');

function loadGame(){
	document.getElementById('game-wrapper').style.display = 'block';
	document.getElementById('welcome').style.display = 'none';
}

function disableGame(){
	for(let i = 0; i < gameTiles.length; i++){
		gameTiles[i].disabled = true;
	}
}

function gameLoop(){
	if(!winner && tileReset){
		document.getElementById('resetBtn').style.display = 'block';
	}
}


function isWinner(){
	if(document.getElementById('tile-1').textContent == activePlayer && document.getElementById('tile-2').textContent == activePlayer && document.getElementById('tile-3').textContent == activePlayer){
		//	1, 2, 3
		document.getElementById('tile-1').style.backgroundColor = '#122b3e';
		document.getElementById('tile-2').style.backgroundColor = '#122b3e';
		document.getElementById('tile-3').style.backgroundColor = '#122b3e';
		document.getElementById('tile-1').style.borderRadius = '50%';
		document.getElementById('tile-2').style.borderRadius = '50%';
		document.getElementById('tile-3').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-1').textContent == activePlayer && document.getElementById('tile-4').textContent == activePlayer && document.getElementById('tile-7').textContent == activePlayer){
		// 1, 4, 7
		document.getElementById('tile-1').style.backgroundColor = '#122b3e';
		document.getElementById('tile-4').style.backgroundColor = '#122b3e';
		document.getElementById('tile-7').style.backgroundColor = '#122b3e';
		document.getElementById('tile-1').style.borderRadius = '50%';
		document.getElementById('tile-4').style.borderRadius = '50%';
		document.getElementById('tile-7').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-1').textContent == activePlayer && document.getElementById('tile-5').textContent == activePlayer && document.getElementById('tile-9').textContent == activePlayer){
		// 1, 5, 9
		document.getElementById('tile-1').style.backgroundColor = '#122b3e';
		document.getElementById('tile-5').style.backgroundColor = '#122b3e';
		document.getElementById('tile-9').style.backgroundColor = '#122b3e';
		document.getElementById('tile-1').style.borderRadius = '50%';
		document.getElementById('tile-5').style.borderRadius = '50%';
		document.getElementById('tile-9').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-2').textContent == activePlayer && document.getElementById('tile-5').textContent == activePlayer && document.getElementById('tile-8').textContent == activePlayer){
		// 2, 5, 8
		document.getElementById('tile-2').style.backgroundColor = '#122b3e';
		document.getElementById('tile-5').style.backgroundColor = '#122b3e';
		document.getElementById('tile-8').style.backgroundColor = '#122b3e';
		document.getElementById('tile-2').style.borderRadius = '50%';
		document.getElementById('tile-5').style.borderRadius = '50%';
		document.getElementById('tile-8').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-3').textContent == activePlayer && document.getElementById('tile-6').textContent == activePlayer && document.getElementById('tile-9').textContent == activePlayer){
		// 3, 6, 9
		document.getElementById('tile-3').style.backgroundColor = '#122b3e';
		document.getElementById('tile-6').style.backgroundColor = '#122b3e';
		document.getElementById('tile-9').style.backgroundColor = '#122b3e';
		document.getElementById('tile-3').style.borderRadius = '50%';
		document.getElementById('tile-6').style.borderRadius = '50%';
		document.getElementById('tile-9').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-4').textContent == activePlayer && document.getElementById('tile-5').textContent == activePlayer && document.getElementById('tile-6').textContent == activePlayer){
		// 4, 5, 6
		document.getElementById('tile-4').style.backgroundColor = '#122b3e';
		document.getElementById('tile-5').style.backgroundColor = '#122b3e';
		document.getElementById('tile-6').style.backgroundColor = '#122b3e';
		document.getElementById('tile-4').style.borderRadius = '50%';
		document.getElementById('tile-5').style.borderRadius = '50%';
		document.getElementById('tile-6').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-7').textContent == activePlayer && document.getElementById('tile-8').textContent == activePlayer && document.getElementById('tile-9').textContent == activePlayer){
		// 7, 8, 9
		document.getElementById('tile-7').style.backgroundColor = '#122b3e';
		document.getElementById('tile-8').style.backgroundColor = '#122b3e';
		document.getElementById('tile-9').style.backgroundColor = '#122b3e';
		document.getElementById('tile-7').style.borderRadius = '50%';
		document.getElementById('tile-8').style.borderRadius = '50%';
		document.getElementById('tile-9').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	} else if(document.getElementById('tile-3').textContent == activePlayer && document.getElementById('tile-5').textContent == activePlayer && document.getElementById('tile-7').textContent == activePlayer){
		// 3, 5, 7
		document.getElementById('tile-3').style.backgroundColor = '#122b3e';
		document.getElementById('tile-5').style.backgroundColor = '#122b3e';
		document.getElementById('tile-7').style.backgroundColor = '#122b3e';
		document.getElementById('tile-3').style.borderRadius = '50%';
		document.getElementById('tile-5').style.borderRadius = '50%';
		document.getElementById('tile-7').style.borderRadius = '50%';
		winning();
		disableGame();
		document.getElementById('winners-div').style.display = 'block';
		document.getElementById('winner-title').textContent = 'Player '+activePlayer+' has won the game';
	}
}

function resetHandler(){
	//Reset all the buttons
	for(let p = 0; p < gameTiles.length; p++){
		gameTiles[p].style.backgroundColor = '#901e1d';
		gameTiles[p].style.borderRadius = '0';
		gameTiles[p].textContent = '?';
		gameTiles[p].disabled = false;
	}

	//Reset the Winning variables
	winner = false;
	tileCounter = 0;
	tileReset = false;
	//Hide the Reset button
	document.getElementById('resetBtn').style.display = 'none';
}

//CSIR id : c328b1e8-7512-4cb5-a4ff-c80e6170fabf

function newGame(){
	for(let o = 0; o < gameTiles.length; o++){
		gameTiles[o].style.backgroundColor = '#901e1d';
		gameTiles[o].style.borderRadius = 0;
		gameTiles[o].textContent = '?';
		gameTiles[o].disabled = false;
	}

	//Reset the ACTIVE player
	activePlayer = 'X';
	//Reset the Winning variables
	winner = false;
	tileCounter = 0;
	tileReset = false;
	document.getElementById('winners-div').style.display = 'none';
}