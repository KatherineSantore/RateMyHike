'use strict'
// const store = require('../store')
// const events = require('./events.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const newPostSuccess = function (signUpResponse) {

}
const newPostError = function () {

}
const deletePostSuccess = function (signUpResponse) {

}
const deletePostError = function () {

}
const getPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  // $('.show-posts').html('click', showPostsHtml)
  $('#show-posts').append(showPostsHtml)
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
