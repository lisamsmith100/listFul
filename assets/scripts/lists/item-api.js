'use strict'

const app = require('../app.js')
const config = require('../config')
const store = require('../store')
// const listItemsEvents = require('./item-events.js')

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
// const showOneList = function () {
//   console.log('called showOneList in the list/api.js')
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + store.list.id,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token}
//   })
// }
//

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
// const deleteList = function (data) {
//   console.log('called deleteList in the list/api.js')
//   console.log('data is', data)
//   console.log('data.id is ', data.list.id)
//   // console.log('store.id is ', store.list.id)
//   return $.ajax({
//     url: config.apiOrigin + '/lists/' + data.list.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  showListItems,
  addListItem
  // ,
  // showOneList,
  // updateList,
  // deleteList
}
