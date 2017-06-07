'use strict'

const showTempTemplate = require('../templates/temp.handlebars')
const addTempTemplate = require('../templates/temp.handlebars')
const updateTempTemplate = require('../templates/temp.handlebars')
// const deleteTempTemplate = require('../templates/temp.handlebars')
const store = require('../store.js')
const events = require('./events.js')
const api = require('./api.js')

const showTempsSuccess = (data) => {
  console.log('data is ', data)
  data.lists.sort(function (a, b) {
    return a.id - b.id
  })
  const showTempsHtml = showTempTemplate({ lists: data.lists })
  $('.content').html(showTempsHtml)
  console.log('showTemps is a success')
}

const showTempsFailure = (error) => {
  console.log('showTemps failed')
  console.error(error)
}

const addTempSuccess = (data) => {
  console.log('you have reached api function')
  store.list = data.list
  console.log('data.list is ', data.list)
  const addTempHtml = addTempTemplate({ lists: data.lists })
  console.log('addTempHtml = ', addTempHtml)
  $('.content').append(addTempHtml)
  $('#addNewTemps').find('input:text, select, textarea').val('')
  console.log('addTemp is a success')
  api.showTemps(data)
    .then(showTempsSuccess)
    .then($('#addTempFailure').html(' '))
    .catch(showTempsFailure)
}

const addTempFailure = (error) => {
  console.log('addTemp failed')
  console.error(error)
  $('#addTempFailure').html('We were unable to add your list.  Did you add a title?  Please try again.')
}

const updateTempSuccess = (data) => {
  const updateInfo = data
  console.log('data.list is ', data)
  const updateTempHtml = updateTempTemplate({ list: data.list })
  console.log('updateTempHtml = ', updateTempHtml)
  $('.content').replace(showTempsHtml)
  $('#updateOneTemp').find('input:text, select, textarea').val('')
  events.onShowTemps()
  console.log('updateTemp is a success')
  api.showTemps(data)
    .then(showTempsSuccess)
    .then($('#updateTempFailure').html(' '))
    .catch(showTempsFailure)
}

const updateTempFailure = (error) => {
  console.log('updateTemp failed')
  console.error(error)
  $('#updateTempFailure').html('We were unable to update your list.  Did you add an ID?  Please try again.')
}

const deleteTempSuccess = (data) => {
  console.log('deleteTemp is a success')
  $('#deleteOneTemps').find('input:text, select, textarea').val('')
  console.log('data is ', data)
  $('#delete').html(' ')
  api.showTemps(data)
    .then(showTempsSuccess)
    .then($('#deleteTempFailure').html(' '))
    .catch(showTempsFailure)
}

const deleteTempFailure = (error) => {
  console.log('deleteTemp failed')
  console.error(error)
  $('#deleteTempFailure').html('We were unable to delete your list.  Did you add an ID?  Please try again.')
}

module.exports = {
  showTempsSuccess,
  showTempsFailure,
  addTempSuccess,
  addTempFailure,
  updateTempSuccess,
  updateTempFailure,
  deleteTempSuccess,
  deleteTempFailure
}
