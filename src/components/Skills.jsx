import { useState } from "react";

export default function Skills() {
  const [active, setActive] = useState(null);

  const images = [
    {
      src: "https://i.pinimg.com/736x/d8/d7/6a/d8d76a1860b62922da65a7cd6e667508.jpg",
      style: "top-[5%] left-[2%] -rotate-12",
    },
    {
      src: "https://i.pinimg.com/736x/31/f4/53/31f453a3b1bbe02a304023b3b5c8310e.jpg",
      style: "top-[28%] left-[30%] rotate-6",
    },
    {
      src: "https://i.pinimg.com/736x/83/eb/d4/83ebd4046defc73112d5c842fc10f737.jpg",
      style: "bottom-[8%] left-[10%] -rotate-8",
    },
    {
      src: "https://i.pinimg.com/736x/68/18/21/681821e2cde1513ad23490c3b6ec5f41.jpg",
      style: "bottom-[0%] right-[0%] rotate-12",
    },
    {
      src: "https://i.pinimg.com/736x/66/3c/08/663c086cee11c9055a567289d97574e0.jpg",
      style: "top-[0%] right-[15%] rotate-10",
    },
    {
      src: "https://i.pinimg.com/736x/41/aa/03/41aa03f4876c3cbbd71c36752c3cd420.jpg",
      style: "bottom-[20%] right-[30%] -rotate-10",
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden min-h-screen bg-black text-white py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 md:px-16">
        <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
          <div className="relative w-[90vw] max-w-[600px] h-[60vw] max-h-[600px]">
            {images.map((img, i) => (
              <img
                key={i}
                src={img.src}
                onClick={() => setActive(i)}
                className={`
                  absolute rounded-xl cursor-pointer
                  transition-all duration-500 hover:scale-110 hover:z-30 hover:rotate-0
                  hover:shadow-2xl hover:shadow-white/20 border border-white/10
                  ${img.style}
                  ${active === i ? "z-20 scale-110 shadow-2xl shadow-white/20 border-white/30" : "z-10"}
                `}
                style={{
                  width: "clamp(140px, 22vw, 220px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/2 text-center lg:text-left space-y-8">
          <span className="text-white/40 text-xs tracking-[0.3em]">EXPERTISE</span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
            Crafting beautiful
            <span className="block gradient-text">digital solutions</span>
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 pt-4">
            I craft fast, responsive, and visually engaging applications using modern 
            web technologies. From intuitive user interfaces to robust backend systems, 
            I focus on delivering scalable solutions with exceptional user experience.
          </p>

          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-8">
            {['React', 'Node.js', 'TypeScript', 'AI/ML', 'Tailwind'].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-sm tracking-wider hover:bg-white/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}