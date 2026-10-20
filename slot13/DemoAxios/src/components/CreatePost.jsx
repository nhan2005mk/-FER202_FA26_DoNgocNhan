import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  // Khai báo các state
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn trình duyệt reload lại trang
    setSubmitting(true);
    setError(null);

    // Gửi POST request bằng axios
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: 1, // Giả lập id người dùng là 1
      })
      .then(response => {
        // Lưu trạng thái và dữ liệu trả về từ server
        setResult({ status: response.status, data: response.data });
        // Xóa sạch ô nhập sau khi tạo thành công
        setTitle('');
        setBody('');
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setSubmitting(false); // Mở khóa lại nút bấm
      });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>POST – Tạo bài viết mới</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            style={{ padding: '8px', width: '300px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <textarea
            placeholder="Body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
            style={{ padding: '8px', width: '300px', height: '100px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <button type="submit" disabled={submitting} style={{ padding: '8px 16px' }}>
            {submitting ? 'Đang gửi...' : 'Tạo bài viết'}
          </button>
        </div>
      </form>

      {/* Hiển thị lỗi nếu có */}
      {error && <div style={{ color: 'red', marginTop: '10px' }}>Error: {error}</div>}

      {/* Hiển thị kết quả trả về từ server */}
      {result && (
        <div style={{ marginTop: '20px', background: '#f4f4f4', padding: '10px', borderRadius: '5px' }}>
          <p><strong>Status:</strong> {result.status}</p>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CreatePost;