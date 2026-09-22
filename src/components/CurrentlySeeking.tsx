import React from 'react';
import { TARGET_ROLES } from '../data/portfolioData';
import { ArrowUpRight, Compass, Sparkles } from 'lucide-react';

interface CurrentlySeekingProps {
  onConnect: () => void;
}

export const CurrentlySeeking: React.FC<CurrentlySeekingProps> = ({ onConnect }) => {
  return (
    <section className="py-20 border-b border-[#1E222B] bg-[#0C0E13] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#10131B] border border-[#232938] flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>RECRUITER OVERVIEW</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display tracking-tight leading-tight">
              LOOKING FOR MY FIRST CREATIVE OPPORTUNITY.
            </h2>

            <p className="text-sm sm:text-base text-[#9FA8BD] leading-relaxed">
              &ldquo;I&apos;m looking for an opportunity where I can contribute my creativity, learn from experienced designers, and grow through real-world projects.&rdquo;
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#7B8497] uppercase block mb-3">
                OPEN TO ROLES ACROSS:
              </span>
              <div className="flex flex-wrap gap-2">
                {TARGET_ROLES.map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1 rounded bg-[#171B26] border border-[#272E40] text-xs font-mono text-[#D2D7E4]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-4">
            <button
              onClick={onConnect}
              className="px-8 py-4 bg-[#FF4D2E] hover:bg-[#E63D1F] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all duration-200 shadow-xl shadow-[#FF4D2E]/20 flex items-center gap-2 cursor-pointer"
            >
              <span>LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-[#7A8398]">
              Available for full-time, contract &amp; internship
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
