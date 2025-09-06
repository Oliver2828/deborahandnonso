// components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Set to the first event date (Traditional Marriage on October 17, 2025)
      const weddingDate = new Date('2025-10-17T14:00:00'); // 2:00 PM
      const now = new Date();
      const difference = weddingDate - now;
      let time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
      setTimeLeft(time);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-amber-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Countdown to Our Big Day</h2>
        <p className="text-xl mb-16 opacity-90">17th October 2025 - Traditional Marriage Ceremony</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-white bg-opacity-20 rounded-lg p-6 border border-white border-opacity-30">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-black drop-shadow">{value}</div>
              <div className="text-sm uppercase tracking-wider opacity-90 text-black">{unit}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countdown;