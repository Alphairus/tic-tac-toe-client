'use strict'

const store = require('./../store')
const config = require('./../config')

const createGame = function (data) {
  return $.ajax({
    url: congfig.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}
