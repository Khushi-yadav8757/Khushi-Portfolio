import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin, FaTwitter as Twitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="relative border-t border-white/5 bg-black pt-24 pb-12 overflow-hidden">
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let's connect</h2>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href="mailto:khushiyad152@gmail.com" className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-full font-medium transition-all duration-300">
            <Mail className="w-5 h-5" />
            Say Hello
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/Khushi-yadav8757" target="_blank" rel="noreferrer" className="animated-gradient-link w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/khushi-yadav8757/" target="_blank" rel="noreferrer" className="animated-gradient-link w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://x.com/KhushiYadav79" target="_blank" rel="noreferrer" className="animated-gradient-link w-12 h-12 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all">
            <Twitter className="w-5 h-5" />
          </a>
        </div>

        <div className="font-sans text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Khushi Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
