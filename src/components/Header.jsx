// components/Header.js
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-serif text-amber-600">D&N</div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'Our Story', 'Gallery', 'When & Where', 'RSVP'].map((item) => {
                  let href = `#${item.toLowerCase().replace(' ', '-')}`;
                  if (item === 'When & Where') href = '#when-where';
                  return (
                    <li key={item}>
                      <a 
                        href={href}
                        className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-100">
            <ul className="flex flex-col space-y-4">
              {['Home', 'Our Story', 'Gallery', 'When & Where', 'RSVP'].map((item) => {
                let href = `#${item.toLowerCase().replace(' ', '-')}`;
                if (item === 'When & Where') href = '#when-where';
                return (
                  <li key={item}>
                    <a 
                      href={href}
                      className="text-gray-700 hover:text-amber-600 transition-colors block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;