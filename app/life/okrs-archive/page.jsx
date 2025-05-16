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
        className
      )}
    >
      <p className="font-lateef font-normal">{title}</p>
    </div>
  );
}

// Server component that categorizes OKRs by month
async function OKRsArchiveContent() {
  const allPosts = await getAllPosts();

  // Get all OKRs posts except current month (April)
  const allOKRs = allPosts
    .filter(
      (post) =>
        post.metadata?.category === "okrs" && !post.slug.startsWith("apr-okr-")
    )
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

  // Group posts by month based on slug prefix (e.g., feb-okr-, mar-okr-)
  const groupedOKRs = {};

  // Month mapping for display
  const monthMap = {
    jan: "January",
    feb: "February",
    mar: "March",
    apr: "April",
    may: "May",
    jun: "June",
    jul: "July",
    aug: "August",
    sep: "September",
    oct: "October",
    nov: "November",
    dec: "December",
  };

  // Improved month detection with better handling of edge cases
  allOKRs.forEach((post) => {
    const slug = post.slug.toLowerCase();

    // More reliable month detection
    let monthName = null;

    // Try to match three-letter month abbreviations
    Object.entries(monthMap).forEach(([abbr, fullName]) => {
      if (slug.startsWith(abbr.toLowerCase())) {
        monthName = fullName;
      }
    });

    // If no match by abbreviation, try to match by first three letters of full month name
    if (!monthName) {
      Object.values(monthMap).forEach((fullName) => {
        const firstThreeLetters = fullName.toLowerCase().substring(0, 3);
        if (
          slug.startsWith(firstThreeLetters) ||
          slug.includes(firstThreeLetters)
        ) {
          monthName = fullName;
        }
      });
    }

    // Special case for February (check for typo "feburary")
    if (!monthName && (slug.startsWith("febu") || slug.includes("febu"))) {
      monthName = "February";
    }

    // If we still don't have a match, use a fallback
    if (!monthName) {
      // If it looks like a month prefix but not recognized - use first three letters
      if (slug.includes("okr") && slug.match(/^[a-z][a-z][a-z]/)) {
        const possibleMonth = slug.substring(0, 3);
        monthName = monthMap[possibleMonth] || "Uncategorized";
      } else {
        // Last resort fallback
        const slugParts = slug.split("-");
        if (slugParts.length > 0) {
          // Capitalize first letter as fallback
          monthName =
            slugParts[0].charAt(0).toUpperCase() + slugParts[0].slice(1);
        } else {
          monthName = "Uncategorized";
        }
      }
    }

    // Add post to appropriate month group
    if (!groupedOKRs[monthName]) {
      groupedOKRs[monthName] = [];
    }

    groupedOKRs[monthName].push(post);
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
          .map(([month, posts]) => (
            <section key={month} className="mt-20 first:mt-10">
              {/* Month title using regular SectionTitle with left alignment */}
              <SectionTitle title={month} alignment="left" />

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
