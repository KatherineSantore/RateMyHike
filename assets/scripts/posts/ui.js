'use strict'
// const handlebars = require('../store')
const events = require('./events.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const newPostSuccess = function (data) {
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').append(showNewPostsHtml)
}
const newPostError = function () {

}
const deletePostSuccess = function (signUpResponse) {

}
const deletePostError = function () {

}
const getPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('.content').on('click', events.onDeletePost)
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
