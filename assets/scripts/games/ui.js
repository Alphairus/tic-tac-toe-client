'use strict'

// const gameboard = require('./../gameBoard/gameBoard.js')
const store = require('./../store.js')
// const gameStore = require('./../gameStore.js')


var createGameSuccess = function createGameSuccess(response) {
  store.game = response.game
  // console.log(response.game)
  $('#create-game').hide();
  $('#game').show();
};

// const showGamesSuccess = function (data) {
//   $('#getwins').text(board.getUserWins(data));
//   $('#statusbar').text(store.user.email + ' has ' + board.getUserWins(data) + ' wins');
// };

 const showGameSuccess = function (data) {
   $('#gameid').text(data.game.id + '');
   $('#gamecells').text(data.game.cells);
   $('#player').text(data.game.player_x.email);
   $('#over').text(data.game.over);
 };
// $('#message').text('Game Created!')
//   console.log(response)
//   store.game = response.game
//   const gameObject = response.games
//   console.log('Game Object: ', gameObject)


var createGameFailure = function createGameFailure(error) {
  $('#message').text('Game failed to create. Error ' + error.responseJSON.message);
  console.log(error);
};

module.exports = {
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  showGameSuccess: showGameSuccess
  // showGamesSuccess,
};
