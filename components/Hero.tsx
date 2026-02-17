
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/0Ny6sL93/Whats-App-Image-2026-02-17-at-5-17-17-PM.jpg" 
          alt="Stock Real Fire Bird Bikes" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg text-center">
        <span className="inline-block bg-red-600 text-white font-bold px-4 py-1.5 text-xs uppercase mb-6 tracking-widest animate-pulse rounded-full border border-red-400">
          🔥 ¡RETIRÁ HOY EN BELLA VISTA! 🔥
        </span>
        
        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight uppercase tracking-tighter">
          Tu Fire Bird R29 <br/>
          <span className="text-red-600">Al Mejor Precio</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-10 font-bold text-gray-100 px-4 leading-snug">
          Basta de viajar apretado. Stock real de fábrica. <br className="hidden md:block" />
          Pagás y te la llevás en el momento.
        </p>
        
        <div className="flex flex-col gap-5 px-2">
          <a 
            href={WHATSAPP_LINK}
            className="bg-green-500 hover:bg-green-600 text-white text-2xl font-black py-6 px-8 rounded-2xl shadow-[0_10px_0_0_rgba(22,163,74,1)] transform active:translate-y-1 active:shadow-none transition-all flex items-center justify-center gap-3 uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            Reservar por WhatsApp
          </a>
          
          <div className="flex items-center justify-center gap-4 text-xs font-black uppercase tracking-widest text-gray-300 italic">
            <span>✓ PRECIO DE DEPÓSITO</span>
            <span className="text-red-500">•</span>
            <span>✓ SIN INTERMEDIARIOS</span>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce opacity-40">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
      </div>
    </section>
  );
};

export default Hero;
