import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "pages/posts");

export function getFiles(): string[] {
  return fs.readdirSync(POSTS_DIR);
}