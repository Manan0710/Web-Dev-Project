import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";  // <-- make sure path is correct
import { UserAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

export default function Planner() {
  const { user } = UserAuth(); // get logged in user
  const [form, setForm] = useState({
    name: "",
    destination: "",
    days: "",
    budget: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("Please sign in to save your trip.");
      return;
    }

    try {
      setLoading(true);

      // Insert into Supabase
      const { error } = await supabase.from("planner_items").insert([
        {
          user_id: user.id, // 👈 link row to the logged in user
          title: form.destination, // we’ll save destination as title
          notes: `Traveler: ${form.name}, Budget: ${form.budget}`,
          trip_date: null, // optional
          location: form.destination,
        },
      ]);

      if (error) throw error;

      toast.success("Trip saved to Supabase 🎉");

      // After saving, navigate to results and pass form data
      navigate("/results", { state: form });
    } catch (err) {
      console.error(err.message);
      toast.error("Failed to save trip");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-green-100 mb-6 text-center">
        Plan Your Trip
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="text"
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />
        <input
          type="number"
          name="days"
          placeholder="Number of Days"
          value={form.days}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
        />
        <input
          type="text"
          name="budget"
          placeholder="Budget (e.g. $1000)"
          value={form.budget}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-cyan-500 to-green-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          {loading ? "Saving..." : "Plan My Trip"}
        </button>
      </form>
    </div>
  );
}
