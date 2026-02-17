
import React from 'react';
import { ICONS } from '../constants';

const Specs: React.FC = () => {
  const specs = [
    { icon: <ICONS.Bike />, title: "Rodado 29", desc: "La que todos buscan, máxima velocidad." },
    { icon: <ICONS.Shield />, title: "Cuadro de Aluminio", desc: "Liviano y resistente, NO hierro pesado que se oxida." },
    { icon: <ICONS.Brake />, title: "Frenos a Disco", desc: "Seguridad total, frenado preciso bajo la lluvia." },
    { icon: <ICONS.Check />, title: "21 Velocidades", desc: "Para que no te cueste ninguna subida." }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black mb-10 text-center uppercase tracking-tight">Lo que importa</h2>
        
        <div className="grid grid-cols-1 gap-8">
          {specs.map((spec, i) => (
            <div key={i} className="flex items-start gap-4 border-b border-gray-800 pb-4 last:border-0">
              <div className="bg-red-600 p-3 rounded-lg text-white">
                {spec.icon}
              </div>
              <div>
                <h3 className="font-black text-xl uppercase mb-1">{spec.title}</h3>
                <p className="text-gray-400 font-medium">{spec.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gray-800 p-4 rounded-xl">
            <h4 className="font-black mb-2 uppercase text-red-500">Colores Disponibles:</h4>
            <div className="flex gap-2">
                <span className="bg-black border border-white px-3 py-1 text-xs font-bold uppercase">Negro Mate</span>
                <span className="bg-gray-100 text-black px-3 py-1 text-xs font-bold uppercase">Gris Plata</span>
                <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold uppercase">Amarillo Flúo</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
