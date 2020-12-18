'use strict'

const store = require('./../store.js')


const createGameSuccess = function (response) {
  $('#message').text('Game Created!')
    console.log(response)
    store.game = response.game
    const gameObject = response.games
    console.log('Game Object: ', gameObject)
}

const createGameFailure = function (error) {
  $('#message').text('Game failed to create. Error ' + error.responseJSON.message)
  console.log(error)
}

module.exports = {
  createGameSuccess,
  createGameFailure
}
