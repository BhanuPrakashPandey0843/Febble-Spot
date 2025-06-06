import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const headingText = 'Scroll Down To Darken This Heading';

export default function AnimatedHeading() {
  const lettersRef = useRef([]);
  const lastScrollY = useRef(window.scrollY);
  const targetColor = useRef('#d1d5db'); // default light gray

  useEffect(() => {
    gsap.set(lettersRef.current, { color: '#d1d5db' });

    function onScroll() {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current) {
        // Scrolling down → make letters darker (black)
        if (targetColor.current !== '#000000') {
          gsap.to(lettersRef.current, {
            color: '#000000',
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.02,
          });
          targetColor.current = '#000000';
        }
      } else if (currentY < lastScrollY.current) {
        // Scrolling up → reset to light gray
        if (targetColor.current !== '#d1d5db') {
          gsap.to(lettersRef.current, {
            color: '#d1d5db',
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.02,
          });
          targetColor.current = '#d1d5db';
        }
      }

      lastScrollY.current = currentY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white flex items-start justify-center pt-24 px-6 sm:px-12 lg:px-24">
      <h1
        aria-label={headingText}
        className="max-w-5xl text-6xl font-extrabold tracking-tight leading-tight select-none"
      >
        {headingText.split('').map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            aria-hidden="true"
          >
            {char}
          </span>
        ))}
      </h1>
    </main>
  );
}
