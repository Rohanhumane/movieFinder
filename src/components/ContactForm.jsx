import React from "react";
import { useSelector } from "react-redux";
import { useForm } from "../useHook/useForm";
import { validate } from "../utils/helper";

export const ContactForm = () => {
  const userDetails = useSelector((state) => state.auth.user);

  const formValues = {
    fullname: userDetails?.fullname ?? "",
    email: userDetails?.email ?? "",
    rating: "",
    message: "",
  };

  const {
    errors,
    submit: submitted,
    handleChange,
    handleSubmit: onSubmit,
    values,
  } = useForm({ initialValues: formValues, validate });

  if (submitted) {
    return (
      <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md text-center">
        <h2 className="text-green-600 text-lg font-semibold">
          Thanks — your message has been sent!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        {/* Fullname */}
        <div>
          <label
            htmlFor="fullname"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Your name"
            value={values?.fullname}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.fullname ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
          />
          {errors.fullname && (
            <p id="fullname-error" className="mt-1 text-sm text-red-600">
              {errors.fullname}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={values?.email}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <select
            id="rating"
            name="rating"
            value={values?.rating || ""}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 bg-white border ${
              errors.rating ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition`}
          >
            <option value="">Select a rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          {errors.rating && (
            <p id="rating-error" className="mt-1 text-sm text-red-600">
              {errors.rating}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            value={values?.message}
            onChange={handleChange}
            rows={3}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
