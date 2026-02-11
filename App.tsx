
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
import { ChatOverlay } from './components/ChatOverlary';
import { Bot } from 'lucide-react';


export const globalContext = createContext()

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // loading screen 
  const [isLoading, setIsLoading] = useState(true);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
   const [isChatActive, setIsChatActive] = useState(false);

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

   
     <Footer />


    </div>

      <ChatOverlay isActive={isChatActive} onClose={() => setIsChatActive(false)} />
             <style>{`
        @keyframes float-playful {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-playful {
          animation: float-playful 4s ease-in-out infinite;
        }
        @keyframes spin-dashed {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-dashed {
          animation: spin-dashed 12s linear infinite;
        }
      `}</style>

      {/* Playful Flat Circular AI Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] flex items-center justify-center animate-float-playful">
        {/* Decorative Rotating Ring */}
        <div className="absolute inset-[-8px] md:inset-[-12px] border-[3px] border-dashed border-orange/40 rounded-full animate-spin-dashed pointer-events-none" />

        {/* Main Button */}
        <button
          onClick={() => setIsChatActive(!isChatActive)}
          className="relative group outline-none focus:outline-none flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-orange rounded-full border-[4px] border-white shadow-[0_8px_20px_rgba(0,255,38,0.4)] transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Toggle AI Chat"
        >
          {/* Inner face/icon */}
          <div className="relative flex items-center justify-center w-full h-full">
             <Bot className="w-8 h-8 md:w-10 md:h-10 text-white transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" strokeWidth={2.5} />
          </div>
        </button>
      </div>

    </div>

    </globalContext.Provider>
  );
};

export default App;
