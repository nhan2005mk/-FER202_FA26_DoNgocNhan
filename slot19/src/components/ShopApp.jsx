import { Container, Row, Col, Card } from 'react-bootstrap';
import ProductList from './ProductList';
import Cart from './Cart';
import CartBadge from './CartBadge';

export default function ShopApp() {
  return (
    <Container className="py-2">
      <Card className="shadow border-0 mb-4">
        <Card.Header className="bg-dark text-white d-flex justify-content-between align-items-center py-3">
          <h4 className="mb-0">🛍️ RTK Shop (createSlice)</h4>
          <CartBadge />
        </Card.Header>
        <Card.Body className="p-4 bg-light">
          <Row>
            <Col lg={7} className="mb-4 mb-lg-0">
              <h5 className="mb-3 text-secondary">Danh sách sản phẩm</h5>
              <ProductList />
            </Col>
            <Col lg={5}>
              <h5 className="mb-3 text-secondary">Giỏ hàng của bạn</h5>
              <Cart />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

