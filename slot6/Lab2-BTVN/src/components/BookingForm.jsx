import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function BookingForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! Your booking has been sent.')
    e.target.reset()
  }

  return (
    <Container id="booking" className="py-5 booking-form">
      <h2 className="section-title text-center">Book Your Table</h2>
      <Form onSubmit={handleSubmit}>
        <Row className="g-3 mb-4">
          <Col md={4}>
            <Form.Control type="text" placeholder="Your Name *" required />
          </Col>
          <Col md={4}>
            <Form.Control type="email" placeholder="Your Email *" required />
          </Col>
          <Col md={4}>
            <Form.Select defaultValue="">
              <option value="" disabled>
                Select a Service
              </option>
              <option value="dine-in">Dine In</option>
              <option value="take-away">Take Away</option>
              <option value="delivery">Delivery</option>
            </Form.Select>
          </Col>
        </Row>
        <Form.Group className="mb-4">
          <Form.Control as="textarea" rows={6} placeholder="Please write your comment" />
        </Form.Group>
        <Button type="submit" className="btn-send">
          Send Message
        </Button>
      </Form>
    </Container>
  )
}

export default BookingForm
