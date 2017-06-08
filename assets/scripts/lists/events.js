'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowLists = function (event) {
  event.preventDefault()
  console.log('onShowLists button has been clicked')
  api.showLists()
  .then(ui.showListsSuccess)
  .catch(ui.showListsFailure)
}

const onAddList = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const data = $('#list-create-input').val()
  console.log('Data is: ', data)
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
  api.updateList(data, store.updateListID)
  .then(ui.updateListSuccess)
  .catch(ui.updateListFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const data = event.target.id.split('-')
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.deleteList(data[2])
  .then(ui.deleteListSuccess)
  .catch(ui.deleteListFailure)
}

const addListHandlers = function (event) {
  $('#showAllLists').on('click', onShowLists)
  $('#create-list-form').on('submit', onAddList)
  $('#addNewLists').on('submit', onAddList)
  $('#updateOneLists').on('submit', onUpdateList)
  $('#deleteOneList').on('submit', onDeleteList)
  $('#addNewLists').trigger('reset')
  $('#updateOneLists').trigger('reset')
  $('#deleteOneList').trigger('reset')
}

module.exports = {
  addListHandlers,
  onShowLists,
  onAddList,
  onUpdateList,
  onDeleteList
}
