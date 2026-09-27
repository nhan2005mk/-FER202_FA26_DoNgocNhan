import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" active>
              Home
            </Nav.Link>
            <Nav.Link href="#menu">About Us</Nav.Link>
            <Nav.Link href="#booking">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control type="search" placeholder="Search" size="sm" className="rounded-0" />
            <Button variant="danger" size="sm" type="submit" className="rounded-0">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
