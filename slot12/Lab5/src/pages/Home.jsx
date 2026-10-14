import { useState } from 'react'
import {
  Container,
  Row,
  Col,
  Image,
  Toast,
  ToastContainer,
} from 'react-bootstrap'
import MyProduct from '../components/MyProduct'
import MyCarousel from '../components/MyCarousel'
import { products } from '../data/products'

export default function Home() {
  const [toastItem, setToastItem] = useState(null)

  const handleAddToCart = (item) => {
    setToastItem(item)
  }

  return (
    <>
      {/* 1. Carousel Slider (B5: MyCarousel) */}
      <MyCarousel />

      <Container className="my-4">
        {/* Tiêu đề trang theo bài Lab */}
        <div className="text-center mb-4">
          <h2 className="text-danger fw-bold">This is Home Page</h2>
          <p className="text-muted">Chào mừng bạn đến với thực đơn ẩm thực Lab 5</p>
        </div>

        {/* 2. Dải thumbnail ảnh tròn các món ăn */}
        <div className="p-3 mb-4 rounded shadow-sm bg-light">
          <h5 className="fw-bold mb-3 text-secondary text-center text-md-start">
            Danh Mục Món Ăn Nhanh
          </h5>
          <Row className="text-center justify-content-center g-3">
            {products.map((dish) => (
              <Col key={dish.id} xs={4} sm={3} md={2.4} lg={1.2} className="d-flex flex-column align-items-center">
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '3px solid #ff7b00',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'pointer',
                  }}
                  className="dish-avatar-container"
                  title={dish.name}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    width={80}
                    height={80}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <small
                  className="mt-2 fw-semibold text-dark text-truncate"
                  style={{ maxWidth: '80px', fontSize: '11px' }}
                  title={dish.name}
                >
                  {dish.name}
                </small>
              </Col>
            ))}
          </Row>
        </div>

        {/* 3. Danh sách 10 sản phẩm từ src/data/products.js hiển thị qua MyProduct component (B6) */}
        <div className="my-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold text-dark mb-0">Thực Đơn Sản Phẩm (MyProduct Component)</h4>
            <span className="badge bg-danger rounded-pill px-3 py-2">
              {products.length} Sản phẩm
            </span>
          </div>

          <Row className="g-4">
            {products.map((dish) => (
              <Col key={dish.id} xs={12} sm={6} md={4} lg={3}>
                <MyProduct
                  product={dish}
                  onAddToCart={handleAddToCart}
                />
              </Col>
            ))}
          </Row>
        </div>

        {/* 4. Thông báo Toast khi click Thêm vào giỏ */}
        <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1055 }}>
          {toastItem && (
            <Toast
              bg="success"
              onClose={() => setToastItem(null)}
              show={Boolean(toastItem)}
              delay={3000}
              autohide
            >
              <Toast.Header closeButton>
                <img
                  src={toastItem.image}
                  className="rounded me-2"
                  alt={toastItem.name}
                  style={{ width: '22px', height: '22px', objectFit: 'cover' }}
                />
                <strong className="me-auto text-success">Thành công!</strong>
                <small className="text-muted">Vừa xong</small>
              </Toast.Header>
              <Toast.Body className="text-white">
                Đã thêm <strong>{toastItem.name}</strong> vào giỏ hàng!
              </Toast.Body>
            </Toast>
          )}
        </ToastContainer>
      </Container>
    </>
  )
}