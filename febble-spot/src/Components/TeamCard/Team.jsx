import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ashley from '../../assets/Rachel+Attoh.jpg';
import garrison from '../../assets/IMG_3207.JPG';
import jordan from '../../assets/beautiful-8820010_1280.png';

const teamMembers = [
  {
    name: 'ASHLEY RAILY JONSON',
    title: 'Business Consultant',
    img: ashley,
  },
  {
    name: 'GARRISON GARDNER',
    title: 'Business Consultant',
    img: garrison,
  },
  {
    name: 'JORDAN ALEXANDER',
    title: 'Business Consultant',
    img: jordan,
  },
];

const TeamCard = () => {
  return (
    <div className="flex justify-center gap-12 flex-wrap bg-[#f5f0ec] py-12 px-6">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="w-72 group relative transition-all duration-500"
        >
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded shadow-md grayscale group-hover:grayscale-0 transition-all duration-500">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover"
            />

            {/* SOCIAL ICON OVERLAY */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <div className="flex space-x-4 text-white text-xl">
                <FaEnvelope className="hover:text-lime-400 transition" />
                <FaWhatsapp className="hover:text-lime-400 transition" />
                <FaInstagram className="hover:text-lime-400 transition" />
                <FaLinkedin className="hover:text-lime-400 transition" />
              </div>
            </div>
          </div>

          {/* NAME FLIP + TITLE */}
          <div className="mt-4 text-center relative h-[2.5rem]">
            <div className="transition-transform duration-500 group-hover:rotate-x-180 transform-style-preserve-3d">
              <div className="absolute inset-0 backface-hidden">
                <p className="font-extrabold text-md tracking-wide">
                  {member.name}
                </p>
              </div>
              <div className="absolute inset-0 rotate-x-180 backface-hidden">
                <p className="font-extrabold text-md tracking-wide text-lime-400">
                  {member.name}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-2">{member.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
