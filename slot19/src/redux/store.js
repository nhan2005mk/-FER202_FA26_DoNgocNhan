import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  // Bật Redux DevTools Extension (nếu đã cài)
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
