'use strict'
const store = require('../store')
// const postsEvents = require('../posts/events.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const newPostSuccess = function (data) {
  $('#post-announcer').html('You have successfully created a new post! Click Show Posts to view it!')
  store.post = data.post
  document.getElementById('create-post-form').reset()
}
const newPostError = function () {
  $('#post-announcer').html('Something went wrong try again!')
}
const deletePostSuccess = function () {
  $('#announcer').html('You have successfully deleted this post! Click show all posts to see your posts again.')
  $('#show-posts').html('')
}
const deletePostError = function () {
  $('#announcer').html('Please try again')
}
const getPostsSuccess = (data) => {
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').html(showNewPostsHtml)
  $('#post-announcer').html('')
  $('#announcer').html('')
  $('#show-posts').show()
}

const getPostsError = function () {
  $('#announcer').html('Please try again')
}
const updatePostSuccess = (data) => {
  $('#announcer').html('You have successfully updated this post! Click Show All Posts to See Your Posts!')
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').html(showNewPostsHtml)
}

const updatePostFailure = function () {
  $('#announcer').html('You have not successfully updated this post. Please try again')
}
module.exports = {
  newPostSuccess,
  newPostError,
  deletePostSuccess,
  deletePostError,
  getPostsSuccess,
  getPostsError,
  updatePostSuccess,
  updatePostFailure
}
