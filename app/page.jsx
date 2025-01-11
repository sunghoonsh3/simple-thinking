"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <main className="p-4">
        <div className="bg-orange-500 py-52">
          {/* Inner container for hover logic */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gray-500 flex justify-center items-center relative"
          >
            {/* Text 1: Default visible */}
            <p
              className={`text-2xl transition-opacity duration-300 absolute ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              在思考中, 保持简单
            </p>
            {/* Text 2: Visible on hover */}
            <p
              className={`text-2xl font-lateef font-light transition-opacity duration-300 absolute ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              in thinking, keep it to the simple
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
