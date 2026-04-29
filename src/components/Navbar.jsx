import React, { useState } from "react";
import assets from "../assets/assets";
import { motion } from "motion/react";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 relative">
        <img src={assets.logo_blk} alt="logo" className="h-10" />

        <div className="hidden sm:flex items-center gap-10 text-gray-700 font-medium absolute left-1/2 -translate-x-1/2">
          <a href="#" className="hover:text-black transition">
            Home
          </a>
          <a href="#pelatihan" className="hover:text-black transition">
            Pelatihan
          </a>
          <a href="#our-work" className="hover:text-black transition">
            Pendaftaran
          </a>
          <a href="#contact-us" className="hover:text-black transition">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact-us"
            className="hidden sm:flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition"
          >
            Contact
            <img src={assets.arrow_icon} width={14} alt="" />
          </a>

          <img
            src={assets.menu_icon}
            alt="menu"
            onClick={() => setSidebarOpen(true)}
            className="w-7 sm:hidden cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-500 shadow-lg p-6 flex flex-col gap-6 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <img
          src={assets.close_icon}
          className="w-5 cursor-pointer self-end"
          onClick={() => setSidebarOpen(false)}
        />

        <a onClick={() => setSidebarOpen(false)} href="#">
          Home
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#pelatihan">
          Pelatihan
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work">
          Pendaftaran
        </a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us">
          Contact
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
