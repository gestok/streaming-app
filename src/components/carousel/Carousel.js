import React, { useRef } from 'react';
import './Carousel.scss';

const Carousel = ({ children }) => {
  let pos = { left: 0, x: 0 };
  const carousel = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();

    pos = {
      left: carousel.current.scrollLeft,
      x: e.clientX,
    };
    carousel.current.addEventListener('mousemove', handleMouseMove);
    carousel.current.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const dx = e.clientX - pos.x;
    carousel.current.scrollLeft = pos.left - dx;
  };

  const handleMouseUp = () => {
    carousel.current.removeEventListener('mousemove', handleMouseMove);
    carousel.current.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div
      ref={carousel}
      className="carousel d-flex gap4 overflow-auto"
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
};
export default Carousel;
