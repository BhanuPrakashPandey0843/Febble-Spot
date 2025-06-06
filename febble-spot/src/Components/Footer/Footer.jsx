import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      marqueeRef.current,
      { xPercent: 100 },
      {
        xPercent: -100,
        duration: 20,
        repeat: -1,
        ease: "linear",
      }
    );
  }, []);

  return (
    <footer className="bg-black text-white font-sans min-h-screen flex flex-col justify-between">
      {/* Marquee Section */}
      <div className="overflow-hidden border-b border-zinc-800 py-6 bg-gradient-to-r from-zinc-900 via-black to-zinc-900">
        <div ref={marqueeRef} className="relative whitespace-nowrap">
          <div className="marquee-track flex space-x-16 text-4xl md:text-6xl font-extrabold tracking-widest opacity-80">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span>+44.093.939</span>
                <span className="text-lime-400 px-10">CALL FOR PROJECT Febble Spot</span>
                <span>+44.093.939</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {/* Main Grid */}
      <div className="flex flex-col md:flex-row justify-between items-stretch px-6 md:px-16 py-14 gap-12 border-b border-zinc-800 flex-grow">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/4">
          <img
            src="/logo_white.png"
            alt="Meune Logo"
            className="w-24 h-24 object-contain mb-4"
          />
        </div>

        {/* Vertical Line */}
        <div className="hidden md:block w-px bg-zinc-800" />

        {/* Opening Hours */}
        <div className="flex flex-col text-center md:text-left w-full md:w-1/4">
          <p className="uppercase text-zinc-400 text-sm mb-2 tracking-wide">
            Opening Hours
          </p>
          <p>Sunday – Closed</p>
          <p>Mon – Fri 9AM – 6PM</p>
          <p className="text-zinc-500 mt-1 text-xs">
            Appointments Recommended
          </p>
        </div>

        {/* Studio Address */}
        <div className="flex flex-col text-center md:text-left w-full md:w-1/4">
          <p className="uppercase text-zinc-400 text-sm mb-2 tracking-wide">
            Studio Address
          </p>
          <p>213 Marina Street, Los Angeles</p>
          <p>USA, 665432</p>
          <button className="text-zinc-500 underline hover:text-white transition mt-2 text-sm">
            View Map →
          </button>
        </div>

        {/* Newsletter Box */}
        <div className="border border-zinc-800 rounded-md w-full md:w-1/4 flex flex-col">
          <div className="px-4 pt-4">
            <p className="uppercase font-bold text-sm tracking-wide text-center md:text-left mb-2 leading-tight">
              Sign up for all the latest news and offers
            </p>
          </div>

          {/* Disconnected Borders */}
          <div className="flex justify-between px-4">
            <div className="w-1/3 border-t border-zinc-800"></div>
            <div className="w-1/3"></div>
            <div className="w-1/3 border-t border-zinc-800"></div>
          </div>

          <div className="px-4 pb-4 pt-2">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-zinc-900 text-white py-2 pl-4 pr-12 rounded-full border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-lime-400 p-2 rounded-full hover:bg-lime-500 transition">
                <IoIosSend className="text-black text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-6 gap-6 text-zinc-500 text-sm">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button className="bg-zinc-900 text-white text-xs py-1 px-4 rounded-full border border-zinc-800 hover:bg-zinc-800 transition">
            Made by <span className="text-lime-400">Bhanu</span>
          </button>
          <p>©  Febble Spot 2025</p>
        </div>

        {/* Right Section - Socials */}
        <div className="flex flex-wrap items-center gap-4 text-sm md:ml-auto md:-translate-x-2 transition-transform">
          {[
            { icon: FaFacebookF, label: "Facebook" },
            { icon: FaInstagram, label: "Instagram" },
            { icon: FaLinkedinIn, label: "LinkedIn" },
            { icon: FaPinterestP, label: "Pinterest" },
            { icon: FaYoutube, label: "YouTube" },
          ].map(({ icon: Icon, label }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 hover:text-lime-400 transition duration-200 cursor-pointer"
            >
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
