"use client";

import Link from "next/link";
import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State for managing the mobile menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-background p-4 text-gray-600 shadow-sm w-full fixed z-50 top-0 left-0">
      {/* Desktop Navigation */}
      <div className="md:flex hidden justify-between items-center mx-auto max-w-7xl ">
        <div className="flex justify-center items-center">
          <div className="">
            <Link href="/">
              <h1 className="relative group inline-block">
                <span className="bg-cyan_to_darkblue text-transparent bg-clip-text font-notosansbold text-center text-xl">
                  Oversea Education & Consulting
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient_flexbox_background bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out font-notosansbold text-center text-xl ">
                  Oversea Education & Consulting
                </span>
                <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
                <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              </h1>
            </Link>
          </div>
        </div>

        <ul className="flex space-x-16 font-extralight text-base">
          <li>
            <Link href="/about" className="relative group inline-block">
              Biz Kimiz
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/services" className="relative group inline-block">
              Servislerimiz
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/stories" className="relative group inline-block">
              Başarı Hikayeleri
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group inline-block">
              İletişim
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        <div>
          <Link
            href="/contact"
            className="border-2 border-lightaccent text-lightaccent py-2 px-4 rounded-lg hover:bg-lightaccent hover:text-white transition-colors"
          >
            Randevu Alın
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        {/* Mobile Logo */}
        <div className="bg-cyan_to_darkblue text-transparent bg-clip-text font-notosansbold text-xl">
          <Link href="/">
            <h1 className="relative group inline-block">
              <span className="bg-cyan_to_darkblue text-transparent bg-clip-text font-notosansbold text-center text-xl">
                Oversea Education & Consulting
              </span>
              <span className="absolute inset-0 w-full h-full bg-gradient_flexbox_background bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out font-notosansbold text-center text-xl ">
                Oversea Education & Consulting
              </span>
            </h1>
          </Link>
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
            <Link href="/about">Biz Kimiz</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/services">Servislerimiz</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/stories">Başarı Hikayeleri</Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/contact">İletişim</Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="border-2 border-lightaccent text-lightaccent py-2 px-4 rounded-lg hover:bg-lightaccent hover:text-white transition-colors"
            >
              Randevu Alın
            </Link>
          </li>
        </ul>
      </SmoothCollapse>
    </nav>
  );
}
