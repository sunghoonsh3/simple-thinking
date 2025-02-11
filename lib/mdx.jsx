// This file is responsible for functions that process MDX files

"use server";

import fs from "fs/promises"; // Use fs.promises for async file operations
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import strip from "strip-markdown";

const postsDirectory = path.join(process.cwd(), "posts");

// get the slug e.g. "my-response-to-fr-jenkins"
export async function getPostSlugs() {
  try {
    return await fs.readdir(postsDirectory); // ✅ Use async readdir
  } catch (error) {
    console.error("Error reading post directory:", error);
    return []; // Return an empty array if an error occurs
  }
}

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, "utf8"); // ✅ Use async readFile
    const { data, content } = matter(fileContents);

    return { slug: realSlug, metadata: data, content };
  } catch (error) {
    console.error(`Error reading post: ${slug}`, error);
    return null; // Return null if the file doesn't exist
  }
}

export async function getAllPosts() {
  const slugs = await getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPostBySlug(slug);
      if (!post) return null;

      return {
        ...post,
        preview: post.metadata.preview || (await generatePreview(post.content)), // Use preview if available
      };
    })
  );

  return posts.filter((post) => post !== null);
}

// Function to clean and shorten the preview text
async function generatePreview(content) {
  const processedContent = await remark().use(strip).process(content);
  return processedContent
    .toString()
    .replace(/\\/g, "")
    .trim()
    .split("\n")
    .slice(0, 4)
    .join(" ");
}
