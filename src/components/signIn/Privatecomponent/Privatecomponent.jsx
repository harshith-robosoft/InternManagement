import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function Privatecomponent() {
  const auth = sessionStorage.getItem("auth");
  return auth ? <Outlet /> : <Navigate to="/" />;
}
