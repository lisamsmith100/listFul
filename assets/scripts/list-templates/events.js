'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')

const onShowLists = function (event) {
  event.preventDefault()
  console.log('onShowLists button has been clicked')
  api.showLists()
  .then(ui.showListsSuccess)
  .catch(ui.showListsFailure)
}

const onAddList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.addList(data)
  .done(ui.addListSuccess)
  .fail(ui.addListFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdateList has been called')
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.updateList(data)
  .done(ui.updateListSuccess)
  .fail(ui.updateListFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.deleteList(data)
  .done(ui.deleteListSuccess)
  .fail(ui.deleteListFailure)
}

const addHandlers = function (event) {
  $('#showAllLists').on('click', onShowLists)
  $('#addNewLists').on('submit', onAddList)
  $('#updateOneLists').on('submit', onUpdateList)
  $('#deleteOneLists').on('submit', onDeleteList)
  $('#addNewLists').trigger('reset')
  $('#updateOneLists').trigger('reset')
  $('#deleteOneLists').trigger('reset')
}

module.exports = {
  addHandlers,
  onShowLists,
  onAddList,
  onUpdateList,
  onDeleteList
}
