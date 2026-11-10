import { combineReducers } from 'redux';
import counterReducer from '../counterReducer';
import todosReducer from './todosReducer';
import filterReducer from './filterReducer';
import userReducer from '../users/userReducer';

export default combineReducers({
  counter: counterReducer,
  todos: todosReducer,
  filter: filterReducer,
  users: userReducer,
});
