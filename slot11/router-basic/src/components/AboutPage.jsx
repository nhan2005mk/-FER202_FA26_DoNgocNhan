import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const AboutPage = () => (
  <Container className="mt-4">
    <h1>Giới thiệu</h1>
    <p>Xin chào, mình là Nguyễn Văn A, sinh viên FPT.</p>
    <Button as={Link} to="/" variant="secondary">
      Về trang chủ
    </Button>
  </Container>
);
export default AboutPage;