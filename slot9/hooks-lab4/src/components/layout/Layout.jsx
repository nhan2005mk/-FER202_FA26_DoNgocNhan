import Container from 'react-bootstrap/Container';
import Footer from './Footer';
import Header from './Header';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children, title = 'Trang chủ', currentPage, onNavigate }) => {
  const { theme } = useTheme();

  return (
    <div data-bs-theme={theme} className="bg-body text-body min-vh-100 d-flex flex-column">
      <Header currentPage={currentPage} onNavigate={onNavigate} />
      <Container as="main" className="py-4 flex-grow-1">
        <h1 className="h2 mb-4">{title}</h1>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
