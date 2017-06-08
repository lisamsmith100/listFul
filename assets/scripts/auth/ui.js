'use strict'

const store = require('../store.js')

const app = require('../app.js')
const listsEvents = require('../lists/events.js')
const api = require('../lists/api.js')
const ui = require('../lists/ui.js')

const signUpSuccess = (data) => {
  store.user = data.user
  console.log('store is' + store)
  console.log('signup is a success')
  $('.user-status').html('You have successfuly signed up. Please sign-in.')
  $('.sign-up').find('input:text, input:password, select, textarea').val('')
}

const signUpFailure = (error) => {
  console.log('signup was a failure')
  console.log(error)
  $('.user-status').html('Your sign-up failed.  Try a new email / password combination.')
  $('.sign-up').find('input:text, input:password, select, textarea').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('data is', data)
  console.log('signin was a success')
  console.log('store is', store)
  $('.first-display').addClass('hiding')
  $('.logged-in-display').removeClass('hiding')
  $('.user-status').html('Welcome.  You are signed in.')
  $('.sign-in').find('input:text, select, textarea').val('')
  $('.sign-in').find('input:text, input:password, select, textarea').val('')
  api.onShowLists(data)
    .then(ui.showListsSuccess)
    .catch(ui.showListsFailure)
}

const signInFailure = (error) => {
  console.log('sign in failed')
  console.error(error)
  $('.user-status').html('Hm. Your sign-in failed.  Try again.')
  $('.sign-in').find('input:text, input:password, select, textarea').val('')
}

const signOutSuccess = () => {
  store.user = null
  console.log('store is', store)
  console.log('sign out was a success')
  $('.first-display').removeClass('hiding')
  $('.logged-in-display').addClass('hiding')
  $('.user-status').html('You are no longer signed in.')
  $('.content-menu').html(' ')
  $('#addNewList').trigger('reset')
  $('#updateOneList').trigger('reset')
  $('#deleteOneList').trigger('reset')
  $('#showAllLists').toggle('reset')
  $('#showAllListTemplates').trigger('reset')
  $('#addNewListTemplate').trigger('reset')
  $('#updateOneListTemplate').trigger('reset')
  $('#deleteOneListTemplate').trigger('reset')
}

const signOutFailure = (error) => {
  console.log(store)
  console.log('sign out failed')
  console.error(error)
  $('.user-status').html('Your sign out failed.')
}

const changePasswordSuccess = () => {
  console.log('Password Successfully Changed.')
  $('.logged-in-display').removeClass('hiding')
  $('.user-status').html('You successfully changed your password.')
  $('.change-password').find('input:password, input:password, select, textarea').val('')
}

const changePasswordFailure = (error) => {
  console.log(store)
  console.error(error)
  console.log('change password failed')
  $('.user-status').html('Your password-change failed.')
  $('.change-password').find('input:password, input:password, select, textarea').val('')
}

const success = (data) => {
  console.log(data)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure,
  success,
  failure
}
