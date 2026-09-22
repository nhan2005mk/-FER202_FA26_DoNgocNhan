import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './components/ProductCard';

function App() {
  // Dữ liệu 3 sản phẩm với mức độ chi tiết khác nhau để test tính an toàn (Bài 3)
  const productA = {
    id: 1,
    name: 'Tai nghe Bluetooth',
    price: 590000,
    image: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/a/tai-nghe-khong-day-jbl-tune-buds-2_3_.png',
    rating: { rate: 4.5, count: 120 },
    category: { name: 'Âm thanh' },
  };

  const productB = { 
    id: 2, 
    name: 'Chuột không dây', 
    price: 250000, 
    image: 'https://cdn.tgdd.vn/Products/Images/86/256042/chuot-khong-day-rapoo-m20-plus-2.jpg', // Đã bổ sung thêm ảnh
    rating: { rate: 4.2, count: 45 }, // Đã bổ sung đánh giá
    category: { name: 'Phụ kiện' } // Đã bổ sung danh mục
  }; 

  const productC = { 
    id: 3, 
    name: 'Bàn phím cơ Gaming',
    price: 1250000,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaCdnslFV0ITGf250yJTYTMghxwXEgineyan3sImRdgS2f1He0iRCnaI&s=10', // Đã bổ sung ảnh
    rating: { rate: 4.8, count: 90 }, // Đã bổ sung đánh giá
    category: { name: 'Phụ kiện' } // Đã bổ sung danh mục
  }; 

  return (
    <Container className="my-4">
      <h2 className="mb-4">Danh sách sản phẩm</h2>
      <Row className="g-4">
        <Col md={4}>
          <ProductCard product={productA} />
        </Col>
        <Col md={4}>
          <ProductCard product={productB} />
        </Col>
        <Col md={4}>
          <ProductCard product={productC} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;