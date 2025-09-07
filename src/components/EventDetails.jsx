import React from 'react';

const EventDetails = () => {
  // You can replace these with actual image URLs or import statements
  const images = {
    traditional: "/images/traditional-ceremony.jpg", // Replace with actual path
    church: "/images/church-wedding.jpg", // Replace with actual path
    reception: "/images/reception-venue.jpg", // Replace with actual path
    // Fallback placeholder service (you can use these temporarily)
    traditionalPlaceholder: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=500&h=300&fit=crop", // Church interior (now for traditional)
    churchPlaceholder: "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=300&fit=crop", // Traditional ceremony (now for church)
    receptionPlaceholder: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&h=300&fit=crop" // Reception venue
  };

  return (
    <section id="when-where" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">When & Where</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Traditional Marriage Ceremony */}
          <div className="flex flex-col md:flex-row gap-12 mb-16 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-amber-700">Traditional Marriage Ceremony</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">17th October 2025 at 02:00pm</span>
                </p>
                <p className="text-gray-700 mb-4 flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>House 25 silver street, H&J Estate Behind Suncity Estate, Galadimawa District, FCT, Abuja.</span>
                </p>
                <p className="text-amber-700 font-medium flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  Color of the day: Purple , Lilac , Aqua Blue.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={images.traditionalPlaceholder}
                  alt="Traditional Marriage Ceremony Venue"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5UcmFkaXRpb25hbCBDZXJlbW9ueSBWZW51ZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Traditional Ceremony</p>
                  <p className="text-xs opacity-90">H&J Estate, Galadimawa</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wedding Ceremony */}
          <div className="flex flex-col md:flex-row-reverse gap-12 mb-16 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-amber-700">Solemnization of Wedding Ceremony</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">18th October, 2025 at 11:00am</span>
                </p>
                <p className="text-gray-700 flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span> RCCG Holy Ghost Center Parish, No 14, Alexandra Crescent, Behind drumstix, Wuse 2, Abuja.</span>
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={images.churchPlaceholder}
                  alt="RCCG Holy Ghost Center Parish"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SQ0NHIEhvbHkgR2hvc3QgQ2VudGVyPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Wedding Ceremony</p>
                  <p className="text-xs opacity-90">RCCG Holy Ghost Center</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Wedding Reception */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-amber-700">Wedding Reception</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700 mb-2 flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Follows immediately after ceremony</span>
                </p>
                <p className="text-gray-700 mb-4 flex items-start">
                  <svg className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rabby Recreation Park, 1794 Co4, Dape District (Beside Paradise Estate) Life camp, FCT, Abuja, Nigeria.</span>
                </p>
                <p className="text-amber-700 font-medium flex items-center">
                  <svg className="w-5 h-5 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                  </svg>
                  Colour of the day: Purple , Lilac , Aqua Blue.
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-md">
                <img 
                  src={images.receptionPlaceholder}
                  alt="Rabby Recreation Park Reception Venue"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjRjNGNEY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5SZWZ5dGlvbiBWZW51ZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">Wedding Reception</p>
                  <p className="text-xs opacity-90">Rabby Recreation Park</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Asoebi and RSVP Contact Information */}
        <div className="max-w-4xl mx-auto mt-20 bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
          <h3 className="text-2xl font-serif text-center text-gray-800 mb-8">Contact Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Asoebi Details
              </h4>
              <p className="text-gray-700 mb-1">Mrs Omolola</p>
              <p className="text-amber-600 font-medium">(+234) 8088899374</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                R.S.V.P
              </h4>
              <p className="text-gray-700 mb-1">Mrs Rose: <span className="text-amber-600 font-medium">(+234) 7034586847</span></p>
              <p className="text-gray-700">Mrs Oluchi Ohajianya: <span className="text-amber-600 font-medium">(+234) 8063768147</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;