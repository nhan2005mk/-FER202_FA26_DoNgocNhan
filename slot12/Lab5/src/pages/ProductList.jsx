import { Container, Row, Col } from 'react-bootstrap';
import { products } from '../data/products';
import MyProduct from '../components/MyProduct';

export default function ProductList() {
    return (
        <Container className="my-4">
            <h2 className="text-center text-primary fw-bold mb-4">
                Danh Sách Sản Phẩm
            </h2>

            <Row className="g-4">
                {/* Dùng phương thức map để lặp qua từng phần tử trong mảng products */}
                {products.map((product) => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        {/* Truyền dữ liệu từng sản phẩm vào component MyProduct */}
                        <MyProduct product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
