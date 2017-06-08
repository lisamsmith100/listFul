'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const listsApi = require('../lists/api.js')

const onSignUp = function (event) {
  event.preventDefault()
  // console.log('sign up button has been clicked')
  const data = getFormFields(event.target)
  // console.log('signup data is ', data)
  api.signUp(data)
  .done(ui.signUpSuccess)
  .fail(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  // console.log('sign in button has been clicked')
  const data = getFormFields(event.target)
  // console.log('signin data is ', data)
  api.signIn(data)
  .then(listsApi.onShowLists)
  .done(ui.signInSuccess)
  .fail(ui.signInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  // console.log('sign out button has been clicked')
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('change password button has been clicked')
  const data = getFormFields(event.target)
  // console.log('change password data is ', data)
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.changePasswordFailure)
}

const addHandlers = () => {
  $('.sign-up').on('submit', onSignUp)
  $('.sign-in').on('submit', onSignIn)
  $('.sign-out').on('submit', onSignOut)
  $('.change-password').on('submit', onChangePassword)
  $('.sign-up').trigger('reset')
  $('.sign-in').trigger('reset')
  $('.change-password').trigger('reset')
}

module.exports = {
  addHandlers
}
