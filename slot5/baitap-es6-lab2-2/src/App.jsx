import Container from 'react-bootstrap/Container';
import CartTable from './components/CartTable';
import { products } from './data/products';

function App() {
  return (
    <Container className="py-5">
      <h1 className="h2 mb-4">Bài 7: Giỏ hàng</h1>
      <CartTable products={products} />
    </Container>
  );
}

export default App;
