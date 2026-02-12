
import React, { useState, useEffect } from 'react';
import { ArrowUp, Copy, Check, Globe } from 'lucide-react';

import { Component } from "./button-rotate";



export const Footer: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState('');

  // Update time for a specific timezone (e.g., Europe/Zurich)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Zurich',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
      setTime(formatter.format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('abderrahmanerb.contact@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative w-full bg-[#CCFF00]/90 text-black pt-52 pb-12  overflow-hidden selection:bg-black selection:text-white z-20"
      style={{ 
        clipPath: 'polygon(0 100px, 100% 0, 100% 100%, 0 100%)',
        marginTop: '-140px'
      }}
    >
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col items-center">
        
        {/* Massive Interaction Zone */}
        <div 
          className="relative w-full group cursor-pointer text-center mb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleCopy}
        >
          <div className="overflow-hidden">
            <h2 className={`text-[15vw] font-[900] tracking-[-0.06em] leading-[0.8] uppercase transition-all duration-700 ease-expo ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
              Let's Talk
            </h2>
            <h2 className={`absolute inset-0 text-[15vw] font-[900] tracking-[-0.06em] leading-[0.8] uppercase transition-all duration-700 ease-expo flex items-center justify-center ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
              {copied ? 'Copied!' : 'Say Hello'}
            </h2>
          </div>
          
          <div className="mt-8 mono text-xs md:text-sm font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">
            {copied ? 'Email successfully stored' : 'Click to copy direct endpoint'}
          </div>
        </div>

        {/* Action Bar */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 mb-32">
          <div className="flex flex-col gap-2 order-2 md:order-1 items-center md:items-start">
            <div className="mono text-[10px] font-black uppercase tracking-[0.3em] opacity-40">Direct Line</div>
            <a 
              href="mailto:abderrahmanerb.contact@gmail.com" 
              className="text-2xl md:text-4xl   font-black tracking-tight hover:opacity-60 transition-opacity border-b-4 border-black pb-1"
            >
              abderrahmanerb.contact@gmail.com
            </a>
          </div>

          {/* <button 
            onClick={scrollToTop}
            className="group relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-black text-[#FF5C00] rounded-full order-1 md:order-2 hover:scale-110 transition-transform duration-500 active:scale-90"
          >
            <div className="absolute inset-0 border-2 border-dashed border-lime-500 rounded-full animate-[spin_10s_linear_infinite]" />
            <ArrowUp className="w-10 h-10 text-white group-hover:-translate-y-2 transition-transform duration-500" />
            <span className="absolute bottom-6 mono text-[8px] text-white tracking-widest">TOP</span>
          </button> */}

          <div onClick={scrollToTop} className='relative order-1 md:order-2 '>

               <Component />

          </div>

      



        </div>

        {/* Separator */}
        <div className="w-full h-[2px] bg-black/10 mb-12" />

        {/* Telemetry & Legal */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          
          {/* Column 1: Local Context */}
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center gap-3">
              <Globe className="w-4 h-4" />
              <div className="mono text-[20px] font-black uppercase tracking-widest">
                Local Time — {time}
              </div>
            </div>
            <div className="mono text-[16px] font-black uppercase tracking-widest opacity-40">
              Based in Morocco 
            </div>
          </div>

          {/* Column 2: Socials with animation */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mono text-[16px] font-black uppercase tracking-widest">
            {[ 'Linkedin', 'Github'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="group relative overflow-hidden h-6 w-[100px] text-center"
              >
                <div className="transition-transform duration-500 group-hover:-translate-y-full">
                  {social}
                </div>
                <div className="absolute top-0 left-0 transition-transform duration-500 translate-y-full group-hover:translate-y-0 text-white bg-black px-3">
                  {social}
                </div>
              </a>
            ))}
          </div>

          {/* Column 3: Copyright */}
          <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
             <div className="mono text-[16px] font-black uppercase tracking-widest">
               © {new Date().getFullYear()} AARAB ABDERRAHMANE.
             </div>
             <div className="mono text-[14px] font-black uppercase tracking-[0.2em] opacity-30">
               All rights reserved
             </div>
          </div>

        </div>
      </div>

      <style>{`
        .ease-expo {
          transition-timing-function: cubic-bezier(0.87, 0, 0.13, 1);
        }
      `}</style>
    </footer>
  );
};
