import axios from "axios";
import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../../ui/userinput";
import { Button, buttonVariants } from "../../../ui/button";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const INITIAL_ERRORS_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
};

const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  password: {
    pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
    message:
      "Password must be at least 6 characters long and contain both letters and numbers",
  },
};

const SignupPage = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [validationErrors, setValidationErrors] =
    useState(INITIAL_ERRORS_STATE);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear validation error when user starts typing
    setValidationErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Email validation
    if (!VALIDATION_RULES.email.pattern.test(formData.email)) {
      errors.email = VALIDATION_RULES.email.message;
    }

    // Password validation
    if (!VALIDATION_RULES.password.pattern.test(formData.password)) {
      errors.password = VALIDATION_RULES.password.message;
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
        {
          email: formData.email,
          password: formData.password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate(`/${email}/home`); // Update this to your desired redirect path
    } catch (error) {
      console.error("Error signing up:", error);
      setError(error.response?.data?.message || "Failed to sign up");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <button
        className="absolute top-4 right-8 text-gray-500 hover:text-gray-700 text-4xl"
        aria-label="Close"
        onClick={() => navigate("/")}
      >
        &times;
      </button>

      <div className="bg-white px-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Create New Account
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
          </div>

          {/* Confirm Password Input */}
          <div className="mb-4">
            <Input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              required
            />
            {validationErrors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.confirmPassword}
              </p>
            )}
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <Button variant="solid" size="full" type="submit">
            Sign Up
          </Button>

          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>
              By signing up to FutureSchools, you agree to our{" "}
              <a href="#" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-gray-500">Already have an account?</span>
            <div className="flex-grow border-t"></div>
          </div>

          <Link
            to="/login"
            className={buttonVariants({
              variant: "light",
              size: "full",
            })}
          >
            <div className="text-sm font-semibold">Login</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
