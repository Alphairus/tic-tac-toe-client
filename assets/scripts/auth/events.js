'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../../lib/get-form-fields')

// Sign-up events
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// Sign-in Events
const onSignIn = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// change password events
const onChangePassword = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// Sign-out Events
const onSignOut = function (event) {
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// Event Handlers
const addHandlers = () => {
 $('#sign-up').on('submit', onSignUp);
 $('#sign-in').on('submit', onSignIn);
 $('#change-password').on('submit', onChangePassword);
 $('#userSignOut').on('click', onSignOut);
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
