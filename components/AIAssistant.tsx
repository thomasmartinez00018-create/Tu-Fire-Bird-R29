
import React, { useState, useRef, useEffect } from 'react';
import { GeminiService } from '../services/geminiService';
import { ICONS, WHATSAPP_LINK } from '../constants';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: "¡Hola! Soy el asistente de Iván. ¿Querés saber qué talle sos o tenés alguna duda con la Fire Bird?"}
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const gemini = useRef(new GeminiService());

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userText}]);
    setLoading(true);

    try {
      const response = await gemini.current.getBikeAdvice(userText);
      setMessages(prev => [...prev, {role: 'ai', text: response}]);
    } catch (err) {
      setMessages(prev => [...prev, {role: 'ai', text: "Che, se me trabó el cambio. Mandale un WhatsApp directo a Iván mejor."}]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-6 z-40 bg-gray-900 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 ${isOpen ? 'scale-0' : 'scale-100'}`}
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
        <ICONS.Bike />
      </button>

      {/* Chat Window */}
      <div className={`fixed inset-0 z-50 bg-black/50 transition-opacity flex items-end md:items-center justify-center p-4 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`bg-white w-full max-w-md h-[80vh] rounded-t-3xl md:rounded-3xl flex flex-col shadow-2xl transition-transform transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          
          {/* Header */}
          <div className="bg-gray-900 p-4 rounded-t-3xl flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-red-600 p-2 rounded-lg"><ICONS.Bike /></div>
              <div>
                <p className="font-black uppercase text-sm leading-none">Asistente Virtual</p>
                <p className="text-xs text-green-400 font-bold">En línea ahora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl font-medium text-sm ${m.role === 'user' ? 'bg-gray-900 text-white rounded-br-none' : 'bg-white text-gray-800 border-2 border-gray-100 rounded-bl-none shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border-2 border-gray-100 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="px-4 py-2 bg-gray-50 flex gap-2 overflow-x-auto no-scrollbar">
            <button onClick={() => setInput("¿Qué talle soy?")} className="whitespace-nowrap bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-600">¿Qué talle soy?</button>
            <button onClick={() => setInput("¿Hacen envíos?")} className="whitespace-nowrap bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-600">¿Hacen envíos?</button>
            <button onClick={() => setInput("¿Tienen stock?")} className="whitespace-nowrap bg-white border border-gray-200 px-3 py-1 rounded-full text-xs font-bold text-gray-600">¿Tienen stock?</button>
          </div>

          {/* Footer Input */}
          <div className="p-4 border-t bg-white rounded-b-3xl">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Preguntame lo que sea..."
                className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-gray-900"
              />
              <button 
                onClick={handleSend}
                className="bg-gray-900 text-white p-3 rounded-xl active:scale-95 transition-transform"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </div>
            <a 
              href={WHATSAPP_LINK} 
              className="mt-4 block text-center py-2 bg-green-50 text-green-700 text-xs font-black uppercase rounded-lg border border-green-200"
            >
              Hablar con Iván Directo
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
