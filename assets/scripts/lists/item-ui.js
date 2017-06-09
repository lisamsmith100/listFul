'use strict'

const showListItemsTemplate = require('../templates/list-items.handlebars')
const addListItemTemplate = require('../templates/list-items.handlebars')
const updateListItemTemplate = require('../templates/list-items.handlebars')
const deleteListItemTemplate = require('../templates/list-items.handlebars')
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
  console.log('store in item ui is ', store)
  console.log('store.list_item is ', store.list_item)
  const addListItemHtml = addListItemTemplate({ list_items: data.list_items })
  console.log('addListItemHtml = ', addListItemHtml)
  $('.content-items').append(addListItemHtml)
  $('#addNewListItems').find('input:text, select, textarea').val('')
  console.log('addListItem is a success')
  listItemsApi.showListItems()
    .then(showListItemsSuccess)
    .then($('#updateListItemFailure').html(' '))
    .then(listItemsApi.showListItems(store.current_list_id))
    .catch(showListItemsFailure)
}

const addListItemFailure = (error) => {
  console.log('addListItem failed')
  console.error(error)
  $('#addListItemFailure').html('We were unable to add your list item.  Did you add a title?  Please try again.')
}

const updateListItemSuccess = (data) => {
  console.log('data.list is ', data)
  const showListItemsHtml = showListItemsTemplate({ list_items: data.list_item })
  const updateInfo = data
  console.log('item-ui data.list_item is ', data.list_item)
  const updateListItemHtml = updateListItemTemplate({ list_items: data.list_item })
  console.log('item-ui data.list_item is ', data.list_item)
  console.log('updateListItemHtml = ', updateListItemHtml)
  $('.content-items').append(showListItemsHtml)
  $('#updateOneListItem').find('input:text, select, textarea').val('')
  listItemsEvents.onShowListItems
  console.log('updateListItem is a success')
  listItemsApi.showListItems(data)
    .then(showListItemsSuccess)
    .then($('#updateListItemFailure').html(' '))
    .catch(showListItemsFailure)
}

const updateListItemFailure = (error) => {
  console.log('updateListItem failed')
  console.error(error)
  $('#updateListItemFailure').html('We were unable to update your list item.  Did you add an ID?  Please try again.')
}

const deleteListItemSuccess = (data) => {
  console.log('deleteListItem is a success')
  $('#deleteOneListItem').find('input:text, select, textarea').val('')
  console.log('data is ', data)
  $('#delete').html(' ')
  listItemsApi.showListItems(data)
    .then(showListItemsSuccess)
    .then($('#deleteListItemFailure').html(' '))
    .catch(showListItemsFailure)
}

const deleteListItemFailure = (error) => {
  console.log('deleteListItem failed')
  console.error(error)
  $('#deleteListItemFailure').html('We were unable to delete your list item.  Did you add an ID?  Please try again.')
}

module.exports = {
  showListItemsSuccess,
  showListItemsFailure,
  addListItemSuccess,
  addListItemFailure,
  updateListItemSuccess,
  updateListItemFailure,
  deleteListItemSuccess,
  deleteListItemFailure
}
