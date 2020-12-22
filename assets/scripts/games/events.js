'use strict'

const api = require('./api')
const ui = require('./ui')
// const getFormFields = require('./../../../lib/get-form-fields')
// const gameStore = require('./../gameStore')

const onCreateGame = function (event) {
    event.preventDefault()
    // const form = event.target
    // const data = getFormFields(form)

    api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

// const onShowGames = function (event) {
//   event.preventDefault();
//   api.showGames()
//     .then(ui.showGamesSuccess)
//     .catch(ui.failure)
//
// }
//
// const onShowGame = function (event) {
//   event.preventDefault();
//   let id = parseInt($('#game-id').val());
//   api.showGame(id)
//     .then(ui.showGameSuccess)
//     .catch(ui.showFailure)
//
// }

// const addHandlers = function () {
//   $('#creategame').on('click', onNewGame);
//   $('#showGames').on('click', onShowGames);
//   $('#showGame').on('submit', onShowGame);
//   // $('#showUnfinished').on('click', onUnfinishedGames);
// };

module.exports = {
  onCreateGame

  // addHandlers,
}
