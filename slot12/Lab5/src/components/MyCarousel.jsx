import React from 'react'
import { Carousel } from 'react-bootstrap'
import { banners } from '../data/banners'

/**
 * B5: MyCarousel Component
 * - Hiển thị carousel gồm 3 ảnh + description từ file banners.js
 * - Tự động trượt ảnh qua interval={3000}
 */
export default function MyCarousel({ data = banners }) {
  return (
    <Carousel
      slide={true}
      interval={3000}
      className="shadow-sm rounded overflow-hidden mb-4"
    >
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="d-block w-100"
            src={item.image}
            alt={item.title || `Slide ${item.id}`}
            style={{ height: '420px', objectFit: 'cover' }}
          />
          <Carousel.Caption
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.55)',
              borderRadius: '8px',
              padding: '12px 20px',
              backdropFilter: 'blur(4px)',
              maxWidth: '650px',
              margin: '0 auto',
            }}
          >
            <h3 className="fw-bold text-white">{item.title}</h3>
            <p className="mb-0 text-light">{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
