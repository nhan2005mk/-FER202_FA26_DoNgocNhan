import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import AppButton from '../components/AppButton';
import InputField from '../components/InputField';
import ProductList from '../components/ProductList';
import { APP_NAME } from '../data/menu';
import { products } from '../data/products';

const formatVND = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

const HomePage = () => {
  // ES6: filter, spread, sort và slice tạo danh sách khuyến mãi mới.
  const onSale = products.filter(({ discount }) => discount > 0);
  const deals = [...onSale]
    .sort((first, second) => second.discount - first.discount)
    .slice(0, 4);
  const categories = ['Tất cả', ...new Set(products.map(({ category }) => category.name))];

  // ES6: object shorthand và destructuring lấy số liệu thống kê.
  const stats = {
    total: products.length,
    inStockCount: products.filter(({ inStock }) => inStock).length,
    avgPrice: Math.round(
      products.reduce((sum, { price }) => sum + price, 0) / products.length,
    ),
  };
  const { total, inStockCount, avgPrice } = stats;
  const statCards = [
    { label: 'Tổng sản phẩm', value: total },
    { label: 'Còn hàng', value: inStockCount },
    { label: 'Giá trung bình', value: formatVND(avgPrice) },
  ];

  return (
    <div>
      <section id="home" className="mb-5">
        <Card className="bg-primary text-white border-0">
          <Card.Body className="p-4 p-md-5">
            <Card.Title className="display-6">{`Chào mừng đến ${APP_NAME}`}</Card.Title>
            <Card.Text className="mb-0">
              {`Hôm nay có ${onSale.length} sản phẩm đang giảm giá`}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>

      <section className="mb-5" aria-label="Thống kê sản phẩm">
        <Row xs={1} md={3} className="g-3">
          {statCards.map(({ label, value }) => (
            <Col key={label}>
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Text className="text-muted mb-2">{label}</Card.Text>
                  <Card.Title className="h3 mb-0">{value}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <section className="mb-5" aria-label="Bộ lọc sản phẩm">
        <h2 className="h4 mb-3">Tìm kiếm sản phẩm</h2>
        <InputGroup>
          <Form.Control placeholder="Tìm sản phẩm..." aria-label="Tìm sản phẩm" />
          <Form.Select aria-label="Chọn danh mục" defaultValue="Tất cả">
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </Form.Select>
          <AppButton> Tìm </AppButton>
        </InputGroup>
      </section>

      <section id="deals" className="mb-5">
        <h2 className="h4 mb-3">Đang giảm giá</h2>
        <ProductList products={deals} />
      </section>

      <section id="products" className="mb-5">
        <h2 className="h4 mb-3">Tất cả sản phẩm</h2>
        {products.length === 0 ? (
          <Alert variant="info">Chưa có sản phẩm</Alert>
        ) : (
          <ProductList products={products} />
        )}
      </section>

      <section id="newsletter">
        <Card>
          <Card.Body>
            <Card.Title>Nhận tin mới</Card.Title>
            <Form onSubmit={(event) => event.preventDefault()}>
              <InputField
                id="newsletterEmail"
                label="Email"
                type="email"
                placeholder="name@example.com"
                required
              />
              <AppButton type="submit">Đăng ký</AppButton>
            </Form>
          </Card.Body>
        </Card>
      </section>
    </div>
  );
};

export default HomePage;
