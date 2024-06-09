import React from "react";
import Header from "../header/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../login/Login";
import Browse from "../browse/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Browse />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Login />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
