import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="text-2xl font-bold">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-lg font-semibold">{post.metadata.title}</h2>
            </Link>
            <p className="text-gray-500">{post.metadata.date}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
