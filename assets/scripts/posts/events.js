'use strict'

// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')
const authUi = require('auth/ui.js')

const onNewPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  api.newPost(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}
const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is', data)
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
const onDisplayPost = () => {
  event.preventDefault()
  api.displayPost()
    .then(ui.displayPostSuccess)
    .catch(ui.displayPostFailure)
}

const onGetPosts = () => {
  event.preventDefault()
  api.getPosts()
    .then(ui.getPostSuccess)
    .catch(ui.getPostsFailure)
}
const onDeletePost = () => {
  event.preventDefault()
  api.deletePost()
    .then(ui.deletePostSuccess)
    .catch(ui.deltetePostFailure)
}
module.exports = {
  onNewPost: onNewPost,
  onDisplayPost: onDisplayPost,
  onUpdatePost: onUpdatePost,
  onGetPosts: onGetPosts,
  onDeltePost: onDeletePost
}
