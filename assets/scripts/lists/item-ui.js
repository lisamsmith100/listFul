'use strict'

const showListItemsTemplate = require('../templates/list-items.handlebars')
const addListItemTemplate = require('../templates/list-items.handlebars')
// const updateListItemTemplate = require('../templates/list-items.handlebars')
// const deleteListTemplate = require('../templates/list.handlebars')
const store = require('../store.js')
const listItemsEvents = require('./item-events.js')
const listItemsApi = require('./item-api.js')

const showListItemsSuccess = (data) => {
  console.log('item-ui data is ', data)
  // store.listID = $(this).attr('id')
  data.list_items.sort(function (a, b) {
    return a.id - b.id
  })
  const showListItemsHtml = showListItemsTemplate({ list_items: data.list_items })
  $('.content-items').html(' ')
  $('.content-items').html(showListItemsHtml)
  console.log('showListItems is a success')
}

const showListItemsFailure = (error) => {
  console.log('showListItems failed')
  console.error(error)
}

const addListItemSuccess = (data) => {
  console.log('you have reached list-item api function')
  store.list_item = data.list_item
  console.log('store.list_item is ', store.list_item)
  const addListItemHtml = addListItemTemplate({ list_items: data.list_items })
  console.log('addListItemHtml = ', addListItemHtml)
  $('.content-items').append(addListItemHtml)
  $('#addNewListItems').find('input:text, select, textarea').val('')
  console.log('addListItem is a success')
    .then(showListItemsSuccess)
    .then($('#addListItemFailure').html(' '))
    .catch(showListItemsFailure)
}

const addListItemFailure = (error) => {
  console.log('addListItem failed')
  console.error(error)
  $('#addListItemFailure').html('We were unable to add your list item.  Did you add a title?  Please try again.')
}

// const updateListSuccess = (data) => {
//   console.log('data.list is ', data)
//   const showListsHtml = showListsTemplate({ lists: data.list })
//   const updateInfo = data
//   console.log('data.list is ', data)
//   const updateListHtml = updateListTemplate({ lists: data.list })
//   console.log('data.list is ', data)
//   console.log('updateListHtml = ', updateListHtml)
//   $('.content-menu').append(showListsHtml)
//   $('#updateOneList').find('input:text, select, textarea').val('')
//   listsEvents.onShowLists
//   console.log('updateList is a success')
//   listsApi.showLists(data)
//     .then(showListsSuccess)
//     .then($('#updateListFailure').html(' '))
//     .catch(showListsFailure)
// }
//
// const updateListFailure = (error) => {
//   console.log('updateList failed')
//   console.error(error)
//   $('#updateListFailure').html('We were unable to update your list.  Did you add an ID?  Please try again.')
// }
//
// const deleteListSuccess = (data) => {
//   console.log('deleteList is a success')
//   $('#deleteOneLists').find('input:text, select, textarea').val('')
//   console.log('data is ', data)
//   $('#delete').html(' ')
//   listsApi.showLists(data)
//     .then(showListsSuccess)
//     .then($('#deleteListFailure').html(' '))
//     .catch(showListsFailure)
// }
//
// const deleteListFailure = (error) => {
//   console.log('deleteList failed')
//   console.error(error)
//   $('#deleteListFailure').html('We were unable to delete your list.  Did you add an ID?  Please try again.')
// }

module.exports = {
  showListItemsSuccess,
  showListItemsFailure,
  addListItemSuccess,
  addListItemFailure
  // ,
  // updateListSuccess,
  // updateListFailure,
  // deleteListSuccess,
  // deleteListFailure
}
