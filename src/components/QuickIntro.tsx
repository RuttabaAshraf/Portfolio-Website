import React from 'react';

export const QuickIntro: React.FC = () => {
  return (
    <section id="intro" className="py-20 border-y border-[#1E222B] bg-[#0C0E12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display leading-tight tracking-tight">
              DESIGN THAT COMMUNICATES. <br />
              <span className="text-[#FF4D2E]">CREATIVITY THAT SOLVES.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-[#9EA5B6] leading-relaxed font-normal">
              I combine creative thinking with structured problem-solving to create visual identities, digital experiences, and meaningful communication.
            </p>

            {/* Zero-Pill clean unboxed text with typographic separators */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono tracking-wider text-[#BAC1D2] font-semibold pt-2">
              <span className="text-white hover:text-[#FF4D2E] transition-colors">BRANDING</span>
              <span className="text-[#4E5669]" aria-hidden="true">&middot;</span>
              <span className="text-white hover:text-[#FF4D2E] transition-colors">DIGITAL DESIGN</span>
              <span className="text-[#4E5669]" aria-hidden="true">&middot;</span>
              <span className="text-white hover:text-[#FF4D2E] transition-colors">UI</span>
              <span className="text-[#4E5669]" aria-hidden="true">&middot;</span>
              <span className="text-white hover:text-[#FF4D2E] transition-colors">SOCIAL MEDIA</span>
              <span className="text-[#4E5669]" aria-hidden="true">&middot;</span>
              <span className="text-white hover:text-[#FF4D2E] transition-colors">PACKAGING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
