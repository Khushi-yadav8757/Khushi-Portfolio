import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
import BookMeetingModal from './BookMeetingModal';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/10 px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="font-mono font-bold text-white tracking-tighter text-lg">
          <span className="text-gray-400">&gt;_</span> KHUSHI K. YADAV
        </a>
        <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-white hover:text-gray-300 p-1"
          >
            <Menu className="w-6 h-6" />
        </button>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onBookMeeting={() => setIsMeetingModalOpen(true)} />

      {/* Desktop Full-Width Fixed Navbar */}
      <nav className="hidden md:flex fixed top-0 w-full z-50 bg-[#050505]/90 backdrop-blur-lg border-b border-white/10 px-8 lg:px-16 py-4 justify-between items-center">
        <a href="#hero" className="font-mono font-bold text-white tracking-tight text-xl flex items-center gap-1.5">
          <span className="text-gray-400">&gt;_</span> KHUSHI K. YADAV
        </a>
        
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={() => setIsMeetingModalOpen(true)} 
            className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors"
          >
            Book Meeting
          </button>
          
          <a 
            href="https://drive.google.com/file/d/1wveXuPyXmstMrVPMhoMOruNls6RAoio2/view?usp=sharing" 
            rel="noreferrer" 
            className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors"
          >
            Resume
          </a>

          <a 
            href="#contact" 
            className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>

        </div>
      </nav>

      <BookMeetingModal isOpen={isMeetingModalOpen} onClose={() => setIsMeetingModalOpen(false)} />
    </>
  );
};

export default Navbar;
