import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../../ui/userinput";
import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../../ui/button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Password validation
    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setValidationErrors(newErrors);
    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setError("");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/auth/login`,
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login error:", error);
      setError("Invalid email or password. Please try again.");
      setPassword("");
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <button
        className="absolute top-4 right-8 text-gray-500 hover:text-gray-700 text-4xl"
        aria-label="Close"
        onClick={handleClick}
      >
        &times;
      </button>
      <div className="bg-white px-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Welcome Back!</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setValidationErrors((prev) => ({ ...prev, email: "" }));
              }}
              placeholder="Email or Username"
              required
            />
            {validationErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.email}
              </p>
            )}
          </div>
          <div className="mb-4">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setValidationErrors((prev) => ({ ...prev, password: "" }));
              }}
              className="w-full p-2 border rounded"
              placeholder="Password"
              required
            />
            {validationErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {validationErrors.password}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center mb-4">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button variant="solid" size="full" type="submit">
            Login
          </Button>
          <div className="mt-4 text-center text-gray-500 text-sm">
            {/* Removed Privacy Policy and Terms text */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
