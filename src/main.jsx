import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'flowbite';
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import React from "react"
import { AuthContextProvider } from './context/AuthContext.jsx'

// ✅ Import toast provider
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      {/* ✅ Global Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </AuthContextProvider>
  </React.StrictMode>,
)
