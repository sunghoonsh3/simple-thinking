"use client";

import { useState } from "react";

export default function Slogan() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    // Just a normal div—no need for h-screen or min-h now
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[800px]"
    >
      {/* First text */}
      <p
        className={`
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center
          whitespace-nowrap
          text-xl
          sm:text-2xl 
          transition-opacity
          duration-300
          ${isHovered ? "opacity-0" : "opacity-100"}
        `}
      >
        在思考中, 保持简单
      </p>

      {/* Second text */}
      <p
        className={`
          absolute 
          inset-0 
          flex 
          items-center 
          justify-center
          whitespace-nowrap
          text-xl
          sm:text-2xl
          font-lateef 
          font-normal 
          transition-opacity 
          duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
      >
        in thinking, keep it to the simple
      </p>
    </div>
  );
}
