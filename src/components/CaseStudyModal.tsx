import React, { useEffect, useState } from 'react';
import { X, ArrowUpRight, Copy, Check, Layers, Palette, Type, Compass, Target } from 'lucide-react';
import { ProjectCaseStudy } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0E1117] border border-[#232938] rounded-2xl shadow-2xl text-[#DDE1EC] focus:outline-none"
        role="dialog"
        aria-modal="true"
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E1117]/95 backdrop-blur-md border-b border-[#202533]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-[#FF4D2E] font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-[#4E5669]">&middot;</span>
            <span className="text-xs font-mono text-[#8C94A7] uppercase tracking-wider">
              {project.label}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8C94A7] hover:text-white hover:bg-[#1E2330] rounded-lg transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-10 space-y-12">
          {/* Hero Banner Area */}
          <div>
            <div className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold mb-2">
              {project.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-3">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl font-medium text-[#BAC1D2] font-display mb-6">
              {project.subtitle}
            </p>

            {/* Realistic Mockup Showcase */}
            <div className="relative rounded-xl overflow-hidden border border-[#232938] bg-[#090A0D] aspect-video w-full group">
              <img
                src={project.heroImage}
                alt={`${project.title} Design Presentation Mockup`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback container if local image fails
                  const target = e.target as HTMLElement;
                  target.style.display = 'none';
                }}
              />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/75 backdrop-blur-sm rounded text-[11px] font-mono text-white/80">
                REALISTIC PRODUCTION MOCKUP
              </div>
            </div>
          </div>

          {/* Special CS + Design highlight if SYNQ */}
          {project.id === 'synq' && (
            <div className="p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#10B981]/10 via-[#10B981]/5 to-transparent border border-[#10B981]/30">
              <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] font-bold uppercase mb-2">
                <Target className="w-4 h-4" />
                <span>DESIGN + TECHNOLOGY BRIDGE</span>
              </div>
              <blockquote className="text-base sm:text-lg text-white font-medium italic mb-2">
                &ldquo;My Computer Science background helps me understand digital products and technology, while my design practice helps me communicate those products visually and intuitively.&rdquo;
              </blockquote>
              <p className="text-xs text-[#9FA8BC] font-mono">
                Akasha Mehboob &middot; Synthesizing Computational Thinking with Visual System Design
              </p>
            </div>
          )}

          {/* Quick Spec Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-xl bg-[#13161F] border border-[#202533]">
            <div>
              <span className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                PROJECT TYPE
              </span>
              <span className="text-sm font-semibold text-white font-display">
                {project.label}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                TOOLS USED
              </span>
              <span className="text-sm font-semibold text-white font-display">
                {project.toolsUsed.join(' · ')}
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#7A8398] uppercase block mb-1">
                CORE DELIVERABLES
              </span>
              <span className="text-sm font-semibold text-white font-display">
                {project.deliverables.length} Key Deliverables
              </span>
            </div>
          </div>

          {/* 01 & 02: Concept & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-xl bg-[#12151D] border border-[#202635]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase mb-3">
                <Compass className="w-4 h-4" />
                <span>01. THE CONCEPT</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-[#A0A8BC] leading-relaxed">
                {project.concept}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#12151D] border border-[#202635]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase mb-3">
                <Target className="w-4 h-4" />
                <span>02. THE CHALLENGE</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-3">
                Strategic Problem
              </h3>
              <p className="text-sm text-[#A0A8BC] leading-relaxed mb-4">
                {project.challenge}
              </p>
              <div className="p-3 bg-[#0A0C10] rounded border border-[#1F2432] text-xs font-mono text-[#C4CAD8]">
                <span className="text-[#FF4D2E] font-bold mr-1.5">Question:</span>
                &ldquo;{project.challengeQuestion}&rdquo;
              </div>
            </div>
          </div>

          {/* 03 & 04: Research & Creative Direction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase block">
                03. RESEARCH &amp; AUDIENCE
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                Informed Visual Decisions
              </h3>
              <p className="text-sm text-[#9FA7BB] leading-relaxed">
                {project.research}
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase block">
                04. CREATIVE DIRECTION
              </span>
              <h3 className="text-xl font-bold text-white font-display">
                Aesthetic Language
              </h3>
              <p className="text-sm text-[#9FA7BB] leading-relaxed">
                {project.creativeDirection}
              </p>
            </div>
          </div>

          {/* 05: Typography System */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#11141C] border border-[#202534] space-y-6">
            <div className="flex items-center justify-between border-b border-[#1E2331] pb-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase">
                <Type className="w-4 h-4" />
                <span>05. TYPOGRAPHY SYSTEM</span>
              </div>
              <span className="text-xs font-mono text-[#7A8398]">EDITORIAL PAIRING</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-[#0A0C10] rounded-lg border border-[#1C212E]">
                <span className="text-[11px] font-mono text-[#7A8398] block mb-1">
                  DISPLAY / HEADINGS
                </span>
                <span className="text-lg font-bold text-white font-display block mb-1">
                  {project.typography.primary}
                </span>
                <p className="text-xs text-[#8A93A7]">
                  Used for high-impact hero lockups and key editorial anchors.
                </p>
              </div>

              <div className="p-4 bg-[#0A0C10] rounded-lg border border-[#1C212E]">
                <span className="text-[11px] font-mono text-[#7A8398] block mb-1">
                  BODY &amp; INTERFACE
                </span>
                <span className="text-lg font-bold text-white font-display block mb-1">
                  {project.typography.secondary}
                </span>
                <p className="text-xs text-[#8A93A7]">
                  Ensures sustained readability, hierarchy, and precision alignment.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#9FA7BA] italic font-mono pt-1">
              Rationale: {project.typography.rationale}
            </p>
          </div>

          {/* 06: Color Palette */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase">
                <Palette className="w-4 h-4" />
                <span>06. CURATED COLOR SYSTEM</span>
              </div>
              <span className="text-xs font-mono text-[#7A8398]">CLICK TO COPY HEX</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.colorPalette.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => handleCopyHex(color.hex)}
                  className="p-4 rounded-xl bg-[#12151D] border border-[#212634] hover:border-[#FF4D2E] transition-all text-left group cursor-pointer"
                >
                  <div
                    className="w-full h-14 rounded-lg mb-3 shadow-inner border border-white/10"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="text-xs font-bold text-white font-display">
                    {color.name}
                  </div>
                  <div className="text-[11px] font-mono text-[#7A8398] flex items-center justify-between mt-1">
                    <span>{color.hex}</span>
                    {copiedHex === color.hex ? (
                      <span className="text-[#10B981] flex items-center gap-0.5">
                        <Check className="w-3 h-3" /> Copied
                      </span>
                    ) : (
                      <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <div className="text-[10px] text-[#868F9F] mt-1.5 leading-tight">
                    {color.role}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 07: Design Development */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#12151D] border border-[#202534] space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold uppercase">
              <Layers className="w-4 h-4" />
              <span>07. DESIGN DEVELOPMENT &amp; EXPLORATION</span>
            </div>
            <h3 className="text-xl font-bold text-white font-display">
              From Concept to System
            </h3>
            <p className="text-sm text-[#A2AABF] leading-relaxed">
              {project.designDevelopment}
            </p>
          </div>

          {/* 08: Final Deliverables Grid */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-[#FF4D2E] font-bold uppercase">
              08. FINAL DELIVERABLES
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.finalDeliverables.map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-lg bg-[#0F1219] border border-[#1F2432]"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#FF4D2E]">
                      SPEC 0{i + 1}
                    </span>
                    <span className="text-xs font-mono text-[#52596C]">DELIVERABLE</span>
                  </div>
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#8F97A9] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 09: Key Takeaway */}
          <div className="p-6 rounded-xl bg-[#141822] border-l-4 border-l-[#FF4D2E] border-y border-r border-[#202635]">
            <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase block mb-1">
              09. KEY TAKEAWAY &amp; PRACTICAL LEARNING
            </span>
            <p className="text-sm sm:text-base text-white font-medium leading-relaxed">
              {project.takeaway}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0E1117]/95 backdrop-blur-md border-t border-[#202533]">
          <span className="text-xs font-mono text-[#7A8398]">
            SAMPLE DESIGN CASE STUDY &middot; AKASHA MEHBOOB
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E29] hover:bg-[#FF4D2E] rounded-md transition-colors cursor-pointer"
          >
            CLOSE CASE STUDY
          </button>
        </div>
      </div>
    </div>
  );
};
