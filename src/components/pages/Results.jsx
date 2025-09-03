import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination, days, budget } = location.state || {};

  if (!destination || !days || !budget) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold text-red-500">No trip details found!</h2>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate("/planner")}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Plan Another Trip
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-green-100 mb-6">
        Your Trip Plan ✈️
      </h2>
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
        <p className="text-lg"><span className="font-semibold">Destination:</span> {destination}</p>
        <p className="text-lg"><span className="font-semibold">Duration:</span> {days} days</p>
        <p className="text-lg"><span className="font-semibold">Budget:</span> {budget}</p>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-cyan-600 text-white py-2 px-4 rounded-lg hover:bg-cyan-700 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/planner")}
          className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
        >
          Plan Another Trip
        </button>
      </div>
    </div>
  );
}
