import { useState } from 'react';
const images = [
    '/images/cert-ai102.png',
    '/images/cert-ai900.png'
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
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: 'auto', overflow: 'hidden' }}>
      {/* Image Display */}
      <img 
        src={images[currentIndex]} 
        alt={`Slide ${currentIndex}`} 
        style={{ width: '100%', display: 'block' }} 
      />

      {/* Navigation Buttons */}
      <button onClick={prevSlide} style={btnStyle}>Prev</button>
      <button onClick={nextSlide} style={{ ...btnStyle, right: 0 }}>Next</button>
    </div>
  );
}

const btnStyle = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px'
};
