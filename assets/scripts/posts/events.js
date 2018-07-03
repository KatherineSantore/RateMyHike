'use strict'

const store = require('../store')
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const revealForm = function (event) {
  const theupdateForm = document.getElementById(`updateForm`)
  theupdateForm.classList.remove(`hidden`)
  const postId = $(event.target).attr('data-id')
  console.log('event.target is ', event.target)
  store.update = postId
  console.log('postId is ', postId)
}

const onNewPost = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  // debugger
  api.newPost(data)
    .then(ui.newPostSuccess)
    .catch(ui.newPostError)
}
const onEditPost = (event) => {
  $('#show-posts')
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updatePost(data)
    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFailure)
}
const onUpdatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('onUpdatePost event.target is ', event.target)
  console.log('onUpdatePost data is ', data)
  debugger
  const postId = store.update
  api.updatePost(data, postId)
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
// const editableForm = (event) => {
//   event.preventDefault()
//   $('#formGroupExampleInput0').html(this.post.title)
//   $('#formGroupExampleInput1').html(this.post.location)
//   $('#formGroupExampleInput12').html(this.post.body)
// }

const addHandlers = () => {
  $('#get-posts-button').on('click', onGetPosts)
  $('#show-posts').on('click', '.deleteButton', onDeletePost)
  $('#show-posts').on('click', '.editButton', revealForm)
  $('#updateForm').on('submit', onUpdatePost)
  $('#create-post-form').on('submit', onNewPost)
}

module.exports = {
  addHandlers: addHandlers,
  onNewPost: onNewPost,
  onGetPost: onGetPost,
  onUpdatePost: onUpdatePost,
  onGetPosts: onGetPosts,
  onDeletePost: onDeletePost,
  onEditPost: onEditPost
}
