import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const About = () => {
  const headingText = 'BUILDING RELATIONSHIP WITH OUR CLIENTS THROUGH CREATIVE PROJECTS';
  const lettersRef = useRef([]);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const targetColor = useRef('#000000');

  useEffect(() => {
    if (!lettersRef.current.length) return;

    gsap.set(lettersRef.current, { color: '#000000' });

    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && targetColor.current !== '#999999') {
        gsap.to(lettersRef.current, {
          color: '#999999',
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.01,
        });
        targetColor.current = '#999999';
      } else if (currentY < lastScrollY.current && targetColor.current !== '#000000') {
        gsap.to(lettersRef.current, {
          color: '#000000',
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.01,
        });
        targetColor.current = '#000000';
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const renderSpacedHeading = () =>
    headingText.split(' ').map((word, wi) => (
      <span key={wi} className="inline-block mr-2">
        {word.split('').map((char, ci) => (
          <span
            key={`${wi}-${ci}`}
            ref={(el) => (lettersRef.current[wi * 100 + ci] = el)}
            aria-hidden="true"
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </span>
    ));

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-12 lg:px-24 font-sans min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">

        {/* Left: 30+ Years */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <img
            src="https://img.freepik.com/free-photo/business-people-clapping_23-2148879280.jpg"
            alt="Team collaboration"
            className="rounded-xl object-cover w-28 h-28"
          />
          <div className="text-center lg:text-left">
            <p className="text-3xl font-extrabold">
              30<span className="text-lime-500">+</span>
            </p>
            <p className="text-sm text-gray-600">Years Experience</p>
          </div>
        </div>

        {/* Center: Heading and Text */}
        <div className="text-center lg:text-center space-y-4">
          <p className="uppercase text-xs tracking-widest text-gray-500 font-semibold">About Company</p>
          <h1
            aria-label={headingText}
            className="text-xl sm:text-2xl font-bold leading-tight tracking-tight uppercase"
          >
            {renderSpacedHeading()}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            In Mouno we have a team of experts with a wide range of specialized skills and experience in different
            areas of digital technology. Millions of customers have trusted us worldwide.
          </p>
          <div className="inline-flex items-center space-x-2 bg-lime-400 text-black font-semibold px-4 py-2 rounded-full cursor-pointer transition hover:scale-105">
            <span>Let’s Collaborate</span>
            <span className="bg-black text-white rounded-full p-1.5">
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Right: Business Woman Image (aligned bottom) */}
        <div className="flex justify-center lg:justify-end items-end h-full">
          <img
            src="https://thumbs.dreamstime.com/b/business-women-office-13313682.jpg"
            alt="Business woman"
            className="rounded-xl object-cover w-[180px] h-[180px]"
          />
        </div>

      </div>
    </section>
  );
};

export default About;
