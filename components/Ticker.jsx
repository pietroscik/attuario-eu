'use client';

import { useState, useEffect } from 'react';

export default function Ticker() {
  // Messaggi statici (puoi sostituirli con un array da un file JSON o API)
  const messages = [
    'Nuova guida IFRS 17 disponibile!',
    'Webinar gratuito su Solvency II il 15 ottobre',
    'Aggiornamento strumenti DeFi per attuari',
    'Contattaci per una consulenza personalizzata',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000); // Cambia ogni 4 secondi

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-yellow-100 border-t border-yellow-300 py-2 text-center text-sm text-yellow-800 font-medium overflow-hidden">
      <span className="animate-pulse">📢</span> {messages[currentIndex]}
    </div>
  );
}
