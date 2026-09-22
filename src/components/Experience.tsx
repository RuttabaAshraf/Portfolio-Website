import React, { useState } from 'react';
import { Briefcase, Award, CheckCircle2, ShieldCheck, Plus, Sparkles, ExternalLink } from 'lucide-react';

export const Experience: React.FC = () => {
  // State allows testing or previewing real experience once completed
  const [showDemoInternship, setShowDemoInternship] = useState(false);

  return (
    <section id="experience" className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              CAREER READINESS
            </span>
            <span className="text-[#4E5669]">&middot;</span>
            <span className="text-xs font-mono text-[#8C94A7] uppercase tracking-wider">
              HONEST &amp; TRANSPARENT DISCLOSURE
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            PRACTICAL EXPERIENCE.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9FA7BA] max-w-2xl leading-relaxed">
            As a fresh Computer Science graduate transitioning into design, I believe in complete transparency: no fabricated company names, inflated titles, or false client claims.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-12">
          {/* Main Experience Container */}
          <div className="p-8 rounded-2xl bg-[#0F1219] border border-[#202534] relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1E2331] pb-6 mb-6">
              <div>
                <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase tracking-wider block mb-1">
                  ROLE STATUS &middot; INCOMING APPLICANT
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  GRAPHIC DESIGN INTERN / JUNIOR DESIGNER
                </h3>
                <div className="text-sm text-[#8E97AA] font-mono mt-1">
                  Ready for Full-Time, Remote, or On-site Placement
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#181C26] border border-[#2A3142] text-xs font-mono text-[#B2B9CA]">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>CLEAN CREDIBILITY RECORD</span>
              </div>
            </div>

            <div className="space-y-4 text-sm text-[#A0A8BD] leading-relaxed mb-6">
              <p>
                My practical design ability is currently substantiated by the <strong>6 comprehensive sample projects</strong> featured in this portfolio, covering brand identity, packaging, UI/UX systems, and social media campaigns.
              </p>
              <p>
                This section is built to house verified industry roles, design apprenticeships, and agency internships as they are completed.
              </p>
            </div>

            {/* Targeted Placement Focus */}
            <div className="border-t border-[#1C212E] pt-6">
              <span className="text-[11px] font-mono text-[#6A7387] uppercase block mb-3">
                PREPARED TO DELIVER THE FOLLOWING RESPONSIBILITIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-[#BAC2D5]">
                {[
                  'Social media graphics & launch campaign sets',
                  'Brand asset systems, logo variants & lockups',
                  'Digital marketing creatives & display banners',
                  'Packaging die lines, labels & print prep',
                  'UI landing pages, wireframes & component kits',
                  'Fast iteration following creative briefs'
                ].map((resp, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded bg-[#13161F] border border-[#1C202C]">
                    <span className="text-[#FF4D2E] font-bold">&bull;</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Tools Ready */}
            <div className="mt-6 pt-4 border-t border-[#1C212E] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8C94A7]">
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold">PRODUCTION TOOLS:</span>
                <span>Photoshop &middot; Illustrator &middot; InDesign &middot; Figma &middot; Canva</span>
              </div>
              <span className="text-[11px] text-[#636C80]">
                Strictly tools with hands-on proficiency
              </span>
            </div>
          </div>

          {/* Virtual Experience Subsection */}
          <div className="p-8 rounded-2xl bg-[#0D1016] border border-[#1E2330]">
            <div className="flex items-center justify-between border-b border-[#1B202C] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase tracking-wider block mb-1">
                  SUBSECTION
                </span>
                <h3 className="text-xl font-bold text-white font-display">
                  VIRTUAL DESIGN EXPERIENCE
                </h3>
              </div>
              <span className="text-xs font-mono text-[#6A7387]">
                SIMULATION &amp; WORKSHOPS
              </span>
            </div>

            <div className="p-6 rounded-xl bg-[#11141D] border border-dashed border-[#293042] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="text-sm font-semibold text-white font-display">
                  VIRTUAL JOB SIMULATION ARCHITECTURE
                </div>
                <p className="text-xs sm:text-sm text-[#8E96A9] max-w-xl">
                  Dedicated container for legitimate virtual job simulations (e.g. Forage, agency design tasks) with verified task deliverables, skills acquired, and verifiable certificate links.
                </p>
                <div className="text-[11px] font-mono text-[#6A7387]">
                  Rule: Never relabeled as employment &middot; Always designated as Virtual Simulation
                </div>
              </div>

              <div className="px-4 py-2 rounded bg-[#181C26] border border-[#252C3D] text-xs font-mono text-[#BAC2D5] whitespace-nowrap">
                OPEN FOR VERIFICATION
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
