function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen text-white px-6 md:px-16 py-8 flex flex-col justify-end relative z-10">
      
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between w-full mb-16">
        <div className="flex-1">
          <div className="text-sm tracking-widest text-gray-400 space-y-1 mb-6 lg:mb-8 transition hover:text-white font-rajdhani">
            <p>FULL STACK DEVELOPER</p>
          </div>
          <h1 className="text-[70px] sm:text-[110px] md:text-[140px] lg:text-[170px] font-bold leading-none font-orbitron">
            RISHIT<span className="text-purple-600">.</span>
          </h1>
        </div>

        <div className="flex-1 max-w-md mt-10 lg:mt-0 space-y-5">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
          </div>
          <p className="text-gray-400 leading-relaxed text-base font-rajdhani">
            I craft full-stack web applications with modern technologies. 
            From responsive frontends to scalable backends — I build digital experiences that perform.
          </p>
          <button 
            onClick={scrollToContact}
            className="border border-gray-500 px-8 py-3 rounded-lg text-sm tracking-wide hover:bg-white hover:text-black transition duration-200 font-rajdhani"
          >
            START A PROJECT
          </button>
        </div>
      </div>

      <div className="text-gray-500 text-sm font-rajdhani">
        © 2026
      </div>
    </section>
  );
}

export default Hero;