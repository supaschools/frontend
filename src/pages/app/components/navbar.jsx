import React, { useState, useEffect } from "react";
import { buttonVariants } from "../../../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext";
import { FiClock } from "react-icons/fi";

const Navbar = ({ mode = "normal" }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);

  useEffect(() => {
    if (mode === "test") {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const renderRightContent = () => {
    if (mode === "normal") {
      return (
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#407BFF] flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {user.email[0].toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-medium hidden sm:block">
              {user.email}
            </span>
          </div>
          <Link
            to="/"
            className={buttonVariants({
              variant: "light",
              size: "default",
            })}
          >
            <div className="text-sm font-semibold">SIGN OUT</div>
          </Link>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-8">
        {mode === "test" && (
          <div className="flex items-center gap-2">
            <FiClock className="w-4 h-4 text-[#407BFF]" />
            <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
          </div>
        )}
        <button
          onClick={() => navigate("/home/social")}
          className={buttonVariants({
            variant: "light",
            size: "default",
          })}
        >
          <div className="text-sm font-semibold">
            {mode === "test" ? "PAUSE TEST" : "GO BACK"}
          </div>
        </button>
      </div>
    );
  };

  return (
    <nav className="fixed w-full top-0 z-50 left-0 flex items-center justify-between px-6 py-3 lg:px-20 lg:py-3 sm:px-4 sm:py-3 bg-white border-b-2 border-gray-200">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#407BFF] sm:text-3xl text-center px-4">
          SupaSchools
        </h1>
      </div>
      {renderRightContent()}
    </nav>
  );
};

export default Navbar;
