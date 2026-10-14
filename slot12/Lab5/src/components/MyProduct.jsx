import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap'

/**
 * B6: MyProduct component
 * Chứa đầy đủ thông tin sản phẩm:
 * - id: Mã sản phẩm
 * - name: Tên sản phẩm
 * - description: Mô tả sản phẩm
 * - price: Giá gốc
 * - discount: Phần trăm giảm giá (%)
 * - instock: Trạng thái còn hàng (boolean)
 * - rating: Điểm đánh giá (number hoặc object)
 * - category: Danh mục / Loại sản phẩm
 * - image: Hình ảnh minh họa
 */
export default function MyProduct({ product, onAddToCart, ...props }) {
  // Hỗ trợ nhận thông tin qua prop `product` hoặc truyền trực tiếp từng prop riêng lẻ
  const item = product || {
    id: props.id ?? 1,
    name: props.name ?? 'Sản phẩm mẫu',
    description: props.description ?? 'Mô tả chi tiết về sản phẩm chất lượng cao.',
    price: props.price ?? 150000,
    discount: props.discount ?? 10,
    instock: props.instock !== undefined ? props.instock : (props.inStock ?? true),
    rating: props.rating ?? 4.8,
    category: props.category ?? 'Món chính',
    image: props.image || props.src || '/images/menu1.jpg',
  }

  const { id, name, description, price, discount, instock, rating, category, image } = item

  // Tính giá sau khi áp dụng giảm giá (nếu có)
  const finalPrice = discount && discount > 0
    ? price * (1 - discount / 100)
    : price

  const formatCurrency = (val) => {
    return Number(val).toLocaleString('vi-VN') + ' ₫'
  }

  const ratingValue = typeof rating === 'object' ? rating.rate : rating

  return (
    <Card className="h-100 shadow-sm border-0 my-product-card" style={{ transition: 'all 0.3s ease' }}>
      {/* Khung hình ảnh sản phẩm */}
      <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={image}
          alt={name}
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s ease',
          }}
          className="product-img"
        />

        {/* Badge Category (Danh mục) */}
        <Badge
          bg="dark"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            fontSize: '11px',
            padding: '5px 8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {category}
        </Badge>

        {/* Badge Discount (Giảm giá) */}
        {discount > 0 && (
          <Badge
            bg="danger"
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              fontSize: '12px',
              padding: '5px 8px',
              fontWeight: 'bold',
            }}
          >
            -{discount}%
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column p-3">
        {/* Đánh giá sao và Trạng thái kho hàng (inStock) */}
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="text-warning small fw-bold">
            ★ {ratingValue} <span className="text-muted">/ 5.0</span>
          </div>

          <Badge bg={instock ? 'success' : 'secondary'} className="px-2 py-1">
            {instock ? 'Còn hàng' : 'Hết hàng'}
          </Badge>
        </div>

        {/* Tên sản phẩm */}
        <Card.Title className="fs-6 fw-bold mb-1 text-truncate" title={name}>
          #{id} - {name}
        </Card.Title>

        {/* Mô tả sản phẩm */}
        <Card.Text
          className="text-secondary small flex-grow-1 mb-3"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '38px',
          }}
        >
          {description}
        </Card.Text>

        {/* Giá tiền gốc và giá khuyến mãi */}
        <div className="d-flex align-items-baseline gap-2 mb-3">
          <span className="fs-5 fw-bold text-danger">
            {formatCurrency(finalPrice)}
          </span>
          {discount > 0 && (
            <span className="text-muted text-decoration-line-through small">
              {formatCurrency(price)}
            </span>
          )}
        </div>

        {/* Nút thao tác đặt mua */}
        <Button
          variant={instock ? 'danger' : 'secondary'}
          size="sm"
          className="w-100 fw-semibold"
          disabled={!instock}
          onClick={() => onAddToCart && onAddToCart(item)}
        >
          {instock ? '+ Thêm vào giỏ' : 'Tạm hết hàng'}
        </Button>
      </Card.Body>
    </Card>
  )
}
