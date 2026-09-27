import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const pizzas = [
  { name: 'Margherita Pizza', image: '/images/menu1.jpg', price: 40, salePrice: 24, tag: 'Sale' },
  { name: 'Mushroom Pizza', image: '/images/menu2.jpg', price: 25 },
  { name: 'Hawaiian Pizza', image: '/images/menu3.jpg', price: 30, tag: 'New' },
  { name: 'Pesto Pizza', image: '/images/menu4.jpg', price: 50, salePrice: 30, tag: 'Sale' },
]

function Menu() {
  return (
    <Container id="menu" className="py-5">
      <h2 className="section-title">Our Menu</h2>
      <Row className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.name} xs={12} sm={6} lg={3}>
            <Card className="menu-card h-100 text-dark">
              {pizza.tag && <span className="badge-tag">{pizza.tag}</span>}
              <Card.Img variant="top" src={pizza.image} alt={pizza.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                  {pizza.salePrice ? (
                    <>
                      <span className="price-old">${pizza.price.toFixed(2)}</span>
                      <span className="price-sale">${pizza.salePrice.toFixed(2)}</span>
                    </>
                  ) : (
                    <span>${pizza.price.toFixed(2)}</span>
                  )}
                </Card.Text>
                <Button variant="dark" className="w-100 mt-auto">
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Menu
