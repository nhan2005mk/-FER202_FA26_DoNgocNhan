import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';
import todosReducer from './reducers/todosReducer';
import filterReducer from './reducers/filterReducer';
import userReducer from './users/userReducer';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/products/productsSlice';
import studentsReducer from '../features/students/studentsSlice';

// Đọc giỏ hàng đã lưu từ localStorage
function loadCart() {
  try {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('cart') : null;
    return saved ? { items: JSON.parse(saved) } : undefined;
  } catch {
    return undefined;
  }
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    filter: filterReducer,
    users: userReducer,
    cart: cartReducer,
    products: productsReducer,
    students: studentsReducer,
  },
  preloadedState: {
    cart: loadCart() ?? { items: [] },
  },
});

// Ghi giỏ hàng vào localStorage mỗi khi state thay đổi
store.subscribe(() => {
  try {
    const cartState = store.getState().cart;
    if (cartState && cartState.items) {
      localStorage.setItem('cart', JSON.stringify(cartState.items));
    }
  } catch (err) {
    console.error('Không thể lưu giỏ hàng vào localStorage:', err);
  }
});
