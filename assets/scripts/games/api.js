'use strict'

const config = require('./../config')
const store = require('./../store')

const createGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// const showGames = function () {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//   });
// };

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
// const updateGame = function (data) {
//   return $.ajax({
//     url: congfig.apiUrl + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     }
//   })
// }

module.exports = {
  createGame
  // showGame,
  // showGames,
  // updateGame
}
