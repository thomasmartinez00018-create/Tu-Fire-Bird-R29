
import React from 'react';
import { ICONS } from '../constants';

const Logistics: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 border-y-4 border-gray-100">
      <div className="max-w-lg mx-auto flex flex-col items-center text-center">
        <div className="bg-gray-900 text-white p-4 rounded-full mb-6">
          <ICONS.Truck />
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase">¿Estás lejos?</h2>
        <p className="text-xl font-medium mb-6 text-gray-700">
          Te la enviamos. Hacemos envíos particulares a todo el país. Llega seguro, llega rápido y llega ARMADA (según zona).
        </p>
        <div className="bg-red-50 text-red-800 p-4 rounded-xl border-2 border-red-200 font-bold italic">
          "Consultanos el costo de envío por WhatsApp con tu código postal."
        </div>
      </div>
    </section>
  );
};

export default Logistics;
