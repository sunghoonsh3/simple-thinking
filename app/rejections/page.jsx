"use client";

import { Suspense } from "react";
import Footer from "@/app/components/Footer";
import RejectionWithAutoReply from "@/app/components/RejectionWithAutoReply";
import SectionTitle from "@/app/components/SectionTitle";
import { rejectionsData, rejectionsList } from "@/app/data/rejection-data";

export default function Rejections() {
  return (
    <div>
      <main className="p-4">
        <div>
          {/* Hero Section - keeping original */}
          <section className="h-[calc(100vh-110px)] flex items-center justify-center">
            <div className="text-center">
              {/* Small cross above */}
              {/* <div className="mb-8 text-gray-400">
                <svg
                  width="20"
                  height="30"
                  viewBox="0 0 20 30"
                  className="mx-auto"
                >
                  <path
                    d="M10 0 L10 30 M0 10 L20 10"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div> */}

              <h1 className="text-2xl md:text-3xl tracking-[0.1em]">
                <span className="font-serif italic text-gray-800">
                  felix culpa
                </span>
              </h1>

              <div className="mt-8 space-y-1 text-xs text-gray-500">
                <p>the blessed fall</p>
              </div>
            </div>
          </section>

          <SectionTitle title="rejections in 2025" alignment="left" />

          <div className="flex flex-col ml-2 sm:ml-20 xl:mx-60 2xl:ml-[780px] mt-20 space-y-16">
            {/* Rejections List */}
            {rejectionsList.map((rejection, index) => (
              <RejectionWithAutoReply
                key={rejection.company}
                company={rejection.company}
                position={rejection.position}
                rejectionData={rejectionsData[rejection.company]}
              />
            ))}

            <div className="mb-40"></div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
g