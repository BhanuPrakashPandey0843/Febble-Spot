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

const TeamCard = () => {
  return (
    <div className="flex justify-center gap-12 flex-wrap bg-[#f5f0ec] py-12 px-6">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className={`w-72 group relative transition-all duration-500 ${
            member.shiftDown ? 'mt-10' : ''
          }`}
        >
          {/* IMAGE WITH OVERLAY */}
          <div className="relative overflow-hidden rounded shadow-md transition-all duration-500">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />

            {/* SOCIAL ICONS AT BOTTOM OF IMAGE */}
            <div className="absolute bottom-3 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-black bg-opacity-60 px-4 py-2 rounded-full flex gap-4 text-white text-lg">
                <FaEnvelope className="hover:text-lime-400 transition" />
                <FaWhatsapp className="hover:text-lime-400 transition" />
                <FaInstagram className="hover:text-lime-400 transition" />
                <FaLinkedin className="hover:text-lime-400 transition" />
              </div>
            </div>
          </div>

          {/* NAME + TITLE */}
          <div className="mt-5 text-center relative h-[3rem]">
            <div className="transition-transform duration-500 group-hover:rotate-x-180 transform-style-preserve-3d">
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
  );
};

export default TeamCard;
