"user client";

import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { remark } from "remark";
import strip from "strip-markdown";
import Footer from "@/app/components/Footer";

// Custom MDX components for images, videos, links, etc.
const components = {
  img: (props) => (
    <img {...props} className="rounded-lg shadow-md mx-auto max-w-2xl w-full" />
  ),
  video: (props) => (
    <div className="flex justify-center items-center w-full">
      <video {...props} className="rounded-lg w-full mb-4" controls />
    </div>
  ),
  a: (props) => (
    <a
      {...props}
      className="decoration-1 italic text-underlineBlue underline-offset-4 hover:underline decoration-underlineBlue "
      target="_blank"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="text-gray-800 leading-relaxed max-w-2xl mx-auto mb-6"
    />
  ),
  h3: (props) => <h3 {...props} className="text-lg font-semibold mb-4" />,

  em: (props) => <span {...props} className="text-sm font-light italic mb-4" />,

  iframe: (props) => (
    <div className="relative pb-[56.25%] h-0 max-w-2xl mx-auto rounded-lg overflow-hidden">
      <iframe
        {...props}
        className="absolute top-0 left-0 w-full h-full"
        frameBorder="0"
        allowFullScreen
        loading="lazy"
      />
    </div>
  ),
};

// className="text-lg lg:text-xl text-gray-700 border-l-4 border-underlineBlue pl-4 my-6"

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen m-3 sm:m-0 bg-white">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 mt-10 lg:mt-20">
        <article className="prose prose-lg mx-auto">
          {/* Title */}
          <h1 className="text-lg sm:text-xl lg:text-3xl font-serif mb-6 lg:mb-12">
            {post.metadata?.title || "Untitled"}
          </h1>

          {/* Date and Category - Option 2: Inline with date */}
          <div className="flex items-center font-serif text-md lg:text-lg mb-6 marker:lg:mb-12 space-x-4">
            <time className="text-gray-600">
              {post.metadata?.date || "Unknown Date"}
            </time>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 tracking-widest uppercase">
              {post.metadata?.category || "Uncategorized"}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg font-serif text-md lg:text-lg mx-auto">
            <MDXRemote source={post.content} components={components} />
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
