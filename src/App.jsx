import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import CursorEffect from './components/CursorEffect';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="bg-black min-h-screen text-[#e4e4e7] selection:bg-white selection:text-black font-sans relative isolate">
      <ParticleBackground />
      <div className="relative z-10">
        <CursorEffect />
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
        </main>

        <Contact />
        <Chatbot />
      </div>
    </div>
  );
}

export default App;
