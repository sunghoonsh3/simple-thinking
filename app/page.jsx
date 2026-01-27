import Footer from "@/app/components/Footer";
// import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import BlogPreview from "./components/BlogPreview";
import ListPreview from "./components/ListPreview";
import MiddleTextBlock from "./components/MiddleTextBlock";
import Slogan from "./components/Slogan";

export default async function Home() {
  // get all posts
  const posts = await getAllPosts();

  // latest post
  // latest post - Ensuring latest by date
  const latestPost = posts
    .slice() // Make a copy of the array to avoid mutating state
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))[0]; // Sort and get latest

  return (
    <div>
      <main className="p-4">
        {/* Allows the user to see one section at a time */}
        <div>
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
              title={latestPost.metadata.title}
              date={latestPost.metadata.date}
              content={latestPost.preview} // Show a short preview
              slug={latestPost.slug}
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

          {/* 4) Currently reading */}
          <section
            className="
              min-h-screen w-full 
            "
          >
            <SectionTitle title="currently reading" />
            <MiddleTextBlock
              title="Learning Latent Action World Models in the Wild"
              description="how models learn physics from raw video without labels"
            />
            <MiddleTextBlock
              title="UniversalRAG"
              description="making retrieval work across text, images, and video"
            />
            <SectionTitle title="Korean" className="mt-20" />
            <MiddleTextBlock
              title="구의 증명 by 최진영"
              description="grief, love, greed, and what makes us human"
              className="font-gowunBatang sm:text-lg text-xs 2xl:text-xl font-semibold"
            />
          </section>
          {/* 5) What I've been learning */}
          <section
            className="
              h-screen w-full
              mt-60
              lg:mt-96
            "
          >
            <SectionTitle title="what i've been learning" />
            <ListPreview
              title="spring boot 3"
              description="learning it to make a website"
              date="january ~"
              className="mt-[100px]"
            />
            <ListPreview
              title="guitar"
              description="i can prolly play my favorite song someday"
              date="january ~"
            />
            <ListPreview
              title="typescript"
              description="need it for my intership"
              date="january ~"
            />
            <ListPreview
              title="japanese"
              description="so i can talk better with my friends"
              date="january ~"
            />
          </section>
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
