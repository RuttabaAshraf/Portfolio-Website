import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe, Linkedin, Mail } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#08090C]/90 backdrop-blur-md border-b border-[#1F2430]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Signature-style Wordmark like in Dribbble reference */}
        <a
          href="#home"
          className="text-2xl sm:text-3xl font-signature text-white hover:text-[#FF4D2E] transition-colors tracking-wide"
        >
          Akasha Mehboob
        </a>

        {/* Center: Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A0A6B5]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors py-1 relative hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Circular Outline Social / Action Icons like Dribbble layout */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://www.linkedin.com/in/akasha-mahboob-9a9896305"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <a
            href="#work"
            className="w-9 h-9 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            title="Portfolio Work"
          >
            <Globe className="w-4 h-4" />
          </a>

          <a
            href="mailto:AKASHAMEHBOOB@GMAIL.COM"
            className="w-9 h-9 rounded-full border border-white/20 hover:border-white flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-all"
            title="Email Akasha"
          >
            <Mail className="w-4 h-4" />
          </a>

          <button
            onClick={onContactClick}
            className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#FF4D2E] hover:bg-[#E63D1F] rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-[#FF4D2E] focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C11] border-b border-[#202534] px-6 py-6 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#C0C4CE] hover:text-white py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#1E2331] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/akasha-mahboob-9a9896305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:AKASHAMEHBOOB@GMAIL.COM"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#FF4D2E] rounded-md"
              >
                Let&apos;s Talk
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
