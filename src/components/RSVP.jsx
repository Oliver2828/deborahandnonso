// components/RSVP.js
import React from 'react';

const RSVP = () => {
  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-amber-50 to-rose-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-rose-200 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-200 rounded-full translate-y-1/2 -translate-x-1/2 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">RSVP</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <p className="text-center text-gray-700 mb-8 text-lg">
            Please let us know if you will be able to join us on our special day.
          </p>
          
          {/* Form content has been removed */}
        </div>
      </div>
    </section>
  );
};

export default RSVP;