'use strict'


const store = require('./../store.js')



var createGameSuccess = function createGameSuccess(response) {
  store.game = response.game
  // console.log(response.game)
  $('#create-game').hide();
  $('#game').show();
};


 const showGameSuccess = function (data) {
   $('#gameid').text(data.game.id + '');
   $('#gamecells').text(data.game.cells);
   $('#player').text(data.game.player_x.email);
   $('#over').text(data.game.over);
 };


var createGameFailure = function createGameFailure(error) {
  $('#message').text('Game failed to create. Error ' + error.responseJSON.message);
  console.log(error);
};

module.exports = {
  createGameSuccess: createGameSuccess,
  createGameFailure: createGameFailure,
  showGameSuccess: showGameSuccess
};
