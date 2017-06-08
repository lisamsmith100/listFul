'use strict'

const listItemsApi = require('./item-api')
const listItemsUi = require('./item-ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowListItems = function (event) {
  event.preventDefault()
  console.log('onShowListItems button has been clicked')
  console.log('data received by events/onShowListItems function is ', event.target)
  const data = event.target
  console.log('data is ', data)
  console.log('store is ', store)
  console.log('Running $(data).attr(id) gives us ', $(data).attr('id'))
  const listid = $(data).attr('id')
  console.log('listid is ', listid)
  listItemsApi.showListItems(listid)

  .then(listItemsUi.showListItemssSuccess)
  .catch(listItemsUi.showListItemsFailure)
}

// const onAddList = function (event) {
//   event.preventDefault()
//   // const data = getFormFields(event.target)
//   const data = getFormFields(event.target)
//   // const data = $('#list-create-input').val()
//   console.log('Data is: ', data)
//   listsApi.addList(data)
//   .done(listsUi.addListSuccess)
//   .fail(listsUi.addListFailure)
// }
//
// const onUpdateList = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   console.log('onUpdateList has been called')
//   console.log('event is ', event)
//   console.log('data being sent to api is ', data)
//   listsApi.updateList(data)
//   // removed this arg fm updateList invocation, store.updateListID
//   .then(listsUi.updateListSuccess)
//   .catch(listsUi.updateListFailure)
// }
//
// const onDeleteList = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   // const data = event.target.list[id]
//   // .split('-')
// //   console.log('event is ', event)
// //   console.log('data being sent to api is ', data)
//   listsApi.deleteList(data)
//   .then(listsUi.deleteListSuccess)
//   .catch(listsUi.deleteListFailure)
// // }
//   console.log('event is ', event)
//   console.log('data being sent to api is ', data)
//   listsApi.deleteList(data)
//   .then(listsUi.deleteListSuccess)
//   .fail(listsUi.deleteListFailure)
// }
//
// const onNoteNameClick = function (event) {
//   console.log('note-branch clicked')
// }

const addListItemHandlers = function (event) {
  console.log('addListItemHandlers has been called')
  $(document).on('click', '.list-menu-link', onShowListItems)
  // $('.list-menu-link').on('submit', onShowListItems)
  // $('.list-menu-link').on('click', onShowListItems)
  // $('#create-list-form').on('submit', onAddList)
  // $('#addNewListItem').on('submit', onAddListItem)
  // $('#updateOneListItem').on('submit', onUpdateListItem)
  // $('#deleteOneListItem').on('submit', onDeleteListItem)
  $('#addNewListItem').trigger('reset')
  $('#updateOneListItem').trigger('reset')
  $('#deleteOneListItem').trigger('reset')
}

module.exports = {
  addListItemHandlers,
  onShowListItems
  // ,
  // onAddListItem,
  // onUpdateListItem,
  // onDeleteListItem
}
