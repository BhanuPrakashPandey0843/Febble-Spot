import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaStar } from 'react-icons/fa';
import { testimonials } from './testimonials';

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [current]);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' });
    gsap.fromTo(imageRef.current, { scale: 0.95, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' });
    gsap.fromTo(textRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' });
  }, [current]);

  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

  const { name, location, text, image, rating } = testimonials[current];

  return (
    <div className="bg-lime-400 min-h-screen flex items-center justify-center py-14 px-4 relative">
      <div
        ref={containerRef}
        className="bg-lime-400 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full max-w-6xl shadow-xl transition-all"
      >
        {/* Left - Image */}
        <div className="md:w-1/2 w-full relative">
          <img
            ref={imageRef}
            src={image}
            alt={name}
            className="rounded-lg object-contain w-full h-full max-h-[420px]"
          />
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 bg-black text-white w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="30" height="30">
              <path d="M19.417 6.679C20.447 7.773 21 9 21 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.248-5.621c-.537.278-1.24.375-1.93.311c-1.804-.167-3.226-1.648-3.226-3.489a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179m-10 0C10.447 7.773 11 9 11 10.989c0 3.5-2.456 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621c-.537.278-1.24.375-1.929.311C4.591 12.323 3.17 10.842 3.17 9a3.5 3.5 0 0 1 3.5-3.5c1.073 0 2.1.49 2.748 1.179"/>
            </svg>
          </div>
        </div>

        {/* Right - Text */}
        <div ref={textRef} className="md:w-1/2 w-full text-black flex flex-col justify-center">
          <h3 className="text-2xl font-bold">{name}</h3>
          <p className="text-sm text-zinc-700">{location}</p>
          <hr className="my-4 border-black/40" />
          <p className="italic text-base leading-relaxed">{text}</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="font-bold">RATING:</span>
            <div className="flex gap-1">
              {Array(rating)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-white bg-black rounded p-0.5" />
                ))}
            </div>
              {/* Indicator Dots */}
      <div className="absolute bottom-8 flex items-center gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === current ? 'bg-black' : 'bg-black/40'
            }`}
          />
        ))}
      </div>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default TestimonialCarousel;
