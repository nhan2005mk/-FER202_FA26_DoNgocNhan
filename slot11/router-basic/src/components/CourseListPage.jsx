

import { Table, Button, Badge, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';

const CourseListPage = () => {
    return (
        <Container className="py-4">
            <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom">
                <div>
                    <h2 className="mb-1 text-primary fw-bold">Danh sách môn học</h2>
                    <p className="text-muted mb-0">Chương trình đào tạo Kỹ thuật Phần mềm (SE)</p>
                </div>
                <Badge bg="info" className="fs-6 px-3 py-2">
                    Tổng số: {COURSES.length} môn
                </Badge>
            </div>

            <Table striped bordered hover responsive className="shadow-sm align-middle">
                <thead className="table-dark">
                    <tr>
                        <th className="text-center" style={{ width: '60px' }}>#</th>
                        <th style={{ width: '130px' }}>Mã môn</th>
                        <th>Tên môn học</th>
                        <th className="text-center" style={{ width: '110px' }}>Tín chỉ</th>
                        <th className="text-center" style={{ width: '100px' }}>Học kỳ</th>
                        <th className="text-center" style={{ width: '140px' }}>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {COURSES.map((c, index) => (
                        <tr key={c.code}>
                            <td className="text-center text-muted">{index + 1}</td>
                            <td>
                                {/* Yêu cầu 3: Mã môn là link bấm được */}
                                <Link
                                    to={`/courses/${c.code}`}
                                    className="fw-bold text-decoration-none text-primary"
                                >
                                    {c.code}
                                </Link>
                            </td>
                            <td>{c.name}</td>
                            <td className="text-center">{c.credits}</td>
                            <td className="text-center">
                                <Badge bg="secondary">Kỳ {c.semester}</Badge>
                            </td>
                            <td className="text-center">
                                <Button
                                    as={Link}
                                    to={`/courses/${c.code}`}
                                    variant="outline-primary"
                                    size="sm"
                                >
                                    Xem chi tiết
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default CourseListPage;