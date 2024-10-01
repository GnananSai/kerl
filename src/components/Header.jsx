import React from "react";
import "@fontsource/cormorant-garamond/700.css";

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 z-50 w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-16">
        <div className="flex items-center">
          <img src="Logo.png" alt="Kerl Logo" className="w-12 h-12" />
          <h1 className="ml-2 text-2xl font-bold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>KERL</h1>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a href="#about" className="hover:text-gray-900">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </li>
            <li>
              <a href="#products" className="hover:text-gray-900">Products</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
