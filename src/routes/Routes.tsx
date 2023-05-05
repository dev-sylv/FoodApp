import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../pages/LandingPages";
import HomeLayouts from "../components/layouts/Home/HomeLayouts";
import { Login, Register, Verification } from "../pages/Auth";

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
    path: "/verify-user",
    element: <Verification />,
  },
]);
