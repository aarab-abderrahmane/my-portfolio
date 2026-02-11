import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import { Send, X, Bot, User, Maximize2, Minimize2, Sparkles } from 'lucide-react';


interface ChatOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

// Initialize the Gemini client once
const ai = new GoogleGenAI({ apiKey: "AIzaSyC-F-z56YYmKbBFcYjMhYsqLrIJ9vv60rs"});

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
        }
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || !chatRef.current || isThinking) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsThinking(true);

    try {

      const stream = await chatRef.current.sendMessageStream({ message: userMsg });

      let modelMessageAdded = false ; 
      
      for await (const chunk of stream) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          setMessages(prev => {
 
            const newMessages = [...prev];

              // Add model message only once (on first chunk)
              if (!modelMessageAdded) {
                newMessages.push({ role: 'model', text: c.text });
                modelMessageAdded = true;
              } else {
                newMessages[newMessages.length - 1].text += c.text;
              }

              return newMessages;

          });


        }
      }
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
                    
                    <div className={`max-w-[85%] px-5 py-4 rounded-[24px] text-sm leading-relaxed ${
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