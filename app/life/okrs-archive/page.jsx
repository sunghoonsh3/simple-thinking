// life/okrs-archive/page.jsx
import { Suspense } from "react";
import { getAllPosts } from "@/lib/mdx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import StackBlogPreview from "../../components/StackBlogPreview";
import Link from "next/link";
import clsx from "clsx";

// Static metadata for the page
export const metadata = {
  title: "OKRs Archive",
  description: "Archive of all past OKRs",
};

// CustomSectionTitle without underline specifically for the page title
function NoUnderlineSectionTitle({
  title = "default title",
  alignment = "center",
  className = "",
}) {
  return (
    <div
      className={clsx(
        "flex items-center text-xl sm:text-2xl 2xl:text-3xl",
        {
          "justify-start": alignment === "left",
          "ml-2 sm:ml-20 xl:mx-60 2xl:ml-[780px]": alignment === "left",
          "justify-center": alignment === "center",
          "justify-end": alignment === "right",
        },
        className,
      )}
    >
      <p className="font-lateef font-normal">{title}</p>
    </div>
  );
}

// Server component that categorizes OKRs by month
async function OKRsArchiveContent() {
  const allPosts = await getAllPosts();

  const now = new Date();
  const currentMonth = now.getMonth(); // 0-11
  const currentYear = now.getFullYear();

  // Get all OKRs posts except current month/year
  const allOKRs = allPosts
    .filter((post) => {
      if (post.metadata?.category !== "okrs") return false;

      const postDate = new Date(post.metadata.date);
      // Exclude posts from current month AND year
      return !(
        postDate.getMonth() === currentMonth &&
        postDate.getFullYear() === currentYear
      );
    })
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

  // Group posts by month-year based on actual date
  const groupedOKRs = {};

  allOKRs.forEach((post) => {
    const postDate = new Date(post.metadata.date);
    const monthYear = postDate.toLocaleString("en", {
      month: "long",
      year: "numeric",
    }); // e.g., "March 2025"

    if (!groupedOKRs[monthYear]) {
      groupedOKRs[monthYear] = [];
    }

    groupedOKRs[monthYear].push(post);
  });

  return (
    <div>
      {/* Back link - using specific margin to match your component styling */}
      <div className="mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] mb-10">
        {/* <Link
          href="/life"
          className="text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Life
        </Link> */}
      </div>

      {/* Page Title - using NoUnderlineSectionTitle with left alignment */}
      <NoUnderlineSectionTitle
        title="OKRs Archive"
        alignment="left"
        className="mb-10"
      />

      {Object.keys(groupedOKRs).length > 0 ? (
        // Create sorted entries array with most recent months first
        Object.entries(groupedOKRs)
          .sort(([, postsA], [, postsB]) => {
            // Sort by the date of the first post in each group
            const dateA = postsA[0]?.metadata?.date
              ? new Date(postsA[0].metadata.date)
              : new Date(0);
            const dateB = postsB[0]?.metadata?.date
              ? new Date(postsB[0].metadata.date)
              : new Date(0);
            return dateB - dateA; // Descending order (newest first)
          })
          .map(([monthYear, posts]) => (
            <section key={monthYear} className="mt-20 first:mt-10">
              {/* Month-Year title using regular SectionTitle with left alignment */}
              <SectionTitle title={monthYear} alignment="left" />

              {/* Posts list - each post will have its own margins from StackBlogPreview */}
              {posts.map((post) => (
                <StackBlogPreview
                  key={post.slug}
                  title={post.metadata.title}
                  date={post.metadata.date}
                  content={post.preview}
                  slug={post.slug}
                />
              ))}
            </section>
          ))
      ) : (
        <p className="text-center mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] py-12">
          No archived OKRs found.
        </p>
      )}
    </div>
  );
}

// Loading fallback component
function ArchiveSkeleton() {
  return (
    <div>
      {/* Back link with matching margins */}
      <div className="mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] mb-10">
        <Link
          href="/life"
          className="text-blue-500 hover:text-blue-700 transition-colors text-sm font-medium flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Life
        </Link>
      </div>

      {/* Page Title - using NoUnderlineSectionTitle with left alignment */}
      <NoUnderlineSectionTitle
        title="OKRs Archive"
        alignment="left"
        className="mb-10"
      />

      <p className="text-center mx-2 sm:mx-20 xl:mx-60 2xl:mx-[780px] py-12">
        Loading archived OKRs...
      </p>
    </div>
  );
}

// Main archive page component
export default function OKRsArchive() {
  return (
    <div>
      <main className="p-4">
        <Suspense fallback={<ArchiveSkeleton />}>
          <OKRsArchiveContent />
        </Suspense>

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
