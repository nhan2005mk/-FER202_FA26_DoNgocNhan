import { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    // State lưu dữ liệu form
    const [form, setForm] = useState({
        name: '',
        email: '',
        session: 'Sáng', // Mặc định là ca Sáng
    });

    // State lưu thông báo lỗi
    const [error, setError] = useState('');

    // Hàm cập nhật form chung cho mọi ô nhập
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Kiểm tra họ tên: không được để trống (sau khi đã trim khoảng trắng)
        if (!form.name.trim()) {
            setError('Vui lòng nhập họ và tên của bạn.');
            return;
        }

        // 2. Kiểm tra email: phải có ký tự @
        if (!form.email.includes('@')) {
            setError('Email không hợp lệ (phải chứa ký tự @).');
            return;
        }

        // Xóa lỗi nếu dữ liệu đã hợp lệ
        setError('');

        // 3. Chuyển trang sang /success:
        // - Dùng state để truyền dữ liệu ngầm (không lộ trên URL)
        // - Dùng replace: true để GHI ĐÈ lịch sử duyệt web
        navigate('/success', {
            state: {
                name: form.name.trim(), // đã trim khoảng trắng thừa
                email: form.email.trim(),
                session: form.session,
            },
            replace: true, // Quan trọng: thay thế trang hiện tại
        });
    };

    return (
        <Container className="py-5" style={{ maxWidth: '550px' }}>
            <Card className="shadow-sm border-0">
                <Card.Header className="bg-primary text-white py-3">
                    <h4 className="mb-0 fw-bold">Đăng ký tham gia FPTU Tech Day 2026</h4>
                </Card.Header>

                <Card.Body className="p-4">
                    {/* Thông báo lỗi nếu có */}
                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Họ và tên <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Nhập họ và tên..."
                                value={form.name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold">Email nhận vé <span className="text-danger">*</span></Form.Label>
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="vidu@fpt.edu.vn"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="fw-semibold">Buổi tham dự</Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Buổi Sáng (08:30 - 11:30)"
                                    name="session"
                                    value="Sáng"
                                    checked={form.session === 'Sáng'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Buổi Chiều (13:30 - 16:30)"
                                    name="session"
                                    value="Chiều"
                                    checked={form.session === 'Chiều'}
                                    onChange={handleChange}
                                />
                            </div>
                        </Form.Group>

                        <div className="d-flex justify-content-between pt-2">
                            {/* Nút quay lại trang trước dùng navigate(-1) */}
                            <Button variant="secondary" type="button" onClick={() => navigate(-1)}>
                                ← Quay lại
                            </Button>
                            <Button variant="primary" type="submit">
                                Gửi đăng ký
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RegisterPage;