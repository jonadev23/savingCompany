import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import hover from "../assets/images/hover.jpg";


const Header = () => {
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setOpenSubmenu(true);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(false);
  };

  return (
    <div className="top-0 z-50 bg-white shadow-sm">
      <Banner />
      <section className="flex justify-between px-[10%] py-4 items-center">
        <div id="logo">
          <div className="text-3xl font-bold text-blue-600">
            Wiram
            <span className="text-red-600">.</span>
          </div>
        </div>
        
        <div>
          <ul className="flex gap-8 items-center text-gray-600 font-medium">
            <li className="py-2 hover:text-blue-600 transition-colors duration-200 relative group">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="py-2 hover:text-blue-600 transition-colors duration-200 relative group"
            >
              <NavLink 
                to="/about-us"
                className={({ isActive }) => 
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }
              >
                About
              </NavLink>
              <div className="absolute z-2 top-full left-0">
                <div
                  className={`flex gap-8 w-[35rem] p-6 left-0 bg-white shadow-xl rounded-lg mt-2
                    transition-all duration-300 ease-out z-50 border-t-4 border-red-600
                    ${openSubmenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
                >
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
            </li>

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

            <NavLink to='/login'>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors duration-200">
                Login
              </Button>
            </NavLink>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;