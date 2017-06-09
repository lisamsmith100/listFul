'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const resetForm = function () {
//   $('#sign-up-modal').trigger('reset')
// }
$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
  listsEvents.addListHandlers()
  // listItemsEvents.addListItemHandlers()
  $('.show-when-logged-in').hide()
  $('intro-header').show()
  $('intro-message').show()
  $('#sign-up-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#sign-in-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('#change-password-modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
})

const authEvents = require('./auth/events.js')
const listsEvents = require('./lists/events.js')
// const listItemsEvents = require('./lists/item-events.js')
// const listsTemplateEvents = require('./list-templates/events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
