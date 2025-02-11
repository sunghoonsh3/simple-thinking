"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "@/app/components/BlogPreview";
import ListPreview from "@/app/components/ListPreview";
import Slogan from "@/app/components/Slogan";

// pages / index.js;
export default function Books() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <p>books section is not ready yet</p>
    </div>
  );
}

// export default function Books() {
//   return (
//     <div>
//       <main className="p-4">
//         {/* Allows the user to see one section at a time */}
//         <div className="">
//           {" "}
//           <section
//             className="
//           h-[calc(100vh-110px)]
//           w-full
//           flex
//           items-center
//           justify-center
//         "
//           >
//             <h1 className="text-[100px] font-lateef">,</h1>
//           </section>
//           <section className="h-screen w-full">
//             {/* 1) Read in 2024 */}
//             <SectionTitle title="read in 2024" />
//             <ListPreview
//               title="Vegetarian by Han Kang"
//               description="book review coming soon"
//               recommendation="it's okay"
//               className="mt-[100px]"
//             />
//             <ListPreview
//               title="The Givers by David Callahan"
//               description="book review coming soon"
//               recommendation="it's okay"
//             />
//             <ListPreview
//               title="Options Trading Simplified for Beginners"
//               description="book review coming soon"
//               recommendation="it's okay"
//             />
//             <ListPreview
//               title="The Man Who Solved the Market by Gregory Zuckerman"
//               description="book review coming soon"
//               recommendation="worth a read"
//             />
//             <ListPreview
//               title="You^2"
//               description="book review coming soon"
//               recommendation="worth a read"
//             />
//             <ListPreview
//               title="The psychology of Money by Morgan Housel"
//               description="book review coming soon"
//               recommendation="worth a read"
//             />
//             <ListPreview
//               title="Hooked by Nir Eyal"
//               description="book review coming soon"
//               recommendation="highly recommend"
//             />
//             <ListPreview
//               title="You Look Like a Thing and I Love You by Janelle Shane"
//               description="book review coming soon"
//               recommendation="highly recommend"
//             />
//           </section>
//           {/* 2) Life Changing Books */}
//           <section
//             className="
//     w-full min-h-screen
//   "
//           >
//             <SectionTitle
//               title="life changing book"
//               className="block w-full text-left mt-96"
//             />

//             <ListPreview
//               title="Silence by Shusaku Endo"
//               description="book review coming soon"
//               recommendation="read this shit"
//             />
//             <ListPreview
//               title="The 22 Immutable Laws of Marketing"
//               description="book review coming soon"
//               recommendation="read this shit"
//             />
//             <ListPreview
//               title="Think and Grow Rich by Napolleon Hill"
//               description="book review coming soon"
//               recommendation="read this shit"
//             />
//           </section>
//           {/* Footer */}
//           <Footer />
//         </div>
//       </main>
//     </div>
//   );
// }
