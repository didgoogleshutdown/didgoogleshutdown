import { createReducer } from 'utils';
import * as types from '../constants/ActionTypes';

const initialState = {
  comments: null
};

export default createReducer( initialState, {
  [types.COMMENTS_FETCH_SUCCESS]: (state, action) => ({
    ...state,
    ...action.result
  }),

  [types.REPLY_POST_SUCCESS]: (state, action) => ({
    ...state,
    ...action.result
  }),

  [types.THREAD_POST_SUCCESS]: (state, action) => ({
    ...state,
    ...action.result
  })
});
