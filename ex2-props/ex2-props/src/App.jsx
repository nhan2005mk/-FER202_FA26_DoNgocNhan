import React from 'react';
import ProductInfo from './ProductInfo';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Danh sách sản phẩm</h1>
      
      <ProductInfo 
        title="Bàn phím cơ Keychron K2" 
        price="1.500.000 VNĐ" 
        description="Bàn phím cơ không dây, switch Brown, LED RGB."
        tags="Bán chạy" 
        imageUrl="https://minitech.com.vn/wp-content/uploads/2024/01/splitimage.im-4-2026-07-27T185613.634.png" 
      />

      <ProductInfo 
        title="Chuột Logitech MX Master 3S" 
        price="2.200.000 VNĐ" 
        description="Chuột công thái học, cảm biến 8000 DPI, pin dùng 70 ngày."
        tags="Hàng mới về" 
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH6KO8kfkC24EMIbIyb8zOpyIioIdr3RMgKfUyWnsT1GEbl-xXRoRFUZMJ&s=10"
      />

    </div>
  );
}

export default App;