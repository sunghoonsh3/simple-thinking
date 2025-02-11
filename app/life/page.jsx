"use client";

import { useEffect, useState } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import StackBlogPreview from "../components/StackBlogPreview";
import Image from "next/image";

export default function Life() {
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
  const feburaryOKRs = posts
    .filter((post) => post.metadata.subcategory === "feburary okrs")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) // Sort by date
    .slice(0, 4); // Limit to 3-4 posts

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <div className="flex items-center justify-center min-h-screen">
              <Image
                src="/life.jpg"
                alt="people climbing image for life section"
                width={500}
                height={500}
              />
            </div>
          </section>
          {/* Thoughts on Political Events */}
          <section className="w-full pb-20">
            <SectionTitle title="feburary okrs" alignment="left" />
            {feburaryOKRs.length > 0 ? (
              feburaryOKRs.map((post) =>
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

// export default function Life() {
//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <p>life section is not ready yet</p>
//     </div>
//   );
// }
