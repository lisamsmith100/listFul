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
  store.current_list_id = listid
  console.log('listid is ', listid)
  console.log('store.current_list_id is ' + store.current_list_id)
  listItemsApi.showListItems(listid)
  .then(listItemsUi.showListItemsSuccess)
  .catch(listItemsUi.showListItemsFailure)
}

const onAddListItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // const data = $('#list-create-input').val()
  // console.log('onAddListItem button has been clicked')
  // console.log('data received by item-events/onAddListItems function is ', event.target)
  // console.log('data is ', data)
  // console.log('store is ', store)
  // console.log('Running $(data).attr(id) gives us ', $(data).attr('id'))
  const listid = store.current_list_id
  // console.log('listid is ', listid)
  listItemsApi.addListItem(listid, data)
  .then(listItemsUi.addListItemSuccess)
  .done(listItemsUi.showListItems)
  .fail(listItemsUi.addListItemFailure)
}
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
const onDeleteListItem = function (event) {
  event.preventDefault()
  // const data = getFormFields(event.target)
  console.log('event is ', event)
  const data = event.target.list_item[id]
  // [id].split('-')
  // const data = $('#list-create-input').val()
  console.log('onDeleteListItem button has been clicked')
  console.log('data received by item-events/onDeleteListItem function is ', event.target)
  console.log('data is ', data)
  console.log('store is ', store)
  console.log('Running $(data).attr(id) gives us ', $(data).attr('id'))
  const listid = store.current_list_id
  console.log('listid is ', listid)
  listItemsApi.deleteListItem(listid, data)
  .then(listItemsUi.deleteListItemSuccess)
  .done(listItemsUi.showListItems)
  .fail(listItemsUi.deleteListItemFailure)
}
  // console.log('data being sent to api is ', data)
  // listItemsApi.deleteListItem(data)
  // .then(listItemsUi.deleteListItemSuccess)
  // .catch(listItemsUi.deleteListItemFailure)
// }

const addListItemHandlers = function (event) {
  console.log('addListItemHandlers has been called')
  $(document).on('click', '.list-menu-link', onShowListItems)
  $(document).on('click', '.deleteOneListItem', onDeleteListItem)
  // $('.list-menu-link').on('submit', onShowListItems)
  // $('.list-menu-link').on('click', onShowListItems)
  // $('#create-list-form').on('submit', onAddList)
  $('#addNewListItem').on('submit', onAddListItem)
  // $('#updateOneListItem').on('submit', onUpdateListItem)
  // $('#deleteOneListItem').on('submit', onDeleteListItem)
  $('#addNewListItem').trigger('reset')
  $('#updateOneListItem').trigger('reset')
  $('#deleteOneListItem').trigger('reset')
}

module.exports = {
  addListItemHandlers,
  onShowListItems,
  onAddListItem,
  onDeleteListItem
  // ,
  // onUpdateListItem,
}
