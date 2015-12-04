import { compose, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../middleware/promiseMiddleware';
import thunk from 'redux-thunk';
import { devTools } from 'redux-devtools';
import rootReducer from 'reducers';

let createStoreWithMiddleware;

if (__DEBUG__) {
  createStoreWithMiddleware = compose(applyMiddleware(thunk, promiseMiddleware), devTools())(createStore);
} else {
  createStoreWithMiddleware = compose(applyMiddleware(thunk, promiseMiddleware))(createStore);
}

export default function configureStore (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
