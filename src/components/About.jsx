import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2, FolderKanban } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
              Turning Ideas Into <br/>
              <span className="text-gray-500">Digital Experiences.</span>
            </h2>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-sans">
              <p>
                I'm Khushi Kumari Yadav, passionate about technology, creativity, and building meaningful digital experiences. I enjoy turning ideas into practical solutions and exploring new ways to solve real-world problems through technology.
              </p>
              <p>
                I'm always curious to learn, experiment with new ideas, and take on challenges that help me grow. I believe in continuous learning, creating with purpose, and improving with every project I work on.
              </p>
              <p>
                My goal is to build impactful products, contribute to innovative projects, and create solutions that make a real difference.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <FolderKanban className="w-6 h-6 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-1">4+</div>
                <div className="text-sm text-gray-400">Projects Built</div>
              </div>
              <div className="p-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
                <Briefcase className="w-6 h-6 text-white mb-3" />
                <div className="text-3xl font-bold text-white mb-1">3</div>
                <div className="text-sm text-gray-400">Internship Experiences</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-white/5 rounded-3xl -rotate-6 transform origin-bottom-left transition-transform hover:rotate-0 duration-500 ease-out border border-white/10 z-0"></div>
            <div className="relative z-10 bg-[#121212] border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Code2 className="w-5 h-5 text-gray-400" />
                <span className="font-mono text-sm text-gray-400 tracking-wider">CORE READOUTS</span>
              </div>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">01</span>
                  <p className="text-gray-300">Data Analytics & Visualization</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">02</span>
                  <p className="text-gray-300">Web Development</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">03</span>
                  <p className="text-gray-300">AI & Machine Learning</p>
                </li>
                <li className="flex gap-4">
                  <span className="text-white font-mono opacity-50">04</span>
                  <p className="text-gray-300">Real-World Problem Solving</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
