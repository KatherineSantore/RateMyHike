'use strict'
const store = require('../store')
// const postsEvents = require('../posts/events.js')
const showPostsTemplate = require('../templates/post-listing.handlebars')

const newPostSuccess = function (data) {
  // const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  // $('#show-posts').show(showNewPostsHtml)
  $('#post-announcer').html('You have successfully created a new post! Click Show Posts to view it!').toggle(6000)
  store.post = data.post
  document.getElementById('create-post-form').reset()
}
const newPostError = function () {
  $('#post-announcer').html('Something went wrong try again!').toggle(6000)
}
const deletePostSuccess = function () {
  $('#announcer').html('You have successfully deleted this post! Click show all posts to see your posts again.')
  $('#show-posts').html('')
}
const deletePostError = function () {
  $('#all-posts-announcer').html('Please try again').toggle(6000)
}
const getPostsSuccess = (data) => {
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').html(showNewPostsHtml)
}

const getPostsError = function () {
  $('#all-posts-announcer').html('Please try again').toggle(6000)
}
const updatePostSuccess = (data) => {
  $('#announcer').html('You have successfully updated this post! Click Show All Posts to See Your Posts!')
  const showNewPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#show-posts').html(showNewPostsHtml)
}

const updatePostFailure = function () {
  $('#updateForm').html('You have not successfully updated this post. Please try again').toggle(6000)
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
