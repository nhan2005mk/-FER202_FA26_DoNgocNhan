import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from './ProductCard';

const ProductList = ({ products = [], onAddToCart }) => (
  <Row xs={1} md={2} lg={4} className="g-4">
    {products.map((product) => (
      <Col key={product.id}>
        <ProductCard product={product} onAddToCart={onAddToCart} />
      </Col>
    ))}
  </Row>
);

export default ProductList;
