import Container from 'react-bootstrap/Container';
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  return (
    <Container className="my-4">
      <h1 className="h2 mb-4">Danh sách sản phẩm</h1>
      <ProductList products={products} />
    </Container>
  );
}

export default App;