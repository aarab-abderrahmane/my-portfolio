
import React, { useState } from 'react';
import { ChevronDown, Star, ArrowRight } from 'lucide-react';

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  tags: string[];
  isOpen: boolean;
  onClick: () => void;
}

import { VideoText } from "./ui/video-text"

const FAQItem: React.FC<FAQItemProps> = ({ number, question, answer, tags, isOpen, onClick }) => {
  return (
    <div className="border-b border-white/10 group">
      <button 
        onClick={onClick}
        className="w-full py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left transition-all hover:bg-white/[0.02] px-4"
      >
        <div className="flex items-start gap-8">
          <span className="mono text-orange text-xs md:text-sm font-bold mt-2 md:mt-4">({number})</span>
          <div className="flex flex-col">
            <h3 className={`serif-heavy text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter transition-all duration-500 ${isOpen ? 'text-orange' : 'text-white'}`}>
              {question}
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, i) => (
                <span key={i} className="mono text-[8px] md:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-white/10 bg-black text-white/40">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`transition-all duration-500 transform ${isOpen ? 'rotate-180 text-orange' : 'text-orange group-hover:translate-x-2'}`}>
          {isOpen ? <ChevronDown size={48} strokeWidth={2.5} /> : <ArrowRight size={48} strokeWidth={2.5} />}
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'max-h-[500px] opacity-100 mb-12' : 'max-h-0 opacity-0'}`}>
        <div className="pl-20 md:pl-32 pr-4 md:pr-24 mt-6">
          <p className="text-xl md:text-2xl font-medium text-white/50 leading-relaxed max-w-4xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
  {
    number: "01",
    question: "What is your preferred tech stack?",
    tags: ["FRONTEND", "STYLING", "FRAMEWORKS"],
    answer: "I specialize in building modern interfaces using React 19 and Tailwind CSS 4. I focus on creating fast, responsive, and clean web applications that provide a great user experience."
  },
  {
    number: "02",
    question: "Do you use TypeScript in your projects?",
    tags: ["LEARNING", "CODING", "QUALITY"],
    answer: "I am currently integrating TypeScript into my workflow. While I am still learning its advanced features, I use it to improve my code quality and build more reliable applications."
  },
  {
    number: "03",
    question: "What kind of projects do you handle?",
    tags: ["SOLUTIONS", "BUSINESS", "WEB"],
    answer: "I help businesses transition to the digital world. Whether it's a digital menu for a restaurant or a management system, I focus on building tools that solve real problems and add value to the client."
  }
];

  return (
    <section className="py-32 md:py-48 bg-black text-white w-full border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6">
        {/* Header like the SERVICES one in image */}
        <div className="flex items-center justify-between mb-24">
          {/* <h2 className="serif-heavy text-7xl md:text-[12rem] lg:text-[15rem] leading-none tracking-tighter uppercase opacity-100">
                Inquiries
          </h2>  */}
          <div className="relative h-[220px] w-full overflow-hidden ">
            <VideoText src="https://assets.mixkit.co/videos/18052/18052-720.mp4">Inquiries</VideoText>
          </div>

          <div className="hidden md:block">
             <Star className="text-orange animate-spin-slow" size={120} fill="currentColor" strokeWidth={0} />
          </div>
        </div>

        {/* Accordion List */}
        <div className="border-t border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              number={faq.number}
              question={faq.question}
              tags={faq.tags}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .animate-spin-slow {
          animation: spin 12s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};
