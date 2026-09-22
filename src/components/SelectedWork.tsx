import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS, ProjectCaseStudy } from '../data/portfolioData';

interface SelectedWorkProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'branding' | 'packaging' | 'ui' | 'campaign'>('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.categorySlug === activeFilter);

  return (
    <section id="work" className="py-24 border-b border-[#1E222B] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-semibold">
                PORTFOLIO SHOWCASE
              </span>
              <span className="text-[#4E5669]">&middot;</span>
              <span className="text-xs font-mono text-[#8C94A7] uppercase tracking-wider">
                SAMPLE &amp; CONCEPT PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              SELECTED WORK.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-[#9FA6B8] leading-relaxed">
            A curated collection of sample projects created to demonstrate practical design ability across branding, packaging, digital products, campaigns, and visual communication.
          </p>
        </div>

        {/* Interactive Filter Tabs (Functional buttons per constitution) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {[
            { id: 'all', label: 'All Projects (6)' },
            { id: 'branding', label: 'Brand Identity' },
            { id: 'packaging', label: 'Packaging' },
            { id: 'ui', label: 'UI / Digital' },
            { id: 'campaign', label: 'Campaigns & Posters' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-white text-black shadow-sm'
                  : 'bg-[#12151D] text-[#8E96A8] hover:text-white hover:bg-[#1A1E29] border border-[#1E2331]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Project Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="group p-6 sm:p-8 rounded-2xl bg-[#0F1218] border border-[#1E2330] hover:border-[#343D52] transition-all duration-300"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Container */}
                  <div
                    className={`lg:col-span-7 ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div
                      onClick={() => onSelectProject(project)}
                      className="relative aspect-video rounded-xl overflow-hidden bg-[#0A0C10] border border-[#202534] cursor-pointer group/img"
                    >
                      <img
                        src={project.heroImage}
                        alt={`${project.title} - ${project.subtitle}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2">
                          <span>EXPLORE FULL CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4 text-[#FF4D2E]" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Top Metadata: Zero-Pill Clean Unboxed Text */}
                    <div>
                      <div className="flex items-center gap-3 text-xs font-mono text-[#8C94A7] mb-3">
                        <span className="text-[#FF4D2E] font-bold">
                          {project.number}
                        </span>
                        <span aria-hidden="true">&middot;</span>
                        <span className="uppercase tracking-wider">
                          {project.category}
                        </span>
                      </div>

                      <div className="inline-block text-[11px] font-mono tracking-widest text-[#FF4D2E] font-semibold mb-2">
                        {project.label}
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight mb-2 group-hover:text-[#FF4D2E] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#B2B9CA] uppercase tracking-wider font-display mb-4">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-[#8F97A9] leading-relaxed mb-6">
                        {project.shortDescription}
                      </p>

                      {/* Deliverables snippet */}
                      <div className="border-t border-[#1C212E] pt-4 mb-6">
                        <span className="text-[11px] font-mono text-[#6A7285] uppercase block mb-2">
                          KEY DELIVERABLES
                        </span>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#BAC1D2] font-mono">
                          {project.deliverables.slice(0, 3).map((item, i) => (
                            <span key={i} className="flex items-center gap-1.5">
                              <span className="text-[#FF4D2E]">&bull;</span>
                              <span>{item}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* View Case Study Button */}
                    <div>
                      <button
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1A1E29] hover:bg-[#FF4D2E] border border-[#2B3142] hover:border-[#FF4D2E] rounded-md transition-all duration-200 cursor-pointer shadow-sm"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
