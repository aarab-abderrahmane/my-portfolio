
import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowUpRight, Cpu, Code2, Zap, Terminal, Activity } from 'lucide-react';



interface ProjectModuleProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectModuleProps> = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Determine accent color based on category
  // const project.accentClass = project.category === 'ui' ? 'lime-400' : project.category === 'logic' ? 'amber-200' : 'rose-200';
  const glowShadow = project.category === 'ui' 
    ? 'hover:shadow-[0_0_50px_rgba(163,230,53,0.2)]' 
    : project.category === 'api' 
      ? 'hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]' 
      : 'hover:shadow-[0_0_50px_rgba(96,165,250,0.2)]'; 

  return (
    <div 
      className={`group relative rounded-[48px] overflow-hidden transition-all duration-700 cursor-pointer flex flex-col h-full bg-[#0d0d0d] border border-white/5 ${glowShadow} hover:border-${project.accentClass}/30`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(project)}
    >
      {/* Dynamic Ambient Background Glows */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 bg-${project.accentClass}/5 blur-[80px] rounded-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      <div className={`absolute -bottom-20 -left-20 w-64 h-64 bg-${project.accentClass}/5 blur-[80px] rounded-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Main Media Engine */}
      <div className="relative h-full w-full overflow-hidden">
        {/* Image with Digital Filter */}
        <div className="absolute inset-0 z-0">
          <img 
            src={project.mainImage} 
            alt={project.name} 
            className={`w-full h-full object-cover transition-all duration-1000 ${isHovered ? 'scale-110 grayscale-0 brightness-100' : 'scale-100 grayscale-0 brightness-50'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent z-10" />
          
          {/* Scanline Effect overlay on hover */}
          <div className={`absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundSize: '100% 4px, 4px 100%' }} />
       
        </div>

        {/* Top Header Navigation */}
        <div className="absolute top-10 left-10 right-10 flex justify-between items-center z-40">
          <div className="flex items-center gap-3 glass-heavy px-4 py-2 rounded-2xl border border-white/10">
             <div className={`w-2 h-2 rounded-full bg-${project.accentClass} animate-pulse shadow-[0_0_10px_rgba(163,230,53,0.8)]`} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
               {project.category}::MDR
             </span>
          </div>
          <div 
            className={`p-4 glass-heavy rounded-2xl border border-white/10 text-white transition-all duration-500 transform ${isHovered ? 'scale-110 -rotate-12 bg-white/10 border-white/20' : ''}`}
          >
            <ArrowUpRight className={`w-5 h-5 transition-colors ${isHovered ? `text-${project.accentClass}` : 'text-white/40'}`} />
          </div>
        </div>

        {/* Central Intelligence Panel (Hidden by default, slides in)
        <div className={`absolute inset-x-10 top-28 z-40 space-y-4 transition-all duration-700 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
          <div className="flex items-center gap-2 mb-2">
             <Terminal className={`w-3.5 h-3.5 text-${project.accentClass}`} />
             <span className={`text-[9px] font-black uppercase tracking-[0.2em] text-${project.accentClass}`}>Technical Manifest</span>
          </div>
          {project.techStack.map((stack, i) => (
            <div 
              key={i} 
              className="glass-heavy p-5 rounded-[24px] border border-white/5 hover:border-white/20 transition-all duration-500 group/stack relative overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`absolute top-0 left-0 w-1 h-full bg-${project.accentClass} opacity-0 group-hover/stack:opacity-100 transition-opacity`} />
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-4 h-4 text-white/40" />
                <span className="text-sm font-bold text-white tracking-tight">{stack.tech}</span>
              </div>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">
                {stack.context}
              </p>
            </div>
          ))}
        </div> */}

        {/* Project Branding & Summary */}
        <div className={`absolute bottom-12 left-10 right-10 z-30 transition-all duration-700 ${isHovered ? '-translate-y-4' : 'translate-y-0'}`}>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className={`px-4 py-1.5 glass-heavy rounded-full text-[9px] font-black uppercase tracking-widest text-white/40 border border-white/5 transition-all duration-500 ${isHovered ? `group-hover:text-${project.accentClass} group-hover:border-${project.accentClass}/30` : ''}`}>
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white leading-none">
            {project.name}
          </h3>
          
          <p className={`text-sm leading-relaxed max-w-sm transition-all duration-500 ${isHovered ? 'text-white/70' : 'text-white/20'}`}>
            {project.shortDescription}
          </p>
        </div>

        {/* Interaction HUD */}
        <div className={`absolute bottom-12 right-10 z-50 transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
           <div 
             className={`px-8 py-4 bg-${project.accentClass} text-black rounded-full text-[11px] font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-[0_0_30px_rgba(163,230,53,0.4)] transition-transform hover:scale-105 active:scale-95`}
           >
             <Zap className="w-4 h-4 fill-current" />
             Initialize Detail
           </div>
        </div>

        {/* Decorative Progress Bar for technical feel */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/5 z-40 overflow-hidden">
           <div 
             className={`h-full bg-${project.accentClass} transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(163,230,53,0.5)]`}
             style={{ width: isHovered ? '100%' : '0%' }}
           />
        </div>
      </div>

      <style>{`
        .glass-heavy {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }
      `}</style>
    </div>
  );
};
