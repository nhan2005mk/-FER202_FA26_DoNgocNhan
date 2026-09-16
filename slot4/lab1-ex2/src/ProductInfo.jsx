import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

function ProductInfo({ name, description, price, tag, image }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} alt={name} className="pizza-image" />
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <Card.Title className="mb-0">{name}</Card.Title>
          <Badge bg="danger">{tag}</Badge>
        </div>
        <Card.Text className="text-secondary flex-grow-1">{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <strong className="text-danger">{price}</strong>
          <Button variant="danger">Đặt món</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProductInfo
