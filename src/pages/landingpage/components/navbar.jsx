import React, { useState, useEffect } from "react";
import ChangeButton from "./changebutton";
import { buttonVariants } from "../../../ui/button";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = ({ mode = "normal" }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showGetStarted, setShowGetStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Check if the hero "Get Started" button is at navbar level
      const heroButton = document.querySelector("#hero-get-started");
      if (heroButton) {
        const buttonRect = heroButton.getBoundingClientRect();
        const navbarHeight = 64; // Adjust this value based on your navbar height
        setShowGetStarted(buttonRect.top <= navbarHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <nav
        className={`fixed w-full top-0 z-40 left-0 flex items-center justify-between px-6 lg:px-20 py-4 transition-all duration-300 ${
          scrolled ? "bg-black/50 backdrop-blur-md" : ""
        }`}
        style={{
          background: scrolled ? undefined : "transparent",
          backdropFilter: scrolled ? undefined : "none",
        }}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="SupaSchools Logo" className="h-8 w-auto" />
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl text-center">
            SupaSchools
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to={showGetStarted ? "/demo" : "/login"}
            className={`${buttonVariants({
              variant: showGetStarted ? "solid" : "light",
              size: "default",
            })} ${
              showGetStarted
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100 text-gray-900"
            }`}
          >
            <div className="text-base font-semibold">
              {mode === "demo"
                ? "GO BACK"
                : showGetStarted
                ? "SCHEDULE DEMO"
                : "LOGIN"}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
