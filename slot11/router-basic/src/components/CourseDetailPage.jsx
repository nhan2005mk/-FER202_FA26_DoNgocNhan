
import { useParams, Link } from 'react-router-dom';
import { Container, Card, Alert, Button, Badge } from 'react-bootstrap';
import { findCourse } from '../data/courses'; // Import hàm tìm kiếm

const CourseDetailPage = () => {
    const { code } = useParams(); // Lấy mã môn từ URL
    const course = findCourse(code);

    // Nếu gõ mã không tồn tại trên URL (ví dụ: /courses/ABC)
    if (!course) {
        return (
            <Container className="py-5" style={{ maxWidth: '650px' }}>
                <Alert variant="danger" className="shadow-sm">
                    <Alert.Heading className="fw-bold">
                        Không tìm thấy môn học có mã {code}
                    </Alert.Heading>
                    <p className="mb-3">
                        Môn học với mã <strong className="text-decoration-underline">{code}</strong> không tồn tại trong hệ thống đào tạo.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button as={Link} to="/courses" variant="outline-danger">
                            ← Quay lại danh sách
                        </Button>
                    </div>
                </Alert>
            </Container>
        );
    }

    // Nếu tìm thấy môn học
    return (
        <Container className="py-5" style={{ maxWidth: '750px' }}>
            <div className="mb-3">
                <Link to="/courses" className="text-decoration-none text-secondary">
                    ← Quay lại danh sách
                </Link>
            </div>

            <Card className="shadow-sm border-0">
                <Card.Header className="bg-primary text-white py-3 d-flex justify-content-between align-items-center">
                    <h4 className="mb-0 fw-bold">{course.code}</h4>
                    <div>
                        <Badge bg="light" text="dark" className="me-2">
                            {course.credits} Tín chỉ
                        </Badge>
                        <Badge bg="warning" text="dark">
                            Học kỳ {course.semester}
                        </Badge>
                    </div>
                </Card.Header>

                <Card.Body className="p-4">
                    <Card.Title className="fs-3 fw-bold text-dark mb-3">
                        {course.name}
                    </Card.Title>

                    <Card.Subtitle className="mb-2 text-muted fw-bold">
                        Mô tả môn học:
                    </Card.Subtitle>
                    <Card.Text className="text-secondary lh-base fs-6 bg-light p-3 rounded">
                        {course.desc}
                    </Card.Text>

                    <div className="mt-4 pt-3 border-top d-flex justify-content-between align-items-center">
                        <span className="text-muted small">Mã trên URL: <code>{code}</code></span>
                        <Button as={Link} to="/courses" variant="primary">
                            Xem các môn khác
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetailPage;