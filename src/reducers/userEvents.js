import { createReducer } from 'utils';
import * as types from '../constants/ActionTypes';

const initialState = {
  events: []
};

export default createReducer( initialState, {
  [types.USER_EVENT_POST_SUCCESS]: (state, action) => ({
    ...action.result
  })
})
