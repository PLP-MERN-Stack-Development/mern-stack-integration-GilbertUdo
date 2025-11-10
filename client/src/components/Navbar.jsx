import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Welcome and get started with blogging</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Posts</Link>
          <Link to="/create" className="hover:underline">Create Post</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
