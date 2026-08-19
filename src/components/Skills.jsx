import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain,
  FaChartBar,
  FaCode,
  FaCss3Alt,
  FaCuttlefish,
  FaDatabase,
  FaEye,
  FaFileExcel,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiMongodb,
  SiMysql,
  SiOpencv,
  SiPostgresql,
  SiTailwindcss
} from 'react-icons/si';

const Skills = () => {
  const coreSkills = [
    "C", "C++", "HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS",
    "Python", "SQL", "Excel", "Power BI", "MySQL", "PostgreSQL", "MongoDB",
    "Machine Learning", "Computer Vision", "OpenCV", "Git", "GitHub", "VS Code"
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">Tech Stack</h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Mock Orbital Animation Layout */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[800px] mx-auto aspect-square flex items-center justify-center mb-16"
        >
          {/* Center node */}
          <div className="absolute w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center p-[2px] z-30 shadow-[0_0_50px_rgba(255,255,255,0.2)]">
            <div className="animated-gradient-border absolute inset-0 rounded-full animate-[spin_4s_linear_infinite]" />
            <div className="relative w-full h-full bg-black rounded-full flex items-center justify-center z-10 border border-white/10">
              <span className="font-bold text-white tracking-widest text-lg">SKILLS</span>
              <span className="absolute -bottom-6 text-[10px] md:text-xs text-gray-500 tracking-widest font-mono">TECH STACK</span>
            </div>
          </div>
          
          {/* Orbit 1: Inner (6 Items) */}
          <div className="absolute inset-16 sm:inset-24 md:inset-32 lg:inset-44 border-[1px] border-dashed border-white/30 rounded-full" style={{ animation: 'spin 35s linear infinite' }}>
            {/* 0 deg */}
            <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaReact aria-label="React.js" title="React.js" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-cyan-400" />
                 </div>
               </div>
            </div>
            {/* 60 deg */}
            <div className="absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-white to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaJs aria-label="JavaScript" title="JavaScript" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-yellow-300" />
                 </div>
               </div>
            </div>
            {/* 120 deg */}
            <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#38b2ac] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaPython aria-label="Python" title="Python" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-yellow-300" />
                 </div>
               </div>
            </div>
            {/* 180 deg */}
            <div className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#68a063] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaDatabase aria-label="SQL" title="SQL" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-300" />
                 </div>
               </div>
            </div>
            {/* 240 deg */}
            <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#47a248] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaChartBar aria-label="Power BI" title="Power BI" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-yellow-300" />
                 </div>
               </div>
            </div>
            {/* 300 deg */}
            <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 35s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#3ecf8e] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_2s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiMysql aria-label="MySQL" title="MySQL" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-300" />
                 </div>
               </div>
            </div>
          </div>
          
          {/* Orbit 2: Outer (6 Items) */}
          <div className="absolute inset-8 sm:inset-12 md:inset-16 lg:inset-22 border-[1px] border-dashed border-white/30 rounded-full" style={{ animation: 'spin 50s linear infinite reverse' }}>
            {/* 0 deg */}
            <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#e76f00] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaHtml5 aria-label="HTML5" title="HTML5" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-orange-400" />
                 </div>
               </div>
            </div>
            {/* 60 deg */}
            <div className="absolute top-[25%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00599c] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaCss3Alt aria-label="CSS3" title="CSS3" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-400" />
                 </div>
               </div>
            </div>
            {/* 120 deg */}
            <div className="absolute top-[75%] left-[93.3%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#ffde57] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiTailwindcss aria-label="Tailwind CSS" title="Tailwind CSS" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-cyan-300" />
                 </div>
               </div>
            </div>
            {/* 180 deg */}
            <div className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#777bb4] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaFileExcel aria-label="Excel" title="Excel" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-green-400" />
                 </div>
               </div>
            </div>
            {/* 240 deg */}
            <div className="absolute top-[75%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#00758f] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiPostgresql aria-label="PostgreSQL" title="PostgreSQL" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-300" />
                 </div>
               </div>
            </div>
            {/* 300 deg */}
            <div className="absolute top-[25%] left-[6.7%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 50s linear infinite normal' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[#f34f29] to-transparent opacity-50 group-hover:opacity-100 animate-[spin_3s_linear_infinite_reverse]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiMongodb aria-label="MongoDB" title="MongoDB" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-green-400" />
                 </div>
               </div>
            </div>
          </div>
          
          {/* Orbit 3: Outer (8 Items) */}
          <div className="absolute inset-0 sm:inset-0 md:inset-0 border-[1px] border-dashed border-white/30 rounded-full" style={{ animation: 'spin 65s linear infinite' }}>
            {/* 0 deg */}
            <div className="absolute top-[0%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaBrain aria-label="Machine Learning" title="Machine Learning" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-orange-400" />
                 </div>
               </div>
            </div>
            {/* 45 deg */}
            <div className="absolute top-[14.6%] left-[85.4%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaEye aria-label="Computer Vision" title="Computer Vision" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-yellow-300" />
                 </div>
               </div>
            </div>
            {/* 90 deg */}
            <div className="absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-orange-500 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiOpencv aria-label="OpenCV" title="OpenCV" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-purple-400" />
                 </div>
               </div>
            </div>
            {/* 135 deg */}
            <div className="absolute top-[85.4%] left-[85.4%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaGitAlt aria-label="Git" title="Git" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-orange-400" />
                 </div>
               </div>
            </div>
            {/* 180 deg */}
            <div className="absolute top-[100%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaGithub aria-label="GitHub" title="GitHub" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-white" />
                 </div>
               </div>
            </div>
            {/* 225 deg */}
            <div className="absolute top-[85.4%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-gray-400 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaCode aria-label="VS Code" title="VS Code" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-400" />
                 </div>
               </div>
            </div>
            {/* 270 deg */}
            <div className="absolute top-[50%] left-[0%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <FaCuttlefish aria-label="C" title="C" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-400" />
                 </div>
               </div>
            </div>
            {/* 315 deg */}
            <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14">
               <div className="relative w-full h-full rounded-full flex items-center justify-center p-[1px] overflow-hidden group shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] transition-all duration-300" style={{ animation: 'spin 65s linear infinite reverse' }}>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-transparent opacity-50 group-hover:opacity-100 animate-[spin_4s_linear_infinite]" />
                 <div className="relative w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center z-10 group-hover:bg-[#121212] transition-colors">
                   <SiCplusplus aria-label="C++" title="C++" className="w-4 h-4 md:w-5 md:h-5 lg:w-7 lg:h-7 text-blue-400" />
                 </div>
               </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto z-10 relative">
          {coreSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-gray-300 font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
