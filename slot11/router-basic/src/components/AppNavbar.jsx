import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MENU = [
  { to: '/', label: 'Trang chủ' },
  { to: '/skills', label: 'Kỹ năng' },
  { to: '/projects', label: 'Dự án' },
  { to: '/contact', label: 'Liên hệ' },
  { to: '/courses', label: 'Môn học' },
];

const AppNavbar = () => (
  <Navbar bg="dark" data-bs-theme="dark" expand="md" className="mb-4">
    <Container>
      <Navbar.Brand as={Link} to="/">
        Nguyễn Văn A
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="ms-auto">
          {MENU.map((item) => (
            <Nav.Link key={item.to} as={NavLink} to={item.to} end={item.to === '/'}>
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
