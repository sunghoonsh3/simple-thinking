// [slug]/page.jsx
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";

// Static metadata for SEO
export async function generateMetadata(props) {
  // Get post directly without intermediate variables
  const post = await getPostBySlug(props.params.slug);

  if (!post) return { title: "Post not found" };

  return {
    title: post.metadata?.title || "Blog Post",
    description:
      post.metadata?.description || post.preview || "Read this blog post",
    openGraph: {
      title: post.metadata?.title,
      description: post.metadata?.description || post.preview,
      type: "article",
      publishedTime: post.metadata?.date,
    },
  };
}

// Custom MDX components
const MdxComponents = {
  img: (props) => (
    <div className="flex justify-center my-6">
      <img
        {...props}
        className="rounded-lg shadow-md max-w-full h-auto"
        loading="lazy"
      />
    </div>
  ),
  video: (props) => (
    <div className="flex justify-center items-center w-full my-6">
      <video
        {...props}
        className="rounded-lg w-full"
        controls
        preload="metadata"
      />
    </div>
  ),
  a: (props) => (
    <a
      {...props}
      className="decoration-1 italic text-underlineBlue underline-offset-4 hover:underline decoration-underlineBlue"
      target="_blank"
      rel="noopener noreferrer"
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
    <div className="relative pb-[56.25%] h-0 max-w-2xl mx-auto my-6 rounded-lg overflow-hidden">
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

// Main component - now a server component that avoids intermediate assignment of params
export default async function BlogPost(props) {
  // Get post directly without intermediate variables
  const post = await getPostBySlug(props.params.slug);

  if (!post) return notFound();

  return (
    <div className="min-h-screen m-3 sm:m-0 bg-white">
      <main className="max-w-2xl mx-auto px-4 mt-10 lg:mt-20">
        <article className="prose prose-lg mx-auto">
          {/* Title */}
          <h1 className="text-lg sm:text-xl lg:text-3xl font-serif mb-6 lg:mb-12">
            {post.metadata?.title || "Untitled"}
          </h1>

          {/* Date and Category */}
          <div className="flex items-center font-serif text-md lg:text-lg mb-6 lg:mb-12 space-x-4">
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
            <MDXRemote source={post.content} components={MdxComponents} />
          </div>
        </article>
        <Footer />
      </main>
    </div>
  );
}
