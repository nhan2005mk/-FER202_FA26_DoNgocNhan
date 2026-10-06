import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ProductFilter from '../components/ProductFilter';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ShopPage = () => {
  const { addToCart } = useCart();
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = (product) => {
    addToCart(product);
    setToastMessage(`Đã thêm "${product.name}" vào giỏ`);
  };

  return (
    <>
      <ProductFilter products={products} onAddToCart={handleAddToCart} />
      <ToastContainer position="bottom-end" containerPosition="fixed" className="p-3">
        {/* key đổi theo nội dung để thêm sản phẩm khác thì Toast đếm lại 2 giây từ đầu */}
        <Toast
          key={toastMessage}
          bg="success"
          show={Boolean(toastMessage)}
          onClose={() => setToastMessage('')}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-white">{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ShopPage;
