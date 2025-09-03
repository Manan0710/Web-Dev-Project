import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-8 text-white"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/2393045.jpg')", // 🌊 Replace with your image URL
      }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black/60 min-h-screen rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-8 text-center">TRAVELPLAN</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Explore Destinations */}
          <div className="bg-green-800/40 border border-green-400 rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-xl font-semibold mb-2">🌍 Explore Destinations</h2>
              <p className="mb-4 text-gray-200">
                Discover exotic places and hidden gems tailored to your interests.
              </p>
            </div>
            <Link
              to="/destinations"
              className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-lg shadow hover:bg-yellow-500"
            >
              View Destinations
            </Link>
          </div>

          {/* Itinerary Planner */}
          <div className="bg-green-800/40 border border-pink-400 rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-xl font-semibold mb-2">🗓️ Itinerary Planner</h2>
              <p className="mb-4 text-gray-200">
                Plan your dream trip with personalized schedules and activities.
              </p>
            </div>
            <Link
              to="/planner"
              className="px-4 py-2 bg-pink-500 text-white font-medium rounded-lg shadow hover:bg-pink-600"
            >
              Start Planning
            </Link>
          </div>

          {/* Budget Manager */}
          <div className="bg-green-800/40 border border-green-400 rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-xl font-semibold mb-2">💰 Budget Manager</h2>
              <p className="mb-4 text-gray-200">
                Track expenses and manage your travel budget with ease.
              </p>
            </div>
            <Link
              to="/budget"
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600"
            >
              Manage Budget
            </Link>
          </div>

          {/* Weather Updates */}
          <div className="bg-green-800/40 border border-yellow-400 rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[250px] md:col-span-2">
            <div>
              <h2 className="text-xl font-semibold mb-2">☀️ Weather Updates</h2>
              <p className="mb-4 text-gray-200">
                Get real-time weather forecasts for your destinations.
              </p>
            </div>
            <Link
              to="/weather"
              className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg shadow hover:bg-orange-600"
            >
              Check Weather
            </Link>
          </div>

          {/* Recent Activities */}
          <div className="bg-green-800/40 border border-blue-400 rounded-xl p-6 shadow-lg flex flex-col justify-between min-h-[250px]">
            <div>
              <h2 className="text-xl font-semibold mb-4">📝 Recent Activities</h2>
              <ul className="space-y-2 text-gray-200">
                <li>
                  ✅ You viewed <span className="text-yellow-300">Italy Destinations</span>
                </li>
                <li>
                  🗓️ Added <span className="text-pink-300">Paris to Planner</span>
                </li>
                <li>
                  🌦️ Checked <span className="text-orange-300">Weather for Tokyo</span>
                </li>
                <li>
                  💰 Updated <span className="text-green-300">Budget Plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Upcoming Trip */}
        <div className="bg-green-800/40 border border-purple-400 rounded-xl p-6 shadow-lg mt-6">
          <h2 className="text-xl font-semibold mb-2">📅 Upcoming Trip</h2>
          <p className="text-gray-200">
            ✈️ Your next adventure is{" "}
            <span className="font-semibold text-yellow-300">Paris, France</span> on{" "}
            <span className="font-semibold text-yellow-300">15th September 2025</span>. Don’t
            forget to pack your essentials!
          </p>
        </div>

        {/* Footer Quote */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-4 shadow-lg mt-6 text-center">
          <p className="italic text-lg">
            "Jobs fill your pocket, but adventures fill your soul." 🌍
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
