import * as types from '../constants/ActionTypes';
import * as API from '../api/api';

export function getApps () {
  return {
    types: [ types.APPS_FETCH, types.APPS_FETCH_SUCCESS, types.APPS_FETCH_FAILURE ],
    promise: API.getApps()
  }
}
