import { useState, useEffect } from "react";
import Hyperspeed from "./components/ui/Hyperspeed";
import { hyperspeedPresets } from "./components/ui/HyperSpeedPresets";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const [offset, setOffset] = useState(1);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 640) {
        setOffset(0.9);
      } else if (window.innerWidth < 1024) {
        setOffset(0.48);
      } else {
        setOffset(0.45);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div className="relative w-full bg-black text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <Hyperspeed effectOptions={hyperspeedPresets.one} />
      </div>

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ScrollToTop />
      </main>
    </div>
  );
}

export default App;