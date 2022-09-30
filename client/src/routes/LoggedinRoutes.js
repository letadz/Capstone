import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Home from "../pages/home";

export default function LoggedinRoutes() {
  const { user } = useSelector((state) => ({ ...state }));

  return user ? <Outlet /> : <Home />;
}
