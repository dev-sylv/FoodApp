import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../pages/LandingPages";
import HomeLayouts from "../components/layouts/Home/HomeLayouts";

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
]);
