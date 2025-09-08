import React, { useState } from "react";
import TradImage from "../assets/trad11.jpg"; // replace path if different

const EventDetails = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    setLightboxOpen(false);
  };

  const images = {
    traditional: TradImage, // local image
    church:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
    reception:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop",
  };

  return (
    <section id="when-where" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            When & Where
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Traditional Ceremony */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-serif text-amber-700 flex items-center">
                <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </span>
                Traditional Marriage Ceremony
              </h3>
              <p className="text-gray-700 flex items-center">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="font-medium">17th October 2025 at 02:00pm</span>
              </p>
              <p className="text-gray-700 flex items-start">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                House 25 Silver Street, H&J Estate, Galadimawa District, Abuja
              </p>
              <p className="text-amber-700 font-medium flex items-center">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
                Color of the day: White & Gold
              </p>
            </div>

            <div className="md:w-1/2 relative overflow-hidden rounded-lg shadow-md">
              <img
                src={images.traditional}
                alt="Traditional Venue"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => openLightbox(images.traditional)}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x400/FFFBEB/7C2D12?text=Traditional+Ceremony")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Traditional Ceremony</p>
                <p className="text-xs opacity-90">H&J Estate, Galadimawa</p>
              </div>
            </div>
          </div>

          {/* Wedding Ceremony */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-serif text-amber-700 flex items-center">
                <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z"
                    />
                  </svg>
                </span>
                Solemnization of Wedding
              </h3>
              <p className="text-gray-700 flex items-center">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                18th October 2025 at 11:00am
              </p>
              <p className="text-gray-700 flex items-start">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                RCCG Holy Ghost Center Parish, Wuse 2, Abuja
              </p>
            </div>

            <div className="md:w-1/2 relative overflow-hidden rounded-lg shadow-md">
              <img
                src={images.church}
                alt="Church Venue"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x400/FFFBEB/7C2D12?text=Church+Venue")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Wedding Ceremony</p>
                <p className="text-xs opacity-90">RCCG Holy Ghost Center</p>
              </div>
            </div>
          </div>

          {/* Wedding Reception */}
          <div className="flex flex-col md:flex-row gap-12 items-center bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-serif text-amber-700 flex items-center">
                <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
                Wedding Reception
              </h3>
              <p className="text-gray-700 flex items-center">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m-6 6a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Follows immediately after ceremony
              </p>
              <p className="text-gray-700 flex items-start">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Rabby Recreation Park, Dape District, Abuja
              </p>
              <p className="text-amber-700 font-medium flex items-center">
                <svg
                  className="w-5 h-5 text-amber-600 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
                Colour of the day: Purple, Lilac, Aqua Blue
              </p>
            </div>

            <div className="md:w-1/2 relative overflow-hidden rounded-lg shadow-md">
              <img
                src={images.reception}
                alt="Reception Venue"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x400/FFFBEB/7C2D12?text=Reception+Venue")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Wedding Reception</p>
                <p className="text-xs opacity-90">Rabby Recreation Park</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto mt-20 bg-amber-50 p-8 rounded-lg border border-amber-100 shadow-lg">
          <h3 className="text-2xl font-serif text-center text-gray-800 mb-8">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                Asoebi Details
              </h4>
              <p className="text-gray-700 mb-1">Mrs Omolola</p>
              <p className="text-amber-600 font-medium">(+234) 8088899374</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-amber-100 shadow-sm">
              <h4 className="text-lg font-semibold text-amber-700 mb-4 flex items-center">
                R.S.V.P
              </h4>
              <p className="text-gray-700 mb-1">
                Mrs Rose:{" "}
                <span className="text-amber-600 font-medium">
                  (+234) 7034586847
                </span>
              </p>
              <p className="text-gray-700">
                Mrs Oluchi Ohajianya:{" "}
                <span className="text-amber-600 font-medium">
                  (+234) 8063768147
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-3xl z-10"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default EventDetails;
