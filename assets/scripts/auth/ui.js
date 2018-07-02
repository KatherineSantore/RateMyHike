'use strict'
const store = require('../store')
const events = require('./events.js')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModalLabel').html('You are signed up! Press close and sign-in to play!')
}
const signUpError = function () {
  $('#announcer').html('You are not signed up! Try again')
  document.getElementById('sign-up-form').reset()
}

const signInSuccess = function (response) {
  $('#signInModalLabel').html('You are signed in! Press close to start rating!')
  store.user = response.user
}
const signInError = function (response) {
  $('#signInModalLabel').html('Please try again!')
  // document.getElementById('sign-in-form').reset()
}

const changePasswordSuccess = function (response) {
  $('#cpModalLabel').html('Your password is changed!')
}

const changePasswordError = function (response) {
  $('#cpModalLabel').html('Your password is not changed! Try again.')
}

const signOutSuccess = function (response) {
  $('#signOutModalLabel').html('You are signed out! Press close to sign in again.')
  delete store.user
}
const signOutFailure = function (response) {
  $('#signOutModalLabel').html('You are not signed out! Try again.')
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordError

}
