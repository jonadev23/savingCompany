import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import Button from "../components/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          <div className="w-24 text-3xl">DEMO</div>
        </div>
        <div>
          <ul className="flex gap-8 text-sm font-medium">
            <li className="py-2">Home</li>
            <li className="py-2">About</li>
            <li className="py-2">Contact</li>
            <li className="py-2">Book</li>
            <li className="py-2">Invest</li>
            <li className="py-2">Support</li>
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
