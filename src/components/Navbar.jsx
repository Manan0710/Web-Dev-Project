import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = UserAuth();
  const navigate = useNavigate();

  const links = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Planner", href: "/planner" },
    { name: "Budget", href: "/budget" },
    { name: "Weather", href: "/weather" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "About", href: "/about" },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-500 to-green-400 shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <h1 className="text-white font-bold text-2xl tracking-wide">
          TRAVELPLAN
        </h1>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          {links.map((link) => (
            <li key={link.name} className="hover:text-gray-200 transition">
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}

          {/* ✅ Show Sign Out if logged in, else Sign In / Sign Up */}
          {user ? (
            <li>
              <button
                onClick={handleSignOut}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white font-medium transition"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signin" className="hover:text-gray-200">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-gray-200">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-r from-cyan-500 to-green-400 px-4 pb-4 space-y-3 text-white font-medium">
          {links.map((link) => (
            <li key={link.name} className="hover:text-gray-200 transition">
              <Link to={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}

          {user ? (
            <li>
              <button
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-white w-full text-left font-medium transition"
              >
                Sign Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signin" onClick={() => setIsOpen(false)}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
