import React, { useState } from 'react';
import { LuCalendarDays } from "react-icons/lu";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-28 py-4 bg-gradient-to-b from-background to-back-second/20 rounded-3xl">
      {/* Logo Section and Menu Button for Small Screens */}
      <div className="flex items-center justify-between md:hidden">
        <p className="text-text-primary text-left font-bold px-4">HoomanLabs</p>
        <button onClick={toggleMenu} className="text-white">
          <HiMenu size={24} />
        </button>
      </div>

      {/* Navigation Menu for Small Screens */}
      {isMenuOpen && (
        <div className="flex flex-col space-y-4 mt-4 md:hidden">
          <a href="#" className="hover:text-gray-400 text-white">About us</a>
          <a href="#" className="hover:text-gray-400 text-white">Pricing</a>
          <a href="#" className="hover:text-gray-400 text-white">Dashboard</a>
          <button className="flex items-center bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
            <LuCalendarDays />
            <span className='pl-2 text-xs font-bold'>Book a demo</span>
          </button>
        </div>
      )}

      {/* Grid Layout for Medium and Above Screens */}
      <div className="hidden md:grid items-center grid-cols-6 gap-3 content-between">
        {/* Logo Section */}
        <div className="items-start col-span-1 space-x-4">
          <p className="text-text-primary text-left font-bold">HoomanLabs</p>
        </div>
        <div className='col-span-1'></div>
        {/* Navigation Links */}
        <div className="col-span-2 space-x-10 text-white text-md">
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Pricing</a>
          <a href="#" className="hover:text-gray-400">Dashboard</a>
        </div>
        <div className='col-span-1'></div>
        {/* Button Section */}
        <div className="items-end col-span-1 space-x-4">
          <a href="#contact">
          <button className="flex items-center bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
            <LuCalendarDays />
            <span className='pl-2 text-xs font-bold'>Book a demo</span>
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
