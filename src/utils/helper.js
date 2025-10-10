export const validate = (values) => {
  const errors = {};

  // Common email validation
  if ("email" in values) {
    if (!values.email?.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      errors.email = "Invalid email format";
  }

  // Common password validation
  if ("password" in values) {
    if (values.password === "") errors.password = "Password cannot be empty";
    else if (values.password.length < 6)
      errors.password = "Password length should be greater than 5";
  }

  // Common fullname validation (Signup or Feedback)
  if ("fullname" in values && !values.fullname?.trim()) {
    errors.fullname = "Name is required";
  }

  if ("rating" in values && !values.rating) {
    errors.rating = "Rating is required";
  }

  return errors;
};
