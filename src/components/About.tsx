import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AboutProps {
  onExploreWork: () => void;
}

export const About: React.FC<AboutProps> = ({ onExploreWork }) => {
  const coreDisciplines = [
    { name: 'Brand Identity', desc: 'Distinctive logos, typography lockups, and complete brand systems.' },
    { name: 'Visual Communication', desc: 'Editorial layouts, hierarchies, and storytelling that clarify ideas.' },
    { name: 'Packaging Design', desc: 'Tactile product packaging, print die lines, and retail box systems.' },
    { name: 'Social Media Design', desc: 'Coordinated campaign feeds, carousels, and high-impact digital stories.' },
    { name: 'UI Visual Design', desc: 'Digital interfaces, landing pages, and component design tokens.' },
    { name: 'Typography', desc: 'Curated font pairings, typographic pacing, and grid architecture.' },
  ];

  return (
    <section id="about" className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold mb-2">
            ABOUT AKASHA
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            DESIGNING WITH PURPOSE.
          </h2>
        </div>

        {/* Narrative & Quote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-[#A2AABF] text-base sm:text-lg leading-relaxed">
            <p>
              I am a fresh Computer Science graduate transitioning my technical discipline into full-time Graphic Design and Visual Communication.
            </p>
            <p>
              My computer science education instilled a rigorous framework for structured problem-solving, digital product architecture, and user psychology. In parallel, my visual design practice is where I translate complex thoughts, brand narratives, and functional goals into evocative, cohesive aesthetics.
            </p>
            <p className="text-white font-medium">
              Rather than viewing technology and art as separate domains, I treat them as complementary lenses: logic provides the foundation, and visual design delivers the human connection.
            </p>

            <div className="pt-2">
              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF4D2E] hover:text-white transition-colors cursor-pointer"
              >
                <span>EXPLORE MY RECENT PROJECTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Highlight Quote Box */}
          <div className="lg:col-span-5 bg-[#12141B] border border-[#222734] rounded-xl p-8 relative">
            <span className="text-4xl text-[#FF4D2E] font-serif leading-none block mb-4">&ldquo;</span>
            <blockquote className="text-lg sm:text-xl font-medium text-white leading-snug font-display mb-6">
              Good design isn&apos;t only about looking beautiful. It&apos;s about communicating the right idea to the right audience.
            </blockquote>
            <div className="border-t border-[#232837] pt-4 flex items-center justify-between">
              <div>
                <div className="text-white font-semibold text-xs font-display">AKASHA MEHBOOB</div>
                <div className="text-[10px] text-[#7D8599] font-mono">CS GRADUATE &middot; VISUAL CREATIVE</div>
              </div>
              <span className="text-[10px] font-mono text-[#FF4D2E] uppercase tracking-wider hidden sm:inline">
                PHILOSOPHY
              </span>
            </div>
          </div>
        </div>

        {/* Core Disciplines Grid */}
        <div>
          <h3 className="text-xs font-mono tracking-widest text-[#7B8396] uppercase mb-6 font-semibold">
            AREAS OF FOCUS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreDisciplines.map((item, idx) => (
              <div
                key={item.name}
                className="p-6 rounded-lg bg-[#0F1117] border border-[#202430] hover:border-[#384055] transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#FF4D2E] font-medium">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-mono text-[#575F73]">CORE</span>
                </div>
                <h4 className="text-base font-bold text-white font-display mb-2 group-hover:text-[#FF4D2E] transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#8F97AA] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
