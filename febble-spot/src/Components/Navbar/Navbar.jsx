import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { FaStar } from 'react-icons/fa';

const Navbar = () => {
  const navbarRef = useRef(null);
  const starRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Star hover animation
  useEffect(() => {
    const star = starRef.current;

    const handleMouseEnter = () => {
      gsap.to(star, {
        rotate: 360,
        scale: 1.2,
        duration: 0.6,
        ease: 'power2.out',
        boxShadow: '0 0 12px #facc15',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(star, {
        rotate: 0,
        scale: 1,
        duration: 0.5,
        ease: 'power2.in',
        boxShadow: '0 0 0px transparent',
      });
    };

    star.addEventListener('mouseenter', handleMouseEnter);
    star.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      star.removeEventListener('mouseenter', handleMouseEnter);
      star.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Hide/Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = navbarRef.current;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scroll Down
        gsap.to(navbar, { y: -100, duration: 0.3, ease: 'power2.out' });
      } else {
        // Scroll Up
        gsap.to(navbar, { y: 0, duration: 0.3, ease: 'power2.out' });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-lg px-8 py-4 flex justify-between items-center transition-all duration-300"
    >
      {/* Logo */}
      <div className="text-3xl font-black tracking-tight text-gray-800 hover:tracking-widest transition-all duration-300">
        <span className="text-black">Febble</span>{' '}
        <span className="text-blue-500">Spot</span>
      </div>

      {/* Star icon */}
      <div
        ref={starRef}
        className="w-11 h-11 rounded-full border-2 border-yellow-400 flex items-center justify-center text-yellow-400 cursor-pointer bg-white transition-all duration-300 hover:bg-yellow-100"
      >
        <FaStar size={22} />
      </div>
    </nav>
  );
};

export default Navbar;
