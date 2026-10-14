

import { Container, Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const EventPage = () => {
    const navigate = useNavigate(); // Hook dùng để chuyển trang bằng code

    return (
        <Container className="py-5 d-flex justify-content-center">
            <Card className="shadow-sm border-0 text-center" style={{ maxWidth: '600px' }}>
                <Card.Header className="bg-primary text-white py-3">
                    <Badge bg="warning" text="dark" className="mb-2">Sự kiện công nghệ thường niên</Badge>
                    <h2 className="fw-bold mb-0">FPTU Tech Day 2026</h2>
                </Card.Header>
                <Card.Body className="p-4">
                    <Card.Text className="text-secondary fs-5 mb-4">
                        Khám phá xu hướng công nghệ mới nhất về Trí tuệ nhân tạo (AI),
                        Điện toán đám mây và Phát triển ứng dụng Web hiện đại.
                        Cơ hội giao lưu cùng các chuyên gia hàng đầu từ FPT Software!
                    </Card.Text>

                    <div className="d-grid gap-2 col-8 mx-auto">
                        {/* Chuyển hướng sang trang /register bằng code */}
                        <Button
                            variant="success"
                            size="lg"
                            onClick={() => navigate('/register')}
                            className="fw-bold"
                        >
                            Đăng ký ngay ➔
                        </Button>
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted">
                    Thời gian: Chủ nhật, ngày 25/10/2026 • Địa điểm: Hội trường A, FPT University
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default EventPage;