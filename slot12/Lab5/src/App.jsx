import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import New from './pages/New'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import ProductList from './pages/ProductList';

function App() {
  return (
    <BrowserRouter>
      <h1>Lab5</h1>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/new" element={<New />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
