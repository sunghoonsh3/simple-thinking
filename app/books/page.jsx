"use client";

import Link from "next/link";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import ListPreview from "@/app/components/ListPreview";
import {
  lifeChangingBooks,
  getMostRecentYear,
  getBooksByYear,
  getPastBooksCount,
} from "@/lib/books-data";

export default function Books() {
  const mostRecentYear = getMostRecentYear();
  const currentYearBooks = getBooksByYear(mostRecentYear);
  const pastBooksCount = getPastBooksCount();

  return (
    <div>
      <main className="p-4">
        <div>
          {/* Empty Section for Spacing */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <h1 className="text-[100px] font-lateef">,</h1>
          </section>

          {/* Read in [Current Year] Section */}
          <section className="w-full min-h-screen mt-20">
            <SectionTitle title={`read in ${mostRecentYear}`} />
            <div className="mt-20 2xl:mt-28">
              {currentYearBooks.map((book, index) => (
                <ListPreview
                  key={`${book.title}-${index}`}
                  title={book.title}
                  description={book.description}
                  recommendation={book.recommendation}
                  isKorean={book.isKorean}
                />
              ))}

              {/* Archive link - matching ListPreview layout */}
              {pastBooksCount > 0 && (
                <div className="flex justify-center mt-10 font-lateef">
                  <div className="flex w-full lg:max-w-[1100px] 2xl:max-w-[1500px] px-4 sm:px-6 lg:px-12">
                    <Link
                      href="/books/past-books"
                      className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-lg inline-flex items-center"
                    >
                      view all past read books ({pastBooksCount})
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Life-Changing Books Section */}
          <section className="h-screen w-full mt-60 lg:mt-96">
            <SectionTitle title="life changing books" />
            <div className="mt-20 2xl:mt-28">
              {lifeChangingBooks.map((book, index) => (
                <ListPreview
                  key={`${book.title}-${index}`}
                  title={book.title}
                  description={book.description}
                  recommendation={book.recommendation}
                  isKorean={book.isKorean}
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
