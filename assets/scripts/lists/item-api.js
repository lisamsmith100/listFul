'use strict'

const app = require('../app.js')
const config = require('../config')
const store = require('../store')
const listItemsEvents = require('./item-events.js')
const listItemsUi = require('./item-ui')

const showListItems = function (id) {
  console.log('called showListItems in the list/item-api.js')
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id + '/list_items/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addListItem = function (id, data) {
  console.log('called addList in the list-item/api.js')
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id + '/list_items/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

//
// const updateList = function (data) {
//   console.log('called updateList in the list/api.js')
//   console.log('data is ', data)
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + data.list.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
const deleteListItem = function (id, data) {
  console.log('called deleteListItem in the list/item-api.js')
  console.log('id in item-api is ', id)
  console.log('data is ', data)
  console.log('store is ', store)
  console.log('data.id is ', data.list_id)
  console.log('store.id is ', store.list.id)
  return $.ajax({
    url: config.apiOrigin + '/lists/' + id + '/list_items/' + data.list_item.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showListItems,
  addListItem,
  // updateListItem,
  deleteListItem
}
