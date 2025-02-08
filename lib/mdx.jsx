// This file is responsible for functions that process MDX files

"use server";

import fs from "fs/promises"; // Use fs.promises for async file operations
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

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
  const slugs = await getPostSlugs(); // ✅ Ensure we await the result

  const posts = await Promise.all(
    slugs.map(async (slug) => await getPostBySlug(slug)) // ✅ Wait for all posts to be fetched
  );

  return posts
    .filter((post) => post !== null) // ✅ Remove null posts
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date)); // ✅ Sort posts by newest first
}
