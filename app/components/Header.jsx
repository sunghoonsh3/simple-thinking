"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState(""); // State to track the active link

  const handleClick = (link) => {
    setActiveLink(link); // Update the active link state
  };

  return (
    <header className="text-black p-4 pt-10">
      <div className="container mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-lateef font-normal ml-12">
          <Link href="/">simple thinking</Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6 text-2xl font-lateef font-normal">
            {["books", "politics", "startup", "life", "about"].map((item) => (
              <li key={item} className="relative">
                <Link
                  href={`/${item}`}
                  className={`${
                    activeLink === item
                      ? "underline decoration-underlineBlue decoration-1 underline-offset-[6px] -translate-y-10"
                      : ""
                  }`}
                  onClick={() => handleClick(item)} // Set active link on click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
