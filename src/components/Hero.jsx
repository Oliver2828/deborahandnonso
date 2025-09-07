// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white pt-16">
      {/* Gold decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-amber-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-amber-100 rounded-full opacity-30"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-10">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-800 mb-4">DEBBY & NONSO</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6">ARE GETTING MARRIED</p>
          <p className="text-lg md:text-xl text-amber-600 font-medium">17 & 18 October 2025</p>
        </div>
        
        {/* Decorative elements */}
        <div className="mt-16 flex justify-center space-x-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-3 h-3 bg-amber-400 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;