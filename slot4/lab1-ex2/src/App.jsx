import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductInfo from './ProductInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Danh sách sản phẩm</h2>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3">
          <ProductInfo 
            name="ban phím cơ" 
            price="990.000 đ" 
            tag="Mới" 
            avatar="/images1.jpg" 
          />
        </Col>
        <Col md={4} className="mb-3">
          <ProductInfo 
            name="chuột gamming" 
            price="990.000 đ" 
            tag="Bán chạy" 
            avatar="/images2.jpg" 
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;