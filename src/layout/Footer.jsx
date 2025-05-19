import React from "react";
import Button from "../components/Button";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-blue-800 pb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Wiram Investments</h3>
            <p className="text-gray-300 leading-relaxed">
              Empowering financial futures through strategic wealth management 
              and innovative investment solutions.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn', 'Twitter', 'YouTube'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-300 hover:text-red-500 transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M24 4.5c-.83.36-1.72.6-2.65.71.96-.57 1.69-1.47 2.04-2.55-.9.53-1.89.91-2.94 1.12C19.3 3.2 18.44 3 17.5 3c-2.65 0-4.8 2.15-4.8 4.8 0 .38.04.75.12 1.1C7.73 8.05 4.1 6.12 1.67 3.15c-.42.72-.66 1.56-.66 2.45 0 1.66.85 3.13 2.14 3.99-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.27 3.86 4.71-.4.1-.83.16-1.27.16-.31 0-.61-.03-.91-.08.61 1.93 2.4 3.33 4.52 3.37-1.66 1.3-3.75 2.08-6.02 2.08-.39 0-.78-.02-1.16-.07 2.15 1.38 4.7 2.18 7.44 2.18 8.93 0 13.8-7.4 13.8-13.8 0-.21 0-.41-.01-.61.94-.69 1.76-1.55 2.41-2.53z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Market Insights', 'Careers'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-red-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 mt-1 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                456 Financial District, New York, NY 10001
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +1 (212) 555-0100
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                contact@wiram.com
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Informed</h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center md:text-left">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Wiram Investments. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;