// components/Gallery.js
import React from 'react';
import img1 from '../assets/DeborahNonso2025!9.jpg';
import img2 from '../assets/DeborahNonso2025!77.jpg';
import img3 from '../assets/DeborahNonso20251.jpg';
import img4 from '../assets/DeborahNonso2025!6.jpg';
import img5 from '../assets/DeborahNonso2025!5.jpg';
import img6 from '../assets/DeborahNonso2025!4.jpg';

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[img1, img2, img3, img4, img5, img6].map((img, idx) => (
            <div key={idx} className="aspect-square bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100 overflow-hidden">
              <img src={img} alt={`Gallery ${idx + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;