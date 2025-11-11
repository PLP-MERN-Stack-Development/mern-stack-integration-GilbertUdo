import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left side: Welcome text */}
        <h1 className="font-semibold text-lg italic">
          Welcome and get started with blogging 
        </h1>

        {/* Right side: Navigation links */}
        <div className="space-x-6 text-lg font-medium">
          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-200"
          >
            Posts
          </Link>
          <Link
            to="/create"
            className="hover:text-yellow-300 transition duration-200"
          >
            Create Post
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
