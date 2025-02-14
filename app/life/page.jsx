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

  // Filter posts into different subcategories
  const meYapping = posts
    .filter((post) => post.metadata.subcategory === "me yapping")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)) // Sort by date
    .slice(0, 4); // Limit to 3-4 posts

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] w-fullflex items-center justify-center">
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
          <section className="w-full">
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
          {/* Image Gallery Section */}

          <section
            className="
mt-40
sm:mt-60
    overflow-hidden // Prevents overflow issues
  "
          >
            <SectionTitle title="photos" alignment="left" className="mb-10" />
            <div
              className="
      grid
      gap-4
      grid-cols-[repeat(auto-fit,minmax(200px,1fr))]
      sm:mx-20
      xl:mx-60
      2xl:mx-[780px]
    "
            >
              {[
                "/life-images/photo-1.jpg",
                "/life-images/photo-2.jpg",
                "/life-images/photo-3.jpg",
                "/life-images/photo-4.jpg",
                "/life-images/photo-5.jpg",
                "/life-images/photo-6.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-md object-cover object-top sm:object-center"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* me yapping */}

          <section className="w-full mt-40 sm:mt-96">
            <SectionTitle title="me yapping" alignment="left" />
            {meYapping.length > 0 ? (
              meYapping.map((post) =>
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
              <p className="text-center">Loading the content now...</p>
            )}
          </section>

          <section
            className="
 w-full mt-40 sm:mt-96
            "
          >
            <SectionTitle
              title="what i lov to read every morning"
              alignment="left"
            />
            <div className="flex font-lateef flex-col mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] py-2">
              <p className="flex text-descriptionGray text-md sm:text-lg lg:text-lg xl:text-xl mb-4">
                a few sites i keep coming back to every morning. maybe it’s the
                content, the style, or just the vibe of the site. no ranking, no
                rules—just my daily go-tos.
              </p>
              <p className="text-lg pb-4">https://kwondoeon.substack.com/</p>
              <p className="text-lg pb-4">https://macwright.com/</p>
              <p className="text-lg pb-4">https://disquiet.io/</p>
              <p className="text-lg pb-4">https://techcrunch.com/</p>
              <p className="text-lg pb-4">https://www.wsj.com/</p>
              <p className="text-lg pb-4">https://www.paulgraham.com/</p>
              <p className="text-lg pb-4">
                https://www.linkedin.com/newsletters/peter-shin-s-startup-thoughts-6943078270028382208/
              </p>
            </div>
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
