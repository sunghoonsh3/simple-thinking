"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import StackBlogPreview from "../components/StackBlogPreview";

export default function Politics() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts(); // Fetch all posts
      console.log("Fetched posts:", allPosts); // Debugging
      setPosts([...allPosts]); // Ensuring state update reflects new array
    }
    fetchPosts();
  }, []);

  // Filter posts into different subcategories
  const politicalEventsPosts = posts
    .filter((post) => post.metadata.subcategory === "political events")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) // Sort by date
    .slice(0, 4); // Limit to 3-4 posts

  const policyPosts = posts
    .filter((post) => post.metadata.subcategory === "policy") // Correctly filter for policy posts
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) // Sort by date
    .slice(0, 4);

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative font-lateef text-2xl lg:text-3xl text-nowrap">
                {/* Shadow Effect */}
                <p className="absolute top-1 left-1 text-gray-300 rotate-[-20deg]">
                  i like the noise of democracy
                </p>
                {/* Main Text */}
                <p className="text-black rotate-[-20deg]">
                  i like the noise of democracy
                </p>
              </div>
            </div>
          </section>

          {/* Thoughts on Political Events */}
          <section className="w-full pb-20">
            <SectionTitle
              title="thoughts on political events"
              alignment="left"
            />
            {politicalEventsPosts.length > 0 ? (
              politicalEventsPosts.map((post) =>
                post && post.metadata ? (
                  <StackBlogPreview
                    key={post.slug}
                    title={post.metadata.title}
                    date={post.metadata.date}
                    content={post.preview}
                    slug={post.slug} // Shortened preview from getAllPosts()
                  />
                ) : null
              )
            ) : (
              <p className="text-center">No posts found in this category.</p>
            )}
          </section>

          {/* Thoughts on Policies */}
          <section className="w-full pb-20">
            <SectionTitle title="thoughts on policies" alignment="left" />
            {policyPosts.length > 0 ? (
              policyPosts.map((post) =>
                post && post.metadata ? (
                  <StackBlogPreview
                    key={post.slug}
                    title={post.metadata.title}
                    date={post.metadata.date}
                    content={post.preview}
                    slug={post.slug} // Shortened preview from getAllPosts()
                  />
                ) : null
              )
            ) : (
              <p className="text-center">No posts found in this category.</p>
            )}
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
