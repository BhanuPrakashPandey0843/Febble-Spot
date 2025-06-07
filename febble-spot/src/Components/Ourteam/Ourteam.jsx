import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ashley from '../../assets/Rachel+Attoh.jpg';
import garrison from '../../assets/IMG_3207.JPG';
import jordan from '../../assets/beautiful-8820010_1280.png';

const teamMembers = [
  {
    name: 'ASHLEY RAILY JONSON',
    title: 'Business Consultant',
    img: ashley,
    shiftDown: false,
  },
  {
    name: 'BHANU PRAKASH',
    title: 'Business Consultant',
    img: garrison,
    shiftDown: true,
  },
  {
    name: 'JORDAN ALEXANDER',
    title: 'Business Consultant',
    img: jordan,
    shiftDown: false,
  },
  {
    name: 'ASHLEY RAILY JONSON',
    title: 'Business Consultant',
    img: ashley,
    shiftDown: false,
  },
  {
    name: 'GARRISON GARDNER',
    title: 'Business Consultant',
    img: garrison,
    shiftDown: true,
  },
  {
    name: 'JORDAN ALEXANDER',
    title: 'Business Consultant',
    img: jordan,
    shiftDown: false,
  },
];

const headingText = 'MEET  OUR  INCREDIBLE  TEAM  OF  GREAT  MINDS';

export default function Ourteam() {
  const lettersRef = useRef([]);
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const targetColor = useRef('#ffffff'); // white initially

  useEffect(() => {
    if (!lettersRef.current.length) return;

    gsap.set(lettersRef.current, { color: '#ffffff' });

    function onScroll() {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && targetColor.current !== '#000000') {
        gsap.to(lettersRef.current, {
          color: '#000000',
          duration: 0.3,
          ease: 'power2.out',
          stagger: 0.02,
        });
        targetColor.current = '#000000';
      } else if (currentY < lastScrollY.current && targetColor.current !== '#ffffff') {
        gsap.to(lettersRef.current, {
          color: '#ffffff',
          duration: 0.3,
          ease: 'power2.out',
          stagger: 0.02,
        });
        targetColor.current = '#ffffff';
      }

      lastScrollY.current = currentY;
    }

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
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-24 min-h-screen">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-6">
        <p className="text-sm text-gray-400 uppercase tracking-widest mb-2">
          OUR TEAM
        </p>
      </div>

      <h1
        aria-label={headingText}
        className="max-w-5xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight select-none text-center"
      >
        {renderSpacedHeading()}
      </h1>

      {/* Description */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <p className="text-lg text-gray-400 leading-relaxed font-medium">
          At Febble Spot, we’ve assembled a team of digital experts with diverse skills and deep experience in modern technologies. Whether it’s UI/UX, engineering, or strategy, our team is equipped to elevate your business.
        </p>
        
      </div>

      {/* Team Grid */}
      <div className="flex justify-center gap-12 flex-wrap bg-[#f5f0ec] py-12 px-6">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className={`w-72 group relative transition-all duration-500 ${
              member.shiftDown ? 'mt-10' : ''
            }`}
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded shadow-md transition-all duration-500">
              <img
                src={member.img}
                alt={`Profile of ${member.name}`}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-3 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-black bg-opacity-60 px-4 py-2 rounded-full flex gap-4 text-white text-lg">
                  <FaEnvelope className="hover:text-lime-400 transition cursor-pointer" />
                  <FaWhatsapp className="hover:text-lime-400 transition cursor-pointer" />
                  <FaInstagram className="hover:text-lime-400 transition cursor-pointer" />
                  <FaLinkedin className="hover:text-lime-400 transition cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Name & Title with Flip */}
            <div className="mt-5 text-center relative h-[3rem]">
              <div className="transition-transform duration-500 group-hover:rotate-x-180 transform-style-preserve-3d relative">
                <div className="absolute inset-0 backface-hidden">
                  <p className="font-extrabold text-md tracking-wide">
                    {member.name}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">
                    {member.title}
                  </p>
                </div>
                <div className="absolute inset-0 rotate-x-180 backface-hidden">
                  <p className="font-extrabold text-md tracking-wide text-lime-400">
                    {member.name}
                  </p>
                  <p className="text-sm font-semibold text-lime-400">
                    {member.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
