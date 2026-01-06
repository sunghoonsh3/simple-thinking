// politics/page.jsx
import { Suspense } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import StackBlogPreview from "../components/StackBlogPreview";
import Image from "next/image";

// Static metadata for the page
export const metadata = {
  title: "Politics",
  description: "Thoughts on political events and policies",
};

// Server component that pre-fetches and filters posts
async function PostsSection({ subcategory, title }) {
  const allPosts = await getAllPosts();

  const filteredPosts = allPosts
    .filter((post) => post.metadata?.subcategory === subcategory)
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 4);

  return (
    <section className="w-full pb-20">
      <SectionTitle title={title} alignment="left" />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <StackBlogPreview
            key={post.slug}
            title={post.metadata.title}
            date={post.metadata.date}
            content={post.preview}
            slug={post.slug}
          />
        ))
      ) : (
        <p className="text-center">No posts found in this category.</p>
      )}
    </section>
  );
}

// Loading fallback component
function PostsSectionSkeleton() {
  return (
    <section className="w-full pb-20">
      <div className="h-8 w-64 bg-gray-200 animate-pulse mb-6"></div>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="mb-8">
          <div className="h-6 w-3/4 bg-gray-200 animate-pulse mb-2"></div>
          <div className="h-4 w-1/4 bg-gray-200 animate-pulse mb-4"></div>
          <div className="h-16 w-full bg-gray-200 animate-pulse"></div>
        </div>
      ))}
    </section>
  );
}

// Main page component (Server Component)
export default async function Politics() {
  return (
    <div>
      <main className="p-4">
        <div>
          {/* Hero Section */}
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

          {/* Political Events Posts with Suspense */}
          <Suspense fallback={<PostsSectionSkeleton />}>
            <PostsSection
              subcategory="political events"
              title="thoughts on political events"
            />
          </Suspense>

          {/* Dove Image Section */}
          <section className="w-full flex justify-center items-center min-h-screen">
            <div className="flex justify-center">
              <Image
                src="/dove.jpg"
                alt="A dove in the sky"
                width={100}
                height={100}
                priority={false}
                loading="lazy"
                quality={80}
              />
            </div>
          </section>

          {/* Policy Posts with Suspense */}
          <Suspense fallback={<PostsSectionSkeleton />}>
            <PostsSection subcategory="policy" title="thoughts on policies" />
          </Suspense>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
