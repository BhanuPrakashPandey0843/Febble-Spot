import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const TopupButton = () => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      gsap.to(buttonRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(buttonRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
        pointerEvents: "none",
      });
    }
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={buttonRef}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 opacity-0 translate-y-10"
    >
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="p-4 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none ring-2 ring-white/10"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
};

export default TopupButton;
