// components/Registry.js
import React from 'react';

const Registry = () => {
  return (
    <section id="registry" className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Registry</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-amber-100">
          <div className="text-center mb-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              Your presence at our wedding is enough present for us.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              However, if you wish to honor us with gifts, we humbly request that it be monetized.
            </p>
          </div>
          
          <div className="mt-12">
            <div className="text-center mb-8">
              <p className="text-amber-700 font-medium text-lg">You can send to either of our accounts:</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Deborah's UBA Account */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex-1">
                {/* <h3 className="text-xl font-serif text-amber-700 mb-4 text-center">Debby's Account</h3> */}
                <div className="text-center">
                  <p className="text-gray-700 mb-2">Bank:</p>
                  <p className="text-amber-600 font-medium text-lg mb-4">UBA</p>
                  <p className="text-gray-700 mb-2">Account Number:</p>
                  <p className="text-amber-600 font-medium text-lg mb-4">2141532143</p>
                  {/* <p className="text-gray-700 mb-2">Account Name:</p> */}
                  {/* <p className="text-amber-600 font-medium">Deborah Akin-Benson</p> */}
                </div>
              </div>
              
              {/* OR separator */}
              <div className="flex items-center justify-center my-4 md:my-0">
                <div className="bg-amber-200 rounded-full w-12 h-12 flex items-center justify-center">
                  <span className="text-amber-700 font-bold text-lg">OR</span>
                </div>
              </div>
              
              {/* Nonso's UBA Account */}
              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 flex-1">
                {/* <h3 className="text-xl font-serif text-amber-700 mb-4 text-center">Nonso's Account</h3> */}
                <div className="text-center">
                  <p className="text-gray-700 mb-2">Bank:</p>
                  <p className="text-amber-600 font-medium text-lg mb-4">UBA</p>
                  <p className="text-gray-700 mb-2">Account Number:</p>
                  <p className="text-amber-600 font-medium text-lg mb-4">2235966375</p>
                  {/* <p className="text-gray-700 mb-2">Account Name:</p> */}
                  {/* <p className="text-amber-600 font-medium">Chinonso Ohajianya</p> */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12 pt-8 border-t border-amber-100">
            <p className="text-gray-600 italic text-lg">
              Your generosity and well-wishes are truly appreciated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registry;