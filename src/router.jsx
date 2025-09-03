import { createBrowserRouter } from "react-router-dom";
import App from "./App";  
import Hero from "./components/hero/Hero";
import Destinations from "./components/pages/Destination";
import Planner from "./components/pages/Planner";
import Results from "./components/pages/Results";
import About from "./components/pages/About";
import Signin from "./components/register/Signin";
import Signup from "./components/register/SignUp";
import BudgetCalculator from "./components/pages/BudgetCal";
import Weather from "./components/pages/Weather";
import Dashboard from "./components/pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,   // App provides background + Navbar + Outlet
    children: [
      {
        index: true,     // default page
        element: <Hero />,
      },
      {
        path: "destinations",
        element: <Destinations />,
      },
      {
        path: "planner",
        element: <Planner />,
      },
      {
        path: "results",
        element: <Results />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "budget",          // ✅ New route
        element: <BudgetCalculator />,
      },
      {
        path: "weather",       // ✅ New route
        element: <Weather />,
      },
      {
        path: "dashboard",       // ✅ New route
        element: <Dashboard />,
      },
    ],
  },
]);
