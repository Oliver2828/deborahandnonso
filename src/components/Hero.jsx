// components/Hero.js
import React from 'react';
import heroBg from '../assets/DeborahNonso2025!6.jpg';

const Hero = () => {
  return (
    <section
      id="home"
  className="relative min-h-[200vh] flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
  {/* // ...removed gold decorative elements... */}
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-10">
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-6"></div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">DEBBY & NONSO</h1>
          <p className="text-xl md:text-2xl text-amber-100 mb-6">ARE GETTING MARRIED</p>
          <p className="text-lg md:text-xl text-amber-200 font-medium">17 & 18 October 2025</p>
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