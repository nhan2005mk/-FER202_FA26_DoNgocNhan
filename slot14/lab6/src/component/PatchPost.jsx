import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts/1';

const PatchPost = () => {
  const [title, setTitle] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(URL);
        setTitle(response.data.title);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPost();
  }, []);

  const handlePatch = async () => {
    setSaving(true);
    setError(null);
    try {
      const response = await axios.patch(URL, { title });
      setResult({ status: response.status, data: response.data });
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (error && !title) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>PATCH – Cập nhật một phần bài viết #1</h2>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <br />
      <button onClick={handlePatch} disabled={saving || !title}>
        {saving ? 'Đang lưu...' : 'Cập nhật (PATCH)'}
      </button>

      {error && <div>Error: {error}</div>}
      {result && (
        <div>
          <p>Status: {result.status}</p>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default PatchPost;
