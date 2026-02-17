
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Specs from './components/Specs';
import Trust from './components/Trust';
import Logistics from './components/Logistics';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  useEffect(() => {
    console.log("App mounted - High Conversion Mode Active");
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-x-hidden selection:bg-red-200 selection:text-red-900">
      {/* Top Banner */}
      <div className="bg-red-600 text-white text-[10px] font-black uppercase py-1 text-center tracking-[0.2em] fixed top-0 w-full z-[100] border-b border-red-700 shadow-md">
        Quedan 4 unidades en oferta de contado. Aprovechá hoy.
      </div>

      <main className="pt-6">
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="bg-gray-900 py-3 overflow-hidden border-y-2 border-gray-800">
          <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
            {[1,2,3,4,5].map(i => (
              <span key={i} className="text-white font-black uppercase text-sm mx-4 flex items-center gap-2 italic">
                <span className="text-red-600">★</span> +500 Bicicletas Entregadas
                <span className="text-red-600">★</span> Garantía Fire Bird Real
                <span className="text-red-600">★</span> Mejor Precio Argentina
              </span>
            ))}
          </div>
        </div>

        <Pricing />
        <Specs />
        <Trust />
        <Logistics />
        <FAQ />
        <Footer />
      </main>

      {/* Sticky Floating CTA (Only Visible on Mobile Scroll) */}
      <div className="fixed bottom-6 left-6 right-6 z-40 flex justify-center">
        <a 
          href={WHATSAPP_LINK}
          className="flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(22,163,74,0.5)] font-black text-lg uppercase tracking-tight animate-bounce-slow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
          Mandar WhatsApp
        </a>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
