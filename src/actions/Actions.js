import * as types from '../constants/ActionTypes';
import * as API from '../api/api';

export function getApps () {
  return {
    types: [ types.APPS_FETCH, types.APPS_FETCH_SUCCESS, types.APPS_FETCH_FAILURE ],
    promise: API.getApps()
  }
}

export function getDetails (slug) {
  return {
    types: [ types.DETAIL_FETCH, types.DETAIL_FETCH_SUCCESS, types.DETAIL_FETCH_FAILURE ],
    promise: API.getDetails(slug)
  }
}

export function login (credentials) {
  return {
    types: [ types.LOGIN, types.LOGIN_SUCCESS, types.LOGIN_FAILURE],
    promise: API.login(credentials)
  }
}

export const getUser = credentials => ({
  types: [ types.USER_FETCH, types.USER_FETCH_SUCCESS, types.USER_FETCH_FAILURE ],
  promise: API.getUser(credentials)
})

export function logout () {
  return {
    types: [types.LOGOUT, types.LOGOUT_SUCCESS, types.LOGOUT_FAILURE],
    promise: Promise.resolve( null )
  };
}

export function postUser (user) {
  return {
    types: [types.USER_POST, types.USER_POST_SUCCESS, types.USER_POST_FAILURE],
    promise: API.postUser(user)
  };
}

export const getComments = (slug) => ({
  types: [types.COMMENTS_FETCH, types.COMMENTS_FETCH_SUCCESS, types.COMMENTS_FETCH_FAILURE],
  promise: API.getComments(slug)
})

export const postReply = (comment) => ({
  types: [types.REPLY_POST, types.REPLY_POST_SUCCESS, types.REPLY_POST_FAILURE],
  promise: API.postReply(comment)
})

export const deleteComment = (comment) => ({
  types: [types.COMMENT_DELETE, types.COMMENT_DELETE_SUCCESS, types.COMMENT_DELETE_FAILURE],
  promise: API.deleteComment(comment)
})

export const postThread = (thread, node) => ({
  types: [types.THREAD_POST, types.THREAD_POST_SUCCESS, types.THREAD_POST_FAILURE],
  promise: API.postThread(thread, node)
})
