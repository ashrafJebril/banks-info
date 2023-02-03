import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import React from "react";
const Layout = lazy(() => import("../layout/index"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [],
  },
]);
export default routes;
