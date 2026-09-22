import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import AppButton from './components/AppButton';
import InputField from './components/InputField';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';
import { products } from './data/products';

function App() {
  const product = products[0];
  const highlightedProduct = { ...product, discount: 30 };
  const saleProducts = products.slice(0, 2);
  const newProducts = products.slice(6);
  const featured = [...saleProducts, ...newProducts];
  const baseStyle = { borderRadius: 12 };
  const highlight = { border: '2px solid gold' };

  return (
    <Container className="py-5">
      <h1 className="h2 mb-4">Bài 6: Spread, Rest và Component dùng lại</h1>
      <Card className="mb-4" style={{ ...baseStyle, ...highlight }}>
        <Card.Body>
          <Card.Title>AppButton với rest props</Card.Title>
          <div className="d-flex gap-2 flex-wrap">
            <AppButton>Primary mặc định</AppButton>
            <AppButton variant="danger" size="sm">Nút danger nhỏ</AppButton>
            <AppButton disabled>Đang khóa</AppButton>
          </div>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>InputField với rest props</Card.Title>
          <Form onSubmit={(event) => event.preventDefault()}>
            <InputField
              id="contactEmail"
              label="Email"
              type="email"
              placeholder="name@example.com"
              required
              helpText="Chúng tôi không chia sẻ email của bạn"
            />
            <AppButton type="submit">Gửi thông tin</AppButton>
          </Form>
        </Card.Body>
      </Card>
      <section className="mb-5">
        <h2 className="h4">Sản phẩm nổi bật ({featured.length})</h2>
        <p className="text-muted">featured được tạo từ 2 sản phẩm đầu và 2 sản phẩm cuối bằng spread.</p>
        <ProductList products={featured} />
      </section>
      <section>
        <h2 className="h4">Spread object: giảm giá riêng</h2>
        <p className="text-muted">
          Discount gốc của {product.name} vẫn là {product.discount}%; bản sao mới là{' '}
          {highlightedProduct.discount}%.
        </p>
        <div className="mb-5" style={{ maxWidth: 320 }}>
          <ProductCard product={highlightedProduct} />
        </div>
        <h2 className="h4">Tất cả sản phẩm</h2>
        <ProductList products={products} />
      </section>
    </Container>
  );
}

export default App;
