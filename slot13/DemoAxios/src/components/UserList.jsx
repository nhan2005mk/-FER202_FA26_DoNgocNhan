import React, { useState, useEffect } from 'react';
import api from '../services/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sử dụng useEffect để gọi API khi component được render lần đầu
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/users');
        setUsers(response.data); // Dữ liệu trả về nằm trong response.data
        setLoading(false);
      } catch (err) {
        setError('Đã có lỗi xảy ra khi tải dữ liệu!');
        setLoading(false);
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Danh sách người dùng (Gọi API qua Axios)</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: '10px' }}>
            <strong>{user.name}</strong> ({user.email}) - <em>{user.phone}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;