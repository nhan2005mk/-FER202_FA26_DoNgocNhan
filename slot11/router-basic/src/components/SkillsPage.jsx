import { Container, ListGroup } from 'react-bootstrap';

const SkillsPage = () => {
  return (
    <Container className="py-4">
      <h2>Kỹ năng chuyên môn</h2>
      <p className="text-muted">Các công nghệ và công cụ tôi đang sử dụng:</p>
      
      <ListGroup className="mt-3 shadow-sm">
        <ListGroup.Item>ReactJS & Vite (Xây dựng giao diện Single Page Application)</ListGroup.Item>
        <ListGroup.Item>JavaScript (ES6+) & Front-End Web Development</ListGroup.Item>
        <ListGroup.Item>React-Bootstrap & CSS Bootstrap</ListGroup.Item>
        <ListGroup.Item>Git & GitHub (Quản lý mã nguồn)</ListGroup.Item>
      </ListGroup>
    </Container>
  );
};

export default SkillsPage;