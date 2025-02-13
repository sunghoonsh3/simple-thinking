"use client";

// export default function Startup() {
//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <p>startup section is not ready yet</p>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "@/app/components/BlogPreview";
import ListPreview from "@/app/components/ListPreview";
import { getAllPosts } from "@/lib/mdx";
import StackBlogPreviewKr from "../components/StackBlogPreviewKr";

// // pages / index.js;
// export default function Books() {
//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <p>books section is not ready yet</p>
//     </div>
//   );
// }
export default function Startup() {
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
  const startupPosts = posts
    .filter((post) => post.metadata.subcategory === "real-life lessons")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) // Sort by date
    .slice(0, 4); // Limit to 3-4 posts

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <h1 className="text-2xl 2xl:text-3xl font-lateef">
              building @ atti
            </h1>
          </section>
          {/* Read in 2024 Section */}
          <section className="w-full h-screen">
            <SectionTitle title="real-life lessons" alignment="left" />
            {startupPosts.length > 0 ? (
              startupPosts.map((post) =>
                post && post.metadata ? (
                  <StackBlogPreviewKr
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

          {/* <section className="w-full pb-20">
            <SectionTitle title="real-life lessons" alignment="left" />
            {startupPosts.length > 0 ? (
              startupPosts.map((post) =>
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
          </section> */}
          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
