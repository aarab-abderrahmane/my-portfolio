
import React, { useState, useRef, useEffect  , useContext} from 'react';
import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { ChevronDown, Filter, Check } from 'lucide-react';

import {globalContext} from "../App"

// Card stack scroll
import {Skiper16} from "./ui/skiper-ui/skiper16"

interface ProjectDashboardProps {
  projects: Project[];
  activeFilter: string | null;
  setActiveFilter: (f: string | null) => void;
}


import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from './ui/cursor';




export const ProjectsGrid: React.FC<ProjectDashboardProps> = ({ projects, activeFilter, setActiveFilter }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const {setIsProjectModalOpen} = useContext(globalContext)


  const filters = [
    { label: 'All Modules', value: null },
    { label: 'UI Architecture', value: 'ui' },
    { label: 'API Pipelines', value: 'api' },
    { label: 'Core Logic', value: 'logic' },
    { label: 'React.js', value: 'React' },
  ];

  const currentFilterLabel = filters.find(f => f.value === activeFilter)?.label || 'Filter';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-lime-400 font-bold mb-6">
            Featured Projects
          </div>
          <h2 className="text-6xl font-black mb-4 tracking-tighter text-white flex flex-wrap items-center  ">Digital <span className="text-white/20 italic font-light ">  
          Solutions.
         </span></h2>
          <p className="text-white/40 text-lg max-w-lg leading-relaxed font-medium">
            Practical software solutions built with a focus on clean architecture, intuitive user interfaces, and efficient performance.
          </p>
        </div>
        
        {/* Consolidated Filter Button */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-4 px-8 py-4 rounded-3xl text-xs font-black uppercase tracking-widest transition-all border backdrop-blur-3xl group ${
              isFilterOpen 
              ? 'bg-lime-400 border-lime-400 text-black shadow-[0_0_40px_rgba(163,230,53,0.2)]' 
              : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20'
            }`}
          >
            <Filter className={`w-4 h-4 transition-transform ${isFilterOpen ? 'scale-110' : 'group-hover:rotate-12'}`} />
            <span>{currentFilterLabel}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute right-0 mt-4 w-64 glass rounded-[32px] border border-white/10 p-3 z-50 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="space-y-1">
                {filters.map((f) => (
                  <button
                    key={f.label}
                    onClick={() => {
                      setActiveFilter(f.value);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeFilter === f.value 
                      ? 'bg-lime-400 text-black' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {f.label}
                    {activeFilter === f.value && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Grid Container with increased padding for glows */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 auto-rows-[600px] pb-10">
        {projects.length > 0 ? (
          projects.map((project, idx) => {
            // Asymmetrical Bento Logic
            let colSpan = 'lg:col-span-2';
            if (idx === 0) colSpan = 'lg:col-span-4 md:col-span-2';
            if (idx === 1 || idx === 2) colSpan = 'lg:col-span-3 md:col-span-1';
            
            return (
              <div key={project.id} className={`${colSpan} p-2`}>
                <ProjectCard project={project} onOpen={(p) => {
                   setSelectedProject(p) 
                   setIsProjectModalOpen(true)
                   }} />
              </div>
            );
          })
        ) : (
          <div className="col-span-full py-40 text-center glass rounded-[48px] border border-dashed border-white/10">
            <p className="text-white/10 text-3xl font-black uppercase tracking-widest">Registry Empty</p>
          </div>
        )}
      </div> */}

      <Skiper16  projects={projects} setSelectedProject={setSelectedProject}/>

      {/* Detail HUD */}

      {selectedProject && (

          <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => {
            setSelectedProject(null)
            setIsProjectModalOpen(false)
          }} 
        />

      )}


      
    </div>
  );
};
