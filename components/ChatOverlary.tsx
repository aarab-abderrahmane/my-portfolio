import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat ,Type} from '@google/genai';
import { Send, X, Bot, User, Maximize2, Minimize2, Sparkles , ArrowBigDownDash } from 'lucide-react';

import {PROJECTS} from '../data'

interface ChatOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

// Initialize the Gemini client once
const ai = new GoogleGenAI({ apiKey: "AIzaSyC3uWKQ0iQ_6b9rlnKCfcOR2CxzbylqIZ0"});

export const ChatOverlay: React.FC<ChatOverlayProps> = ({ isActive, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  // Initialize chat instance
  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: "You are an AI assistant built into a modern, dark-glassmorphism portfolio website called BentoFolio. The creator is a skilled Full-Stack Architect studying at ISTA. Be concise, friendly, helpful, and use a playful but professional tone. Do not use markdown unless necessary, prefer plain text for a clean UI."
        },
        response_format : {
          type : "json_schema" ,
          json_schema : {
            name : "chat_response" , 
            schema : {
              type : "object" , 
              properties : {
                message : {type : "string"} , 
                showDownload : {type : "boolean"}
              }, 
              required : ["message" , "showDownload"]
            }
          }
        } 

      });
    }
  }, []);

  const projectsContext = JSON.stringify(PROJECTS);

  const systemInstruction = `
    You are the AI version of Aarab Abderrahmane, a Full-Stack Developer based in Morocco. 
    You are answering visitors on his portfolio website.
    ALWAYS answer in the first person ("I", "Me", "My").

    Here is your persona and data:

    1. **Who are you?**
      - Name: Aarab Abderrahmane.
      - Role: Full-Stack Developer & Problem Solver.
      - Location: Morocco.
      - Philosophy: I don't just write code; I build digital solutions that save money and time for businesses (Value-Based Selling).

    2. **Technical Skills (Be honest):**
      - **Core (Expert):** React 19, Next.js, Tailwind CSS 4, JavaScript (ES6+), HTML5, CSS3.
      - **Learning/Improving:** TypeScript (I use it to improve code quality but still learning advanced patterns), Node.js, MongoDB.
      - **Tools:** Git, GitHub, Vercel, Framer Motion, AI-Assisted Development (I use AI to code faster and cleaner).

    3.**My Projects Data (Use this strictly):**
        Here is the JSON list of my projects. Read this data to answer any questions about my work, features, or tech stack:
        ${projectsContext}

    4. **Personality:**
      - Humble but ambitious. 
      - A "Builder" mindset: I focus on the result and the value, not just the code syntax.
      - Professional, helpful, and direct.

    5. **Logic for Response:**
      - If the user asks for my **Resume**, **CV**, or **Contact Info**, make the answer helpful and set 'isShowDownloadCVButton' to true.
      - If the user asks about my skills, mention React 19 and Tailwind specifically.
      - Keep answers concise (max 3-4 sentences unless asked for details).

    User Question: 
    `;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatRef.current || isThinking) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    try {



      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents:systemInstruction + userMsg,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              answer: { type: Type.STRING },
              isShowDownloadCVButton: { type: Type.BOOLEAN}
            },
            required: ["answer", "isShowDownloadCVButton"]
          }
        }
      });

      const result = JSON.parse(response.text)
      setMessages(prev => [...prev, {  role: 'model', text: result.answer , showDownload: result.isShowDownloadCVButton }]);
      console.log(result)


    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].text = "Communication link interrupted. Please try again.";
        return newMessages;
      });
    } finally {
      setIsThinking(false);
    }
  };

  if (!isActive) return null;

  return (
    <>
      {/* Immersive Siri-style Glow Wrapper */}
      <div  className="fixed inset-0 z-[100] pointer-events-none animate-siri-glow opacity-100 transition-opacity duration-1000" />
      
      {/* Background Dimmer */}
      <div 
        className="fixed inset-0 z-[99] bg-black/10 backdrop-blur-[2px] transition-all"
        onClick={onClose}
      />

      {/* Main Chat Interface Positioned at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-[101] pointer-events-none  flex flex-col items-center justify-end pb-8 px-4 h-full">
        
        {/* Close Button (Top right of the screen when active) */}
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 pointer-events-auto p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/10 transition-all text-white/50 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`w-full flex flex-col gap-4 pointer-events-auto  transition-all duration-500 ease-in-out ${isExpanded ? 'max-w-4xl' : 'max-w-2xl'}`}>
          
          {/* Dialogue Box (Reveals when messages exist) */}
          {messages.length > 0 && (
            <div data-lenis-prevent  className={`w-full bg-[#111111]/40 backdrop-blur-3xl border border-white/10 rounded-[32px] p-4 md:p-6 shadow-2xl flex flex-col gap-4 animate-in slide-in-from-bottom-10 fade-in duration-500 overflow-hidden transition-all duration-500 ${isExpanded ? 'h-[75vh]' : ''}`}>
              
              {/* Header with Expand/Collapse Controls */}
              <div className="flex justify-between items-center pb-3 border-b border-white/5 shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-orange" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/50">AI Assistant</span>
                </div>
                <button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-all focus:outline-none"
                  title={isExpanded ? "Minimize Chat" : "Expand Chat"}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Scrollable Messages Area */}
              <div className={`w-full overflow-y-auto chat-scroll pr-2 flex flex-col gap-6 transition-all duration-500 ${isExpanded ? 'flex-1' : 'max-h-[50vh]'}`}>
                
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex items-end gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'model' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange to-purple-500 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className={`max-w-[85%] px-5 py-4 flex flex-col rounded-[24px] text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-white text-black rounded-br-sm' 
                        : 'bg-white/10 text-white rounded-bl-sm border border-white/5'
                    }`}>
                      {msg.text.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i !== msg.text.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}

                      {
                        msg.showDownload && (
                          <a 
                            href="/Abderrahmane_Ben_Amor_CV.pdf"
                            download
                            className="mt-3 inline-block px-4 bg-lime-400 flex gap-2 items-end w-[160px] py-2 bg-gradient-to-r from-orange to-purple-500 text-black rounded-full text-md transition-all hover:bg-lime-300"
                          >
                            Download CV
                            <ArrowBigDownDash className="inline mr-2 w-6 h-6" />

                          </a>
                        )
                      }
                    </div>

                    {msg.role === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-white/60" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isThinking && (
                  <div className="flex items-center gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange to-purple-500 flex items-center justify-center shrink-0">
                       <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-5 py-4 rounded-[24px] rounded-bl-sm bg-white/10 border border-white/5 flex gap-1.5 items-center">
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}

          {/* Frosted Glass Input Area */}
          <form 
            onSubmit={handleSubmit}
            className="w-full relative group animate-in slide-in-from-bottom-4 fade-in duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-[#1a1a1a]/20 backdrop-blur-3xl border border-white/10 rounded-full p-2 shadow-2xl">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask AI anything..."
                className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder:text-white/30 text-base"
                autoFocus
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isThinking}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-orange hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black shrink-0 shadow-lg"
              >
                <Send className="w-5 h-5 " />
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};