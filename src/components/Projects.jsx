import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const projects = [
    { name: 'E-Commerce Platform', year: '2026', category: 'Web App' },
    { name: 'House Price Predictor', year: '2025', category: 'ML/AI' },
    { name: 'Meet the Strangers', year: '2024', category: 'Social' },
  ];

  const images = [
    {
      src: "lenses.png",
      alt: "Project showcase 1"
    },
    {
      src: "lenses1.png",
      alt: "Project showcase 2"
    },
    {
      src: "lenses2.png", 
      alt: "Project showcase 3"
    },
    {
      src: "lenses3.png",
      alt: "Project showcase 4"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 10000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen text-white overflow-hidden flex items-center pt-24"
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          src="/ron.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
          <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
          <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
          <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-black to-transparent" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-black to-transparent" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-black to-transparent" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-black to-transparent" />
        </div>
        
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-16 w-full max-w-7xl mx-auto px-6 md:px-16 items-center min-h-screen">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 text-xs tracking-[0.3em]"
            >
              FEATURED WORK
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-light leading-tight mt-4"
            >
              Crafting digital
              <span className="block gradient-text">experiences</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-lg leading-relaxed backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            I design and build modern digital products that combine creativity, 
            performance, and usability. Each project is crafted with attention 
            to detail and a focus on user experience.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group flex items-center justify-between py-4 border-b border-white/10 hover:border-white/30 transition-all cursor-pointer backdrop-blur-sm bg-white/5 px-4 rounded-lg hover:bg-white/10"
              >
                <div>
                  <h3 className="text-xl mb-1 group-hover:text-white/90 transition">
                    {project.name}
                  </h3>
                  <span className="text-white/30 text-sm">{project.category}</span>
                </div>
                <span className="text-white/20 text-lg group-hover:text-white/40 transition">
                  {project.year}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group hidden lg:block"
        >
          <div className="relative overflow-hidden rounded-2xl h-[450px] w-[500px] border border-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>


            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/80 hover:text-white transition z-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Dot indicators with animations */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === index 
                      ? 'bg-white w-6' 
                      : 'bg-white/40 hover:bg-white/60 w-2'
                  }`}
                />
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 text-xs z-20"
            >
              {currentImage + 1} / {images.length}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}