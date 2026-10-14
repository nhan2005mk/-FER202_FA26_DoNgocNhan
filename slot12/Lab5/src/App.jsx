import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import New from './Component/New'
import Contact from './Component/Contact'
function App() {
  return (
    <BrowserRouter>
    {/* 1. Thanh Menu điều hướng (Navbar giống trong hình mẫu) */}
    <nav style={{ display: 'flex', gap: '20px', padding: '15px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black' }}>Home</Link>
      <Link to="/about" style={{ textDecoration: 'none', color: 'gray' }}>About</Link>
      <Link to="/new" style={{ textDecoration: 'none', color: 'gray' }}>New</Link>
      <Link to="/contact" style={{ textDecoration: 'none', color: 'gray' }}>Contact</Link>
    </nav>

    {/* 2. Khu vực hiển thị nội dung tương ứng với đường dẫn (URL) */}
    <div style={{ padding: '20px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<New />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
