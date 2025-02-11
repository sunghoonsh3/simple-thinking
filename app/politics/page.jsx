"use client";

import { useState } from "react";
import SectionTitle from "@/app/components/SectionTitle";
import Popup from "@/app/components/Popup";
import Footer from "@/app/components/Footer";
import BlogPreview from "@/app/components/BlogPreview";
import ListPreview from "@/app/components/ListPreview";
import Slogan from "@/app/components/Slogan";
import StackBlogPreview from "../components/StackBlogPreview";

export default function Politics() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <p>politics section is not ready yet</p>
    </div>
  );
}

// export default function Politics() {
//   return (
//     <div>
//       <main className="p-4">
//         <div>
//           {/* Empty Section for Spacing */}
//           <section className="h-[calc(100vh-110px)] flex items-center justify-center">
//             <div className="flex items-center justify-center min-h-screen">
//               <div
//                 className={`relative font-lateef text-2xl lg:text-3xl text-nowrap`}
//               >
//                 {/* Shadow Effect */}
//                 <p className="absolute top-1 left-1 text-gray-300 rotate-[-20deg]">
//                   i like the noise of democracy
//                 </p>
//                 {/* Main Text */}
//                 <p className="text-black rotate-[-20deg]">
//                   i like the noise of democracy
//                 </p>
//               </div>
//             </div>
//           </section>
//           {}
//           <section className="w-full pb-20">
//             <SectionTitle title="recent blog" alignment="left" />
//             <StackBlogPreview
//               title="My thoughts on the arrest of the 17 students at Notre Dame"
//               date="Tuesday, May 14, 2024"
//               content="I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications. Yet, I hadn’t expected such protests at Notre Dame, considering its predominantly white, Catholic demographic and a general perception that Catholics may empathize more with Jews." // Show a short preview
//             />
//             <StackBlogPreview
//               title="My thoughts on the arrest of the 17 students at Notre Dame"
//               date="Tuesday, May 14, 2024"
//               content="I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications. Yet, I hadn’t expected such protests at Notre Dame, considering its predominantly white, Catholic demographic and a general perception that Catholics may empathize more with Jews." // Show a short preview
//             />
//             <StackBlogPreview
//               title="My thoughts on the arrest of the 17 students at Notre Dame"
//               date="Tuesday, May 14, 2024"
//               content="I’ve been closely monitoring the reports of pro-Palestinian protests at various U.S. university campuses, a topic widely covered by Korean media. My interest in the Israeli-Palestinian conflict is not new; it was the subject of my History EE, focusing on the Balfour Declaration and its ongoing implications. Yet, I hadn’t expected such protests at Notre Dame, considering its predominantly white, Catholic demographic and a general perception that Catholics may empathize more with Jews." // Show a short preview
//             />
//           </section>

//           {/* Footer */}
//           <Footer />
//         </div>
//       </main>
//     </div>
//   );
// }
