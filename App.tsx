
import React, { useState, useEffect,createContext } from 'react';
import { Hero } from './components/Hero';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsShowcase } from './components/SkillsShowcase';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PROJECTS, SKILLS } from './data';

import RippleCursor from './components/ui/RippleCursor'

import {Skiper16} from "./components/ui/skiper-ui/skiper16"

import { LoadingScreen } from './components/landingScreen';


import { FAQSection } from './components/FAQsection';



export const globalContext = createContext()

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // loading screen 
  const [isLoading, setIsLoading] = useState(true);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const filteredProjects = activeFilter 
    ? PROJECTS.filter(p => p.tags.includes(activeFilter) || p.category === activeFilter)
    : selectedSkill 
      ? PROJECTS.filter(p => SKILLS.find(s => s.id === selectedSkill)?.projects.includes(p.id))
      : PROJECTS;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <globalContext.Provider value={{isProjectModalOpen,setIsProjectModalOpen}}>
      {/* overflow-x-hidden */}
    <div className="min-h-screen relative   bg-[#0f0f0f] text-white">
         


        
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}


      <div className={`transition-all duration-[1500ms] cubic-bezier(0.2, 0.8, 0.2, 1) bg-black ${
        isLoading ? 'opacity-0 scale-[0.98] pointer-events-none' : 'opacity-100 '
      }`}>
      

      {/* Background Ambient Glows */}
      {/* <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-400/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-lime-600/10 blur-[150px] pointer-events-none rounded-full" /> */}

      {/* High-Fidelity Navigation */}
      {
        !isProjectModalOpen && <Navbar scrollToSection={scrollToSection} />
      }
      

      {/* Hero Section - Full Width */}
      <section id="home" className="w-full">
        <Hero onCtaClick={() => scrollToSection('projects')} />
      </section>



      {/* Main Content - Centered */}
      <main className="max-w-7xl mx-auto px-6 pb-12 relative z-10 ">
        <section id="skills" className="mt-20">
          <SkillsShowcase 
            onSkillSelect={(id) => {
                setSelectedSkill(id === selectedSkill ? null : id);
                setActiveFilter(null);
                if (id) {
                  setTimeout(() => scrollToSection('projects'), 100);
                }
            }} 
            selectedSkillId={selectedSkill}
          />
        </section>


        <section id="projects" className="mt-40">
          <ProjectsGrid 
          
            projects={filteredProjects} 
            activeFilter={activeFilter} 
            setActiveFilter={(f) => {
                setActiveFilter(f);
                setSelectedSkill(null);
            }} 
          />
        </section>

        <section id="about" className="mt-40">
          <AboutSection />
        </section>

        <section id="contact" className="mt-40">
          <ContactSection />
        </section>

        <section  className="mt-40">
            <FAQSection />

        </section>
      </main>

      <section className="mt-24">
          <Footer />

      </section>


    </div>

    </div>

    </globalContext.Provider>
  );
};

export default App;
