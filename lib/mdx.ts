import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), "pages/posts");
console.log("postsDirectory", postsDirectory)
export async function getFiles() {
  return fs.readdirSync(postsDirectory);
}

export async function getFileBySlug(slug: string) {
    console.log("slug", slug)
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [html],
    },
  });
  console.log("mdxSource", mdxSource);
  console.log("data", data);
  return {
    slug: realSlug,
    data,
    content: mdxSource,
  };
}