// components/Gallery.js
import React from 'react';
import img1 from '../assets/DeborahNonso2025!9.jpg';
import img2 from '../assets/DeborahNonso2025!77.jpg';
import img3 from '../assets/DeborahNonso20251.jpg';
import img4 from '../assets/DeborahNonso2025!6.jpg';
import img5 from '../assets/DeborahNonso2025!5.jpg';
import img6 from '../assets/DeborahNonso2025!4.jpg';
import img7 from '../assets/DSC06640.jpg';
import img8 from '../assets/DSC06755.jpg';
import img12 from '../assets/Deborah999.jpg';
import img9 from '../assets/Deborah2.jpg';
import img10 from '../assets/Deborah44.jpg';
import img11 from '../assets/Deborah666.jpg';
// import img12 from '../assets/Deborah999.jpg';

const Gallery = () => {
  // All 12 images array
  const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img12, img9, img10, img11, ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Display all 12 images */}
          {allImages.map((img, idx) => (
            <div key={`img-${idx}`} className="aspect-square bg-amber-50 rounded-lg flex items-center justify-center border border-amber-100 overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={img} 
                alt={`Gallery ${idx + 1}`} 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  // Fallback if image fails to load
                  e.target.style.display = 'none';
                  const errorDiv = document.createElement('div');
                  errorDiv.className = 'text-amber-600 text-center p-4';
                  errorDiv.innerHTML = `
                    <div class="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span class="text-amber-500 text-xl">!</span>
                    </div>
                    <p class="text-sm font-medium">Photo ${idx + 1}</p>
                  `;
                  e.target.parentNode.appendChild(errorDiv);
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional: Add a message */}
        <div className="text-center mt-12">
          <p className="text-amber-600 italic">
            {/* Our precious moments together */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;