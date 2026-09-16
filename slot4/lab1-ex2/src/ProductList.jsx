import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ProductInfo from './ProductInfo'

const pizzas = [
  {
    name: 'Pizza Hải Sản',
    description: 'Tôm, mực, thanh cua và phô mai mozzarella.',
    price: '149.000 đ',
    tag: 'Bán chạy',
    image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pizza Pepperoni',
    description: 'Pepperoni đậm đà phủ trên lớp phô mai béo ngậy.',
    price: '129.000 đ',
    tag: 'Yêu thích',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pizza Phô Mai',
    description: 'Bốn loại phô mai tan chảy cho tín đồ vị béo.',
    price: '119.000 đ',
    tag: 'Mới',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'Pizza Thịt Nướng',
    description: 'Thịt nướng thơm lừng, hành tây và sốt BBQ.',
    price: '139.000 đ',
    tag: 'Đặc biệt',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
  },
]

function ProductList() {
  return (
    <Container>
      <header className="text-center mb-5">
        <p className="text-danger fw-semibold text-uppercase small mb-2">Pizza ngon mỗi ngày</p>
        <h1 className="display-5 fw-bold mb-2">Danh sách pizza</h1>
        <p className="text-secondary mb-0">Chọn món yêu thích cho bữa ăn của bạn</p>
      </header>
      <Row className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.name} xs={12} sm={6} lg={3}>
            <ProductInfo {...pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default ProductList
