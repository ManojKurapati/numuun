import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Stories, play ideas and milestone deep-dives for parents who are crushing it."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 sm:pt-40">
      <div className="mb-12 flex max-w-2xl flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
          <span className="h-px w-8 bg-terracotta-300" /> The blog
        </span>
        <h1 className="font-serif text-balance text-5xl sm:text-6xl leading-[1.03] tracking-tight text-ink-900">
          Notes from the <span className="italic text-terracotta-500">playroom.</span>
        </h1>
        <p className="text-[17px] leading-relaxed text-ink-600">
          Milestone deep-dives, play ideas and real talk for the coolest job on earth.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-ink-600">First posts are on the way. Subscribe below so you don’t miss them.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </section>
  );
}
