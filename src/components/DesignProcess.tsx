import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CheckCircle2, ChevronRight, Compass } from 'lucide-react';

export const DesignProcess: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 border-b border-[#1E222B] bg-[#0A0C11] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              METHODOLOGY &amp; WORKFLOW
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            DESIGN PROCESS.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FA7BA] max-w-xl">
            A structured 5-stage creative process that ensures intentional design decisions, informed by research and refined through iteration.
          </p>
        </div>

        {/* Interactive Step Navigator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#181C26] border-[#FF4D2E] shadow-lg shadow-[#FF4D2E]/10'
                    : 'bg-[#0E1118] border-[#1E2331] hover:border-[#323A4D] hover:bg-[#131620]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-[#FF4D2E]' : 'text-[#6A7387]'
                    }`}
                  >
                    STEP {step.step}
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D2E]" />}
                </div>
                <div className="text-sm font-bold text-white font-display">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#0F1219] border border-[#202534] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#8C94A7]">
              <span className="text-[#FF4D2E] font-bold">PHASE {activeStep.step} OF 05</span>
              <span>&middot;</span>
              <span className="uppercase tracking-wider">CREATIVE EXECUTION</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-display">
              {activeStep.title}
            </h3>

            <p className="text-base sm:text-lg text-[#FF4D2E] font-medium font-display">
              {activeStep.summary}
            </p>

            <p className="text-sm sm:text-base text-[#9FA8BD] leading-relaxed pt-2">
              {activeStep.details}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#141722] rounded-xl p-6 border border-[#222838] space-y-4">
            <div className="text-xs font-mono text-[#7B8498] uppercase">
              DELIVERABLE OUTPUT AT THIS STAGE:
            </div>
            <div className="space-y-2.5 text-xs text-[#BAC1D2] font-mono">
              {activeStepIndex === 0 && (
                <>
                  <div className="flex items-center gap-2">&bull; Project creative brief</div>
                  <div className="flex items-center gap-2">&bull; Audience persona mapping</div>
                  <div className="flex items-center gap-2">&bull; Communication goals sheet</div>
                </>
              )}
              {activeStepIndex === 1 && (
                <>
                  <div className="flex items-center gap-2">&bull; Competitive landscape audit</div>
                  <div className="flex items-center gap-2">&bull; Visual moodboard curation</div>
                  <div className="flex items-center gap-2">&bull; Typography specimen studies</div>
                </>
              )}
              {activeStepIndex === 2 && (
                <>
                  <div className="flex items-center gap-2">&bull; 3 distinct visual directions</div>
                  <div className="flex items-center gap-2">&bull; Logo sketches &amp; mark variants</div>
                  <div className="flex items-center gap-2">&bull; Primary color palette tests</div>
                </>
              )}
              {activeStepIndex === 3 && (
                <>
                  <div className="flex items-center gap-2">&bull; Vectorized graphic assets</div>
                  <div className="flex items-center gap-2">&bull; High-fidelity UI &amp; packaging</div>
                  <div className="flex items-center gap-2">&bull; Production mockup generation</div>
                </>
              )}
              {activeStepIndex === 4 && (
                <>
                  <div className="flex items-center gap-2">&bull; Print-ready CMYK die lines</div>
                  <div className="flex items-center gap-2">&bull; Digital RGB export kits</div>
                  <div className="flex items-center gap-2">&bull; Brand style guideline PDF</div>
                </>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#1E2331] hover:bg-[#FF4D2E] rounded transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                <span>NEXT STAGE</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
