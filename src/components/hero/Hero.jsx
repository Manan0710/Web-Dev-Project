import React from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import pattern from '/src/assets/bg.jpg';

const Hero = () => {
  const handleScroll = () => {
    const el = document.getElementById('features');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const buttonClass =
    "inline-block rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-500 hover:scale-110 hover:from-pink-500 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300";

  return (
    <div className="relative min-h-screen bg-black text-white pt-20 font-['Inter']">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{ backgroundImage: `url(${pattern})` }}
        aria-hidden="true"
      ></div>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center mt-10 space-y-10">
        <p className="text-sm text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-1 rounded-full font-semibold shadow-md tracking-wide animate-bounce">
          ✈ Your Journey Starts Here!
        </p>

        <div className="relative flex flex-col items-center">
          <div className="flex items-center gap-4 px-10 py-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <FaGlobeAmericas className="text-cyan-400 text-5xl animate-spin-slow" />
            <h1 className="text-5xl md:text-7xl font-bold font-['Playfair_Display'] bg-gradient-to-r from-teal-400 via-cyan-400 to-green-400 bg-clip-text text-transparent leading-tight drop-shadow-xl animate-glow">
              Travel Planner
            </h1>
          </div>
          <div className="absolute -bottom-4 w-20 h-1 bg-gradient-to-r from-teal-400 to-green-400 rounded-full animate-pulse"></div>
        </div>

        <section className="mt-8 w-full max-w-6xl mx-auto overflow-hidden rounded-2xl sm:grid sm:grid-cols-2 sm:items-center bg-white shadow-lg backdrop-blur-lg">
          <div className="p-10 md:p-14 lg:px-16 lg:py-24">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-bold text-gray-900 md:text-5xl font-serif">
                Plan Your Dream Trip
              </h2>
              <p className="hidden md:block text-gray-600 mt-4 text-lg leading-relaxed">
                From exotic destinations to weekend getaways, our Travel Itinerary Planner helps you organize 
                your trip, book accommodations, and explore hidden gems — all in one place.
              </p>
              <div className="mt-8">
                <button onClick={handleScroll} className={buttonClass}>
                  Start Planning
                </button>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel beach view"
            className="h-full w-full object-cover sm:rounded-ss-[40px] transform hover:scale-110 transition duration-500"
          />
        </section>

        <section className="mt-16 py-16 px-6 w-full max-w-5xl bg-gradient-to-r from-teal-50 to-blue-50 border-2 border-teal-300 rounded-3xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-800 mb-12 text-center font-['Playfair_Display']">
            Why Choose Our Travel Itinerary Planner?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                alt="Plan icon"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Smart Trip Planning</h3>
              <p className="text-gray-600 mt-2">
                Create detailed itineraries with activities, travel routes, and accommodations in minutes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854929.png"
                alt="Explore icon"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Discover New Places</h3>
              <p className="text-gray-600 mt-2">
                Get recommendations for must-visit attractions and offbeat spots at your destination.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/854/854894.png"
                alt="Booking icon"
                className="w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Easy Bookings</h3>
              <p className="text-gray-600 mt-2">
                Book flights, hotels, and experiences directly through our integrated booking system.
              </p>
            </div>
          </div>
        </section>
      </section>

      <style>{`
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 15px rgba(34,211,238,0.8), 0 0 30px rgba(34,197,94,0.6); }
          50% { text-shadow: 0 0 25px rgba(34,211,238,1), 0 0 45px rgba(34,197,94,0.9); }
        }
        .animate-glow {
          animation: glow 2s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
