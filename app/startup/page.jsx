// startup/page.jsx
import { Suspense } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import StackBlogPreview from "../components/StackBlogPreview";
import StackBlogPreviewKr from "../components/StackBlogPreviewKr";

// Static metadata for the page
export const metadata = {
  title: "Startup Blog",
  description: "Cool stuff and real-life lessons about building @ atti",
};

// // Server component for thoughts on startup/industry
// async function ThoughtsSection() {
//   const allPosts = await getAllPosts();

//   const thoughtsPosts = allPosts
//     .filter((post) => post.metadata?.subcategory === "thoughts")
//     .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
//     .slice(0, 4);

//   return (
//     <section className="w-full min-h-screen">
//       <SectionTitle title="thoughts on startup/industry" alignment="left" />
//       {thoughtsPosts.length > 0 ? (
//         thoughtsPosts.map((post) => (
//           <StackBlogPreview
//             key={post.slug}
//             title={post.metadata.title}
//             date={post.metadata.date}
//             content={post.preview}
//             slug={post.slug}
//           />
//         ))
//       ) : (
//         <p className="text-center text-gray-500 mt-8">No thoughts yet...</p>
//       )}
//     </section>
//   );
// }

// Server component that pre-fetches and filters cool stuff posts
async function CoolStuffSection() {
  const allPosts = await getAllPosts();

  const coolStuffPosts = allPosts
    .filter((post) => post.metadata?.subcategory === "thoughts & finds")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 4);

  return (
    <section className="w-full h-screen">
      <SectionTitle title="thoughts & finds" alignment="left" />
      {coolStuffPosts.length > 0 ? (
        coolStuffPosts.map((post) => (
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

// Server component that pre-fetches and filters real-life lessons posts
async function RealLifeLessonsSection() {
  const allPosts = await getAllPosts();

  const realLifePosts = allPosts
    .filter((post) => post.metadata?.subcategory === "real-life lessons")
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
    .slice(0, 4);

  return (
    <section className="w-full h-screen">
      <SectionTitle title="real-life lessons" alignment="left" />
      {realLifePosts.length > 0 ? (
        realLifePosts.map((post) => (
          <StackBlogPreviewKr
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

// Loading fallback component with original styling
function SectionSkeleton({ title }) {
  return (
    <section className="w-full h-screen">
      <SectionTitle title={title || "loading"} alignment="left" />
      <p className="text-center">Loading the content now...</p>
    </section>
  );
}

// Main page component (Server Component)
export default function Startup() {
  return (
    <div>
      <main className="p-4">
        <div>
          {/* Hero Section - keeping original */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <h1 className="text-2xl 2xl:text-3xl font-lateef">
              building @ atti
            </h1>
          </section>

          {/* <Suspense
            fallback={<SectionSkeleton title="thoughts on startup/industry" />}
          >
            <ThoughtsSection />
          </Suspense> */}

          {/* Cool Stuff Posts with Suspense */}
          <Suspense fallback={<SectionSkeleton title="cool stuff" />}>
            <CoolStuffSection />
          </Suspense>

          {/* Real-life Lessons Posts with Suspense */}
          <Suspense fallback={<SectionSkeleton title="real-life lessons" />}>
            <RealLifeLessonsSection />
          </Suspense>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
