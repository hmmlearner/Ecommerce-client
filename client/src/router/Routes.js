import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Product from "../pages/product/Product";
import Category from "../pages/Category";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    Children: [
      { path: "", element: <HomePage /> },
      { path: "category", element: <Category /> },
      { path: "category/:id", element: <Product /> },
    ],
  },
]);
