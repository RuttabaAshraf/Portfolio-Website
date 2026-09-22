import React from 'react';
import { WHY_WORK_WITH_ME, CERTIFICATIONS } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const EducationAndWhy: React.FC = () => {
  return (
    <section className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20">
        {/* Education Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              ACADEMIC BACKGROUND
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-8">
            EDUCATION.
          </h2>

          <div className="p-8 sm:p-10 rounded-2xl bg-[#0F1219] border border-[#202534] flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#191D28] border border-[#2B3245] flex items-center justify-center text-[#FF4D2E]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    BACHELOR&apos;S DEGREE IN COMPUTER SCIENCE
                  </h3>
                  <div className="text-xs font-mono text-[#8C94A7]">
                    Degree Completed &middot; Graduate
                  </div>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#9FA8BD] leading-relaxed pt-2">
                &ldquo;My Computer Science background gives me a strong foundation in technology, structured problem solving, and digital products &mdash; skills I bring into my design practice.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              PROFESSIONAL CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            CERTIFICATIONS.
          </h2>
          <p className="text-sm sm:text-base text-[#9FA7BA] max-w-2xl mb-10 leading-relaxed">
            Verified professional credentials and continuous training in user experience design, foundational visual principles, and creative digital toolchains.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-7 rounded-2xl bg-[#0F1218] border border-[#202534] hover:border-[#384055] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Header: Issuer and Badge */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#1D212D] pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#171B26] border border-[#282F40] flex items-center justify-center text-[#FF4D2E]">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-white block">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-[#7A8398]">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#10B981]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white font-display tracking-tight mb-3 group-hover:text-[#FF4D2E] transition-colors leading-snug">
                    {cert.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#8F98AB] leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Skills Acquired */}
                <div className="pt-4 border-t border-[#1C202C]">
                  <span className="text-[10px] font-mono text-[#6A7387] uppercase tracking-wider block mb-2">
                    CORE COMPETENCIES:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#141722] border border-[#222838] text-[11px] font-mono text-[#BAC2D5]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Work With Me Subsection */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
              VALUE PROPOSITION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight mb-4">
            WHY WORK WITH ME?
          </h2>
          <p className="text-sm sm:text-base text-[#9FA7BA] max-w-xl mb-12">
            Five core traits and working principles that guide my approach to every creative brief.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_WORK_WITH_ME.map((card) => (
              <div
                key={card.number}
                className="p-8 rounded-2xl bg-[#0F1218] border border-[#202534] hover:border-[#384055] transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#FF4D2E] font-bold">
                      {card.number}
                    </span>
                    <span className="text-xs font-mono text-[#545C6F]">PRINCIPLE</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-display mb-3 group-hover:text-[#FF4D2E] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8F98AB] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1C202C] text-[11px] font-mono text-[#6A7387]">
                  PROFESSIONAL COMMITMENT
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
