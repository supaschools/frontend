import React, { useState, useEffect } from "react";
// import { Button } from "../../../ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../../ui/button";

const ChangeButton = () => {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Ensure code runs only on client side
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > (viewportHeight || 0)) {
          setScrolledPastHero(true);
        } else {
          setScrolledPastHero(false);
        }
      };

      const handleResize = () => {
        setViewportHeight(window.innerHeight);
      };

      // Initial setup on mount
      handleResize();
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Clean up event listeners
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [viewportHeight]);

  // Determine button text based on scroll position

  // Render the button
  return (
    <>
      {scrolledPastHero ? (
        <Link
          to="/"
          className={buttonVariants({
            variant: "solid",
            size: "lg",
          })}
        >
          <div className="text-sm font-semibold">GET STARTED</div>
        </Link>
      ) : (
        <Link
          to="/"
          className={buttonVariants({
            variant: "light",
            size: "lg",
          })}
        >
          <div className="text-sm font-semibold">TRY DEMO</div>
        </Link>
      )}
    </>
  );
};

export default ChangeButton;
