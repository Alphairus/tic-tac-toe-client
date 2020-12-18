'use strict'

const api = require('./games/api')
const ui = require('./ui')
const store = require('./store')

const addHandlers = function () {
  $('.game-cell').on('click', playHere)
  $('#rematch-button').on('click', onCreateGame)
}


const onCreateGame = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onCreateGame,
  addHandlers
}
