import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProductCard from './components/ProductCard';
import { products } from './data/products';

function App() {
  return (
    <Container className="py-5">
      <h1 className="h2 mb-4">Sản phẩm</h1>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
