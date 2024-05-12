'use client';
import Image from "next/image";
import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuItemClick = () => {
    setShowMenu(false); // Hide the menu when a menu item is clicked
  };

  return (
      <div className="w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[65px] py-2">
            <a href="#about-me" className="flex items-center">
              <Image
                  src="/NavLogo.png"
                  alt="logo"
                  width={70}
                  height={70}
                  className="cursor-pointer hover:animate-slowspin"
              />
              <span className="font-bold ml-2 hidden md:block text-gray-300">
              Ayoub El Kaoui
            </span>
            </a>

            <div className="hidden md:flex items-center space-x-6 text-white">
              <a href="#about-me" className="nav-link" onClick={handleMenuItemClick}>
                About me
              </a>
              <a href="#skills" className="nav-link" onClick={handleMenuItemClick}>
                Skills
              </a>
              <a href="#projects" className="nav-link" onClick={handleMenuItemClick}>
                Projects
              </a>
              <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact me
              </a>
            </div>

            <div className="flex pr-6">
              <button className="flex items-center">
                <FaEnvelope className="text-white" />
                <a className="pl-2 text-white" href="#contact">
                  Contact me
                </a>
              </button>
            </div>

            <button className="md:hidden" onClick={toggleMenu}>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                {showMenu ? (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                ) : (
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                )}
              </svg>
            </button>
          </div>

          {showMenu && (
              <div className="md:hidden">
                <div className="flex flex-col space-y-6 py-5 text-white">
                  <a href="#about-me" className="nav-link" onClick={handleMenuItemClick}>
                    About me
                  </a>
                  <a href="#skills" className="nav-link" onClick={handleMenuItemClick}>
                    Skills
                  </a>
                  <a href="#projects" className="nav-link" onClick={handleMenuItemClick}>
                    Projects
                  </a>
                  <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                    Contact me
                  </a>
                </div>
              </div>
          )}
        </div>
      </div>
  );
};

export default Navbar;
