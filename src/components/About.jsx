import React, { useEffect, useState, useRef } from "react";

export default function Showcase() {
  const slides = [
    { title: "Ronaldo", video: "/ronaldo.mp4" },
    { title: "Manchester United", video: "/manutd.mp4" },
    { title: "Real Madrid", video: "/madrid.mp4" },
  ];

  const [active, setActive] = useState(1);

  const videoRef = useRef(null);   // control video
  const sectionRef = useRef(null); // detect scroll visibility

  const getOffset = (index) => {
    const total = slides.length;
    let diff = index - active;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  const getStyle = (index) => {
    const offset = getOffset(index);
    return {
      transform: `translateY(${offset * 110}px) scale(${offset === 0 ? 1 : 0.75})`,
      opacity: offset === 0 ? 1 : 0.12,
      filter: offset === 0 ? "blur(0px)" : "blur(3px)",
      zIndex: 10 - Math.abs(offset),
    };
  };

  // stop previous video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  }, [active]);

  // stop video when leaving page
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    };
  }, []);

  // pause video when section not visible (scroll away)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!videoRef.current) return;

        if (entry.isIntersecting) {
          videoRef.current.play().catch(() => {});
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">

        <video
          ref={videoRef}
          key={slides[active].video}
          src={slides[active].video}
          autoPlay
          playsInline
          onEnded={() =>
            setActive((prev) => (prev + 1) % slides.length)
          }
          className="absolute right-0 top-0 h-full w-[65%] object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>

      <div className="relative z-30 grid md:grid-cols-[40%_60%] min-h-screen items-center px-8 md:px-20">
        <div className="flex flex-col space-y-20">
          <div className="relative h-[300px]">
            {slides.map((item, index) => (
              <div
                key={index}
                onClick={() => setActive(index)}
                className="absolute cursor-pointer transition-all duration-700 ease-in-out"
                style={getStyle(index)}
              >
                <h1 className="text-6xl md:text-7xl font-bold leading-[0.9]">
                  {item.title}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[70vh] overflow-hidden z-20">
        <img
          src="https://wpriverthemes.com/HTML/davies/assets/images/item/mountain.png"
          alt=""
          className="w-full h-full object-cover select-none"
        />
      </div>

      <div className="absolute bottom-8 right-10 text-6xl font-bold z-30">
        <span className="text-white">20</span>
        <span className="text-purple-800/90">26</span>
      </div>
    </section>
  );
}