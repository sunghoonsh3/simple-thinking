"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "@/app/components/BlogPreview";
import ListPreview from "@/app/components/ListPreview";
import Slogan from "@/app/components/Slogan";

// pages/index.js
// export default function Books() {
//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <p>books section is not ready yet</p>
//     </div>
//   );
// }

export default function Books() {
  return (
    <div>
      <main className="p-4">
        {/* Allows the user to see one section at a time */}
        <div className="">
          {" "}
          <section
            className="
          h-[calc(100vh-110px)]
          w-full
          flex
          items-center
          justify-center
        "
          >
            <h1 className="text-[100px] font-lateef">,</h1>
          </section>
          <section className="h-screen w-full">
            <SectionTitle title="read in 2024" />
            <ListPreview
              title="Vegetarian by Han Kang"
              description="book review coming soon"
              recommendation="it's okay"
              className="mt-[100px]"
            />
            <ListPreview
              title="Hooked by Nir Eyal"
              description="book review coming soon"
              recommendation="highly recommend"
            />
            <ListPreview
              title="The Man Who Solved the Market by Gregory Zuckerman"
              description="book review coming soon"
              recommendation="worth a read"
            />
            <ListPreview
              title="The Givers by David Callahan"
              description="book review coming soon"
              recommendation="it's okay"
            />
            <ListPreview
              title="You^2"
              description="book review coming soon"
              recommendation="worth a read"
            />
          </section>
          <section className="h-screen w-full">
            <SectionTitle title="life changing book" />
            <ListPreview
              title="january recap coming soon"
              description="a new year, a new start"
              date="january"
              className="mt-[100px]"
            />
            <ListPreview
              title="it's not feburary yet"
              description="just a placeholder :)"
              date="feburary"
            />
            <ListPreview
              title="not march as well"
              description="again, just a placeholder :)"
              date="march"
            />
            <ListPreview
              title="ifykyk"
              description="april is my fav month"
              date="april"
            />
          </section>
          {/* 4) Currently progress */}
          <div className="pb-64"></div>
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
