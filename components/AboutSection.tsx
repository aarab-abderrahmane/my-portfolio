
import React from 'react';
import ProfileCard from "./ui/ProfileCard"

import {Skiper48} from  './ui/skiper-ui/skiper48'
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


import RotatingText from './RotatingText';
import CircularText from './CircularText';

        import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from './ui/cursor';



import { TextShimmerWave } from './motion-primitives/text-shimmer-wave';




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
          Think <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCFF00] to-lime-600">User</span>,<br/>
          <span className="text-white/20 italic font-light">
            <TextShimmerWave className='' duration={1}>
              Write Clean Code.
            </TextShimmerWave>

          </span>
        </h2>
        <p className="text-white/40 text-lg md:text-xl max-w-2xl font-medium leading-relaxed">
          I bridge the gap between intuitive user interfaces and complex backend logic to build seamless digital solutions.
        </p>
      </div>




      
      {/* Main Bento Grid - Mobile First */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12  gap-6 md:gap-8   relative z-10 px-4 md:px-0">
        
        {/* Profile Identity - The "Deep Emerald" Core */}
        <div className=" md:col-span-2 lg:col-span-8     group flex flex-col   md:flex-row transition-all duration-700  ">
          <div className="z-50    md:w-1/2   w-full   ">
     
              <ProfileCard/>

          </div>
          
          <div className="w-full   md:w-1/2 p-8 flex flex-col   backdrop-blur-3xl relative  max-h-[500px] sm:max-h-[400px] md:max-h-[100%]" >
        
            <h4 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white tracking-tight leading-snug">
              Building <span className="text-[#CCFF00]">scalable web applications</span> and crafting intuitive user experiences.
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



        {/*Technology stack*/}
        
        <div className="box md:col-span-1 lg:col-span-4   auto-rows-min  relative rounded-[56px] border border-white/20 bg-white/10 backdrop-blur-lg    ">

     

        <div   className=" w-full   p-6  flex flex-col gap-12 rounded-[56px] group cursor-pointer transition-all duration-700 shadow-[0_0_80px_rgba(148,255,41,0.15)] hover:shadow-[0_0_100px_rgba(148,255,41,0.3)]  h-auto max-h-[600px] overflow-hidden md:min-h-0">
         
          
          <div className="flex  items-center gap-2 relative z-10   ">
          <h1 className='font-bold text-xl'>Technology</h1>
                  <RotatingText
                    texts={['Tech', 'Proficiency', 'Expertise', 'I Build With']}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-white text-black font-bold overflow-hidden py-0.5 sm:py-1  justify-center rounded-[56px]"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
          </div>


              <div className=" flex flex-wrap gap-2 md:gap-3  mb-4">
              {['React 19', 'JavaScript (ES6+)', 'TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS 4', 'Gemini AI API', 'OpenRouter', 'MongoDB Atlas', 'MySQL', 'PHP', 'Python', 'Framer Motion', 'GSAP', '@dnd-kit', 'Context API', 'Git', 'GitHub', 'Postman', 'REST APIs', 'Vercel'].map(tag => (
                <span key={tag} className="px-3 z-50 md:px-4 py-3 bg-white/5 rounded-xl hover:cursor-pointer md:rounded-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest text-white/80 border border-white/5 hover:border-white/20 hover:text-white transition-all ">
                  {tag}
                </span>
              ))}
              </div>


        </div>


              <CursorProvider>
                <Cursor>
                  <svg
                    className="size-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                  >
                    <path
                      fill="currentColor"
                      d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                    />
                  </svg>
                </Cursor>
                <CursorFollow>
                  <div className="bg-white text-black font-bold px-2 py-2 rounded-3xl text-sm shadow-lg  backdrop-blur-md ">
                    Skills
                  </div>
                </CursorFollow>
              </CursorProvider>

        </div>  



      

        {/* Pillar: Architecture - The "Azure" Focus
        // <div className="md:col-span-1 lg:col-span-4 lg:row-span-1 glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/5 p-8 md:p-12 group hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-500 relative overflow-hidden">
        //   <div className="absolute -right-10 -top-10 w-32 md:w-40 h-32 md:h-40 bg-cyan-500/10 blur-[50px] md:blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all" />
        //   <div className="w-14 md:w-16 h-14 md:h-16 bg-cyan-500/10 rounded-[20px] md:rounded-3xl flex items-center justify-center text-cyan-400 mb-8 md:mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all border border-cyan-500/20">
        //     <Layers className="w-6 md:w-8 h-6 md:h-8" />
        //   </div>
        //   <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-white tracking-tight">Systemic Integrity</h4>
        //   <p className="text-sm md:text-base text-white/40 leading-relaxed font-medium group-hover:text-white/70 transition-colors">
        //     Reliable Architecture I build modular, maintainable applications focusing on clean code and efficient data flow. My goal is to create stable systems that are easy to debug, test, and scale as the user base grows.
        //   </p>
        // </div> */}

        {/* Download CV */}
        <div className="md:col-span-1    lg:col-span-4 flex justify-center items-center relative overflow-hidden min-h-[300px]  p-6">
              <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <CircularText
                text="DOWNLOAD*CV*NOW*"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class "
              />    
              </div>


              <a href="/files/aarab-abderrahmane-cv.pdf" download className="bg-[#CCFF00] text-black rounded-full p-4 hover:scale-110 duration-300 cursor-pointer absolute">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
              </a>
            
      
        </div>




      

        {/* Experience / History - The "Professional Timeline" */}
        <div className="md:col-span-2    lg:col-span-8  glass-2.0 rounded-[40px] md:rounded-[56px] border border-white/10 p-8 md:p-14 flex flex-col md:flex-row gap-12 md:gap-16 items-center group hover:bg-white/[0.02] transition-all">
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
