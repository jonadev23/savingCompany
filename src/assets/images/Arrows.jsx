import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export const CustomNextArrow = ({ onClick }) => (
    <div
      className="cursor-pointer text-black px-2 py-1"
      onClick={onClick}
    >
      <FaArrowRight className="text-2xl" />
    </div>
  );
  
  export const CustomPrevArrow = ({ onClick }) => (
    <div
      className="cursor-pointer text-black px-2 py-1"
      onClick={onClick}
    >
      <FaArrowLeft className="text-2xl" />
    </div>
  );