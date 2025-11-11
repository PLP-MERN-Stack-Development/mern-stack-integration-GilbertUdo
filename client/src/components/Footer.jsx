import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 mt-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
        <p className="text-sm md:text-base text-center">
          © {new Date().getFullYear()} <span className="font-semibold">My Blog</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

