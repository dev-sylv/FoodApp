import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../pages/LandingPages";
import HomeLayouts from "../components/layouts/Home/HomeLayouts";
import { Login, RedirectToEmail, Register, Verification } from "../pages/Auth";
import { Dashboard } from "../components";
import DashboardBody from "../pages/DashboardBody";
import ForgotPassword from "../pages/Auth/ForgotPassword";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register-user",
    element: <Register />,
  },
  {
    path: "/login-user",
    element: <Login />,
  },
  {
    path: "/verify-user/:id/:token",
    element: <Verification />,
  },
  {
    path: "/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/redirect-to-email",
    element: <RedirectToEmail />,
  },
  {
    path: "/user-dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardBody />,
      },
    ],
  },
]);
