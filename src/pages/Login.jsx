import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { validate } from "../utils/helper";

const DETAILS = { email: "", password: "" };
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const error = useSelector((state) => state.auth.error);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const from = location.state?.from?.pathname || "/home";

  const onSubmit = (values) => {
    dispatch(authActions.logIn(values));
  };

  const {
    values,
    errors,
    handleChange,
    handleSubmit: handleLogin,
  } = useForm({ initialValues: DETAILS, validate, onSubmit });

  useEffect(() => {
    if (isLogin) {
      navigate(from, { replace: true });
    }
  }, [isLogin, from, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome back
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Email */}
          <div>
            <label
              htmlFor="login-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              aria-label="Email"
              required
            />

            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="login-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Your password"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              aria-label="Password"
              required
            />

            {errors.password && (
              <p id="password-error" className="mt-1 text-sm text-red-600">
                {errors.password}
              </p>
            )}
          </div>

          {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

          <button
            type="submit"
            className="w-full mt-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};
