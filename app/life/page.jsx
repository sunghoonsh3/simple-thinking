// life/page.jsx
import { Suspense } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import StackBlogPreview from "../components/StackBlogPreview";
import Image from "next/image";

// Static metadata for the page
export const metadata = {
  title: "Life",
  description: "Personal life, OKRs, photos, and thoughts",
};

// Server component that pre-fetches and filters February OKRs posts
async function FebruaryOKRsSection() {
  const allPosts = await getAllPosts();

  const februaryOKRs = allPosts
    .filter((post) => post.metadata?.subcategory === "feburary okrs")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 4);

  return (
    <section className="w-full">
      <SectionTitle title="feburary okrs" alignment="left" />
      {februaryOKRs.length > 0 ? (
        februaryOKRs.map((post) => (
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

// Mobile-optimized PhotoGallerySection that preserves desktop view
function PhotoGallerySection() {
  return (
    <section className="mt-40 sm:mt-60 overflow-hidden">
      <SectionTitle title="photos" alignment="left" className="mb-10" />
      <div className="grid gap-4 sm:mx-20 xl:mx-60 2xl:mx-[780px]">
        {/* This preserves your original grid styling for larger screens */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-4">
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

        {/* Mobile-specific layout */}
        <div className="md:hidden space-y-4 px-4">
          {[
            "/life-images/photo-1.jpg",
            "/life-images/photo-2.jpg",
            "/life-images/photo-3.jpg",
            "/life-images/photo-4.jpg",
            "/life-images/photo-5.jpg",
            "/life-images/photo-6.jpg",
          ].map((src, i) => (
            <div key={i} className="w-full rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Gallery image ${i + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Server component that pre-fetches and filters Me Yapping posts
async function MeYappingSection() {
  const allPosts = await getAllPosts();

  const meYapping = allPosts
    .filter((post) => post.metadata?.subcategory === "me yapping")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 4);

  return (
    <section className="w-full mt-40 sm:mt-96">
      <SectionTitle title="me yapping" alignment="left" />
      {meYapping.length > 0 ? (
        meYapping.map((post) => (
          <StackBlogPreview
            key={post.slug}
            title={post.metadata.title}
            date={post.metadata.date}
            content={post.preview}
            slug={post.slug}
          />
        ))
      ) : (
        <p className="text-center">Loading the content now...</p>
      )}
    </section>
  );
}

// Component for the reading list section
function ReadingListSection() {
  return (
    <section className="w-full mt-40 sm:mt-96">
      <SectionTitle title="what i lov to read every morning" alignment="left" />
      <div className="flex font-lateef flex-col mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] py-2">
        <p className="flex text-descriptionGray text-md sm:text-lg lg:text-lg xl:text-xl mb-4">
          a few sites i keep coming back to every morning. maybe it's the
          content, the style, or just the vibe of the site. no ranking, no
          rules—just my daily go-tos.
        </p>
        <p className="text-lg pb-4">https://kwondoeon.substack.com/</p>
        <p className="text-lg pb-4">https://macwright.com/</p>
        <p className="text-lg pb-4">https://disquiet.io/</p>
        <p className="text-lg pb-4">https://techcrunch.com/</p>
        <p className="text-lg pb-4">https://www.wsj.com/</p>
        <p className="text-lg pb-4">https://www.paulgraham.com/</p>
        <p className="text-lg pb-4">https://www.theintrinsicperspective.com/</p>
        <p className="text-lg pb-4">
          https://www.linkedin.com/newsletters/peter-shin-s-startup-thoughts-6943078270028382208/
        </p>
      </div>
    </section>
  );
}

// Loading fallback component with original styling
function SectionSkeleton({ title }) {
  return (
    <section className="w-full">
      <SectionTitle title={title || "loading"} alignment="left" />
      <p className="text-center">Loading the content now...</p>
    </section>
  );
}

// Main page component (Server Component)
export default function Life() {
  return (
    <div>
      <main className="p-4">
        <div>
          {/* Hero Section with Image - mobile optimized */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <div className="flex items-center justify-center">
              {/* Preserve original layout for desktop */}
              <div className="hidden sm:block">
                <Image
                  src="/life.jpg"
                  alt="people climbing image for life section"
                  width={500}
                  height={500}
                  priority={true}
                />
              </div>

              {/* Mobile-specific version */}
              <div className="sm:hidden px-2">
                <Image
                  src="/life.jpg"
                  alt="people climbing image for life section"
                  width={400}
                  height={400}
                  priority={true}
                  className="w-full h-auto object-contain max-h-[70vh]"
                />
              </div>
            </div>
          </section>

          {/* February OKRs with Suspense */}
          <Suspense fallback={<SectionSkeleton title="feburary okrs" />}>
            <FebruaryOKRsSection />
          </Suspense>

          {/* Mobile-Optimized Photo Gallery Section */}
          <PhotoGallerySection />

          {/* Me Yapping with Suspense */}
          <Suspense fallback={<SectionSkeleton title="me yapping" />}>
            <MeYappingSection />
          </Suspense>

          {/* Reading List Section */}
          <ReadingListSection />

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
