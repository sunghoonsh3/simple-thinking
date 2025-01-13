"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "./components/BlogPreview";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <main className="p-4">
        <div>
          <Popup />
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
          <SectionTitle title="recent blog" />
          <BlogPreview
            title="what i love about nd"
            date="Friday, December 27, 2024"
            content="I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications."
            link="#"
          />
          <SectionTitle title="monthly highlights" />
          <div className="flex justify-center gap-[1000px] px-6 py-10 font-lateef mt-3 font-normal text-3xl">
            {/* Left Column */}
            <div className="flex flex-col">
              <h2 className="font-normal">wrapping up 2024</h2>
              <p className="text-descriptionGray mt-2">
                been a tough year. hope y'all have a great year ahead
              </p>
            </div>
            {/* Right Column */}
            <div className="flex flex-col text-right">
              <h2>januaray</h2>
            </div>
          </div>

          <SectionTitle title="currently reading" />
          <SectionTitle title="what i've been learning" />
          <Footer />
        </div>
      </main>
    </div>
  );
}
