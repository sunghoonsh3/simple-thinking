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
            <h1 className="text-2xl 2xl:text-3xl font-lateef">
              "after a careful consideration..."
            </h1>
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
