import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosParamsDemo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        // Cách truyền query params sử dụng thuộc tính `params` trong axios
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            userId: 1, // Lấy bài post của user có id = 1
          },
        });

        // Giới hạn chỉ lấy 5 bài post đầu tiên (hoặc API đã trả về đúng, ta có thể dùng .slice(0, 5))
        setPosts(response.data.slice(0, 5));
        setLoading(false);
      } catch (err) {
        setError('Lỗi khi tải dữ liệu bài post theo user!');
        setLoading(false);
        console.error(err);
      }
    };

    fetchUserPosts();
  }, []);

  if (loading) return <div className="text-center mt-3">Đang tải dữ liệu bài post của User 1...</div>;
  if (error) return <div className="alert alert-danger mt-3">{error}</div>;

  return (
    <div className="card shadow-sm mt-4">
      <div className="card-header bg-success text-white">
        <h3 className="mb-0">Bài 2.1: Danh sách 5 bài post của User ID = 1</h3>
      </div>
      <div className="card-body">
        <ul className="list-group">
          {posts.map((post) => (
            <li key={post.id} className="list-group-item">
              <span className="badge bg-secondary me-2">User ID: {post.userId}</span>
              <span className="badge bg-info text-dark me-2">Post ID: {post.id}</span>
              <h5 className="text-dark fw-bold mt-2">{post.title}</h5>
              <p className="text-muted mb-0">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AxiosParamsDemo;