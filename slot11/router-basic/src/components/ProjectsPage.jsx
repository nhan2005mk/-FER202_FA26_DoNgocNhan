import { Card, Col, Row } from 'react-bootstrap';

const PROJECTS = [
  {
    id: 1,
    title: 'Todo App',
    desc: 'Ứng dụng quản lý công việc với useState, thêm/sửa/xóa công việc.',
    tech: 'React, useState',
  },
  {
    id: 2,
    title: 'Shop Laptop',
    desc: 'Trang bán laptop có giỏ hàng, lọc và sắp xếp sản phẩm.',
    tech: 'React, React-Bootstrap',
  },
  {
    id: 3,
    title: 'Portfolio cá nhân',
    desc: 'Website giới thiệu bản thân nhiều trang, chuyển trang không tải lại.',
    tech: 'React Router',
  },
];

const ProjectsPage = () => (
  <>
    <h2 className="mb-3">Dự án</h2>
    <Row xs={1} md={3} className="g-4">
      {PROJECTS.map((p) => (
        <Col key={p.id}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>{p.title}</Card.Title>
              <Card.Text>{p.desc}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{p.tech}</Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  </>
);

export default ProjectsPage;
