// this page is responsible for rendering each blog's post

import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="prose">
      <h1>{post.metadata.title}</h1>
      <p className="text-gray-500">{post.metadata.date}</p>
      <MDXRemote source={post.content} />
    </article>
  );
}
