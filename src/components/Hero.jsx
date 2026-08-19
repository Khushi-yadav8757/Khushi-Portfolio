import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Rocket } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden relative">
      
      {/* Background radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left text column */}
        <div className="flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-sm text-gray-300">Available for work</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 leading-[1.1] text-white"
          >
            Hi, I'm Khushi <br />
            <span className="text-chrome animated-gradient-text">B.Tech CSE </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-400 text-lg md:text-xl max-w-xl font-sans leading-relaxed mb-10"
          >
            Khushi K. Yadav
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="group animated-gradient-button flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white rounded-full transition-all hover:scale-105 active:scale-95">
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://drive.google.com/file/d/1wveXuPyXmstMrVPMhoMOruNls6RAoio2/view?usp=sharing" target="_blank" className="group flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full transition-all hover:bg-white/10">
              Resume
              <Download className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mt-12"
          >
            <a href="https://github.com/Khushi-yadav8757" target="_blank" rel="noreferrer" className="animated-gradient-link text-gray-400 hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/khushi-yadav8757/" target="_blank" rel="noreferrer" className="animated-gradient-link text-gray-400 hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://x.com/KhushiYadav79" target="_blank" rel="noreferrer" className="animated-gradient-link text-gray-400 hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Right image column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative z-40 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="profile-photo-shell w-full h-full p-3 bg-transparent border-2 border-white/25 rounded-full flex items-center justify-center">
              <img 
                src="/profile2.jpeg" 
                alt="Khushi Yadav" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsHovered(true)}
                onTouchEnd={() => setIsHovered(false)}
                className="w-full h-full object-cover rounded-full transition-all duration-500 cursor-pointer"
                style={{ filter: 'none', opacity: 1, mixBlendMode: 'normal' }}
              />
            </div>
            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-10 -left-6 sm:-bottom-12 sm:-left-8 bg-black/80 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md overflow-hidden group cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-4 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-white/5 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-6 h-6 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-500" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Technology Explorer</span>
                  <span className="text-xs text-gray-400 font-mono tracking-wider">Learn → Build → Grow</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
