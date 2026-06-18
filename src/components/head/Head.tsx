"use client";

import { useState } from "react";
import { ModeToggle } from "../mood/MoodTogol";
import { Search, Menu, X } from "lucide-react";
import UserDrop from "../user/UserDrop";
import { Link, useLocation } from "react-router-dom";

const Head = () => {
  const [hovered, setHovered] = useState<{ [key: string]: boolean }>({
    home: false,
    features: false,
    pricing: false,
    blog: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const navItems = [
    { label: "Home", loca: "/" },
    { label: "Events", loca: "/upevent" },
    { label: "About Us", loca: "/about" },
    { label: "Contact US", loca: "/contact" },
  ];

  return (
    <header className="relative w-full px-6 text-gray-700 bg-white dark:bg-[#0A0A0A] body-font rounded-full">
      <div className="flex flex-wrap items-center justify-between py-1 mx-auto max-w-7xl">
        {/* Brand Logo */}
        {/* <Link
          to="/"
          className="w-[200px] h-[80px] flex items-center justify-center"
        >
          <img src="../image/logo.png" alt="MyTiketBd" />
        </Link> */}

        <a href="/" className="w-[200px] h-[80px] flex items-center justify-center">
        <img src="../image/logo.png" alt="MyTiketBd" />
        </a>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 dark:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-base">
          {navItems.map(({ label, loca }) => {
            const isActive = location.pathname === loca;

            return (
              <Link
                key={loca}
                to={loca}
                className={`relative font-medium transition hover:text-gray-900 dark:text-white ${
                  isActive ? "text-gray-900 dark:text-white" : "text-gray-600"
                }`}
                onMouseEnter={() =>
                  setHovered((prev) => ({ ...prev, [loca]: true }))
                }
                onMouseLeave={() =>
                  setHovered((prev) => ({ ...prev, [loca]: false }))
                }
              >
                <span className="block">{label}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 -mb-1 overflow-hidden">
                  <span
                    className={`block origin-left transform bg-gray-900 dark:bg-white h-full transition-transform duration-300 ${
                      hovered[loca] || isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Tools */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-2.5 inset-y-0 my-auto w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 rounded-md"
            />
          </div>
          <ModeToggle />
          <UserDrop />
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 z-40 w-3/4 h-full p-6 bg-white dark:bg-gray-900 shadow-lg transition duration-300">
          <div className="flex flex-col space-y-6">
            {navItems.map(({ label, loca }) => (
              <Link
                key={loca}
                to={loca}
                className="text-lg font-medium text-gray-700 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <hr className="border-gray-300 dark:border-gray-700" />
            {/* Mobile tools (optional) */}
            <div className="flex items-center space-x-3">
              <ModeToggle />
              <UserDrop />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Head;
