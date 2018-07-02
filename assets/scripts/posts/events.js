'use strict'

// const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onNewPost = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  api.newPost(data)
    .then(ui.newPostSuccess)
    .catch(ui.newPostError)
}
const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
const onGetPost = () => {
  event.preventDefault()
  api.displayPost()
    .then(ui.getPostSuccess)
    .catch(ui.getPostFailure)
}

const onGetPosts = (data) => {
  event.preventDefault()
  api.getPosts()
    .then(ui.getPostsSuccess)
    .catch(ui.getPostsFailure)
}
const onDeletePost = () => {
  event.preventDefault()
  api.deletePost()
    .then(ui.deletePostSuccess)
    .catch(ui.deltetePostFailure)
}
const addHandlers = () => {
  $('#get-posts-button').on('click', onGetPosts)
  // $('.content').on('click', '.remove-post', onDeletePost)
  $('#create-post-form').on('submit', onNewPost)
}

module.exports = {
  addHandlers: addHandlers,
  onNewPost: onNewPost,
  onGetPost: onGetPost,
  onUpdatePost: onUpdatePost,
  onGetPosts: onGetPosts,
  onDeletePost: onDeletePost
}
