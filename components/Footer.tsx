
import React from 'react';
import { WHATSAPP_LINK, ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 border-t-8 border-red-600">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-4xl font-black mb-6 uppercase italic leading-none">
          ¿Vas a seguir esperando el colectivo?
        </h2>
        
        <a 
          href={WHATSAPP_LINK}
          className="bg-green-500 text-white text-xl font-black py-6 px-10 rounded-2xl shadow-xl hover:bg-green-600 transform hover:-translate-y-1 transition-all block uppercase mb-10"
        >
          QUIERO HABLAR CON IVÁN AHORA
        </a>

        <div className="space-y-4 text-gray-600 font-bold uppercase text-xs tracking-widest">
          <p>© {new Date().getFullYear()} Iván Petrino Bikes - Bella Vista</p>
          <p>{ADDRESS}</p>
          <p>Hecho para rodar 🚲</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
