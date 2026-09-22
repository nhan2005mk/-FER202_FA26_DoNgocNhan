import { Card, Badge, Button } from 'react-bootstrap';

const ProductCard = ({ product = {} }) => {
  // Destructuring kèm giá trị mặc định
  const { 
    name = 'Sản phẩm chưa đặt tên', 
    price, 
    image, 
    rating, 
    category 
  } = product;

  // Sử dụng Nullish Coalescing (??) để chống lỗi thiếu ảnh
  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image';
  
  // Sử dụng Optional Chaining (?.) để tránh crash khi thiếu object category hoặc rating
  const categoryName = category?.name ?? 'Chưa phân loại';
  const rate = rating?.rate ?? 'Chưa có';
  const count = rating?.count ?? 0;

  // Định dạng giá tiền an toàn
  const formattedPrice = price !== undefined 
    ? price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) 
    : 'Liên hệ';

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img 
        variant="top" 
        src={imageSrc} 
        style={{ height: '200px', objectFit: 'cover' }} 
      />
      <Card.Body className="d-flex flex-column">
        <div className="mb-2">
          <Badge bg="info" text="dark">{categoryName}</Badge>
        </div>
        <Card.Title className="fw-bold">{name}</Card.Title>
        <Card.Text className="text-danger fw-semibold fs-5 mt-auto">
          Giá: {formattedPrice}
        </Card.Text>
        <Card.Text className="text-muted small">
          Đánh giá: {rate} ({count} lượt)
        </Card.Text>
        <Button variant="primary" size="sm" className="mt-2">
          Thêm vào giỏ
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;