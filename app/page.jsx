"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "./components/BlogPreview";
import ListPreview from "./components/ListPreview";
import MiddleTextBlock from "./components/MiddleTextBlock";

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
          {/*Monthly highlights section*/}
          <SectionTitle title="monthly highlights" />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2025"
            date="january"
            className="mt-[100px]"
          />
          <ListPreview
            title="mock up 2024"
            description="what i have been up to in 2024"
            date="feburary"
          />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2024"
            date="march"
          />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2024"
            date="april"
          />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2024"
            date="may"
          />
          {/*Currently reading section*/}
          <SectionTitle title="currently reading" />
          <MiddleTextBlock
            title="wrapping up 2024"
            description="what i have been up to in 2024"
          />
          <MiddleTextBlock
            title="wrapping up 2024"
            description="what i have been up to in 2024"
          />
          <MiddleTextBlock
            title="wrapping up 2024"
            description="what i have been up to in 2024"
          />
          <MiddleTextBlock
            title="wrapping up 2024"
            description="what i have been up to in 2024"
          />
          {/*What I've been learning section*/}
          <SectionTitle title="what i've been learning" />
          <ListPreview
            title="spring boot 3"
            description="learning it to make a website"
            date="january"
            className="mt-[100px]"
          />
          <ListPreview
            title="mock up 2024"
            description="what i have been up to in 2024"
            date="feburary"
          />
          <ListPreview
            title="wrapping up 2024"
            description="learning it to make a website"
            date="march"
          />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2024"
            date="april"
          />
          <ListPreview
            title="wrapping up 2024"
            description="what i have been up to in 2024"
            date="may"
          />
          <Footer />
        </div>
      </main>
    </div>
  );
}
