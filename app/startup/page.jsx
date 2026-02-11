// startup/page.jsx
import { Suspense } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import StackBlogPreview from "../components/StackBlogPreview";
import StackBlogPreviewKr from "../components/StackBlogPreviewKr";

// Static metadata for the page
export const metadata = {
  title: "Startup",
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

// Static section for companies/people I follow
function CompaniesSection() {
  const companies = [
    { name: "convoke", url: "https://www.convoke.bio/" },
    { name: "conway", url: "https://www.conway.ai/" },
    { name: "isomorphic labs", url: "https://www.isomorphiclabs.com/" },
    {
      name: "cellular intelligence",
      url: "https://www.cellularintelligence.com/",
    },
    { name: "alphaz", url: "https://alpha-z.ai/" },
    { name: "genmd", url: "https://www.genmd.ai/" },
    { name: "arc institute", url: "https://arcinstitute.org/" },
    { name: "baker lab", url: "https://www.bakerlab.org/" },
    { name: "céline halioua", url: "https://www.celinehh.com/about" },
    { name: "lada nuzhna", url: "https://www.ladanuzhna.xyz/" },
    {
      name: "leigh marie braswell",
      url: "https://www.kleinerperkins.com/people/investors/leigh-marie-braswell/",
    },
  ];

  return (
    <section className="w-full h-screen">
      <SectionTitle title="companies / people i follow" alignment="left" />
      <ul className="flex flex-col gap-4 mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] font-lateef text-lg lg:text-xl 2xl:text-2xl mt-10">
        {companies.map(({ name, url }) => (
          <li key={name}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              <span>{name}</span>
              <span
                className="absolute bottom-0 left-0 h-px w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                style={{ backgroundColor: "#5AA8D6" }}
              ></span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function CrackedPplSection() {
  const people = [
    {
      name: "hamza pereira",
      url: "https://www.linkedin.com/in/hamza-pereira/",
    },
    { name: "john kim", url: "https://www.linkedin.com/in/dongwhi-john-kim/" },
    { name: "boris kizenko", url: null },
    { name: "reed graff", url: "https://www.linkedin.com/in/reedgraff/" },
    { name: "mark evgenev", url: "https://www.linkedin.com/in/mevgenev/" },
    { name: "hy nguyen", url: "https://www.linkedin.com/in/mrpronoun/" },
    { name: "anish karthik", url: "https://www.linkedin.com/in/anishkarthik/" },
  ];

  return (
    <section className="w-full h-screen">
      <SectionTitle title="cracked ppl around me" alignment="left" />
      <ul className="flex flex-col gap-4 mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] font-lateef text-lg lg:text-xl 2xl:text-2xl mt-10">
        {people.map(({ name, url }) => (
          <li key={name}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
              >
                <span>{name}</span>
                <span
                  className="absolute bottom-0 left-0 h-px w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
                  style={{ backgroundColor: "#5AA8D6" }}
                ></span>
              </a>
            ) : (
              <span>{name}</span>
            )}
          </li>
        ))}
      </ul>
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
              i will build a generational company by 40
            </h1>
          </section>

          <CompaniesSection />

          <CrackedPplSection />
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
