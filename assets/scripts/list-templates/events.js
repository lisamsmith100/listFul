'use strict'

const listsTemplatesApi = require('./api')
const listsTemplatesUi = require('./ui')
const getFormFields = require('../../../lib/get-form-fields.js')
const store = require('../store.js')

const onShowListTemplates = function (event) {
  event.preventDefault()
  console.log('onShowListTemplates button has been clicked')
  listsTemplatesApi.showListTemplates()
  .then(listsTemplatesUi.showListTemplatesSuccess)
  .catch(listsTemplatesUi.showListTemplatesFailure)
}

const onAddListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is ', data)
  listsTemplatesApi.addListTemplate(data)
  .done(listsTemplatesUi.addListTemplateSuccess)
  .fail(listsTemplatesUi.addListTemplateFailure)
}

const onUpdateListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdateListTemplate has been called')
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  listsTemplatesApi.updateListTemplate(data)
  .done(listsTemplatesUi.updateListTemplateSuccess)
  .fail(listsTemplatesUi.updateListTemplateFailure)
}

const onDeleteListTemplate = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('event is ', event)
  console.log('data being sent to api is ', data)
  listsTemplatesApi.deleteListTemplate(data)
  .done(listsTemplatesUi.deleteListTemplateSuccess)
  .fail(listsTemplatesUi.deleteListTemplateFailure)
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
