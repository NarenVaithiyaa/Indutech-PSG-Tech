
import React, { useState, useEffect } from 'react';

const images = [
  '/assets/images/industry1.jpg',
  '/assets/images/industry2.jpg',
  '/assets/images/industry3.jpg',
  '/assets/images/industry4.jpg',
  '/assets/images/industry5.jpg',
];

const TextileIndustriesCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = images.length;


  const prevSlide = () => setCurrent((current - 1 + total) % total);
  const nextSlide = () => setCurrent((current + 1) % total);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="text-2xl font-bold mb-6 text-center text-foreground">Textile Industries</h2>
      <div className="relative w-full max-w-4xl h-80 flex items-center justify-center overflow-visible">
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 hover:bg-gray-300"
          onClick={prevSlide}
          aria-label="Previous"
        >
          &#8592;
        </button>
        <div className="flex w-full h-full items-center justify-center relative">
          {images.map((img, idx) => {
            // Calculate position relative to current
            let pos = idx - current;
            if (pos < -2) pos += total;
            if (pos > 2) pos -= total;
            // Only render visible slides (-2, -1, 0, 1, 2)
            if (Math.abs(pos) > 2) return null;
            // Center slide
            const isCenter = pos === 0;
            // Style for 3D effect
            const scale = isCenter ? 1 : 0.7;
            const zIndex = 10 - Math.abs(pos);
            const opacity = isCenter ? 1 : 0.5;
            const translateX = pos * 120;
            const blur = isCenter ? 'none' : 'blur-sm';
            return (
              <img
                key={idx}
                src={img}
                alt={`Textile Industry ${idx + 1}`}
                className={`absolute transition-all duration-500 ease-in-out ${blur}`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  width: isCenter ? '320px' : '200px',
                  height: isCenter ? '320px' : '200px',
                  boxShadow: isCenter ? '0 8px 32px rgba(0,0,0,0.10)' : 'none',
                  borderRadius: '1rem',
                  background: 'transparent',
                  objectFit: 'cover',
                }}
              />
            );
          })}
        </div>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2 z-10 hover:bg-gray-300"
          onClick={nextSlide}
          aria-label="Next"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-cyan-700' : 'bg-gray-300'}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TextileIndustriesCarousel;
