'use strict'

const store = require('../store')
const config = require('../config')


const newPost = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const getPost = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts/' + store.post.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}
const updatePost = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/posts/' + store.post.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
  // const data = data {
  //   }
}

const getPosts = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/posts',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePost = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/posts',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newPost: newPost,
  getPost: getPost,
  updateGame: updatePost,
  getPosts: getPosts,
  deletePost: deletePost
}
