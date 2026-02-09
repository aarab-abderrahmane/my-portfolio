
import React from 'react';
import { ArrowRight } from 'lucide-react';

import CountUp from './ui/CountUp';



import Beams from './Beams';
import TextType from './TextType';


interface HeroProps {
  onCtaClick: () => void;
}



export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-[100vh] w-full overflow-hidden ">


 
      {/* --- ANIMATED BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Moving Technical Grid with smooth mask */}
        {/* <div 
          className="absolute inset-0 opacity-[0.2]" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, #f6f2f278 1px, transparent 0px),
              linear-gradient(to bottom, #fafcf78d 1px, transparent 0px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'linear-gradient(to bottom , black 40%, transparent 90%) ',
            
            WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 90%)'
          }}
        /> */}

         <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#CCFF00"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />


        {/* Animated Scanning Beam */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="animate-scan-vertical absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-transparent via-lime-400/5 to-transparent opacity-40" />
        </div> */}

        {/* Floating Data Nodes (Neural Network Feel) */}
        {/* <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, black 30%, transparent 85%)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 85%)' }}>
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className={`absolute rounded-full bg-lime-400/20 blur-3xl animate-float-slow`}
              style={{
                width: `${Math.random() * 300 + 150}px`,
                height: `${Math.random() * 300 + 150}px`,
                top: `${Math.random() * 70}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.5}s`,
                animationDuration: `${12 + i * 3}s`
              }}
            />
          ))}
        </div> */}

        {/* Interactive Noise Texture */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* --- SMOOTH TRANSITION GRADIENT TO NEXT SECTION --- */}
        {/* This gradient blends the Hero background (#0a0a0a) into the App background (#0f0f0f) */}
    
      </div>

      {/* --- CONTENT LAYER --- */}
      {/* pt-32 added to push content down and clear the fixed navbar */}
      <div className="relative z-20 flex flex-col items-center px-6 max-w-7xl mx-auto pt-32 pb-20">
        <div className="mb-10  tracking-widest inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-lime-400 font-black backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400 shadow-[0_0_10px_#a3e635]"></span>
          </span>
          OPEN TO WORK
        </div>
        
        <h1 className="text-6xl md:text-[7rem] w-[80%] font-black tracking-tighter leading-[0.8] mb-12">
          I build <span className="text-white/20 italic font-light">
          
          <TextType 
            text={["scalable", "robust", "Elastic" , "extensible"]}
            typingSpeed={120}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            texts={["Welcome to React Bits! Good to see you!","Build some amazing experiences!"]}
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
          />
          
          </span> full-stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-lime-300 to-lime-700 ">Solutions.</span>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <button 
            onClick={onCtaClick}
            className="group relative flex items-center gap-6 px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-xs rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_rgba(255,255,255,0.1)]"
          >
            <span className="z-10">Access Registry</span>
            <ArrowRight className="z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute top-0 left-[-100%] w-full h-full bg-[#CCFF00] transition-all duration-500 group-hover:left-0"></div>
          </button>
          
          <div className="flex items-center gap-4 px-8 py-5 glass rounded-full border border-white/5 backdrop-blur-3xl">
             <div className="flex -space-x-4">
               {[1,2,3].map(i => (
                 <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-zinc-800 overflow-hidden shadow-xl">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                 </div>
               ))}
             </div>
             <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">
               Trusted by <span className="text-white">Elite Teams</span>
             </p>
          </div>
        </div>

        
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-16 max-w-5xl w-full pt-16">
          {[
            { val: 2  , label: 'Years Runtime',symbol:"+" },
            { val: 6, label: 'Nodes Deployed',symbol:"" },
            { val: 9, label: 'Efficiency',symbol:"%" },
            { val: 0, label: 'Failures',symbol:"" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <p className="text-4xl md:text-5xl font-black text-white group-hover:text-lime-400 transition-colors duration-500 tracking-tighter">
              
              {/* Grandient text + counter animation */}
         
                {stat.symbol}{stat.val < 10 ? "0" : ""}
                <CountUp
                  from={0}
                  to={stat.val}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                  startCounting={1}
                />

                </p>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
        .animate-scan-vertical {
          animation: scan-vertical 10s linear infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -60px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }
        .animate-float-slow {
          animation: float-slow 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
