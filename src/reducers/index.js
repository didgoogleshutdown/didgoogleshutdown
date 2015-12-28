import { combineReducers } from 'redux';
import appsPage from './appsPage'
import detailPage from './detailPage'
import accounts from './accounts'
import comments from './comments'

export default combineReducers({
  appsPage,
  detailPage,
  accounts,
  comments
});
