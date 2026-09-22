import React from 'react';
import { ArrowUpRight, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onConnect }) => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#08090C]">
      {/* Background subtle radial ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70vw] max-w-4xl h-[450px] pointer-events-none opacity-20 bg-radial from-[#9333EA]/30 via-[#EA580C]/15 to-transparent blur-3xl" />

      {/* Decorative ambient grid */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2330_1px,transparent_1px),linear-gradient(to_bottom,#1E2330_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full relative z-10 text-center flex flex-col items-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#12151E] border border-[#232838] mb-8 text-xs font-mono tracking-wider text-[#A0A5B1] uppercase shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
          </span>
          <span className="text-[#E0E2EC]">AVAILABLE FOR FULL-TIME &amp; CONTRACT ROLES</span>
        </div>

        {/* Main Greeting Headline: "Meet Akasha Mehboob" */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display tracking-tight text-white leading-[1.08] max-w-4xl">
          <span className="font-light text-[#C9D0E0]">Meet </span>
          <span className="font-extrabold text-white">Akasha Mehboob</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl md:text-2xl text-[#9EA6BA] max-w-2xl font-normal leading-relaxed mt-6">
          Fresh Computer Science Graduate &amp; Aspiring Graphic Designer crafting bold brand identities, visual communication, and digital design systems.
        </p>

        {/* Action Buttons: "Hire Now" coral pill button + "View Portfolio ↗" */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-9">
          <button
            onClick={onConnect}
            className="px-8 py-3.5 bg-[#FF4D2E] hover:bg-[#E63D1F] text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-[#FF4D2E]/25 hover:shadow-[#FF4D2E]/40 active:scale-[0.98] cursor-pointer"
          >
            Hire Now
          </button>

          <button
            onClick={onViewWork}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#12151E] hover:bg-[#1A1F2C] border border-[#242938] hover:border-[#38425C] text-sm font-semibold text-white/90 hover:text-white rounded-xl transition-all duration-200 shadow-sm cursor-pointer group"
          >
            <span>View Portfolio</span>
            <ArrowUpRight className="w-4 h-4 text-[#A0A5B1] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* "Expertise in" App Icons Row (Figma, Xd, Ai, Ps, Ae) */}
        <div className="mt-14 pt-10 border-t border-[#1B1F2B] w-full max-w-xl flex flex-col items-center">
          <div className="text-xs font-mono tracking-widest text-[#7C8598] uppercase mb-4">
            Expertise in
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {/* 1. Figma Logo */}
            <div
              className="w-12 h-12 rounded-xl bg-[#14161F] border border-[#242938] flex items-center justify-center hover:border-[#38425C] transition-all hover:scale-105 shadow-sm"
              title="Figma"
            >
              <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
              </svg>
            </div>

            {/* 2. Adobe XD */}
            <div
              className="w-12 h-12 rounded-xl bg-[#470137] border border-[#7A025E]/60 flex items-center justify-center font-bold text-xs font-mono text-[#FF61F6] hover:scale-105 transition-all shadow-sm"
              title="Adobe XD"
            >
              Xd
            </div>

            {/* 3. Adobe Illustrator */}
            <div
              className="w-12 h-12 rounded-xl bg-[#330000] border border-[#6B0000]/60 flex items-center justify-center font-bold text-xs font-mono text-[#FF9A00] hover:scale-105 transition-all shadow-sm"
              title="Adobe Illustrator"
            >
              Ai
            </div>

            {/* 4. Adobe Photoshop */}
            <div
              className="w-12 h-12 rounded-xl bg-[#001E36] border border-[#003B6B]/60 flex items-center justify-center font-bold text-xs font-mono text-[#31A8FF] hover:scale-105 transition-all shadow-sm"
              title="Adobe Photoshop"
            >
              Ps
            </div>

            {/* 5. Adobe After Effects */}
            <div
              className="w-12 h-12 rounded-xl bg-[#00005B] border border-[#000099]/60 flex items-center justify-center font-bold text-xs font-mono text-[#9999FF] hover:scale-105 transition-all shadow-sm"
              title="Adobe After Effects"
            >
              Ae
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-10">
          <a
            href="#work"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#10131B] hover:bg-[#171B26] border border-[#232839] text-xs font-medium text-[#C4CBDB] hover:text-white transition-all shadow-md group cursor-pointer"
          >
            <span>Scroll down to explore work</span>
            <ChevronDown className="w-4 h-4 text-[#FF4D2E] group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
