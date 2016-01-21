import { createReducer } from 'utils';
import * as types from '../constants/ActionTypes';

const initialState = {
  user: null
};

export default createReducer( initialState, {
  [types.USER_FETCH]: (state) => ({
    ...state
  }),

  [types.USER_FETCH_SUCCESS]: (state, action) => ({
    ...state,
    ...action.result
  }),

  [types.USER_FETCH_FAILURE]: (state) => ({
    ...state
  }),

  [types.LOGIN]: (state) => ({
    ...state
  }),

  [types.LOGIN_SUCCESS]: (state, action) => ({
    ...state,
    ...action.result
  }),

  [types.LOGOUT_SUCCESS]: (state, action) => ({
    ...action.result
  }),

  [types.USER_POST_SUCCESS]: (state, action) => ({
    ...action.result
  })
})
