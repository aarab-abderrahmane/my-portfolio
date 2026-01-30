
import React, { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { Project } from '../types';
import { 
  X, 
  Target, 
  Lightbulb, 
  Globe, 
  Code, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Github,
  Image as ImageIcon
} from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const allImages = [project.mainImage, ...project.gallery];



  const openLightbox = (index: number) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex + 1) % allImages.length);
  }, [activeImageIndex, allImages.length]);

  const prevImage = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((activeImageIndex - 1 + allImages.length) % allImages.length);
  }, [activeImageIndex, allImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (activeImageIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      } else {
        if (e.key === 'Escape') onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeImageIndex, onClose, nextImage, prevImage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300 ">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      
      {/* Lightbox Overlay */}
      {activeImageIndex !== null && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-12 animate-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={closeLightbox} />
          
          <div className="relative w-full h-full flex items-center justify-center group">
            <img 
              src={allImages[activeImageIndex]} 
              className="max-w-full max-h-full object-contain rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.5)] select-none"
              alt="Preview"
            />
            
            {/* Lightbox Controls */}
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center">
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl text-[10px] font-black uppercase tracking-widest text-white/40">
                Asset {activeImageIndex + 1} / {allImages.length}
              </div>
              <button 
                onClick={closeLightbox}
                className="p-4 bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 p-5 bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 rounded-full transition-all -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 p-5 bg-white/5 hover:bg-[#CCFF00] hover:text-black border border-white/10 rounded-full transition-all translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}

      {/* Main Modal Container */}
      <div className='overflow-hidden rounded-[48px] '>

      <div
      data-lenis-prevent
      className="relative custom-scroll w-full max-w-6xl max-h-[90vh] overflow-y-auto glass rounded-[48px] border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500 ">
        {/* Hero Interactive Header */}
        <div className="relative h-[400px] w-full group overflow-hidden cursor-zoom-in" onClick={() => openLightbox(0)}>
          <img 
            src={project.mainImage} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent" />
          
          <div className="absolute top-10 right-10 flex gap-4">
            <button 
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="p-4 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-3xl hover:bg-[#CCFF00] hover:text-black transition-all z-20"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-[#CCFF00] text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                  {project.category} Module
                </span>
                <div className="flex gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter text-white drop-shadow-2xl">
                {project.name}
              </h2>
            </div>
            
            <div className="hidden md:flex items-center gap-2 text-white/40 bg-black/40 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/5">
                <Maximize2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Click to Expand Cover</span>
            </div>
          </div>
        </div>

        {/* Dynamic Content Grid */}
        <div className="p-8 md:p-16">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Detailed Narrative */}
            <div className="lg:col-span-7 space-y-16">
              <div className="grid md:grid-cols-2 gap-12">
                <section>
                  <div className="flex items-center gap-3 mb-6 text-lime-400">
                    <div className="p-3 bg-[#CCFF00]/10 rounded-2xl">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-xs uppercase tracking-[0.3em] font-black">Strategic Challenge</h3>
                  </div>
                  <p className="text-2xl text-white/90 leading-tight font-bold tracking-tight">
                    {project.problem}
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 mb-6 text-purple-400">
                    <div className="p-3 bg-purple-400/10 rounded-2xl">
                      <Lightbulb className="w-6 h-6" />
                    </div>
                    <h3 className="text-xs uppercase tracking-[0.3em] font-black">Engineered Solution</h3>
                  </div>
                  <p className="text-lg text-white/50 leading-relaxed font-medium">
                    {project.solution}
                  </p>
                </section>
              </div>

              {/* Enhanced Visual Showcase */}
              <section>
                <div className="flex items-center justify-between mb-10">
                   <div className="flex items-center gap-3">
                      <ImageIcon className="w-5 h-5 text-white/20" />
                      <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-white/20">System Visualizations</h3>
                   </div>
                   <div className="h-px flex-1 mx-8 bg-white/5" />
                   <span className="text-[10px] font-black uppercase tracking-widest text-white/10">{project.gallery.length} Images</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.gallery.map((img, i) => (
                    <div 
                      key={i}   
                      className="group/img relative aspect-[4/3] rounded-[32px] overflow-hidden border border-white/5 bg-white/5 cursor-zoom-in"
                      onClick={() => openLightbox(i + 1)}
                    >
                      <img 
                        src={img} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 group-hover/img:rotate-1" 
                        alt={`Gallery ${i}`} 
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                         <div className="p-5 bg-[#CCFF00] text-black rounded-full scale-90 group-hover/img:scale-100 transition-transform shadow-2xl">
                            <Maximize2 className="w-6 h-6" />
                         </div>
                      </div>
                      <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-xl rounded-xl border border-white/10 opacity-0 group-hover/img:opacity-100 transition-all translate-y-2 group-hover/img:translate-y-0">
                         <span className="text-[9px] font-black uppercase tracking-widest text-white/60">Image_0{i + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Side Intelligence Panel */}
            <div className="lg:col-span-5 space-y-8">
              {/* Tech Stack Module */}
              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-3xl">
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-lime-400/40 mb-10 flex items-center gap-3">
                   <Code className="w-4 h-4" />
                   Implementation Logic
                </h3>
                <div className="space-y-8">
                  {project.techStack.map((stack, i) => (
                    <div key={i} className="group/stack">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-base font-black text-white group-hover/stack:text-lime-400 transition-colors">{stack.tech}</span>
                        <div className="w-8 h-[1px] bg-white/10 group-hover/stack:w-12 transition-all" />
                      </div>
                      <p className="text-xs text-white/40 leading-relaxed font-medium group-hover/stack:text-white/60 transition-colors">
                        {stack.context}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features HUD */}
              <div className="p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Globe className="w-24 h-24" />
                </div>
                <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-400/40 mb-8">Capabilities</h3>
                <ul className="space-y-5">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-5 group/feat">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center text-lime-400 border border-white/10 group-hover/feat:bg-[#CCFF00] group-hover/feat:text-black transition-all">
                        <span className="text-[10px] font-black">{i + 1}</span>
                      </div>
                      <span className="text-sm font-bold text-white/70 group-hover/feat:text-white transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-4">
                <button className="py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-3xl flex items-center justify-center gap-3 hover:bg-[#CCFF00] transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-lime-400/10">
                  <Globe className="w-4 h-4" /> 
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live System</a>
                </button>
                <button className="py-6 bg-white/5 text-white font-black uppercase tracking-[0.2em] text-[10px] rounded-3xl border border-white/10 flex items-center justify-center gap-3 hover:bg-white/10 transition-all transform hover:scale-[1.02] active:scale-95">
                  <Github className="w-4 h-4" /> 
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      </div>
        
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
