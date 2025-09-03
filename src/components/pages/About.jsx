import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaUsers, FaCompass } from "react-icons/fa";

export default function About() {
  return (
    <section
      className="relative min-h-screen pt-20 pb-16 px-6 md:px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/2393045.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          ✨ About <span className="text-green-400">TravelPlan</span>
        </motion.h2>

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-white"
          >
            <p className="leading-relaxed text-lg">
              At <span className="font-semibold text-green-300">TravelPlan</span>, we
              believe that <span className="italic">every journey tells a story</span>.
              🌍 Our mission is to inspire travelers, craft unforgettable itineraries,
              and create stress-free adventures for everyone.
            </p>

            <p className="leading-relaxed text-lg">
              From <span className="font-medium text-cyan-300">hidden gems</span> to
              world-famous landmarks, we help you design your perfect trip — whether
              it’s a <span className="text-yellow-300">family getaway</span>,{" "}
              <span className="text-pink-300">romantic escape</span>, or{" "}
              <span className="text-purple-300">solo adventure</span>.
            </p>

            <ul className="list-disc list-inside text-base space-y-2">
              <li>🌎 Explore top destinations worldwide</li>
              <li>🗺️ Tailor-made itineraries for every traveler</li>
              <li>🤝 24/7 customer support & guidance</li>
              <li>💡 AI-powered recommendations based on your interests</li>
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-cyan-300 text-lg" />
                <span>Email: support@travelplan.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-green-300 text-lg" />
                <span>Contact: +91 98765 43210</span>
              </div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80"
              alt="Beach"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 "
            />
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80"
              alt="Mountains"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1600&q=80"
              alt="City"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 col-span-2"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-20"
        >
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition">
            <FaGlobe className="mx-auto text-green-300 text-3xl mb-3" />
            <h3 className="text-2xl font-bold">50+</h3>
            <p className="text-sm">Countries Covered</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition">
            <FaUsers className="mx-auto text-cyan-300 text-3xl mb-3" />
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-sm">Happy Travelers</p>
          </div>

          <div className="p-6 bg-white/10 backdrop-blur-md rounded-xl shadow-md hover:scale-105 transition">
            <FaCompass className="mx-auto text-yellow-300 text-3xl mb-3" />
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-sm">Unique Itineraries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
