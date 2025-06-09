import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Why from "../Why/Why"; // ✅ Import your component

gsap.registerPlugin(ScrollTrigger);

const AnimatedSplitSection = () => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1,
          pin: true,
        },
      });

      // Background zooms
      tl.to(bgRef.current, { scale: 1.2, ease: "none" });

      // Panels split
      tl.to(
        topRef.current,
        {
          y: "-100%",
          clipPath: "polygon(0 0, 100% 0, 70% 100%, 30% 100%)",
          ease: "power2.inOut",
        },
        "<"
      );
      tl.to(
        bottomRef.current,
        {
          y: "100%",
          clipPath: "polygon(30% 0, 70% 0, 100% 100%, 0% 100%)",
          ease: "power2.inOut",
        },
        "<"
      );

      // Reveal next section
      tl.fromTo(
        nextSectionRef.current,
        {
          opacity: 0,
          scale: 0.95,
          y: 100,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          ease: "power3.out",
          duration: 1,
        },
        "<0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const bgImage =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80";

  return (
    <>
      {/* Cinematic Section */}
      <div
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden text-white font-sans"
      >
        {/* Background */}
        <div
          ref={bgRef}
          className="absolute inset-0 bg-cover bg-center scale-100 transition-transform duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Top & Bottom Panels */}
        <div
          ref={topRef}
          className="absolute top-0 left-0 w-full h-1/2 bg-black/70 z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        <div
          ref={bottomRef}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-black/70 z-10"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
      </div>

      {/* Next Component Revealed */}
      <section
        ref={nextSectionRef}
        className="min-h-screen w-full bg-white text-black flex items-center justify-center p-10"
      >
        <Why /> {/* ✅ Your component here */}
      </section>
    </>
  );
};

export default AnimatedSplitSection;
