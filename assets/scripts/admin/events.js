// 'use strict'
//
// const listsApi = require('../lists/api')
// const templatesApi = require('../list-templates/api')
// const listsUi = require('../lists/ui')
// const templatesUi = require('../list-templates/ui')
// // const getFormFields = require('../../../lib/get-form-fields.js')
// // const store = require('../store.js')
//
// const onShowLists = function (event) {
//   event.preventDefault()
//   console.log('onShowLists button in /admin has been clicked')
//   listsApi.showLists()
//   .then(listsUi.showListsSuccess)
//   .catch(listsUi.showListsFailure)
// }
//
// const onShowListTemplates = function (event) {
//   event.preventDefault()
//   console.log('onShowListTemplatess button in /admin has been clicked')
//   templatesApi.showLists()
//   .then(templatesUi.showListsSuccess)
//   .catch(templatesUi.showListsFailure)
// }
//
// const addListHandlers = function (event) {
//   $('#showAllLists').on('click', onShowLists)
//   $('#showAllListTemplates').on('click', onShowListTemplates)
// }
//
// module.exports = {
//   addListHandlers,
//   onShowLists
//   // ,
//   // onShowTemplates
// }
