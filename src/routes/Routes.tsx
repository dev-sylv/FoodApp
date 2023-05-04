import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeScreen } from "../pages/LandingPages";

export const element = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);
