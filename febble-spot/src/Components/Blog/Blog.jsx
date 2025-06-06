import React, { useEffect, useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    title: "WHY ARTIFICIAL INTELLIGENCE IS REDEFINING DAILY TASKS",
    author: "Mellisa Doe",
    date: "20 FEB 2025",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
  },
  {
    title: "WHY DIGITAL SKILLS ARE SHAPING MODERN EDUCATION TODAY",
    author: "Christopher Jonson",
    date: "20 FEB 2025",
    image: "https://images.pexels.com/photos/4145196/pexels-photo-4145196.jpeg",
  },
  {
    title: "WHAT YOU SHOULD EXPECT AS AN INTERN IN A CREATIVE AGENCY",
    author: "Christopher Jonson",
    date: "20 FEB 2025",
    image: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
  },
  {
    title: "HOW NEW TALENTS ARE BRINGING NEW DIMENSIONS IN WORKFORCE",
    author: "Ashton William",
    date: "20 FEB 2025",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg",
  },
];

const Blog = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const words = headlineRef.current.querySelectorAll("span");

    gsap.set(words, { opacity: 0, y: 20 });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: headlineRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">
          Latest News
        </p>

        {/* HEADLINE + PARAGRAPH SIDE BY SIDE */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-10">
          <h2
            ref={headlineRef}
            className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight"
          >
            <span className="inline-block mr-2">AMAZING</span>
            <span className="inline-block mr-2">RESEARCH</span>
            <span className="inline-block mr-2">NEWS</span>
            <span className="inline-block mr-2">&</span>
            <span className="inline-block mr-2">BLOGS</span>
          </h2>

          <p className="text-gray-600 text-lg">
            In Mouno we have a team of experts with a wide range of specialized
            skills and experience in different areas of digital technology. This
            means that your businesses will be able...
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row items-start gap-4 border rounded-xl p-4 hover:shadow-lg transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full md:w-48 h-40 object-cover rounded-lg"
              />
              <div className="flex-1">
                <span className="bg-gray-200 text-xs font-semibold text-gray-700 px-3 py-1 rounded-full inline-block mb-2">
                  {blog.date}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-lime-500 transition duration-300">
                  {blog.title}
                </h3>
                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <FaUserAlt className="text-xs" /> BY {blog.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
