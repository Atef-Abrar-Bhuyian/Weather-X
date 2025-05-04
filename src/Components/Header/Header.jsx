import React from "react";
import { FaMapMarkedAlt, FaCog } from "react-icons/fa"; 

const Header = () => {
  return (
    <nav className="bg-green-950/90 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Side: Weather-X */}
        <div className="text-2xl font-bold">Weather-X</div>

        {/* Right Side: Navbar items */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Location Icon */}
          <div className="flex items-center space-x-2">
            <FaMapMarkedAlt className="text-xl" />
            <span>Location</span>
          </div>

          {/* Settings Icon */}
          <div className="flex items-center space-x-2">
            <FaCog className="text-xl" />
            <span>Settings</span>
          </div>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-2xl">
            <i className="fas fa-bars"></i>{" "}
            {/* You can use a hamburger icon here */}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
