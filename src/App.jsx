import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // adjust the path

export default function App() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://wallpaperaccess.com/full/2393045.jpg")`
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Navbar always on top */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* All routed pages (Hero, Planner, About, Destination, Signin, Signup, Results, Budget, Checklist) */}
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
