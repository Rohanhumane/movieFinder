import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const ProtectedLayout = () => {
  const { isLogin } = useSelector((state) => state.auth);

    const location = useLocation();
  

  if (!isLogin) {
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }
  return <Outlet />;
};
