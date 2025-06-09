import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-white text-black font-sans flex items-center justify-center px-4 md:px-16">
      {/* Background radial */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(255,255,255,1)_0%,_rgba(229,229,229,0.5)_50%,_rgba(255,255,255,1)_100%)]" />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left: Big Hero Text */}
        <div className="text-left">
          <h1 className="text-[12vw] md:text-[6vw] leading-[0.95] font-serif font-bold uppercase tracking-tight">
            <div>Graphics</div>
            <div>Design</div>
            <div>Agency</div>
          </h1>
        </div>

        {/* Center: Mock Phone */}
        <div className="flex justify-center">
          <div className="w-44 h-96 md:w-60 md:h-[30rem] bg-black rounded-[2rem] border-[6px] border-black shadow-2xl relative overflow-hidden">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
            {/* Inner Screen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-100 to-gray-200 flex flex-col items-center justify-center text-center px-4 py-6">
              <h2 className="text-sm font-bold tracking-widest text-black uppercase">
                Creative<br />Agency
              </h2>
              <div className="mt-8 w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md">
                M
              </div>
              <div className="mt-4 text-xs text-gray-600 italic">Creative Mouse</div>
            </div>
          </div>
        </div>

        {/* Right: Description Content */}
        <div className="text-left">
          <div className="w-12 h-12 rounded-lg bg-lime-400 flex items-center justify-center mb-4 text-2xl shadow-md">
            🌀
          </div>
          <h3 className="text-3xl font-bold leading-tight mb-2">
            We know<br />
            what we’re<br />
            doing
          </h3>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            We appreciate your trust in us. We take pride in delivering the best outcomes in every project we handle. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>

      {/* Bottom Left: CTA */}
      <div className="absolute bottom-8 left-6 md:left-16 z-30 flex items-center gap-4">
        <div className="bg-lime-400 text-black w-10 h-10 rounded-full flex items-center justify-center text-xl rotate-45 shadow-md">
          ↑
        </div>
        
      </div>

      {/* Bottom Right: Arrow */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="text-4xl font-bold hover:translate-x-1 transition-transform duration-300">
          →
        </div>
      </div>
    </div>
  );
};

export default Hero;
