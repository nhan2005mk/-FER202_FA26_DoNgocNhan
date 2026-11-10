import { useSelector } from 'react-redux';
import { Card, Spinner, Alert } from 'react-bootstrap';

export default function UserPosts() {
  const { selectedId, posts, postsLoading, postsError, items } = useSelector((state) => state.users);
  const user = items.find((u) => u.id === selectedId);

  if (!selectedId) {
    return (
      <Card className="text-center p-5 text-muted border-dashed bg-white shadow-sm">
        <h5>👈 Chọn một người dùng bên trái để xem bài viết</h5>
      </Card>
    );
  }

  if (postsLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
        <div className="mt-2 text-muted small">Đang tải bài viết...</div>
      </div>
    );
  }

  if (postsError) {
    return <Alert variant="danger">{postsError}</Alert>;
  }

  return (
    <div>
      <h5 className="mb-3 text-primary">
        📝 Bài viết của <strong>{user?.name}</strong> ({posts.length})
      </h5>
      {posts.length === 0 && (
        <Alert variant="info">Người dùng này chưa có bài viết nào.</Alert>
      )}
      {posts.map((p) => (
        <Card key={p.id} className="mb-3 shadow-sm border-0">
          <Card.Body>
            <Card.Title className="fs-6 text-capitalize text-dark fw-bold">{p.title}</Card.Title>
            <Card.Text className="small text-secondary">{p.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

