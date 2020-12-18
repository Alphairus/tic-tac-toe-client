'use strict'

const store = require('./../store')
const ui = require('./../ui')
const events = require('./../events')

const signUpSuccess = function (response) {
  $('#message').text('Welcome! Signed up Successfull!')
}
const signUpFailure = function (error) {
  $('#message').text('Sign-up Failed ' + error.responseJSON.message)
}
const signInSuccess = function (response) {
  $('#message').text('Sign-in Successfull!')

  store.user = response.user
  console.log(store.user)

  // Change the view
  $('.unauthenticated').hide()
  // show the authenticated options
  $('.authenticated').show()
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
