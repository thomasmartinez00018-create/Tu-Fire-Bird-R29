
import React from 'react';
import { ADDRESS, MAPS_URL, ICONS } from '../constants';

const Trust: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black text-center mb-8 uppercase leading-none">
          No somos una web fantasma.<br/>
          <span className="text-red-600">Vení al depósito.</span>
        </h2>
        
        <div className="bg-white border-4 border-gray-900 rounded-2xl overflow-hidden shadow-xl mb-8">
          <div className="relative w-full aspect-[4/3] bg-black">
            {/* Video real de stock en Vimeo */}
            <iframe 
                src="https://player.vimeo.com/video/1165802791?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                className="absolute inset-0 w-full h-full"
                title="stock vicis"
            ></iframe>
          </div>

          <div className="p-6">
            <p className="text-lg font-bold mb-6 italic border-l-4 border-red-600 pl-4">
              "Te atendemos nosotros: Iván y el equipo. Nada de estafas. Venís, probás la bici, te gusta, pagás y te la llevás."
            </p>
            
            <div className="flex items-start gap-3 bg-gray-100 p-4 rounded-xl border-l-4 border-gray-900 mb-6">
              <div className="text-gray-900 mt-1"><ICONS.MapPin /></div>
              <div>
                <p className="font-black uppercase text-sm">Nuestra Dirección:</p>
                <p className="text-lg">{ADDRESS}</p>
                <a 
                    href={MAPS_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-red-600 font-black underline mt-2 inline-block"
                >
                    VER EN GOOGLE MAPS
                </a>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-4 rounded-xl flex items-center justify-between">
                <span className="font-black uppercase text-sm">¿Dudas con el talle?</span>
                <a href={MAPS_URL} className="bg-white text-gray-900 px-3 py-1 rounded font-black text-xs uppercase">Vení a probarla</a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
            <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🛡️</span>
                <span className="text-[10px] font-black uppercase leading-tight">Garantía<br/>Real</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">🔧</span>
                <span className="text-[10px] font-black uppercase leading-tight">Taller<br/>Propio</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl mb-1">⚡</span>
                <span className="text-[10px] font-black uppercase leading-tight">Service<br/>Inmediato</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
