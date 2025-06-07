import React from 'react';
import {
  FaCube,
  FaLayerGroup,
  FaDraftingCompass,
  FaCode
} from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

// Example image URLs — replace with your own or local assets
const bgImages = [
  'https://tesseract.academy/wp-content/uploads/2022/06/product-manager.png',
  'https://th.bing.com/th/id/R.7d0c74667e1242d0cd40fe10f6b27b09?rik=rDiIxB2plLWyDQ&riu=http%3a%2f%2fumidigital.co.uk%2fwp-content%2fuploads%2f2014%2f08%2fSocial-Media.jpg&ehk=GTr%2bHi4Kt1mwh7V%2feen2rIO6PqaX8whbfkl5xHdDxjI%3d&risl=1&pid=ImgRaw&r=0',
  'https://i0.wp.com/99designs-blog.imgix.net/blog/wp-content/uploads/2021/12/99871876.jpg?resize=478%2C478&ssl=1',
  'https://media.sproutsocial.com/uploads/2023/02/How-to-perform-a-social-media-competitive-analysis-Final.png',
];

const services = [
  {
    icon: <FaLayerGroup size={40} />,
    title: 'PRODUCT DESIGN',
    description:
      'Mouno provide best digital product design for firms who are launching new products. We have best designers here',
    number: '01',
    overlay: {
      title: 'SOFTWARE DESIGN',
      desc: 'Mouno provide best digital product design for firms who are launching new products. We have best designers here',
    },
    bg: bgImages[0],
  },
  {
    icon: <FaCube size={40} />,
    title: '3D MODELING',
    description:
      'Mouno provide best digital product design for firms who are launching new products. We have best designers here',
    number: '02',
    overlay: {
      title: '3D INNOVATION',
      desc: 'We shape the future through cutting-edge modeling and simulation.',
    },
    bg: bgImages[1],
  },
  {
    icon: <FaDraftingCompass size={40} />,
    title: 'GRAPHICS DESIGN',
    description:
      'Mouno’s objective is to reach the firm in such a level from where we can create opportunity for young professionals…',
    number: '03',
    overlay: {
      title: 'DESIGN STUDIO',
      desc: 'We combine creativity and strategy to build stunning visuals.',
    },
    bg: bgImages[2],
  },
  {
    icon: <FaCode size={40} />,
    title: 'SOFTWARE MODULING',
    description:
      'Mouno provide best digital product design for firms who are launching new products. We have best designers here',
    number: '04',
    overlay: {
      title: 'LET’S COLLABORATE',
      desc: 'Crafting robust, scalable modules tailored for your needs.',
    },
    bg: bgImages[3],
  },
];

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-lime-300 px-10 py-20">
      {services.map((item, index) => (
        <div
          key={index}
          className="relative group bg-lime-300 p-6 overflow-hidden h-[340px] shadow-md"
        >
          {/* Main Content */}
          <div className="space-y-4 z-10 relative">
            <div className="text-black">{item.icon}</div>
            <h3 className="text-xl font-bold text-black">{item.title}</h3>
            <p className="text-black text-sm">{item.description}</p>
          </div>

          {/* Background number */}
          <div className="absolute bottom-4 right-4 text-[90px] font-bold text-black opacity-10 z-0">
            {item.number}
          </div>

          {/* Hover Overlay with Image */}
          <div
            className="absolute top-0 left-0 w-full h-full transform translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out z-20"
            style={{
              backgroundImage: `url(${item.bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="w-full h-full bg-black bg-opacity-60 p-6 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-bold mb-2">{item.overlay.title}</h3>
                <p className="text-sm">{item.overlay.desc}</p>
              </div>
              <button className="flex items-center gap-2 bg-lime-400 text-black font-semibold px-4 py-2 rounded-full mt-4 w-max">
                Let’s Collaborate <FiArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
