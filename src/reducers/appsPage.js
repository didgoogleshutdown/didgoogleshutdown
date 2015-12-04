import { createReducer } from 'utils'
import * as types from '../constants/ActionTypes'

const initialState = {
  apps: []
}

export default createReducer( initialState, {
  [types.APPS_FETCH_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.result
    }
  }
})
