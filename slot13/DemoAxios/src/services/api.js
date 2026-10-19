import axios from 'axios';

// Tạo một instance của axios với cấu hình cơ bản
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;