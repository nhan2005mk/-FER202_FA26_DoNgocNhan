import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const formatVND = (value) =>
  value.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });

const ProductCard = ({ product }) => {
  const {
    name,
    price,
    category,
    inStock,
    discount = 0,
    rating,
    image,
  } = product;
  const finalPrice = price * (1 - discount / 100);

  return (
    <Card className={`h-100 position-relative ${inStock ? '' : 'opacity-50'}`}>
      {discount > 0 && (
        <Badge bg="danger" className="position-absolute top-0 end-0 m-2">
          -{discount}%
        </Badge>
      )}
      <Card.Img variant="top" src={image} alt={name} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{name}</Card.Title>
        <div className="d-flex gap-2 flex-wrap mb-3">
          <Badge bg="info" text="dark">
            {category?.name ?? 'Chưa phân loại'}
          </Badge>
          {inStock ? (
            <Badge bg="success">Còn hàng</Badge>
          ) : (
            <Badge bg="secondary">Hết hàng</Badge>
          )}
          {rating?.rate >= 4.5 && (
            <Badge bg="warning" text="dark">
              Bán chạy
            </Badge>
          )}
        </div>
        <Card.Text className="mt-auto">
          {discount > 0 ? (
            <>
              <del className="text-muted me-2">{formatVND(price)}</del>
              <strong className="text-danger">{formatVND(finalPrice)}</strong>
            </>
          ) : (
            <strong>{formatVND(price)}</strong>
          )}
        </Card.Text>
        <Card.Text className="text-muted">
          Đánh giá: {rating?.rate ?? 'Chưa có'} ({rating?.count ?? 0} lượt)
        </Card.Text>
        <Button variant="primary" disabled={!inStock}>
          {inStock ? 'Thêm vào giỏ' : 'Không khả dụng'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
