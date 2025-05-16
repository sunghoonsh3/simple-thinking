"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import SubscribeModal from "../components/SubscribeModal";

export default function About() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="font-lateef text-lg lg:text-2xl 2xl:text-3xl px-5">
      <section
        className="
      h-screen w-full flex justify-center text-center items-center"
      >
        <p className="">hi there, i am tristan :)</p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p className="">oh wanna keep reading?</p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p className="">just a little bit bout me then:</p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p className="">i lov developing innovative products.</p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p className="">
          i also lov writing about politics, startups, books, life, and coding.
        </p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p className="pb-2 sm:pb-0">
          innovating cool products and yapping about philosophical questions?
          that’s my jam.
        </p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p>
          think of me as the small totoro—bouncy, full of life, and always
          curious.
        </p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p>you are still here?</p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p>impressive! a little bit more then!</p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p className="pb-2 sm:pb-0">
          i am a junior college student at the university of notre dame.
        </p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p>i major in computer science and political science.</p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p className="pb-2 sm:pb-0">
          i also run a venture-backed startup, atti, a platform that connects
          internationals in the us!
        </p>
      </section>
      <section
        className="
    h-screen w-full flex flex-col justify-center text-center items-center"
      >
        <p>
          and ... if u like what i do and wanna chat, book&nbsp;
          <a
            href="https://calendly.com/sunghoonsh3/30min"
            className="underline decoration-underlineBlue decoration-1 underline-offset-4"
          >
            a coffee chat.
          </a>
        </p>
      </section>
      <section
        className="
    h-screen w-full flex justify-center text-center items-center"
      >
        <p>
          if u like what i do and wanna buy me&nbsp;
          <a
            href="https://buymeacoffee.com/tristanshin"
            className="underline decoration-underlineBlue decoration-1 underline-offset-4"
          >
            a coffee
          </a>
          , i won’t say no hehe.
        </p>
      </section>
      <SubscribeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Footer />
    </main>
  );
}

// export default function About() {
//   return (
//     <div className="flex justify-center items-center w-full h-screen">
//       <p>about section is not ready yet</p>
//     </div>
//   );
// }

{
  /* <section className="h-screen w-full flex justify-center items-center">
<p>
  if you wanna follow what i do,{" "}
  <button
    onClick={() => setIsOpen(true)}
    className="underline decoration-underlineBlue decoration-1 underline-offset-4"
  >
    subscribe!
  </button>
</p>
</section>
<SubscribeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />;
<Footer /> */
}
