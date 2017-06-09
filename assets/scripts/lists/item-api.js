// 'use strict'
//
// const app = require('../app.js')
// const config = require('../config')
// const store = require('../store')
// const listItemsEvents = require('./item-events.js')
// const listItemsUi = require('./item-ui')
//
// const showListItems = function (id) {
//   console.log('called showListItems in the list/item-api.js')
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + id + '/list_items/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const addListItem = function (id, data) {
//   console.log('called addList in the list-item/api.js')
//   console.log('data is', data)
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + id + '/list_items/',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const updateListItem = function (data, listID, itemID) {
//   console.log('called updateListItem in the list/item-api.js')
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + listID + '/list_items/',
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
//
// const deleteListItem = function (itemID, listID) {
//   // console.log('called deleteListItem in the list/item-api.js')
//   // console.log('itemID in item-api is ', itemID)
//   // console.log('listID in item-api is ', listID)
//   // console.log('data is ', data)
//   // console.log('store is ', store)
//   // console.log('data.id is ', data.list_id)
//   // console.log('store.id is ', store.list.id)
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + listID + '/list_items/' + itemID,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// module.exports = {
//   showListItems,
//   addListItem,
//   updateListItem,
//   deleteListItem
// }
