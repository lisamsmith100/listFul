'use strict'

const listsApi = require('./api')
const listsUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowLists = function (event) {
  event.preventDefault()
  // console.log('onShowLists button has been clicked')
  listsApi.showLists()
  .then(listsUi.showListsSuccess)
  .catch(listsUi.showListsFailure)
}

const onAddList = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  const data = getFormFields(event.target)
  // const data = $('#list-create-input').val()
  // console.log('Data is: ', data)
  listsApi.addList(data)
  .done(listsUi.addListSuccess)
  .fail(listsUi.addListFailure)
}

const onUpdateList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('onUpdateList has been called')
  // console.log('event is ', event)
  // console.log('data being sent to api is ', data)
  listsApi.updateList(data)
  // removed this arg fm updateList invocation, store.updateListID
  .then(listsUi.updateListSuccess)
  .catch(listsUi.updateListFailure)
}

const onDeleteList = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = event.target.list[id]
  // .split('-')
//   console.log('event is ', event)
//   console.log('data being sent to api is ', data)
  listsApi.deleteList(data)
  .then(listsUi.deleteListSuccess)
  .catch(listsUi.deleteListFailure)
// }
  // console.log('event is ', event)
  // console.log('data being sent to api is ', data)
  listsApi.deleteList(data)
  .then(listsUi.deleteListSuccess)
  .fail(listsUi.deleteListFailure)
}

const addListHandlers = function (event) {
  $('#showAllLists').on('click', onShowLists)
  // $('#create-list-form').on('submit', onAddList)
  $('#addNewList').on('submit', onAddList)
  $('#updateOneList').on('submit', onUpdateList)
  $('#deleteOneList').on('submit', onDeleteList)
  $('#addNewList').trigger('reset')
  $('#updateOneList').trigger('reset')
  $('#deleteOneList').trigger('reset')
}

module.exports = {
  addListHandlers,
  onShowLists,
  onAddList,
  onUpdateList,
  onDeleteList
}
