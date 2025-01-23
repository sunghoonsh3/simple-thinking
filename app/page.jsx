"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "./components/BlogPreview";
import ListPreview from "./components/ListPreview";
import MiddleTextBlock from "./components/MiddleTextBlock";
import Slogan from "./components/Slogan";

export default function Home() {
  return (
    <div>
      <main className="p-4">
        {/* Allows the user to see one section at a time */}
        <div className="">
          <Popup />
          <section
            className="
          h-[calc(100vh-110px)]
          w-full
          flex 
          items-center 
          justify-center
        "
          >
            {/* 1) Slogan */}
            <Slogan />
          </section>
          {/* 2) Recent Blog */}
          <section className="h-screen w-full">
            <SectionTitle title="recent blog" />
            <BlogPreview
              title="what i love about nd"
              date="Friday, December 27, 2024"
              content="I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications."
              link="#"
            />
          </section>

          {/* 3) Monthly highlights */}
          {/* Removed snap-start here */}
          <section
            className="
              h-screen w-full"
          >
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
          </section>

          {/* 4) Currently reading */}
          <section
            className="
              h-screen w-full 
            "
          >
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
          </section>

          {/* 5) What I've been learning */}
          <section
            className="
              h-screen w-full
            "
          >
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
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
