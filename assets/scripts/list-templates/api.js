'use strict'

const app = require('../app.js')
const config = require('../config')
const store = require('../store')
cont listsTemplatesEvents = require('./events')

const showListTemplates = function () {
  console.log('called showListTemplates in the list-templates/api.js')
  return $.ajax({
    url: config.apiOrigin + '/templates',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showOneListTemplate = function () {
  console.log('called showOneListTemplate in the list-templates/api.js')
  return $.ajax({
    url: config.apiOrigin + '/templates/' + store.template.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token}
  })
}

const addListTemplates = function (data) {
  console.log('called addListTemplates in the list-templates/api.js')
  console.log('data is', data)
  return $.ajax({
    url: config.apiOrigin + '/templates/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateListTemplates = function (data) {
  console.log('called updateListTemplates in the list-templates/api.js')
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/templates/' + data.template.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteListTemplates = function (data) {
  console.log('called deleteListTemplates in the list-templates/api.js')
  console.log('data is', data)
  console.log('data.id is ', data.template.id)
  return $.ajax({
    url: config.apiOrigin + '/lists/' + data.template.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showListTemplates,
  showOneListTemplate,
  addListTemplates,
  updateListTemplates,
  deleteListTemplates
}
