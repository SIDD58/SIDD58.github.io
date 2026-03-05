import { useState } from 'react';
const images = [
    '/images/cert-ai102.png',
    '/images/cert-ai900.png',
    '/images/cert-az900.png',
    '/images/cert-datacamp.png',
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="certifications">
    <h2>Certifications</h2>
    <div className="carousel">
      <div className="carousel-inner" >
      {/* Image Display */}
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
      />
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className='carousel-btn prev' >&lt;</button>
      <button onClick={nextSlide} className='carousel-btn next' >&gt;</button>
    </div>
    </div>
    </section>

  );
}
