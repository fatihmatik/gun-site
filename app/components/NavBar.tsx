"use client";

import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State for managing the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-background p-4 text-gray-600 shadow-sm w-full">
      {/* Desktop Navigation */}
      <div className="md:flex hidden justify-between items-center mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <div className="text-accent font-bold text-center text-xl">
            <h1>Oversea Education & Consulting</h1>
          </div>
        </div>

        <ul className="flex space-x-16 font-semibold text-base">
          <li>
            <a href="/about">Biz Kimiz</a>
          </li>
          <li>
            <a href="/services">Servislerimiz</a>
          </li>
          <li>
            <a href="/stories">Başarı Hikayeleri</a>
          </li>
          <li>
            <a href="/contact">İletişim</a>
          </li>
        </ul>

        <div>
          <a
            href="/appointment"
            className="border-2 border-lightaccent text-lightaccent py-2 px-4 rounded-lg hover:bg-lightaccent hover:text-white transition-colors"
          >
            Randevu Alın
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        {/* Mobile Logo */}
        <div className="text-accent font-bold text-xl">
          <h1>Oversea Eğitim & Danışmanlık</h1>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none focus:ring-2 focus:ring-lightaccent"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      <SmoothCollapse expanded={isOpen} heightTransition="300ms">
        <ul className="flex flex-col space-y-4 my-4 font-semibold text-base md:hidden text-right ">
          <li className="hover:text-gray-800">
            <a href="/about">Biz Kimiz</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="/services">Servislerimiz</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="/stories">Başarı Hikayeleri</a>
          </li>
          <li className="hover:text-gray-800">
            <a href="/contact">İletişim</a>
          </li>
          <li>
            <a
              href="/appointment"
              className="border-2 border-lightaccent text-lightaccent py-2 px-4 rounded-lg hover:bg-lightaccent hover:text-white transition-colors"
            >
              Randevu Alın
            </a>
          </li>
        </ul>
      </SmoothCollapse>
    </nav>
  );
}
