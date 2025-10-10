import React from "react";
import { Contact } from "../pages/Contact";
import { Outlet } from "react-router-dom";

export const ContactLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Contact />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};
