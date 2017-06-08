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
  .then(listsTemplatesUi.updateListTemplateSuccess)
  .catch(listsTemplatesUi.updateListTemplateFailure)
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

const addListTemplateHandlers = function (event) {
  $('#showAllListTemplates').on('click', onShowListTemplates)
  $('#addNewListTemplate').on('submit', onAddListTemplate)
  $('#updateOneListTemplate').on('submit', onUpdateListTemplate)
  $('#deleteOneListTemplate').on('submit', onDeleteListTemplate)
  $('#addNewListTemplate').trigger('reset')
  $('#updateOneListTemplate').trigger('reset')
  $('#deleteOneListTemplate').trigger('reset')
}

module.exports = {
  addListTemplateHandlers,
  onShowListTemplates,
  onAddListTemplate,
  onUpdateListTemplate,
  onDeleteListTemplate
}
