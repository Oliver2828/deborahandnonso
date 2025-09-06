
// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="text-3xl font-serif mb-6 text-amber-400">Deborah & Nonso</div>
        <p className="text-gray-400 mb-2">October 17-18, 2025</p>
        <p className="text-gray-400">Abuja, Nigeria</p>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <p>Made with 💖 for our special day</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;