"use client";

import { useState } from "react";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Existing hover logic */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex justify-center items-center relative mt-[500px]"
          >
            <p
              className={`text-2xl transition-opacity duration-300 absolute ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            >
              在思考中, 保持简单
            </p>
            <p
              className={`text-2xl font-lateef font-normal transition-opacity duration-300 absolute ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              in thinking, keep it to the simple
            </p>
          </div>
          <div className="flex justify-center items-center mt-[850px]">
            <p className="text-2xl font-lateef font-normal underline decoration-underlineBlue decoration-1 underline-offset-[6px]">
              recent blog
            </p>
          </div>
          <div className="flex justify-center gap-10 items-center font-lateef mt-[100px]">
            {/* Left section: Title and Date */}
            <div className="flex flex-col text-gray-700 bg-amber-600">
              <h2 className="font-normal text-2xl">what i love about nd</h2>
              <p className="text-sm">Friday, December 27, 2024</p>
            </div>

            {/* Right section: Blog Body */}
            <div className="bg-violet-50 max-w-lg text-xl font-normal">
              <p>
                I’ve been closely monitoring the reports of pro-Palestinian
                protests at various U.S. university campuses, a topic widely
                covered by Korean media. My interest in the Israeli-Palestinian
                conflict is not new; it was the subject of my History EE,
                focusing on the Balfour Declaration and its ongoing
                implications.
              </p>
              <a
                href="#"
                className="underline decoration-underlineBlue decoration-1 underline-offset-4"
              >
                Continue reading -{">"}
              </a>
            </div>
          </div>
          <div className="mt-[500px]"></div>
        </div>
      </main>
    </div>
  );
}
