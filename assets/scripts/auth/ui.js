'use strict'

const store = require('./../store')

const signUpSuccess = function (response) {
  $('#message').text('Welcome! Signed up Successfull!')
}
const signUpFailure = function (error) {
  $('#message').text('Sign-up Failed ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('Sign-in Successfull!')
  store.user = response.user
  // Change the view
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
  $('#game').hide()
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

const signOutSuccess = function () {
  $('#message').text('Signed out. Goodbye!')

  $('.authenticated').hide()
  $('.unauthenticated').show()
  $('#create-game').hide()

  store.user = null

  $('form').trigger('reset')
}

const signOutFailure = function (error) {
  $('#message').text('Sign out failed: ' + error.responseJSON.message)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
