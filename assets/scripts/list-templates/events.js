'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowListTemplates = function (event) {
  event.preventDefault()
  console.log('onShowListTemplates button has been clicked')
  api.showListTemplates()
  .then(ui.showListTemplatesSuccess)
  .catch(ui.showListTemplatesFailure)
}

const onAddListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  api.addListTemplate(data)
  .done(ui.addListTemplateSuccess)
  .fail(ui.addListTemplateFailure)
}

const onUpdateListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdateListTemplate has been called')
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.updateListTemplate(data)
  .done(ui.updateListTemplateSuccess)
  .fail(ui.updateListTemplateFailure)
}

const onDeleteListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  api.deleteListTemplate(data)
  .done(ui.deleteListTemplateSuccess)
  .fail(ui.deleteListTemplateFailure)
}

const addHandlers = function (event) {
  $('#showAllListTemplates').on('click', onShowListTemplates)
  $('#addNewListTemplates').on('submit', onAddListTemplate)
  $('#updateOneListTemplates').on('submit', onUpdateListTemplate)
  $('#deleteOneListTemplates').on('submit', onDeleteListTemplate)
  $('#addNewListTemplates').trigger('reset')
  $('#updateOneListTemplates').trigger('reset')
  $('#deleteOneListTemplates').trigger('reset')
}

module.exports = {
  addHandlers,
  onShowListTemplates,
  onAddListTemplate,
  onUpdateListTemplate,
  onDeleteListTemplate
}
