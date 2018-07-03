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
  document.getElementById('#show-posts').contentEditable = 'true'
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
const onDeletePost = (event) => {
  event.preventDefault()
  const postId = $(event.target).attr('data-id')
  api.deletePost(postId)
    .then(ui.deletePostSuccess)
    .catch(ui.failure)
}

const addHandlers = () => {
  $('#get-posts-button').on('click', onGetPosts)
  $('#show-posts').on('click', '.deleteButton', onDeletePost)
  $('#show-posts').on('click', '.editButton', onUpdatePost)
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
