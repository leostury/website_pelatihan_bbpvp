import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      <div className="flex justify-between items-start lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            className="w-32 sm:w-44"
            alt="logo"
          />

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-6 flex-wrap">
            <li>
              <a href="#hero" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="text-gray-600 dark:text-gray-400 max-w-md w-full">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>

          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded border border-gray-300 dark:border-gray-500 bg-transparent"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-8" />

      <div className="pb-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-center items-center gap-4">
        <p>Copyright 2025 © agency.ai - all rights reserved</p>

        <div className="flex gap-4">
          <img src={assets.facebook_icon} alt="" />
          <img src={assets.twitter_icon} alt="" />
          <img src={assets.instagram_icon} alt="" />
          <img src={assets.linkedin_icon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
