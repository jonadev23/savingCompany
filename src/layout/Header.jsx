import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Banner from "./Banner";
import Button from "../components/Button";
import hover from "../assets/images/hover.jpg";

const Header = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const submenuRef = useRef();

  return (
    <div className="top-0 z-50 bg-white shadow-sm">
      <Banner />

      <section className="flex justify-between px-[10%] py-4 items-center relative">
        {/* Logo */}
        <div id="logo" className="text-3xl font-bold text-blue-600">
          Wiram<span className="text-red-600">.</span>
        </div>

        {/* Navigation */}
        <ul className="flex gap-8 items-center text-gray-600 font-medium relative">
          <li className="py-2 hover:text-blue-600 transition-colors duration-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              }
            >
              Home
            </NavLink>
          </li>

          {/* About with submenu */}
          <li
            className="relative py-2 group hover:text-blue-600 transition-colors duration-200"
            onMouseEnter={() => setOpenSubmenu(true)}
            onMouseLeave={() => setOpenSubmenu(false)}
          >
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              }
            >
              About
            </NavLink>

            {/* Submenu */}
            {openSubmenu && (
              <div
                ref={submenuRef}
                className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-lg z-50 w-[35rem] border-t-4 border-red-600 transition-all duration-300 ease-out"
              >
                <div className="flex gap-6 p-6">
                  <ul className="flex flex-col gap-2 w-1/2">
                    <li className="p-2 hover:bg-blue-50 rounded-lg text-blue-900">
                      <NavLink to="/services/wealth" className="block">
                        Wealth Management
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-blue-50 rounded-lg text-blue-900">
                      <NavLink to="/services/investment" className="block">
                        Investment Banking
                      </NavLink>
                    </li>
                    <li className="p-2 hover:bg-blue-50 rounded-lg text-blue-900">
                      <NavLink to="/services/asset" className="block">
                        Asset Management
                      </NavLink>
                    </li>
                  </ul>
                  <div className="w-1/2 bg-blue-900 rounded-lg p-4 text-white">
                    <div className="text-sm mb-3">
                      "Creating opportunities through strategic investments"
                    </div>
                    <div className="border-2 border-blue-300 rounded-lg overflow-hidden">
                      <img src={hover} alt="Investment opportunities" className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Other links */}
          <li className="py-2 hover:text-blue-600 transition-colors duration-200">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              }
            >
              Blogs
            </NavLink>
          </li>

          <li className="py-2 hover:text-blue-600 transition-colors duration-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              }
            >
              Invest
            </NavLink>
          </li>

          <li className="py-2 hover:text-blue-600 transition-colors duration-200">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
              }
            >
              Contact
            </NavLink>
          </li>

          <NavLink to="/login">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
              Login
            </Button>
          </NavLink>
        </ul>
      </section>
    </div>
  );
};

export default Header;
