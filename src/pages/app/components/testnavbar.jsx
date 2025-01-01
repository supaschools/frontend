import React, { useState, useEffect } from "react";
import { buttonVariants } from "../../../ui/button";
import { useNavigate } from "react-router-dom";
import { FiClock } from "react-icons/fi";

const TestNavbar = () => {
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePause = () => {
    navigate("/home/social");
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <nav className="fixed w-full top-0 z-50 left-0 flex items-center justify-between px-6 py-3 lg:px-20 lg:py-3 sm:px-4 sm:py-3 bg-white border-b-2 border-gray-200">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#407BFF] sm:text-3xl text-center px-4">
          FutureSchools
        </h1>
      </div>

      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <FiClock className="w-4 h-4 text-[#407BFF]" />
          <span className="text-sm font-medium">{formatTime(timeLeft)}</span>
        </div>
        <button
          onClick={handlePause}
          className={buttonVariants({
            variant: "light",
            size: "default",
          })}
        >
          <div className="text-sm font-semibold">PAUSE TEST</div>
        </button>
      </div>
    </nav>
  );
};

export default TestNavbar;
