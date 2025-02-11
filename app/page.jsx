"use client";

import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import BlogPreview from "./components/BlogPreview";
import ListPreview from "./components/ListPreview";
import MiddleTextBlock from "./components/MiddleTextBlock";
import Slogan from "./components/Slogan";

export default function Home() {
  // get all posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts(); // Fetch posts
      setPosts(allPosts); // Store posts in state
    }
    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return <p>Loading...</p>; // ✅ Prevents errors while data is loading
  }

  // latest post
  const latestPost = posts[0];

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
              title="Human Acts by Han Kang"
              description="the military dictatorship and the Gwangju Uprising"
            />
            <MiddleTextBlock
              title="Engineering in Plain Sight by Grady Hillhouse"
              description="overlooked infrastructure and everyday engineering"
            />
            <MiddleTextBlock
              title="The Coming Wave by Michael & Mustafa"
              description="the future of tech and its impact on society"
            />
            <MiddleTextBlock
              title="Full Stack Development by Juha Hinkula"
              description="building applications with React and Spring Boot"
            />
            <SectionTitle title="Korean" className="mt-20" />
            <MiddleTextBlock
              title="실리콘밸리는 무엇을 기획하고 개발하는가 by Han"
              description="how to build customer-centric products with psychology"
              className="font-gowunBatang sm:text-lg text-xs 2xl:text-xl font-semibold"
            />
            <MiddleTextBlock
              title="어떤 생각들은 나의 세계가 된다 by 이충녕"
              description="philosophical questions and answers for everyday life"
              className="font-gowunBatang text-xs sm:text-lg 2xl:text-xl font-semibold"
            />
            <MiddleTextBlock
              title="뇌, 마케팅의 비밀을 열다 by Hans-Georg"
              description="how to execute effective marketing with psychology"
              className="font-gowunBatang text-xs sm:text-lg 2xl:text-xl font-semibold"
            />
            <MiddleTextBlock
              title="가장 젊은 날의 철학 by 이충녕"
              description="philosophical questions and answers for the youth"
              className="font-gowunBatang text-xs sm:text-lg 2xl:text-xl font-semibold"
            />
          </section>
          {/* 5) What I've been learning */}
          <section
            className="
              h-screen w-full
              mt-32
              xl:mt-40
              2xl:mt-60
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
