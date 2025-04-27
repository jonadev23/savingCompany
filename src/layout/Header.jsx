import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import hover from "../assets/images/hover.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  const handleMouseEnter = () => {
    setOpenSubmenu(true);
  };

  const handleMouseLeave = () => {
    setOpenSubmenu(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <Banner />
      <section
        className={`flex justify-between bg-white px-[10%] py-2 items-center transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="w-20" id="logo">
          <div className="w-24 font-medium  text-3xl">DEMO</div>
        </div>
        <div>
          <ul className="flex gap-8 text-sm font-medium">
            <li className="py-2 hover:underline transition-opacity duration-200">
              <NavLink to="/">Home</NavLink>
            </li>
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="py-2 hover:underline transition-opacity duration-200 relative group"
            >
              <NavLink to="/about-us">About</NavLink>
              <div>
                <div
                  className={`absolute flex justify-between w-[30rem] p-10 left-0 bg-white shadow-lg rounded-md mt-2
          transition-all duration-300 ease-out z-50
          ${
            openSubmenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
                >
                  <ul className="flex w-6/12 flex-col gap-2 text-sm font-medium">
                    <li className="hover:bg-gray-100 p-2 rounded">Service 1</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Service 2</li>
                    <li className="hover:bg-gray-100 p-2 rounded">Service 3</li>
                  </ul>
                  <div className="bg-black rounded-2xl p-5 text-sm text-white w-full">
                    Opportunities don't happen. You create them
                    <div className="py-2">
                      {" "}
                      <img src={hover} alt="" srcset="" />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="py-2">Book</li>
            <li className="py-2">Invest</li>
            <li className="py-2">Support</li>
            <li className="py-2 hover:underline transition-opacity duration-200 relative group">
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <Button className="ring rounded-3xl px-6 py-2">
                Book a Demo
              </Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
