"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu visibility

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu after clicking a link
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  // Function to trigger vibration
  const triggerVibration = () => {
    if (typeof window !== "undefined" && "vibrate" in window.navigator) {
      window.navigator.vibrate(50); // Vibrate for 50ms
    }
  };

  return (
    <header className="text-foreground m-3 sm:m-0 p-4 pt-10">
      <div className="container w-full max-w-full sm:max-w-screen-lg sm:mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-normal text-nowrap sm:ml-12">
          <Link href="/" onClick={() => handleClick()}>
            simple thinking
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-2xl"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "x" : "\uD83D\uDCAD"} {/* Toggle between emojis */}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:block">
          {" "}
          {/* Hide on mobile, show on larger screens */}
          <ul className="flex space-x-6 text-2xl font-lateef mr-12 font-normal items-center">
            {[
              "books",
              "politics",
              "startup",
              "rejections",
              "life",
              "about",
            ].map((item) => (
              <li key={item} className="relative">
                <Link
                  href={`/${item}`}
                  className={`inline-block transition-transform duration-300 ${
                    activeLink === item
                      ? "underline decoration-underlineBlue decoration-1 underline-offset-[6px] -translate-y-1"
                      : ""
                  } hover:underline hover:decoration-underlineBlue hover:decoration-1 hover:underline-offset-[6px]`}
                  onClick={() => handleClick(item)}
                  onMouseEnter={triggerVibration} // Trigger vibration on hover
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="absolute top-24 right-0 bg-background w-full z-50 shadow-lg dark:shadow-gray-900/50 md:hidden">
            <ul className="flex flex-col space-y-4 text-2xl font-lateef p-4">
              {[
                "books",
                "politics",
                "startup",
                "rejections",
                "life",
                "about",
              ].map((item) => (
                <li key={item} className="relative">
                  <Link
                    href={`/${item}`}
                    className={`block transition-transform duration-300 ${
                      activeLink === item
                        ? "underline decoration-underlineBlue decoration-1 underline-offset-[6px] -translate-y-1"
                        : ""
                    } hover:underline hover:decoration-underlineBlue hover:decoration-1 hover:underline-offset-[6px]`}
                    onClick={() => handleClick(item)}
                    onMouseEnter={triggerVibration} // Trigger vibration on hover
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
