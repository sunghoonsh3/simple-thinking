"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "@/app/components/BlogPreview";
import ListPreview from "@/app/components/ListPreview";
import Slogan from "@/app/components/Slogan";

export default function Books() {
  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <h1 className="text-[100px] font-lateef">,</h1>
          </section>

          {/* Read in 2024 Section */}
          <section className="w-full min-h-screen mt-20">
            <SectionTitle title="read in 2024" />
            <div className="mt-20 2xl:mt-28">
              <ListPreview
                title="Vegetarian by Han Kang"
                description="book review coming soon"
                recommendation="it's okay"
              />
              <ListPreview
                title="The Givers by David Callahan"
                description="book review coming soon"
                recommendation="it's okay"
              />
              <ListPreview
                title="Options Trading Simplified for Beginners"
                description="book review coming soon"
                recommendation="it's okay"
              />
              <ListPreview
                title="The Man Who Solved the Market by Gregory Zuckerman"
                description="book review coming soon"
                recommendation="worth a read"
              />
              <ListPreview
                title="You^2"
                description="book review coming soon"
                recommendation="worth a read"
              />
              <ListPreview
                title="The Psychology of Money by Morgan Housel"
                description="book review coming soon"
                recommendation="worth a read"
              />
              <ListPreview
                title="Hooked by Nir Eyal"
                description="book review coming soon"
                recommendation="highly recommend"
              />
              <ListPreview
                title="You Look Like a Thing and I Love You by Janelle Shane"
                description="book review coming soon"
                recommendation="highly recommend"
              />
            </div>
          </section>

          {/* Life-Changing Books Section */}
          <section className="w-full min-h-screen mt-20">
            <SectionTitle title="life changing books" />
            <div className="mt-20 2xl:mt-28">
              <ListPreview
                title="Silence by Shusaku Endo"
                description="book review coming soon"
                recommendation="read this shit"
              />
              <ListPreview
                title="The 22 Immutable Laws of Marketing"
                description="book review coming soon"
                recommendation="read this shit"
              />
              <ListPreview
                title="Think and Grow Rich by Napoleon Hill"
                description="book review coming soon"
                recommendation="read this shit"
              />
            </div>
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
