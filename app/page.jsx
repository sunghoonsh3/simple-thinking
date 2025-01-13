"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import BlogPreview from "./components/BlogPreview";

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
          <SectionTitle title="recent blog" />
          <BlogPreview blogTitle="hi" content="hhehe" />
          <SectionTitle title="monthly highlights" />
          <SectionTitle title="currently reading" />
          <SectionTitle title="what i've been learning" />
          <Footer />
        </div>
      </main>
    </div>
  );
}
