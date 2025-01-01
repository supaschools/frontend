import React from "react";
import { buttonVariants } from "../../../ui/button";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/UserContext";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="fixed w-full top-0 z-50 left-0 flex items-center justify-between px-6 py-3 lg:px-20 lg:py-3 sm:px-4 sm:py-3 bg-white border-b-2 border-gray-200">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold tracking-tight text-[#407BFF] sm:text-3xl text-center px-4">
          FutureSchools
        </h1>
      </div>

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
    </nav>
  );
};

export default Navbar;
