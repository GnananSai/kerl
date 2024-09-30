import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src="logo.png" alt="Kerl Logo" className="w-12 h-12" />
          <h1 className="ml-2 text-2xl font-bold">KERL</h1>
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
