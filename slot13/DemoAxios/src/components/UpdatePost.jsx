import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Đường dẫn API mẫu từ JSONPlaceholder
const URL = 'https://jsonplaceholder.typicode.com/posts/1';

const UpdatePost = () => {
  // Khai báo các state cần thiết
  const [post, setPost] = useState(null);       // Lưu dữ liệu bài viết
  const [result, setResult] = useState(null);   // Lưu kết quả trả về từ server sau khi PUT thành công
  const [error, setError] = useState(null);     // Lưu thông báo lỗi nếu có

  // 1. Lấy dữ liệu cũ khi component vừa được render (mount)
  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setPost(response.data); // Gán dữ liệu lấy được vào state post
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  // 2. Gửi request PUT với đầy đủ các trường
  const handleUpdate = () => {
    axios
      .put(URL, {
        id: post.id,
        userId: post.userId,
        title: post.title,
        body: post.body,
      })
      .then(response => {
        // Lưu lại status (vd: 200) và dữ liệu mới trả về từ server
        setResult({ status: response.status, data: response.data });
      })
      .catch(error => {
        setError(error.message);
      });
  };

  // Hiển thị trạng thái chờ hoặc lỗi nếu có
  if (error) return <div>Error: {error}</div>;
  if (!post) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>PUT – Cập nhật bài viết #{post.id}</h2>

      {/* Input chỉnh sửa Title */}
      <div>
        <label>Title:</label>
        <br />
        <input 
          type="text"
          value={post.title} 
          onChange={e => setPost({ ...post, title: e.target.value })} 
          style={{ width: '300px', padding: '5px', marginBottom: '10px' }}
        />
      </div>

      {/* Textarea chỉnh sửa Body */}
      <div>
        <label>Body:</label>
        <br />
        <textarea 
          value={post.body} 
          onChange={e => setPost({ ...post, body: e.target.value })} 
          style={{ width: '300px', height: '100px', padding: '5px', marginBottom: '10px' }}
        />
      </div>

      {/* Nút bấm gọi hàm handleUpdate */}
      <br />
      <button onClick={handleUpdate} style={{ padding: '8px 15px', cursor: 'pointer' }}>
        Cập nhật (PUT)
      </button>

      {/* Khu vực hiển thị kết quả sau khi cập nhật thành công */}
      {result && (
        <div style={{ marginTop: '20px', background: '#f0f0f0', padding: '10px' }}>
          <p><strong>Status:</strong> {result.status}</p>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default UpdatePost;