import { Container, Row, Col, Card } from 'react-bootstrap';
import UserList from './UserList';
import UserPosts from './UserPosts';

export default function UserApp() {
  return (
    <Container className="py-2">
      <Card className="shadow border-0 mb-4">
        <Card.Body className="p-4">
          <h3 className="mb-4 text-dark">👥 Danh sách Người dùng — Redux Thunk</h3>
          <Row>
            <Col md={5} lg={4} className="mb-4 mb-md-0">
              <h5 className="mb-3 text-secondary">Tất cả người dùng</h5>
              <UserList />
            </Col>
            <Col md={7} lg={8}>
              <UserPosts />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

