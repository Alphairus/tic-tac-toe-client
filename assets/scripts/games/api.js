'use strict'

const config = require('./../config')
const store = require('./../store')

var createGame = function createGame() {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  });
};

 const showGames = function () {
   return $.ajax({
     url: config.apiOrigin + '/games',
     method: 'GET',
     headers: {
       Authorization: 'Bearer ' + store.user.token
     },
   });
 };

// const showGame = function (id) {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//   });
// };

// Update game
 const updateGame = function (gameData) {
	return $.ajax({
		url: config.apiUrl + '/games/' + store.game._id,
		method: 'PATCH',
		headers: {
			Authorization: 'Bearer ' + store.user.token,
			"Content-Type": 'application/json; charset=UTF-8'
		},
		data: gameData
	});
 }

module.exports = {
  createGame: createGame,
  // showGame,
  showGames: showGames,
  updateGame: updateGame
};
