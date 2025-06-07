import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Google Fonts import (Anton)
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

const words = ['Feeble', 'Spot', 'Your', 'Digital', 'Card'];

export default function FontCarousel() {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(carouselRef.current, {
        xPercent: -50,
        repeat: -1,
        ease: 'linear',
        duration: 25,
      });
    }, carouselRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-10">
      <div
        className="flex whitespace-nowrap gap-16"
        ref={carouselRef}
        style={{
          fontFamily: "'Anton', sans-serif",
        }}
      >
        {[...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-3">
            <span
              className="text-5xl sm:text-6xl uppercase"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1.2px black',
              }}
            >
              {word}
            </span>
            <span className="text-black text-5xl sm:text-6xl font-bold uppercase">{word}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
