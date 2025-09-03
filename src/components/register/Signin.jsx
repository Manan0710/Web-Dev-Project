import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Signin() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Welcome back, ${form.email}! ✈️`);
    navigate("/"); // Redirect to Hero ("/")
  };

  return (
    <div
      className="pt-20 flex items-center justify-center min-h-screen"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/2393045.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-5xl w-full">
        
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://wallpaperaccess.com/full/408006.jpg"
            alt="Travel Signin"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-cyan-600 mb-6">Sign In</h2>
          <p className="mb-8 text-gray-600">Welcome back traveler! Sign in to continue your journey ✈️</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-green-400 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Sign In
            </button>
          </form>

          {/* Extra Links */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-cyan-600 font-semibold hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
