import React from 'react';

// Đã bổ sung thêm tham số imageUrl
function ProductInfo({ title, price, description, tags, imageUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px', borderRadius: '8px', display: 'flex', gap: '20px' }}>
      
      {/* Đây là thẻ img dùng để in bức ảnh ra màn hình */}
      {imageUrl && (
        <img src={imageUrl} alt={title} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
      )}
      
      <div>
        <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{title}</h2>
        <p style={{ color: '#d9534f', fontSize: '18px', fontWeight: 'bold', margin: '5px 0' }}>Giá: {price}</p>
        <p style={{ margin: '5px 0' }}><strong>Mô tả:</strong> {description}</p>
        <div style={{ marginTop: '10px' }}>
          <strong>Tags: </strong> 
          <span style={{ backgroundColor: '#f0ad4e', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>{tags}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;