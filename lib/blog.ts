import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tag?: string;
  emoji?: string;
  cover?: string;
  readingMinutes: number;
};

export type Post = PostMeta & { html: string };

function readPost(file: string): Post {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
  const { data, content } = matter(raw);
  const words = content.trim().split(/\s+/).length;
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? new Date(data.date).toISOString() : new Date(0).toISOString(),
    excerpt: data.excerpt ?? "",
    tag: data.tag,
    emoji: data.emoji,
    cover: data.cover,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    html: marked.parse(content, { async: false }) as string
  };
}

function postFiles() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
}

export function getAllPosts(): PostMeta[] {
  return postFiles()
    .map(readPost)
    .filter((p) => new Date(p.date) <= new Date())
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ html: _html, ...meta }) => meta);
}

export function getPost(slug: string): Post | null {
  const file = `${slug}.md`;
  if (!postFiles().includes(file)) return null;
  return readPost(file);
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  });
}
