
import React from 'react';
import { 
  ArrowRight, 
  Code2, 
  Sparkles,
  Command,
  Activity,
  Box,
  Terminal,
  Compass,
  Layers,
  Fingerprint
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="relative py-20 md:py-32 ">
     
      {/* Section Header */}
      <div className="mb-16 md:mb-24 px-4 relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-emerald-400 font-black mb-6 md:mb-8 backdrop-blur-md">
          <Fingerprint className="w-3 h-3" />
          Professional Persona
        </div>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-[0.9] md:leading-none">
          Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-300 to-[#CCFF00]">User</span>,<br/>
          <span className="text-white/20 italic font-light">Write Clean Code.</span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
          I bridge the gap between intuitive user interfaces and complex backend logic to build seamless digital solutions.
        </p>
      </div>

      {/* Main Bento Grid - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(200px,auto)] relative z-10 px-4 md:px-0">
        
        {/* Profile Identity - The "Deep Emerald" Core */}
        <div className="md:col-span-2 lg:col-span-8 lg:row-span-2 glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/10 overflow-hidden group flex flex-col md:flex-row shadow-2xl hover:border-emerald-500/40 transition-all duration-700">
          <div className="w-full md:w-1/2 relative h-[350px] md:h-full min-h-[350px] md:min-h-[450px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 via-blue-900/20 to-transparent z-0 group-hover:scale-110 transition-transform duration-1000" />
            <img 
              src="/public/images/1762981553824.png" 
              alt="Aarab Abderrahmane" 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-10" />

            <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 z-20">
              {/* <div className="flex items-center gap-3 mb-3">
                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Status: Optimized</span>
              </div> */}
              <h3 className="text-4xl break-all md:text-6xl font-black tracking-tighter text-white mb-1">Aarab <p className="text-emerald-400  text-3xl md:text-5xl">Abderrahmane</p></h3>
              <p className="text-white/30 font-bold text-[9px] md:text-xs uppercase tracking-[0.5em] flex items-center gap-2">
                <Compass className="w-3 h-3" /> Full Stack Developer
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-[#0a0a0a]/40 backdrop-blur-3xl relative">
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity hidden md:block">
               <Command className="w-20 h-20 text-emerald-400" />
            </div>
            <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight leading-snug">
              Building <span className="text-emerald-400">scalable web applications</span> and crafting intuitive user experiences.
            </h4>
            <p className="text-white/50 leading-relaxed font-medium mb-8 md:mb-10 text-base md:text-lg">
              Full Stack Developer dedicated to building scalable web applications. I specialize in bridging the gap between complex logic and intuitive <span className="text-white italic">user experiences</span>, ensuring <span className="text-white italic">high performance</span> and robustness in every digital solution I deliver.
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6">
               <div className="px-5 md:px-6 py-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-white/5 border border-white/5 flex flex-col group/tag hover:bg-emerald-500/10 hover:border-emerald-500/20 transition-all">
                  <span className="text-xs md:text-sm font-black text-white">Morocco</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/30 font-bold group-hover:text-emerald-400 transition-colors">Location</span>
               </div>
               <div className="px-5 md:px-6 py-3 md:py-4 rounded-[20px] md:rounded-[24px] bg-white/5 border border-white/5 flex flex-col group/tag hover:bg-blue-500/10 hover:border-blue-500/20 transition-all">
                  <span className="text-xs md:text-sm font-black text-white">Global</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-widest text-white/30 font-bold group-hover:text-blue-400 transition-colors">Deployment</span>
               </div>
            </div>
          </div>
        </div>

        {/* Stats Module - The "Solar Gold" Energy */}
        <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 relative overflow-hidden rounded-[40px] md:rounded-[56px] p-8 md:p-12 flex flex-col justify-between group cursor-pointer transition-all duration-700 bg-gradient-to-br from-amber-400 via-orange-500 to-rose-600 shadow-[0_0_80px_rgba(251,191,36,0.15)] hover:shadow-[0_0_100px_rgba(251,191,36,0.3)] hover:-translate-y-2 min-h-[300px] md:min-h-0">
          <div className="absolute inset-0 opacity-20 mix-blend-soft-light pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
          
          <div className="flex justify-between items-start relative z-10">
            <Activity className="w-8 md:w-10 h-8 md:h-10 text-black/40 group-hover:scale-110 transition-transform" />
            <div className="px-3 py-1 bg-black/10 rounded-full text-[9px] font-black uppercase tracking-widest text-black/60 backdrop-blur-sm">
              Optimization Focus
            </div>
          </div>
          <div className="relative z-10">
            <div className="text-6xl md:text-8xl font-black tracking-tighter text-black mb-3">100</div>
            <p className="text-xs md:text-sm font-bold text-black/70 uppercase tracking-[0.2em] leading-tight">Lighthouse Score Target</p>
          </div>
          <div className="flex items-center justify-between relative z-10">
            <span className="text-[9px] md:text-[10px] font-black text-black/40 uppercase">High Performance</span>
            <ArrowRight className="w-6 md:w-7 h-6 md:h-7 text-black group-hover:translate-x-3 transition-transform" />
          </div>
        </div>

        {/* Pillar: Architecture - The "Azure" Focus */}
        <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/5 p-8 md:p-12 group hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-500 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 md:w-40 h-32 md:h-40 bg-cyan-500/10 blur-[50px] md:blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all" />
          <div className="w-14 md:w-16 h-14 md:h-16 bg-cyan-500/10 rounded-[20px] md:rounded-3xl flex items-center justify-center text-cyan-400 mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all border border-cyan-500/20">
            <Layers className="w-6 md:w-8 h-6 md:h-8" />
          </div>
          <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-white tracking-tight">Systemic Integrity</h4>
          <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
            Reliable Architecture I build modular, maintainable applications focusing on clean code and efficient data flow. My goal is to create stable systems that are easy to debug, test, and scale as the user base grows.
          </p>
        </div>

        {/* Tech Stack Visual - The "Deep Indigo" Dashboard */}
        <div className="md:col-span-1 lg:col-span-4 lg:row-span-2 glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/5 p-8 md:p-14 overflow-hidden relative group hover:border-indigo-500/30 transition-all duration-700">
          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-4 mb-8 md:mb-10">
              <div className="p-3 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
                 <Terminal className="w-5 md:w-6 h-5 md:h-6 text-indigo-400" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white tracking-tighter">Core<br className="hidden md:block"/>Logic.</h4>
            </div>
            
            <div className="space-y-6 flex-1">
              {[
                { name: 'React / Next.js', percent: 96, color: 'from-emerald-400 to-cyan-400' },
                { name: 'TypeScript', percent: 92, color: 'from-blue-500 to-indigo-500' },
                { name: 'Node / Systems', percent: 88, color: 'from-indigo-500 to-purple-500' },
                { name: 'Cloud Infra', percent: 82, color: 'from-rose-500 to-orange-500' }
              ].map((item, i) => (
                <div key={i} className="space-y-2 group/bar">
                  <div className="flex justify-between text-[10px] md:text-[11px] font-black uppercase tracking-widest text-white/30 group-hover/bar:text-white/60 transition-colors">
                    <span>{item.name}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                    <div 
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-[1.5s] ease-out shadow-[0_0_15px_rgba(255,255,255,0.1)]`} 
                      style={{ width: `${item.percent}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 md:mt-12 flex flex-wrap gap-2 md:gap-3">
              {['Tailwind', 'Docker', 'AWS', 'Redis', 'GraphQL'].map(tag => (
                <span key={tag} className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/20 border border-white/5 hover:border-white/20 hover:text-white transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </div>

      

        {/* Experience / History - The "Professional Timeline" */}
        <div className="md:col-span-2 lg:col-span-8 lg:row-span-1 glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/10 p-8 md:p-14 flex flex-col md:flex-row gap-12 md:gap-16 items-center group hover:bg-white/[0.02] transition-all">
          <div className="w-full md:w-1/3 relative text-center md:text-left">
             <div className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-700">02+</div>
             <p className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.4em] leading-relaxed">Years of specialized technical development.</p>
             <div className="absolute -bottom-4 md:-bottom-6 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-16 md:w-24 h-1 bg-gradient-to-r from-emerald-400 to-transparent" />
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-14">
             <div className="space-y-6">
                <h5 className="text-emerald-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <Box className="w-3 h-3" /> Experience section
                </h5>
                <ul className="space-y-4 text-center md:text-left">
                  {[
                    { role: 'Full Stack Dev', co: 'PlanPulse , TAHSIL' },
                    { role: 'GUI Architect', co: 'Drop2Repo Tooling' },
                    { role: 'OSS Maintainer', co: 'GitHub Community' }
                  ].map((job, idx) => (
                    <li key={idx} className="group/item cursor-default">
                      <p className="text-sm font-black text-white group-hover/item:text-emerald-400 transition-colors">{job.role}</p>
                      <p className="text-[9px] md:text-[10px] text-white/30 font-bold uppercase tracking-widest">{job.co}</p>
                    </li>
                  ))}
                </ul>
             </div>
             <div className="space-y-6">
                <h5 className="text-blue-400 font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2 justify-center md:justify-start">
                  <Activity className="w-3 h-3" /> Domain Expertise
                </h5>
                <ul className="space-y-3 md:space-y-4 text-center md:text-left">
                  {[
                    'Full Stack Development',
                    'Clean Code & Documentation',
                    'Responsive Design Systems',
                    'Desktop Tooling'
                  ].map((domain, idx) => (
                    <li key={idx} className="flex items-center gap-3 justify-center md:justify-start">
                      <div className="w-1 h-1 rounded-full bg-blue-500 hidden md:block" />
                      <span className="text-[9px] md:text-[10px] text-white/40 font-black uppercase tracking-widest">{domain}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>

      </div>

     

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 80s md:marquee 100s linear infinite;
        }
        .glass-2.0 {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px) md:blur(40px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) md:blur(40px) saturate(160%);
        }
      `}</style>
    </div>
  );
};
