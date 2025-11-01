"use client";

import { useI18n } from "@/locales/client";
import Link from "next/link";
import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";
import LanguageSwitcher from "./LanguageSwitcher";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const t = useI18n();

  return (
    <nav className="bg-white p-4 text-gray-600 shadow-sm w-full fixed z-50 top-0 left-0">
      {/* Desktop Navigation */}
      <div className="md:flex hidden justify-between items-center mx-auto max-w-7xl ">
        <div className="flex justify-center items-center">
          <Link href="/">
            <h1 className="relative group inline-block">
              <span className="text-secondary font-notosansbold text-center text-xl">
                {t("navBar.title")}
              </span>

              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </h1>
          </Link>
        </div>

        <ul className="flex space-x-16 font-extralight text-base">
          <li>
            <Link href="/about" className="relative group inline-block">
              {t("navBar.whoAreWe")}
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/services" className="relative group inline-block">
              {t("navBar.services")}
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/stories" className="relative group inline-block">
              {t("navBar.successStories")}
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link href="/contact" className="relative group inline-block">
              {t("navBar.contact")}
              <span className="absolute -bottom-[1px] left-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
              <span className="absolute -bottom-[1px] right-1/2 w-0 h-[1px] bg-secondary group-hover:w-1/2 group-hover:transition-all duration-300"></span>
            </Link>
          </li>
        </ul>

        <div className="flex gap-2">
          <Link
            href="/contact"
            className="border-2 border-secondary text-secondary py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-colors"
          >
            {t("navBar.appointment")}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        <Link href="/" onClick={() => (isOpen ? setIsOpen(!isOpen) : null)}>
          <h1 className="relative group inline-block">
            {/* <span className="bg-cyan_to_darkblue text-transparent bg-clip-text font-notosansbold text-center text-xl">
                {t("navBar.title")}
              </span> */}
            <span className="text-secondary font-notosansbold text-center text-xl">
              {t("navBar.title")}
            </span>
          </h1>
        </Link>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="focus:outline-none focus:ring-2 focus:ring-secondary"
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
      <SmoothCollapse expanded={isOpen} heightTransition="200ms">
        <ul className="flex flex-col space-y-4 my-4 font-semibold text-base md:hidden text-right ">
          <li className="hover:text-gray-800">
            <Link href="/about" onClick={toggleMenu}>
              {t("navBar.whoAreWe")}
            </Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/services" onClick={toggleMenu}>
              {t("navBar.services")}
            </Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/stories" onClick={toggleMenu}>
              {t("navBar.successStories")}
            </Link>
          </li>
          <li className="hover:text-gray-800">
            <Link href="/contact" onClick={toggleMenu}>
              {t("navBar.contact")}
            </Link>
          </li>
          <li className="self-end">
            <LanguageSwitcher />
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="border-2 border-secondary text-secondary py-2 px-4 rounded-lg hover:bg-secondary hover:text-white transition-colors"
            >
              {t("navBar.appointment")}
            </Link>
          </li>
        </ul>
      </SmoothCollapse>
    </nav>
  );
}
