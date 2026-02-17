
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "¿Puedo ir a verla y probarla?",
      a: "¡Olvidate! Te esperamos en el depósito de Bella Vista de Lunes a Sábados. No compres a ciegas, vení y sentate arriba de la bici."
    },
    {
      q: "¿Qué medios de pago aceptan?",
      a: "Efectivo, Transferencia o Mercado Pago. Consultanos al WhatsApp por promociones vigentes de contado."
    },
    {
      q: "¿La entregan armada?",
      a: "Sí, ajustada por nuestro mecánico y lista para rodar si la retirás por el local. Si es envío al interior, va semi-armada en caja para que no se raye."
    },
    {
        q: "¿Tienen otros talles?",
        a: "Trabajamos todos los talles de Fire Bird: S, M, L y XL. Consultá stock del talle que necesitás antes de venir."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-black mb-10 text-center uppercase">Preguntas Frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border-b border-gray-800 pb-4">
              <summary className="flex justify-between items-center cursor-pointer list-none font-black text-lg uppercase py-2">
                {faq.q}
                <span className="transition-transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                </span>
              </summary>
              <p className="mt-2 text-gray-400 font-medium leading-relaxed">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
