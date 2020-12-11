'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../lib/get-form-fields')

const onCreateGame = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.createGame(data)
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

module.exports = {
  onCreateGame
}
