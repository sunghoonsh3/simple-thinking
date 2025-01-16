"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <header className="text-black p-4 pt-10">
      <div className="container mx-auto flex justify-between items-center font-lateef">
        {/* Logo Section */}
        <div className="text-2xl font-lateef font-normal ml-12">
          <Link href="/" onClick={() => handleClick()}>
            simple thinking
          </Link>
        </div>
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6 text-2xl font-lateef font-normal">
            {["books", "politics", "startup", "life", "about"].map((item) => (
              <li key={item} className="relative">
                <Link
                  href={`/${item}`}
                  className={`inline-block transition-transform duration-300 ${
                    activeLink === item
                      ? "underline decoration-underlineBlue decoration-1 underline-offset-[6px] -translate-y-1"
                      : ""
                  }`}
                  onClick={() => handleClick(item)}
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
