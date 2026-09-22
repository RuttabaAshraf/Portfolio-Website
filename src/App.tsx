/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickIntro } from './components/QuickIntro';
import { About } from './components/About';
import { SelectedWork } from './components/SelectedWork';
import { CsAndDesign } from './components/CsAndDesign';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { DesignProcess } from './components/DesignProcess';
import { EducationAndWhy } from './components/EducationAndWhy';
import { CurrentlySeeking } from './components/CurrentlySeeking';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { PROJECTS, ProjectCaseStudy } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSynq = () => {
    const synq = PROJECTS.find((p) => p.id === 'synq');
    if (synq) {
      setSelectedProject(synq);
    }
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#E8E8E6] selection:bg-[#FF4D2E] selection:text-white font-sans">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar onContactClick={() => scrollToSection('contact')} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onViewWork={() => scrollToSection('work')}
          onConnect={() => scrollToSection('contact')}
        />

        {/* 2. Quick Intro */}
        <QuickIntro />

        {/* 3. About Section */}
        <About onExploreWork={() => scrollToSection('work')} />

        {/* 4. Selected Work (6 major self-initiated projects) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Computer Science × Design (Differentiator & SYNQ link) */}
        <CsAndDesign onOpenSynq={handleOpenSynq} />

        {/* 6. Practical Experience & Virtual Experience (Honest architecture) */}
        <Experience />

        {/* 7. Skills & Honest Proficiency Ratings */}
        <Skills />

        {/* 8. Design Process (Interactive 5-stage timeline) */}
        <DesignProcess />

        {/* 9. Education & Why Akasha (5 visual principle cards) */}
        <EducationAndWhy />

        {/* 10. Currently Seeking (Recruiter focus) */}
        <CurrentlySeeking onConnect={() => scrollToSection('contact')} />

        {/* 11. Contact (Direct Mailto, Copy Email, Verified LinkedIn) */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* Detailed Full Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
