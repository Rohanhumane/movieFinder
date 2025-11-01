import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { validate } from "../utils/helper";

const DETAILS = { email: "", password: "", fullname: "" };
export const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogin, error } = useSelector((state) => state.auth);

  const onSubmit = (values) => {
    dispatch(authActions.signIn(values));
  };

  const {
    values,
    handleSubmit: handleSignUp,
    handleChange,
    errors,
  } = useForm({
    initialValues: DETAILS,
    validate,
    onSubmit,
  });

  const isUserDataAlreadyPresent = useSelector(
    (state) => state.auth.alreadyPresent
  );

  useEffect(() => {
    if (isLogin) {
      navigate("/home");
    }
  }, [isLogin, navigate]);

  const loginHandler = () => {
    navigate("/login", { replace: true });
    dispatch(authActions.removeAlreadyPresent());
  };

  let innerContent = (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 items-center justify-center">
      <h2>User Data is already present. Please Login</h2>
      <button
        type="login"
        className="w-20 mt-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
        onClick={() => loginHandler()}
      >
        Login
      </button>
    </div>
  );

  if (!isUserDataAlreadyPresent) {
    innerContent = (
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Create an account
        </h2>

        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              value={values.fullname}
              onChange={handleChange}
              placeholder="Your full name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              aria-label="Full name"
              required
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
              htmlFor="signup-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="signup-email"
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
              htmlFor="signup-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="signup-password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
              placeholder="Choose a secure password"
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

          <button
            type="submit"
            className="w-full mt-1 inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
        <p className="mt-4 text-sm text-gray-500 text-center">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline font-medium cursor-pointer"
          >
            Log in
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-500 px-4">
      {innerContent}
    </div>
  );
};
