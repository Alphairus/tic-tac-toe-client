'use strict'

const store = require('./../scripts/store')


const signUpSuccess = function (response) {
  $('#message').text('Welcome! Sign-up Successfull!')
}

const signUpFailure = function (error) {
  $('#message').text('Sign up Failed ' + error.responseJSON.message)
}

const signInSuccess = function (response) {
  $('#message').text('Sign-in Successfull!')

}

const signInFailure = function (error) {
  $('#message').text('Sign in Failed ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
