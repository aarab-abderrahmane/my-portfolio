
import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Stage 1: Reveal Logo
    const logoTimer = setTimeout(() => setShowLogo(true), 400);

    // Stage 2: Progress Simulation (Apple-style variable speed)
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          // Stage 3: Smooth Exit
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onFinish, 1200); // Allow for scale-out animation
          }, 800);
          return 100;
        }
        
        // Slower at the end, faster at start
        const increment = prev < 30 ? 2 : prev < 70 ? 1 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => {
      clearTimeout(logoTimer);
      clearInterval(progressTimer);
    };
  }, [onFinish]);

  return (
    <div 
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[#000000] transition-all duration-[1200ms] cubic-bezier(0.4, 0, 0.2, 1) ${
        isExiting ? 'opacity-0 scale-[1.05] pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Subtle Ambient Light (Mimicking Screen Glow) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,1)_0%,_transparent_50%)]" />

      {/* Centered Brand Icon - Pure & Static */}
      <div className={`transition-all duration-[1500ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${
        showLogo ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}>
        <div className="w-[100px] h-[100px] md:w-[180px] md:h-[180px]  flex items-center justify-center text-white ">
          <img src="./icons/myLogo.png"  />
        </div>
      </div>

      {/* Apple-Style Progress Bar: Ultra-thin, Precise */}
      <div className={`mt-6 w-48 md:w-64 transition-all duration-1000 delay-500 ${
        showLogo ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
          <div 
            className="h-full bg-white transition-all duration-[400ms] cubic-bezier(0.1, 0.5, 0.1, 1)"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress Percentage - Hidden in OS boot but common for high-end loading */}
        <div className="mt-4 flex justify-center">
           <span className="text-[10px] font-medium tracking-[0.2em] text-white/20 uppercase">
             {Math.round(progress)}%
           </span>
        </div>
      </div>

      {/* Interaction Hint (Optional, but adds to the Apple "Hello" feel) */}
      <div className={`absolute bottom-16 transition-all duration-1000 delay-[1.5s] ${
        progress === 100 ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <p className="text-[11px] font-medium tracking-[0.3em] text-white uppercase">
          Initializing Interface
        </p>
      </div>
    </div>
  );
};
