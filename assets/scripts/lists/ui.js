'use strict'

const showListsTemplate = require('../templates/lists.handlebars')
const addListTemplate = require('../templates/lists.handlebars')
const updateListTemplate = require('../templates/lists.handlebars')
// const deleteListTemplate = require('../templates/list.handlebars')
const store = require('../store.js')
const listsEvents = require('./events.js')
const listsApi = require('./api.js')
const itemEvents = require('./item-events.js')

const showListsSuccess = (data) => {
  console.log('data is ', data)

  data.lists.sort(function (a, b) {
    return a.id - b.id
  })
  const showListsHtml = showListsTemplate({ lists: data.lists })
  itemEvents.addListItemHandlers()
  $('.content-menu').html(' ')
  $('.content-menu').html(showListsHtml)
  console.log('showLists is a success')
}

const showListsFailure = (error) => {
  console.log('showLists failed')
  console.error(error)
}

const addListSuccess = (data) => {
  console.log('you have reached api function')
  store.list = data.list
  console.log('data.list is ', data.list)
  const addListHtml = addListTemplate({ lists: data.lists })
  console.log('addListHtml = ', addListHtml)
  $('.content-menu').append(addListHtml)
  $('#addNewLists').find('input:text, select, textarea').val('')
  console.log('addList is a success')
  listsApi.showLists(data)
    .then(showListsSuccess)
    .then($('#addListFailure').html(' '))
    .then(listsApi.showLists())
    .catch(showListsFailure)
}

const addListFailure = (error) => {
  console.log('addList failed')
  console.error(error)
  $('#addListFailure').html('We were unable to add your list.  Did you add a title?  Please try again.')
}

const updateListSuccess = (data) => {
  console.log('data.list is ', data)
  const showListsHtml = showListsTemplate({ lists: data.list })
  const updateInfo = data
  console.log('data.list is ', data)
  const updateListHtml = updateListTemplate({ lists: data.list })
  console.log('data.list is ', data)
  console.log('updateListHtml = ', updateListHtml)
  $('.content-menu').append(showListsHtml)
  $('#updateOneList').find('input:text, select, textarea').val('')
  listsEvents.onShowLists
  console.log('updateList is a success')
  listsApi.showLists(data)
    .then(showListsSuccess)
    .then($('#updateListFailure').html(' '))
    .catch(showListsFailure)
}

const updateListFailure = (error) => {
  console.log('updateList failed')
  console.error(error)
  $('#updateListFailure').html('We were unable to update your list.  Did you add an ID?  Please try again.')
}

const deleteListSuccess = (data) => {
  console.log('deleteList is a success')
  $('#deleteOneLists').find('input:text, select, textarea').val('')
  console.log('data is ', data)
  $('#delete').html(' ')
  listsApi.showLists(data)
    .then(showListsSuccess)
    .then($('#deleteListFailure').html(' '))
    .catch(showListsFailure)
}

const deleteListFailure = (error) => {
  console.log('deleteList failed')
  console.error(error)
  $('#deleteListFailure').html('We were unable to delete your list.  Did you add an ID?  Please try again.')
}

module.exports = {
  showListsSuccess,
  showListsFailure,
  addListSuccess,
  addListFailure,
  updateListSuccess,
  updateListFailure,
  deleteListSuccess,
  deleteListFailure
}
