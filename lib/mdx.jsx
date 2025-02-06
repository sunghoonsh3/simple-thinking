import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { slug: realSlug, metadata: data, content };
}

export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== null)
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}
