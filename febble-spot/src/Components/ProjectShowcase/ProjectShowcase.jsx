import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projectList = [
  {
    id: '01',
    title: 'MOCKUP 3D',
    image: 'https://wallpaperaccess.com/full/1308940.jpg',
  },
  {
    id: '02',
    title: 'TRICITY BRANDING',
    image: 'https://img.freepik.com/premium-photo/social-media_823919-18115.jpg',
  },
  {
    id: '03',
    title: '3D WHEEL TOP',
    image:
      'https://static.vecteezy.com/system/resources/previews/004/811/254/non_2x/young-woman-using-smart-phone-social-media-concept-free-photo.JPG',
    description:
      'Get a next-level sculpted solution for visually attractive output and much more value to offer.',
  },
  {
    id: '04',
    title: 'HOLOGRAPHIC AIRPOD',
    image: 'https://th.bing.com/th/id/OIP.sHWZweMRiH2W_aK9BL2hQAHaFt?r=0&rs=1&pid=ImgDetMain',
  },
  {
    id: '05',
    title: 'NATURE BRANDING',
    image: 'https://img.lovepik.com/photo/48008/5919.jpg_wh860.jpg',
  },
];

const ProjectShowcase = () => {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState('03');

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true, // Enable this for debug
        },
      }
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative z-10 bg-black text-white py-20 px-4 md:px-16"
    >
      <h3 className="uppercase text-sm font-semibold text-gray-400">Exclusive Projects</h3>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
        CHECKOUT OUR BEST & <br />
        EXCLUSIVE PROJECTS FROM <span className="text-gray-500">PORTFOLIO</span>
      </h2>
      <p className="text-gray-400 mt-4 max-w-xl">
        We have been honored to provide with the advantages of specialized solutions and precision-based
        strategies using digital branding. This means we turn your business vision into reality.
      </p>

      <div className="mt-12 space-y-6">
        {projectList.map((proj) => {
          const isActive = proj.id === activeId;
          return (
            <div
              key={proj.id}
              onClick={() => setActiveId(proj.id)}
              className={`flex flex-col md:flex-row items-center justify-between cursor-pointer gap-4 px-6 ${
                isActive
                  ? 'bg-lime-400 text-black rounded-2xl py-6'
                  : 'bg-zinc-900 text-white hover:bg-zinc-800 rounded-full py-4'
              } transition-all duration-300`}
            >
              <div className="text-center md:text-left">
                <h4 className="font-bold text-lg flex items-center justify-center md:justify-start gap-4">
                  <span className="text-sm font-semibold">{proj.id}</span>
                  {proj.title}
                </h4>
                {isActive && proj.description && (
                  <p className="text-sm mt-2 max-w-md">{proj.description}</p>
                )}
                {isActive && proj.description && (
                  <button className="mt-4 px-4 py-1 bg-black text-white text-sm rounded-full hover:bg-gray-800">
                    Read Full Case
                  </button>
                )}
              </div>
              <img
                src={proj.image}
                alt={proj.title}
                className={`w-24 h-24 object-cover transition-all duration-300 ${
                  isActive ? 'rounded-xl' : 'rounded-full'
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectShowcase;
