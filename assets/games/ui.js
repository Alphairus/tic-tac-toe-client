'use strict'

const createGameSuccess = function (response) {

  $('#message').text('Game Created!')
    console.log(response)
    store.games = response.games
}

const createGameFailure = function (error) {
  $('#message').text('Game failed to create. Error ' error.messageJSON.message)
  console.log(error)
}
