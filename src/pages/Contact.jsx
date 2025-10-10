import React from "react";
import { useNavigate } from "react-router-dom";
import contactBackImg from "../assets/contact/contact.jpeg";

export const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full">
      <img
        src={contactBackImg}
        alt="contact background image"
        className="w-full h-120 object-cover"
      />
      <div className="absolute inset-0 bg-black/40 rounded-lg flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Contact us to know more
        </h1>
        <p className="mt-2 text-sm text-white/90">
          We'd love to hear from you — questions, feedback, or partnership
          inquiries.
        </p>
        <button
          onClick={() => navigate("form")}
          className="mt-4 bg-yellow-400 text-gray-800 font-semibold px-4 py-2 rounded hover:bg-yellow-300 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-300 cursor-pointer"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};
