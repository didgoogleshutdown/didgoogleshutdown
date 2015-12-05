import { createReducer } from 'utils'
import * as types from '../constants/ActionTypes'

const initialState = {
  details: {}
}

export default createReducer( initialState, {
  [types.DETAIL_FETCH_SUCCESS]: (state, action) => {
    return {
      ...state,
      ...action.result
    }
  }
})
