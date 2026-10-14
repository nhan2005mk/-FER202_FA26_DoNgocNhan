import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', borderBottom: '1px solid #ddd', fontSize: '18px' }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: '#666' }}>About</Link>
      <Link to="/new" style={{ textDecoration: 'none', color: '#666' }}>New</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: '#666' }}>Contact</Link>
      <Link to="/products" style={{ textDecoration: 'none', color: '#666' }}>Products</Link>

    </nav>
  );
}