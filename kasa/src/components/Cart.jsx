import React, { useState } from 'react';
import leftArrow from '../assets/left_arrow_gallery.svg';
import rightArrow from '../assets/right_arrow_gallery.svg';

function Carousel({ pictures }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? pictures.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === pictures.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel-container">
  <div className="carousel">
    <img src={leftArrow} alt="Left Arrow" className="carousel-arrow left" onClick={handlePreviousSlide} />
    <img src={pictures[currentSlide]} alt="Carousel Slide" className="carousel-image" />
    <img src={rightArrow} alt="Right Arrow" className="carousel-arrow right" onClick={handleNextSlide} />
  </div>
</div>
  );
}

export default Carousel;