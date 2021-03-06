'use strict'

const showTempsTemplate = require('../templates/temps.handlebars')
const addTempTemplate = require('../templates/temps.handlebars')
const updateTempTemplate = require('../templates/temps.handlebars')
// const deleteTempTemplate = require('../templates/temp.handlebars')
const store = require('../store.js')
const listsTemplatesEvents = require('./events.js')
const listsTemplatesApi = require('./api.js')

const showListTemplatesSuccess = (data) => {
  console.log('data is ', data)
  data.templates.sort(function (a, b) {
    return a.id - b.id
  })
  const showTempsHtml = showTempsTemplate({ templates: data.templates })
  $('.content-menu').html(' ')
  $('.content-menu').html(showTempsHtml)
  console.log('showTemps is a success')
}

const showTempsFailure = (error) => {
  console.log('showTemps failed')
  console.error(error)
}

const addTempSuccess = (data) => {
  console.log('you have reached api function')
  store.template = data.template
  console.log('data.template is ', data.template)
  const addTempHtml = addTempTemplate({ templates: data.templates })
  console.log('addTempHtml = ', addTempHtml)
  $('.content-menu').append(addTempHtml)
  $('#addNewTemplates').find('input:text, select, textarea').val('')
  console.log('addTemp is a success')
  listsTemplatesApi.showTempsTemplate(data)
    .then(showListTemplatesSuccess)
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
  const updateTempHtml = updateTempTemplate({ list: data.template })
  const showTempsHtml = showTempsTemplate({ templates: data.templates })
  console.log('updateTempHtml = ', updateTempHtml)
  $('.content').replace(showTempsHtml)
  $('#updateOneTemp').find('input:text, select, textarea').val('')
  listsTemplatesEvents.onShowTemps()
  console.log('updateTemp is a success')
  listsTemplatesApi.showListTemplates(data)
    .then(showListTemplatesSuccess)
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
  listsTemplatesApi.showTemps(data)
    .then(showListTemplatesSuccess)
    .then($('#deleteTempFailure').html(' '))
    .catch(showTempsFailure)
}

const deleteTempFailure = (error) => {
  console.log('deleteTemp failed')
  console.error(error)
  $('#deleteTempFailure').html('We were unable to delete your list.  Did you add an ID?  Please try again.')
}

module.exports = {
  showListTemplatesSuccess,
  showTempsFailure,
  addTempSuccess,
  addTempFailure,
  updateTempSuccess,
  updateTempFailure,
  deleteTempSuccess,
  deleteTempFailure
}
