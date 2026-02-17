
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6" id="precios">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black text-center mb-10 uppercase italic border-l-8 border-red-600 pl-4">
          Precios Directo de Depósito
        </h2>
        
        <div className="space-y-8">
          {/* Card 1 */}
          <div className="border-4 border-gray-900 p-6 rounded-2xl relative bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <span className="absolute -top-4 left-6 bg-gray-900 text-white font-bold px-4 py-1 text-xs uppercase">
              Consumidor Final
            </span>
            <h3 className="text-2xl font-black mb-2 uppercase">Llevate una sola</h3>
            <div className="text-5xl font-black text-red-600 mb-4">$255.000</div>
            <ul className="space-y-2 mb-6 text-gray-700 font-bold">
              <li className="flex items-center gap-2">✅ Ideal para ir a laburar</li>
              <li className="flex items-center gap-2">✅ Retiro hoy mismo</li>
            </ul>
            <a 
              href={WHATSAPP_LINK}
              className="block text-center w-full border-4 border-gray-900 py-3 font-black text-xl hover:bg-gray-100 transition-colors uppercase"
            >
              Me interesa
            </a>
          </div>

          {/* Card 2 */}
          <div className="border-4 border-green-600 p-6 rounded-2xl relative bg-green-50 shadow-[8px_8px_0_0_rgba(22,163,74,1)]">
            <span className="absolute -top-4 left-6 bg-green-600 text-white font-bold px-4 py-1 text-xs uppercase">
              Mayorista / Amigos
            </span>
            <h3 className="text-2xl font-black mb-2 uppercase">Llevando 3 o más</h3>
            <div className="text-5xl font-black text-green-700 mb-4">$235.000</div>
            <ul className="space-y-2 mb-6 text-green-900 font-bold">
              <li className="flex items-center gap-2">🔥 Juntate con amigos y ahorrá</li>
              <li className="flex items-center gap-2">🔥 Mejor precio de reventa</li>
            </ul>
            <a 
              href={WHATSAPP_LINK}
              className="block text-center w-full bg-green-600 text-white py-3 font-black text-xl hover:bg-green-700 transition-colors uppercase"
            >
              Pedir Mayorista
            </a>
          </div>
        </div>
        
        <p className="mt-8 text-center text-gray-600 font-bold italic">
          Sin intermediarios. El mejor precio real de la zona.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
