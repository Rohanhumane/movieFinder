import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-600 text-white">
    
      <h1 className="text-5xl font-extrabold mb-4 text-red-500">
        404 | Page Not Found
      </h1>

     
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      
      <button
        onClick={() => navigate("/", { replace: true })}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
      >
        Go to Home Page
      </button>
    </div>
  );
};
