import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

// Middleware tự viết: log mọi action (minh họa Phần A8)
const logger = (store) => (next) => (action) => {
  if (typeof action !== 'function') console.log('[action]', action.type);
  return next(action);
};

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
