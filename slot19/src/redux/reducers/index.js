import { combineReducers } from 'redux';
import counterReducer from '../counterReducer';
import todosReducer from './todosReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  counter: counterReducer, // state.counter.value
  todos: todosReducer,     // state.todos: mảng
  filter: filterReducer,   // state.filter: chuỗi
});

