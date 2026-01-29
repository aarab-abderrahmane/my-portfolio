
import React from 'react';
import { SKILLS } from '../data';
import { Skill } from '../types';

interface SkillsShowcaseProps {
  onSkillSelect: (id: string) => void;
  selectedSkillId: string | null;
}

// Define SkillButton outside to fix typing and ensure proper React component behavior
// Typing as React.FC allows 'key' to be passed during component instantiation in JSX.
const SkillButton: React.FC<{
  skill: Skill;
  idx: number;
  onSkillSelect: (id: string) => void;
  selectedSkillId: string | null;
}> = ({ skill, onSkillSelect, selectedSkillId }) => (
  <button
    onClick={() => onSkillSelect(skill.id)}
    className={`flex-shrink-0 flex items-center gap-5 px-8 py-5 glass rounded-[28px] transition-all duration-500 transform hover:scale-105 hover:z-20 border ${
      selectedSkillId === skill.id 
        ? 'bg-lime-400 border-lime-400 ring-8 ring-lime-400/10 shadow-[0_0_40px_rgba(163,230,53,0.15)]' 
        : 'border-white/5 hover:border-lime-400/40'
    }`}
  >
    <div className={`text-3xl transition-transform duration-500 ${selectedSkillId === skill.id ? 'scale-110' : 'group-hover:rotate-12'}`}>
      
      <img  className="w-10 h-10" src={skill.icon}></img>
    </div>
    <div className="text-left">
      <p className={`font-extrabold text-lg tracking-tight transition-colors ${selectedSkillId === skill.id ? 'text-black' : 'text-white'}`}>
        {skill.name}
      </p>
      <div className="flex items-center gap-2">
        <div className={`w-1 h-1 rounded-full ${selectedSkillId === skill.id ? 'bg-black/60' : 'bg-lime-400'}`}></div>
        <p className={`text-[8px] font-black uppercase tracking-[0.2em] ${selectedSkillId === skill.id ? 'text-black/60' : 'text-white/40'}`}>
          {skill.level}
        </p>
      </div>
    </div>
  </button>
);

export const SkillsShowcase: React.FC<SkillsShowcaseProps> = ({ onSkillSelect, selectedSkillId }) => {
  // Split skills into two groups for the two rows
  const midPoint = Math.ceil(SKILLS.length / 2);
  const row1 = SKILLS.slice(0, midPoint);
  const row2 = SKILLS.slice(midPoint);

  return (
    <div className="w-full relative">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-lime-400 font-bold mb-4">
          The Arsenal
        </div>
        <h2 className="text-5xl font-extrabold mb-3 tracking-tighter">Expertise in Motion</h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Dual-track technologies. Hover to inspect, click to see usage evidence.
        </p>
      </div>

      {/* Marquee Container with CSS Mask for smooth blending */}
      <div className="relative group/marquee space-y-6 marquee-mask">
        {/* First Row - Moving Right */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-right flex gap-6 whitespace-nowrap items-center group-hover/marquee:pause-slow py-4">
            {[...row1, ...row1, ...row1, ...row1].map((skill, idx) => (
              <SkillButton 
                key={`r1-${idx}`} 
                skill={skill} 
                idx={idx} 
                onSkillSelect={onSkillSelect} 
                selectedSkillId={selectedSkillId} 
              />
            ))}
          </div>
        </div>

        {/* Second Row - Moving Left */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-left flex gap-6 whitespace-nowrap items-center group-hover/marquee:pause-slow py-4">
            {[...row2, ...row2, ...row2, ...row2].map((skill, idx) => (
              <SkillButton 
                key={`r2-${idx}`} 
                skill={skill} 
                idx={idx} 
                onSkillSelect={onSkillSelect} 
                selectedSkillId={selectedSkillId} 
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .group-hover\/marquee\:pause-slow:hover {
          animation-play-state: paused;
        }
        .glass {
           transition: background 0.3s ease, border 0.3s ease, transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        /* Mask effect for blending instead of solid color overlays */
        .marquee-mask {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
      
      {selectedSkillId && (
        <div className="mt-12 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-lime-400 to-transparent"></div>
            <p className="px-8 py-3 bg-lime-400 text-black text-sm font-black uppercase tracking-widest rounded-full shadow-2xl shadow-lime-400/20">
               Displaying Evidence: {SKILLS.find(s => s.id === selectedSkillId)?.name}
            </p>
            <button 
              onClick={() => onSkillSelect(null as any)}
              className="text-xs text-white/30 hover:text-white transition-colors underline underline-offset-4"
            >
              Clear filter
            </button>
        </div>
      )}
    </div>
  );
};
