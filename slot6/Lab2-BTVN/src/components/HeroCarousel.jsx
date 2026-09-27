import { Carousel } from 'react-bootstrap'

const slides = [
  {
    image: '/images/pizza1.jpg',
    title: 'Neapolitan Pizza',
    text: 'If you are looking for a traditional Italian pizza, the Neapolitan is the best option!',
  },
  {
    image: '/images/pizza2.jpg',
    title: 'Margherita Pizza',
    text: 'Simple and classic: tomato, fresh mozzarella and basil.',
  },
  {
    image: '/images/pizza3.jpg',
    title: 'Pepperoni Pizza',
    text: 'Loaded with spicy pepperoni and melted cheese.',
  },
  {
    image: '/images/pizza4.jpg',
    title: 'Mushroom Pizza',
    text: 'Earthy mushrooms on a crispy thin crust.',
  },
  {
    image: '/images/pizza5.jpg',
    title: 'Pesto Pizza',
    text: 'Fresh basil pesto with a touch of garlic and parmesan.',
  },
]

function HeroCarousel() {
  return (
    <Carousel className="hero-carousel">
      {slides.map((slide) => (
        <Carousel.Item key={slide.title}>
          <img className="d-block w-100" src={slide.image} alt={slide.title} />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default HeroCarousel
