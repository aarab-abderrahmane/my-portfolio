
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state
      setIsScrolled(window.scrollY > 50);

      // Update scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Scroll spy logic
      const sections = ['home', 'skills', 'projects', 'about', 'contact'];
      const currentSection = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:py-6 ${isScrolled ? 'translate-y-0' : 'translate-y-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => scrollToSection('home')}
            className="group flex items-center gap-3 cursor-pointer z-[60]"
          >
            <div className="w-14 h-14 p-2 bg-[#CCFF00] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(163,230,53,0.3)] group-hover:scale-110 transition-transform duration-500">
              {/* <Zap fill="currentColor" size={20} /> */}
              <img src="./public/icons/logo.png"></img>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-black tracking-tighter block leading-none"><span className='text-[#CCFF00]'>Ar</span>toFolio</span>
              <span className="text-[14px] font-black uppercase  tracking-[0.2em] text-[#CCFF00] transition-opacity">Aarab Abderrahmane</span>
            </div>
          </div>

          {/* Desktop Navigation Hub */}
          <div className={`absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center p-1.5 rounded-full border transition-all duration-700 ${
            isScrolled 
              ? 'bg-[#0f0f0f]/80 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-[420px]' 
              : 'bg-white/5 backdrop-blur-xl border-white/5 w-[460px]'
          }`}>
            <div className="flex w-full items-center relative">
              {/* Sliding Active Indicator (Pure CSS attempt) */}
              <div 
                className="absolute h-full bg-white/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                style={{
                  width: '25%',
                  left: `${navLinks.findIndex(l => l.id === activeSection) * 25}%`,
                  opacity: navLinks.some(l => l.id === activeSection) ? 1 : 0
                }}
              />
              
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex-1 relative z-10 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                    activeSection === link.id ? 'text-lime-400' : 'text-white/40 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Progress Bar inside Nav */}
            <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-white/5 overflow-hidden rounded-full">
              <div 
                className="h-full bg-lime-400/50 transition-all duration-100"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 z-[60]">
            <button 
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center gap-3 px-6 py-2.5 bg-[#CCFF00] text-black rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 group"
            >
              Hire Operator
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div className={`fixed inset-0 z-[45] lg:hidden transition-all duration-700 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
        <div className="relative h-full flex flex-col items-center justify-center gap-12 p-10">
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-4xl font-black tracking-tighter transition-all duration-500 ${
                  activeSection === link.id ? 'text-lime-400 translate-x-4' : 'text-white/20 hover:text-white'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('contact');
                setMobileMenuOpen(false);
              }}
              className="text-4xl font-black italic tracking-tighter text-lime-400 hover:text-white transition-colors"
              style={{ transitionDelay: '400ms' }}
            >
              Contact
            </button>
          </div>

          
        </div>
      </div>
    </>
  );
};
