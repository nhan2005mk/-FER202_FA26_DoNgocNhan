import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product = {} }) => {
  const {
    name = 'Sản phẩm chưa đặt tên',
    price,
    image,
    rating,
    category,
  } = product;

  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image';
  const categoryName = category?.name ?? 'Chưa phân loại';
  const ratingValue = rating?.rate ?? 'Chưa có';
  const ratingCount = rating?.count ?? 0;
  const formattedPrice =
    price?.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }) ?? 'Liên hệ';

  return (
    <Card className="h-100" style={{ maxWidth: 320 }}>
      <Card.Img variant="top" src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge bg="info" text="dark" className="mb-2">
          {categoryName}
        </Badge>
        <Card.Text className="mb-1">Giá: {formattedPrice}</Card.Text>
        <Card.Text>
          Đánh giá: {ratingValue} ({ratingCount} lượt)
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
