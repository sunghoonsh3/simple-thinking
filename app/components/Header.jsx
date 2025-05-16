"use client";

import Link from "next/link";
import { useState } from "react";

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
    <header className="text-black m-3 sm:m-0 p-4 pt-10">
      <div className="container w-full max-w-full sm:max-w-screen-lg sm:mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-normal text-nowrap sm:ml-12">
          <Link href="/" onClick={() => handleClick()}>
            simple thinking
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMenu}
          className="text-2xl md:hidden" // Hide on larger screens
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "x" : "💭"} {/* Toggle between emojis */}
        </button>

        {/* Navigation */}
        <nav className="hidden md:block">
          {" "}
          {/* Hide on mobile, show on larger screens */}
          <ul className="flex space-x-6 text-2xl font-lateef mr-12 font-normal">
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
          </ul>
        </nav>

        {/* Mobile Menu (Conditional Rendering) */}
        {isMenuOpen && (
          <div className="absolute top-24 right-0 bg-white w-full z-50 shadow-lg md:hidden">
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
