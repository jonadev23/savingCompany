import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 px-4 py-3 flex items-center justify-center gap-2 text-white text-sm font-medium">
      <svg 
        className="w-5 h-5 text-red-500 animate-pulse" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>New Investment Opportunity: Exclusive Portfolio Options Available</span>
      <Link 
        to="/opportunities" 
        className="ml-2 inline-flex items-center text-red-300 hover:text-red-100 transition-colors"
      >
        Learn More
        <svg 
          className="w-4 h-4 ml-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Banner;