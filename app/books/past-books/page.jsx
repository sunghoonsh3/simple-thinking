"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Link from "next/link";
import clsx from "clsx";
import SectionTitle from "@/app/components/SectionTitle";
import Footer from "@/app/components/Footer";
import ListPreview from "@/app/components/ListPreview";
import { getPastBooksGroupedByYear, getMostRecentYear } from "@/lib/books-data";

// Wrapper component to match ListPreview alignment
function AlignedContainer({ children, className = "" }) {
  return (
    <div className={clsx("flex justify-center font-lateef", className)}>
      <div className="flex w-full lg:max-w-[1100px] 2xl:max-w-[1500px] px-4 sm:px-6 lg:px-12">
        {children}
      </div>
    </div>
  );
}

// Custom title without underline - using AlignedContainer for consistency
function PageTitle({ title }) {
  return (
    <AlignedContainer className="mb-10">
      <p className="font-lateef font-normal text-xl sm:text-2xl 2xl:text-3xl">
        {title}
      </p>
    </AlignedContainer>
  );
}

// Year header with underline - matching SectionTitle style but aligned
function YearHeader({ year }) {
  return (
    <AlignedContainer className="mt-20 first:mt-10">
      <p className="font-lateef font-normal text-xl sm:text-2xl 2xl:text-3xl underline decoration-underlineBlue decoration-1 underline-offset-4">
        {year}
      </p>
    </AlignedContainer>
  );
}

// Year section component with lazy loading support
function YearSection({ year, books, isVisible }) {
  if (!isVisible) {
    return (
      <section>
        <YearHeader year={year} />
        <AlignedContainer className="py-8">
          <p className="text-descriptionGray">
            Loading {books.length} books...
          </p>
        </AlignedContainer>
      </section>
    );
  }

  return (
    <section>
      <YearHeader year={year} />
      <div className="mt-8">
        {books.map((book, index) => (
          <ListPreview
            key={`${year}-${book.title}-${index}`}
            title={book.title}
            description={book.description}
            recommendation={book.recommendation}
            isKorean={book.isKorean}
          />
        ))}
      </div>
    </section>
  );
}

// Intersection Observer hook for lazy loading
function useIntersectionObserver(options = {}) {
  const [visibleSections, setVisibleSections] = useState(new Set([0, 1]));
  const observerRef = useRef(null);
  const sectionRefs = useRef({});

  const observe = useCallback((index, element) => {
    if (element) {
      sectionRefs.current[index] = element;
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index, 10);
          if (entry.isIntersecting) {
            setVisibleSections((prev) => {
              const next = new Set(prev);
              next.add(index);
              next.add(index - 1);
              next.add(index + 1);
              return next;
            });
          }
        });
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0,
        ...options,
      },
    );

    Object.entries(sectionRefs.current).forEach(([index, element]) => {
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [options]);

  return { visibleSections, observe };
}

export default function PastBooks() {
  const pastBooksData = useMemo(() => getPastBooksGroupedByYear(), []);
  const mostRecentYear = useMemo(() => getMostRecentYear(), []);
  const { visibleSections, observe } = useIntersectionObserver();

  if (pastBooksData.length === 0) {
    return (
      <div>
        <main className="p-4">
          <div className="h-20" />
          <PageTitle title="past read books" />
          <AlignedContainer className="py-12">
            <p className="text-descriptionGray">
              No past books found. Check back after reading more books!
            </p>
          </AlignedContainer>
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div>
      <main className="p-4">
        <div className="h-20" />

        {/* Page Title */}
        <PageTitle title="past read books" />

        {/* Subtitle with context */}
        <AlignedContainer className="mb-16">
          <p className="text-descriptionGray text-lg">
            books i've read before {mostRecentYear}, organized by year.
          </p>
        </AlignedContainer>

        {/* Year sections with lazy loading */}
        {pastBooksData.map(({ year, books }, index) => (
          <div key={year} ref={(el) => observe(index, el)} data-index={index}>
            <YearSection
              year={year}
              books={books}
              isVisible={visibleSections.has(index)}
            />
          </div>
        ))}

        {/* Footer */}
        <div className="mt-40">
          <Footer />
        </div>
      </main>
    </div>
  );
}
