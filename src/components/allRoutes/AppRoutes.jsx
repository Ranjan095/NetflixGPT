import React from "react";
import { Route, Routes } from "react-router-dom";
import Browse from "../browse/Browse";
import Login from "../login/Login";
import Error from "../error/Error";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
