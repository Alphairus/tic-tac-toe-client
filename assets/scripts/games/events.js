'use strict'

const api = require('./api')
const ui = require('./ui')


const onCreateGame = function onCreateGame(event) {
    event.preventDefault();


	resetGame();

    api.createGame().then(ui.createGameSuccess).catch(ui.createGameFailure);
};

// Game Logic
var gamesPlayed = 0;
var playerTurn = "X";
var gameInProgress = false;
var onUpdateGame = function onUpdateGame(event) {
	if (!gameInProgress) {
		alert('Start a New Game');
		return;
	}
	var playedVal = event.target.innerHTML;
	if (playedVal == "X" || playedVal == "O") {
		alert('This cell is already played.');
		return;
	}
	var idx = event.target.attributes['data-cell-index'].value;
	var gameDate = '{ "game" : { "cell" : { "index" : "' + idx + '", "value" : "' + playerTurn + '" } , "over" : "false" } }';
	event.target.innerHTML = playerTurn;
	api.updateGame(gameDate);

	var g = event.target;
	while (g != null && g.id != "game") {
		g = g.parentNode;
	}
	var winner = getWinner(g);
	if (winner == "") {//Game not over yet
		if (playerTurn == "X") {
			playerTurn = "O";
		} else {
			playerTurn = "X";
		}
		document.getElementById("player-turn").innerHTML = "Play '" + playerTurn + "'";
	} else if (winner == "tie") {
		document.getElementById("player-turn").innerHTML = "Game over, it is a tie."
		gamesPlayed ++;
		document.getElementById("games-played").innerHTML = "Games Played: " + gamesPlayed;
		document.getElementById("create-game").style.display = "";
		gameInProgress = false;
	} else {
		document.getElementById("player-turn").innerHTML = "Game over, winner is '" + winner + "'";
		gamesPlayed ++;
		document.getElementById("games-played").innerHTML = "Games Played: " + gamesPlayed;
		document.getElementById("create-game").style.display = "";
		gameInProgress = false;
	}
}

/* Returns winner of the game.
<winner> - if the game is over and there is a winner.
"" - if the game is still not over
'tie' - if there is a tie
*/
function getWinner(gameBoard) {
	var playedVals = new Array();
	for (var i=0; i<9; i++) {
		var playedVal = gameBoard.getElementsByTagName("button")[i].innerHTML;
		if (playedVal != "X" && playedVal != "O") {
			playedVal = "";
		}
		playedVals[i] = playedVal;
	}
	if (playedVals[0] == playedVals[1] && playedVals[0] == playedVals[2]) {
		return playedVals[0];
	} else if (playedVals[3] == playedVals[4] && playedVals[3] == playedVals[5]) {
		return playedVals[3];
	} else if (playedVals[6] == playedVals[7] && playedVals[6] == playedVals[8]) {
		return playedVals[6];
	} else if (playedVals[0] == playedVals[3] && playedVals[0] == playedVals[6]) {
		return playedVals[0];
	} else if (playedVals[1] == playedVals[4] && playedVals[1] == playedVals[7]) {
		return playedVals[1];
	} else if (playedVals[2] == playedVals[5] && playedVals[2] == playedVals[8]) {
		return playedVals[2];
	} else if (playedVals[0] == playedVals[4] && playedVals[0] == playedVals[8]) {
		return playedVals[0];
	} else if (playedVals[2] == playedVals[4] && playedVals[2] == playedVals[6]) {
		return playedVals[2];
	} else if (playedVals[0] != "" && playedVals[1] != "" && playedVals[2] != ""
		&& playedVals[3] != "" && playedVals[4] != "" && playedVals[5] != ""
		&& playedVals[6] != "" && playedVals[7] != "" && playedVals[8] != "") {
		return "tie";
	}
	return "";//Not yet over
}

// Reset Game
function resetGame() {
	gameInProgress = true;
	var gameBoard = document.getElementById("game");
	for (var i=0; i<9; i++) {
		gameBoard.getElementsByTagName("button")[i].innerHTML = "&nbsp;"
	}
	playerTurn = "X";
	document.getElementById("player-turn").innerHTML = "Play '" + playerTurn + "'";
}

 const onShowGame = function (event) {
   event.preventDefault();
   let id = parseInt($('#game-id').val());
   api.showGame(id)
     .then(ui.showGameSuccess)
     .catch(ui.showFailure)

 }

// Handlers
 const addHandlers = function () {
   $('#creategame').on('click', onNewGame);
   $('#showGames').on('click', onShowGames);
   $('#showGame').on('submit', onShowGame);
 };

 module.exports = {
    onCreateGame: onCreateGame,
	onUpdateGame: onUpdateGame,
    addHandlers: addHandlers
};
