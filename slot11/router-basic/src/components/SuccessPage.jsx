
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { Container, Card, Button, Badge } from 'react-bootstrap';

const SuccessPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Đọc dữ liệu từ state được truyền qua navigate
    const data = location.state;

    // YÊU CẦU 6: Nếu người dùng gõ thẳng URL "/success" mà không qua form (data là null/undefined)
    // Phải dùng component <Navigate> để chuyển hướng ngay lúc render
    if (!data) {
        return <Navigate to="/register" replace />;
    }

    return (
        <Container className="py-5" style={{ maxWidth: '600px' }}>
            <Card className="shadow-sm border-0 text-center">
                <Card.Header className="bg-success text-white py-3">
                    <h3 className="mb-0 fw-bold">🎉 Đăng ký thành công!</h3>
                </Card.Header>

                <Card.Body className="p-4">
                    <p className="fs-5 text-dark mb-3">
                        Cảm ơn bạn <strong className="text-primary">{data.name}</strong>!
                    </p>
                    <p className="text-secondary mb-3">
                        Vé tham dự đã được gửi tới hòm thư: <strong className="text-dark">{data.email}</strong>
                    </p>
                    <div className="mb-4">
                        <span className="text-muted me-2">Buổi tham gia:</span>
                        <Badge bg="info" className="fs-6 text-dark px-3 py-2">
                            Buổi {data.session}
                        </Badge>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        {/* Đăng ký thêm người khác -> về /register */}
                        <Button variant="outline-primary" onClick={() => navigate('/register')}>
                            Đăng ký thêm người khác
                        </Button>
                        {/* Về trang sự kiện -> về / */}
                        <Button variant="primary" onClick={() => navigate('/')}>
                            Về trang sự kiện
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SuccessPage;