import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Product from "../pages/product";
import Home from "../pages/Home";
const Layout = lazy(() => import("../layout/index"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);
export default routes;
