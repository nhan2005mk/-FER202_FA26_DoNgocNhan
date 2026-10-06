import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Layout from './components/layout/Layout';
import LoginForm from './components/LoginForm';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ExercisesPage from './pages/ExercisesPage';

const TITLES = {
  shop: 'Cửa hàng',
  cart: 'Giỏ hàng',
  checkout: 'Thanh toán',
  login: 'Đăng nhập',
  exercises: 'Lab4: Bài 1–9',
};

const AppContent = () => {
  const [page, setPage] = useState('shop');
  const { login } = useAuth();

  const handleLoginSuccess = (email) => {
    login(email);
    setPage('shop');
  };

  return (
    <Layout title={TITLES[page]} currentPage={page} onNavigate={setPage}>
      {page === 'shop' && <ShopPage />}
      {page === 'cart' && <CartPage onNavigate={setPage} />}
      {page === 'checkout' && <CheckoutPage onNavigate={setPage} />}
      {page === 'login' && <LoginForm onLoginSuccess={handleLoginSuccess} />}
      {page === 'exercises' && <ExercisesPage />}
    </Layout>
  );
};

const App = () => (
  <ThemeProvider>
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  </ThemeProvider>
);

export default App;
