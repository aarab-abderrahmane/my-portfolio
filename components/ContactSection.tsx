
import React, { useState, useEffect } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Twitter, Terminal, Cpu, Globe, ArrowRight, Copy, Check, ShieldCheck, Zap, Activity } from 'lucide-react';




import { TextShimmerWave } from './motion-primitives/text-shimmer-wave';


export const ContactSection: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' , access_key:""});
  const [formProgress, setFormProgress] = useState(0);

  const email = "abderrahmanerb.contact@gmail.com";

  useEffect(() => {
    let progress = 0;
    if (formData.name.length > 2) progress += 33;
    if (formData.email.includes('@') && formData.email.length > 5) progress += 33;
    if (formData.message.length > 5) progress += 34;
    setFormProgress(progress);
  }, [formData]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setResult("Sending...");

  // 1. إنشاء FormData مباشرة من عناصر النموذج (الـ Inputs)
  const data = new FormData(e.currentTarget);
  console.log(data)
  
  // 2. إضافة المفتاح البرمجي
  data.append("access_key", "8f18f2e6-8e5b-4929-b24e-3e234837dbb5");

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data // نرسل كائن data مباشرة كما في التوثيق
    });

    const resData = await response.json();

    if (resData.success) {
      setResult("Success!");
      // تصفير الحقول يدوياً بما أنك تستخدم Controlled Inputs
      setFormData({ name: '', email: '', message: '', access_key: '' });
    } else {
      setResult("Error");
    }
  } catch (error) {
    setResult("Error");
  }
};


  console.log(result)

  return (
    <div className="relative py-32 ">

      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-6xl mx-auto ">
        
        {/* Top Header HUD */}
  

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Identity & Socials */}
          <div className="lg:col-span-5 space-y-16">
            <div className="relative">
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-lime-400 to-transparent opacity-20" />
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8">
                Let’s <br/>
                <span className="text-white/20 italic font-light">
                 <TextShimmerWave  duration={1.3}>
                  Work
                </TextShimmerWave>
                </span> <br/>
                <span className="text-[#CCFF00]">Together.</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed font-medium max-w-sm">
                I love creating clean, user-friendly experiences for the web. Let's talk about your idea.
              </p>
            </div>

            <div className="space-y-6">
              {/* Interactive Email Card */}
              <div 
                onClick={copyEmail}
                className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-lime-400/30 transition-all duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Mail className="w-20 h-20" />
                </div>
                <div className="relative z-10">
                  <p className="text-[10px] uppercase text-white/20 tracking-[0.3em] font-black mb-4 flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-lime-400" /> My gEmail
                  </p>
                  <div className="flex items-center justify-between ">
                    <span className="text-xl md:text-2xl font-bold break-all text-white group-hover:text-lime-400 transition-colors">
                        {email}
                    </span>
                    <div className={`p-3 rounded-xl transition-all ${copied ? 'bg-[#CCFF00] text-black scale-110 shadow-[0_0_20px_rgba(163,230,53,0.4)]' : 'bg-white/5 text-white/40 group-hover:bg-white/10 group-hover:text-white'}`}>
                      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                  </div>
                </div>
                {/* Progress highlight on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#CCFF00] transition-all duration-700 opacity-0 group-hover:opacity-100" style={{ width: copied ? '100%' : '20%' }} />
              </div>

              {/* Location Card */}
             <div className="relative p-8 rounded-[32px] bg-white/[0.01] border border-white/5 group overflow-hidden">
                
                <div className='relative z-10 flex items-center justify-between'>
                  <div>
                    <p className="text-[10px] uppercase text-white/20 tracking-[0.3em] font-black mb-1">Origin</p>
                    <p className="text-lg font-bold text-white/60 group-hover:text-white transition-colors">Morocco</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-purple-400 transition-colors">
                    <Globe className="w-6 h-6 animate-spin-slow text-white" />
                  </div>
                </div>

                <div className='absolute inset-0 z-0'>
                  <img 
                    src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHI1d21tdjVsdDdzemI1aG04Zmx0YzF0ZzVkZjNkOGQ1enlsZG11dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Q6xuxUhCgCNpsbfhaP/giphy.gif" 
                    alt="Background GIF" 
                    className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-500"
                  />
                </div>

              </div>

            </div>

            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-blue-400', label: 'LI' },
                { icon: <Github className="w-5 h-5" />, color: 'hover:text-white', label: 'GH' },
                { icon: <Twitter className="w-5 h-5" />, color: 'hover:text-sky-400', label: 'TW' }
              ].map((social, i) => (
                <a key={i} href="#" className={`group relative w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all hover:bg-white/10 ${social.color} hover:-translate-y-2`}>
                   <div className="relative z-10">{social.icon}</div>
                   <span className="absolute bottom-2 text-[8px] font-black opacity-0 group-hover:opacity-40 transition-opacity">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Command Console */}
          <div className="lg:col-span-7">
            <div className="relative p-1 md:p-10 rounded-[48px] lg:bg-white/[0.02] lg:border border-white/5 lg:backdrop-blur-3xl">
              
              {/* Form Telemetry HUD */}
              <div className="hidden lg:flex items-center justify-between mb-16 p-4 w-[50%] rounded-2xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-6 ">
                  <div className="flex flex-col  ">
                    <span className="text-[8px] font-black text-white/20 uppercase tracking-widest mb-1">Input_Sync</span>
                    <div className="flex gap-1">
                       {[1, 2, 3].map(i => (
                         <div key={i} className={`w-16 h-1 rounded-full transition-colors ${formProgress >= i * 33 ? 'bg-[#CCFF00] shadow-[0_0_5px_#a3e635]' : 'bg-white/10'}`} />
                       ))}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/5" />
                
                </div>
                <div className="flex items-center gap-3">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-keyboard-icon lucide-keyboard "><path d="M10 8h.01"/><path d="M12 12h.01"/><path d="M14 8h.01"/><path d="M16 12h.01"/><path d="M18 8h.01"/><path d="M6 8h.01"/><path d="M7 16h10"/><path d="M8 12h.01"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
                </div>
              </div>

              <form className="space-y-12" onSubmit={onSubmit}>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="relative">
                    <label className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'name' ? 'text-lime-400' : 'text-white/20'}`}>
                      Name
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl font-bold placeholder:text-white/5 focus:outline-none focus:border-lime-400 transition-all text-white"
                    />
                    {focusedField === 'name' && <div className="absolute bottom-0 left-0 h-0.5 bg-[#CCFF00] shadow-[0_0_15px_#a3e635] animate-width-full" />}
                  </div>

                  <div className="relative">
                    <label className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'email' ? 'text-purple-400' : 'text-white/20'}`}>
                      Email
                    </label>
                    <input 
                      type="email" 
                      name ="email"
                      placeholder="Email Address" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl font-bold placeholder:text-white/5 focus:outline-none focus:border-purple-400 transition-all text-white"
                    />
                    {focusedField === 'email' && <div className="absolute bottom-0 left-0 h-0.5 bg-purple-500 shadow-[0_0_15px_#a855f7] animate-width-full" />}
                  </div>
                </div>

                <div className="relative">
                  <label className={`absolute -top-6 left-0 text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'message' ? 'text-lime-400' : 'text-white/20'}`}>
                    Message
                  </label>
                  <textarea 
                    rows={4} 
                    name="text"
                    placeholder="Describe your project scope..." 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b-2 border-white/10 py-6 text-xl font-bold placeholder:text-white/5 focus:outline-none focus:border-lime-400 transition-all resize-none text-white"
                  />
                  {focusedField === 'message' && <div className="absolute bottom-0 left-0 h-0.5 bg-[#CCFF00] shadow-[0_0_15px_#a3e635] animate-width-full" />}
                </div>

                <div className="relative pt-6">
                  <button 
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-[32px] bg-[#CCFF00] py-8 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-lime-400/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative z-10 flex items-center justify-center gap-4 text-black font-black uppercase tracking-[0.3em] text-sm">
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Submit Request
                    </div>
                  </button>
                  
                
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes width-full {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-width-full {
          animation: width-full 0.4s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
