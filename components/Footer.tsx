
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowUp, Zap, Mail, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'Projects', href: 'projects' },
    { name: 'Skills', href: 'skills' },
    { name: 'About', href: 'about' },
    { name: 'Contact', href: 'contact' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, href: '#', label: 'Github' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative mt-40 pt-20 pb-10 overflow-hidden border-t border-white/5 bg-[#0a0a0a]/50 backdrop-blur-3xl">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-lime-400/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-2 bg-[#CCFF00] rounded-full flex items-center justify-center text-black">
                 <img src="./public/icons/logo.png"></img>
              </div>
              <span className="text-2xl font-black tracking-tighter"><span  className='text-[#CCFF00]'>Ar</span>toFolio</span>
            </div>
            <p className="text-white/40 text-lg leading-relaxed max-w-sm">
              Developing robust full-stack solutions and intuitive user interfaces that solve real-world problems.
            </p>
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 w-fit">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </div>
              <span className="text-[11px] font-black uppercase tracking-widest text-white/60">
                Available for freelance projects and full-time opportunities.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Navigation</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => document.getElementById(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white/40 hover:text-lime-400 transition-colors font-bold text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Socials</h4>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors group">
                    <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="font-bold text-sm">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status/Clock */}
          <div className="lg:col-span-3 space-y-6 text-right lg:text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Current Status</h4>
            <div className="space-y-2">
              <p className="text-3xl font-black tracking-tighter text-white">{localTime}</p>
              <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Local Operating Time</p>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-4 inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#CCFF00] hover:text-black transition-all group"
            >
              Back to Top
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} ArtoFolio
          </p>
          {/* <div className="flex items-center gap-8">
             <a href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Privacy Policy</a>
             <a href="#" className="text-[10px] font-bold text-white/20 hover:text-white uppercase tracking-widest transition-colors">Terms of Service</a>
          </div> */}
          <div className="flex items-center gap-2 text-white/20">
            <span className="text-[10px] font-bold uppercase tracking-widest">Built with</span>
             <div className="w-8 h-8 p-1 bg-[#CCFF00] rounded-full flex items-center justify-center text-black">
                 <img src="./public/icons/logo.png"></img>
              </div>
            <span className="text-[10px] font-bold uppercase tracking-widest">AArab abderrahmane</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
