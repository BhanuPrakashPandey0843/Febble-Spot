import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Why = () => {
  const headingText = 'Why you should choose Febble Spot';
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
    <section className="bg-white text-black px-6 sm:px-12 lg:px-24 py-20 font-sans">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <p className="uppercase text-xs tracking-widest text-gray-500 font-semibold">
            Why Choose Us
          </p>
          <h1
            aria-label={headingText}
            className="text-4xl font-extrabold leading-tight tracking-tight uppercase max-w-xl"
          >
            {renderSpacedHeading()}
          </h1>
          
          <p className="text-gray-600 text-base leading-relaxed">
            In Mouno we have a team of experts with a wide range of specialized skills and experience
            in different areas of digital technology. This means that your businesses will be able,
          </p>
          <div className="w-20 h-20 rounded-full bg-lime-400 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black opacity-10" />
            <div className="absolute left-2 top-0 h-full w-1 bg-black rotate-45" />
            <div className="absolute left-4 top-0 h-full w-1 bg-black rotate-45" />
            <div className="absolute left-6 top-0 h-full w-1 bg-black rotate-45" />
          </div>
        </div>

        {/* RIGHT STATS GRID WITH BORDERS */}
        <div className="grid grid-cols-2 border border-gray-300 divide-x divide-y divide-gray-300 text-center">
          {[
            { value: '10M', label: 'Active users' },
            { value: '100%', label: 'Client satisfaction' },
            { value: '260', label: 'Happy Employee' },
            { value: '30k', label: 'Project Completed' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 space-y-1">
              <div className="text-3xl font-extrabold">{item.value}</div>
              <div className="font-semibold">{item.label}</div>
              <p className="text-sm text-gray-500 px-2">
                In Mouno we have a team of experts with a range
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
