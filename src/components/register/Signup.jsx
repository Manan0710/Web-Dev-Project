import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { supabase } from "../../supabaseClient"; // ✅ using your client

export default function Signup() {
  const [form, setForm] = useState({ full_name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Just sign up the user
      const { error } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { full_name: form.full_name }, // metadata saved with user
        },
      });

      if (error) throw error;

      toast.success("Account created successfully! Please sign in.");
      navigate("/signin");
    } catch (error) {
      toast.error(error.message || "Signup failed. Try again.");
    }
  };

  return (
    <div
      className="pt-20 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/2393045.jpg')",
      }}
    >
      <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://wallpaperaccess.com/full/408006.jpg"
            alt="Travel Signup"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-green-500 mb-6">Sign Up</h2>
          <p className="mb-8 text-gray-600">
            Join our travel community and start planning your dream trips 🌍
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="full_name"
                placeholder="Enter your full name"
                value={form.full_name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-green-600 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
