'use strict'

const store = require('./../scripts/store')

const signUpSuccess = function (response) {
  $('#message').text('Welcome! Sign-up Successfull!')
}
const signUpFailure = function (error) {
  $('#message').text('Sign-up Failed ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('Sign-in Successfull!')
}
const signInFailure = function (error) {
  $('#message').text('Sign in Failed ' + error.responseJSON.message)
}
const changePasswordSuccess = function (response) {
  $('#message').text('Change password success!')
}
const changePasswordFailure = function (error) {
  $('#message').text('Change password Failure ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
