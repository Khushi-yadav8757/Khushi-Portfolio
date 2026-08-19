import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const Sidebar = ({ isOpen, onClose, onBookMeeting }) => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-[320px] bg-[#0a0a0a] border-l border-white/10 z-50 flex flex-col md:hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <span className="font-mono font-bold text-white tracking-tight text-lg">
                <span className="text-gray-400">&gt;_</span> MENU
              </span>
              <button 
                onClick={onClose} 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col px-8 py-8 gap-5 flex-grow overflow-y-auto">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="text-[16px] font-medium text-gray-400 hover:text-white transition-colors flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </motion.a>
              ))}
            </div>
            
            <div className="p-6 border-t border-white/5 space-y-4">
              <button 
                onClick={() => {
                  onClose();
                  if (onBookMeeting) onBookMeeting();
                }} 
                className="w-full bg-white text-black font-medium text-[15px] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
              >
                Book a Meeting
              </button>
              <a 
                href="https://drive.google.com/file/d/1wveXuPyXmstMrVPMhoMOruNls6RAoio2/view?usp=sharing" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full bg-white/5 text-white font-medium text-[15px] py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
