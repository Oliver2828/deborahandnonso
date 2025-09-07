// components/Countdown.js
import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [traditionalTimeLeft, setTraditionalTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [whiteWeddingTimeLeft, setWhiteWeddingTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Traditional Marriage date (October 17, 2025 at 2:00 PM)
      const traditionalDate = new Date('2025-10-17T14:00:00');
      
      // White Wedding date (October 18, 2025 at 11:00 AM)
      const whiteWeddingDate = new Date('2025-10-18T11:00:00');
      
      const now = new Date();
      
      // Calculate time until Traditional Marriage
      const traditionalDifference = traditionalDate - now;
      let traditionalTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (traditionalDifference > 0) {
        traditionalTime = {
          days: Math.floor(traditionalDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((traditionalDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((traditionalDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((traditionalDifference % (1000 * 60)) / 1000)
        };
      }
      
      // Calculate time until White Wedding
      const whiteWeddingDifference = whiteWeddingDate - now;
      let whiteWeddingTime = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (whiteWeddingDifference > 0) {
        whiteWeddingTime = {
          days: Math.floor(whiteWeddingDifference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((whiteWeddingDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((whiteWeddingDifference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((whiteWeddingDifference % (1000 * 60)) / 1000)
        };
      }
      
      setTraditionalTimeLeft(traditionalTime);
      setWhiteWeddingTimeLeft(whiteWeddingTime);
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ time, title, subtitle }) => (
    <div className="bg-amber-100 rounded-xl p-6 border border-amber-200 shadow-md">
      <h3 className="text-xl font-serif mb-4 text-gray-800">{title}</h3>
      <p className="text-sm mb-6 text-gray-700">{subtitle}</p>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(time).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">{value}</div>
            <div className="text-xs uppercase tracking-wider text-gray-700">{unit}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-200 rounded-full translate-x-1/2 translate-y-1/2 opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-800">Countdown to Our Celebrations</h2>
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          {/* Traditional Marriage Countdown */}
          <CountdownBox 
            time={traditionalTimeLeft}
            title="Traditional Marriage"
            subtitle="October 17, 2025 • 2:00 PM"
          />
          
          {/* White Wedding Countdown */}
          <CountdownBox 
            time={whiteWeddingTimeLeft}
            title="White Wedding"
            subtitle="October 18, 2025 • 11:00 AM"
          />
        </div>
      </div>
    </section>
  );
};

export default Countdown;