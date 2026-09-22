import React from 'react';
import { ArrowUpRight, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';

interface CsAndDesignProps {
  onOpenSynq: () => void;
}

export const CsAndDesign: React.FC<CsAndDesignProps> = ({ onOpenSynq }) => {
  const csPoints = [
    'Structured Logical Thinking & Modular Systems',
    'Complex Problem Solving & State Management',
    'Deep Technology & Digital Architecture Awareness',
    'Component-Driven Design Token Frameworks',
    'Analytical Hierarchy & Data Structure Clarity'
  ];

  const designPoints = [
    'Emotionally Resonant Visual Communication',
    'Creative Exploration & Divergent Thinking',
    'Intentional Typography & Optical Contrast',
    'Holistic Brand Identity & Storytelling Systems',
    'Empathetic, User-Centered Visual Rhythm'
  ];

  return (
    <section id="cs-design" className="py-24 border-b border-[#1E222B] bg-[#0A0C11] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE DIFFERENTIATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-6">
            TWO WORLDS. <br />
            <span className="text-[#FF4D2E]">ONE CREATIVE APPROACH.</span>
          </h2>
          <blockquote className="text-lg sm:text-xl font-medium text-[#D0D6E5] italic font-display">
            &ldquo;I combine the structured thinking of technology with the creative thinking of design.&rdquo;
          </blockquote>
        </div>

        {/* Split Screen Design Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Computer Science Column */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E1118] border border-[#1F2535] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1C2230] pb-4 mb-6">
                <span className="text-xs font-mono text-[#38BDF8] font-bold tracking-widest">
                  01 / COMPUTATION
                </span>
                <span className="text-xs font-mono text-[#586175]">B.S. COMPUTER SCIENCE</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                COMPUTER SCIENCE
              </h3>
              <p className="text-xs sm:text-sm text-[#8892A7] leading-relaxed mb-6">
                A computer science foundation gives me rigorous analytical discipline and an intimate understanding of how digital interfaces execute in the real world.
              </p>

              <ul className="space-y-3">
                {csPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#BAC2D5]">
                    <span className="text-[#38BDF8] mt-0.5 font-mono text-xs">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C2230] text-[11px] font-mono text-[#6A7387]">
              FOUNDATION &middot; STRUCTURE &middot; LOGIC &middot; MODULARITY
            </div>
          </div>

          {/* Center Intersection Symbol */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center p-4">
            <div className="w-14 h-14 rounded-full bg-[#161A24] border border-[#2B3245] flex items-center justify-center shadow-lg my-2">
              <span className="text-2xl font-black text-[#FF4D2E] font-display">×</span>
            </div>
            <span className="text-xs font-mono text-[#7B8397] uppercase tracking-wider mt-2 text-center">
              SYNTHESIS
            </span>
          </div>

          {/* Graphic Design Column */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E1118] border border-[#1F2535] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1C2230] pb-4 mb-6">
                <span className="text-xs font-mono text-[#FF4D2E] font-bold tracking-widest">
                  02 / VISUAL ART
                </span>
                <span className="text-xs font-mono text-[#586175]">GRAPHIC &amp; VISUAL DESIGN</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                DESIGN
              </h3>
              <p className="text-xs sm:text-sm text-[#8892A7] leading-relaxed mb-6">
                My visual practice channels structured thinking into compelling aesthetics, deliberate typography, and evocative storytelling that communicates ideas.
              </p>

              <ul className="space-y-3">
                {designPoints.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#BAC2D5]">
                    <span className="text-[#FF4D2E] mt-0.5 font-mono text-xs">0{idx + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C2230] text-[11px] font-mono text-[#6A7387]">
              EXPRESSION &middot; TYPOGRAPHY &middot; COLOR &middot; HUMAN EXPERIENCE
            </div>
          </div>
        </div>

        {/* Visual Link to SYNQ Project */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121622] to-[#0E1117] border border-[#232A3B] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-block text-[11px] font-mono uppercase tracking-widest text-[#10B981] font-semibold">
              FLAGSHIP CASE STUDY
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
              See this philosophy applied in SYNQ
            </h4>
            <p className="text-xs sm:text-sm text-[#8F98AD] max-w-xl">
              SYNQ is a productivity startup brand identity and 7-screen UI system designed specifically to unite technical product logic with elegant graphic design.
            </p>
          </div>

          <button
            onClick={onOpenSynq}
            className="px-6 py-3 bg-[#10B981] hover:bg-[#0EA271] text-black font-bold text-xs uppercase tracking-wider rounded-md transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg shadow-[#10B981]/20 whitespace-nowrap shrink-0"
          >
            <span>VIEW SYNQ CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
