import React from 'react';
import { ArrowUp, Mail, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-[#08090C] text-[#8C93A5] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-[#181C26] pb-12 mb-10">
          <div>
            <a
              href="#home"
              className="text-xl sm:text-2xl font-black text-white font-display uppercase tracking-wider block hover:text-[#FF4D2E] transition-colors"
            >
              AKASHA MEHBOOB
            </a>
            <p className="text-xs font-mono text-[#A2AABF] mt-1 uppercase tracking-wider">
              GRAPHIC DESIGNER &times; VISUAL CREATIVE
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap items-center gap-6 text-xs font-mono">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#cs-design" className="hover:text-white transition-colors">CS &times; Design</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="self-start md:self-auto p-3 rounded-lg bg-[#11141D] hover:bg-[#1A1F2C] text-white border border-[#202534] transition-colors cursor-pointer flex items-center gap-2 text-xs font-mono"
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF4D2E]" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#636C80]">
          <div>
            &copy; 2026 Akasha Mehboob. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:AKASHAMEHBOOB@GMAIL.COM"
              className="text-[#9FA7BB] hover:text-[#FF4D2E] transition-colors"
            >
              AKASHAMEHBOOB@GMAIL.COM
            </a>
            <span>&middot;</span>
            <a
              href="https://www.linkedin.com/in/akasha-mahboob-9a9896305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9FA7BB] hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
