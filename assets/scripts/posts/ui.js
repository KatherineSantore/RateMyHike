'use strict'
const store = require('../store')

const events = require('./events.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const newPostSuccess = function (data) {
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').append(showNewPostsHtml)
  console.log(data)
  store.post = response.post

}
const newPostError = function () {

}
const deletePostSuccess = function (signUpResponse) {

}
const deletePostError = function () {

}
const getPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  // $('.content').on('click', events.onDeletePost)
  $('#show-posts').append(showPostsHtml)
  $('#get-posts-button').hide()
}

const getPostsError = function () {

}
module.exports = {
  newPostSuccess,
  newPostError,
  deletePostSuccess,
  deletePostError,
  getPostsSuccess,
  getPostsError
}
