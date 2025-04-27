import React from "react";
import Button from "../components/Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black text-white px-[4%]">
      {/* <div className="grid grid-cols-3 gap-4 py-[8%] ">
        <div className=" text-5xl">
          <p>Get that money quick</p>
        </div>
        <div className=" "></div>
        <div className="grid gap-10">
          <span className=" text-lg font-medium">
            Great businesses are built on innovation, dedication, and
            resilience.
          </span>

          <Button className={"bg-white text-black px-4 py-1 rounded-3xl"}>
            Book a Demo
          </Button>
        </div>
      </div> */}
      <div className="flex py-[2%] justify-between">
        <div className="w-24  text-4xl">DEMO</div>
        <div>
          <ul className="flex gap-6 text-sm">
            <li>Trust</li>
            <li>Development</li>
            <li>Relevance</li>
            <li>Integrity</li>
            <li>Focus</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div>
            <FaSquareXTwitter />
          </div>
          <div>
            <FaYoutube />
          </div>
          <div>
            <FaInstagramSquare />
          </div>
        </div>
      </div>
      <div className="flex py-[2%] justify-between">
        <div className="text-sm">@ Copyright Serko Limited 2025</div>
        <div>
          <ul className="flex gap-20 text-sm">
            <li>Trust</li>
            <li>Development</li>
            <li>Relevance</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
