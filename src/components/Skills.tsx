import React from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Palette, Layout, PenTool, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              CAPABILITIES &amp; PROFICIENCY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            WHAT I DO.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FA7BA] max-w-xl">
            A breakdown of my visual design disciplines, digital product workflows, and calibrated software proficiencies.
          </p>
        </div>

        {/* 3-Column Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Graphic Design */}
          <div className="p-8 rounded-2xl bg-[#0F1218] border border-[#202534] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1E2331] pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase">
                  <Palette className="w-4 h-4" />
                  <span>DISCIPLINE 01</span>
                </div>
                <span className="text-xs font-mono text-[#636C7F]">CORE ART</span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-4">
                GRAPHIC DESIGN
              </h3>

              <ul className="space-y-3">
                {SKILLS_DATA.graphicDesign.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between text-xs sm:text-sm text-[#CAD1E2] py-1 border-b border-[#181C26]">
                    <span>{skill}</span>
                    <Check className="w-3.5 h-3.5 text-[#FF4D2E]" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C212E] text-[11px] font-mono text-[#636C80]">
              PRINT &middot; PACKAGING &middot; BRANDING &middot; EDITORIAL
            </div>
          </div>

          {/* Column 2: Digital Design */}
          <div className="p-8 rounded-2xl bg-[#0F1218] border border-[#202534] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1E2331] pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] font-bold uppercase">
                  <Layout className="w-4 h-4" />
                  <span>DISCIPLINE 02</span>
                </div>
                <span className="text-xs font-mono text-[#636C7F]">DIGITAL UI</span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-4">
                DIGITAL DESIGN
              </h3>

              <ul className="space-y-3">
                {SKILLS_DATA.digitalDesign.map((skill, i) => (
                  <li key={i} className="flex items-center justify-between text-xs sm:text-sm text-[#CAD1E2] py-1 border-b border-[#181C26]">
                    <span>{skill}</span>
                    <Check className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C212E] text-[11px] font-mono text-[#636C80]">
              INTERFACES &middot; LANDING PAGES &middot; DESIGN SYSTEMS
            </div>
          </div>

          {/* Column 3: Software Tools with Honest Proficiency */}
          <div className="p-8 rounded-2xl bg-[#0F1218] border border-[#202534] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#1E2331] pb-4 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] font-bold uppercase">
                  <PenTool className="w-4 h-4" />
                  <span>DISCIPLINE 03</span>
                </div>
                <span className="text-xs font-mono text-[#636C7F]">CALIBRATED</span>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-4">
                TOOLS &amp; PROFICIENCY
              </h3>

              <div className="space-y-4">
                {SKILLS_DATA.tools.map((tool, i) => (
                  <div key={i} className="p-3.5 rounded-lg bg-[#131620] border border-[#1E2433]">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-white font-display">
                        {tool.name}
                      </span>
                      <span
                        className={`text-[11px] font-mono uppercase tracking-wider font-semibold ${
                          tool.level === 'Advanced'
                            ? 'text-[#10B981]'
                            : tool.level === 'Intermediate'
                            ? 'text-[#38BDF8]'
                            : 'text-[#EAB308]'
                        }`}
                      >
                        {tool.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#868F9F] leading-tight">
                      {tool.experience}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#1C212E] text-[11px] font-mono text-[#636C80]">
              HONEST PROFICIENCY RATINGS &middot; ZERO FAKE CLAIMS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
