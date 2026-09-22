import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children, title = 'Trang chủ' }) => (
  <div className="d-flex min-vh-100 flex-column">
    <Header />
    <Container as="main" className="py-4 flex-grow-1">
      <h1 className="h2 my-4">{title}</h1>
      {children}
    </Container>
    <Footer />
  </div>
);

export default Layout;
