import React from 'react';
import { LuCalendarDays } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className=" items-center grid grid-cols-6 gap-4 content-between px-28 py-4 bg-gradient-to-b from-background to-back-second/20 rounded-3xl">
      {/* Logo Section */}
      <div className="items-start col-span-1 space-x-4">
        <p className="text-text-primary text-left font-bold">HoomanLabs</p>
      </div>
      <div className='col-span-1'></div>
      {/* Navigation Links */}
      <div className=" col-span-2 space-x-10 text-white text-md">
        <a href="#" className="hover:text-gray-400">About us</a>
        <a href="#" className="hover:text-gray-400">Pricing</a>
        <a href="#" className="hover:text-gray-400">Dashboard</a>
      </div>
      <div className='col-span-1'></div>

      {/* Button Section */}
      <div className=" items-end col-span-1 space-x-4">
        <button className="flex items-center bg-white text-black rounded-full px-4 py-2 hover:bg-gray-200">
            <LuCalendarDays />
            <span className='pl-2 text-xs font-bold'>Book a demo</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
