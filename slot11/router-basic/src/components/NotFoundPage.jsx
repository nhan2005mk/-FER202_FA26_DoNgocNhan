import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="text-center py-5">
    <h1 className="display-1 fw-bold">404</h1>
    <p className="fs-4">Không tìm thấy trang bạn yêu cầu.</p>
    <Button as={Link} to="/" variant="outline-primary">
      Về trang chủ
    </Button>
  </div>
);

export default NotFoundPage;
