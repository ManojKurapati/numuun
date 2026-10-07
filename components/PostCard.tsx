import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/blog";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className="group flex h-full flex-col gap-4 rounded-[24px] border border-ink-900/10 bg-white/70 p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cream-100 text-2xl transition-transform group-hover:rotate-6">
          {post.emoji ?? "📝"}
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink-500 transition-transform group-hover:rotate-45 group-hover:text-terracotta-500" />
      </div>
      {post.tag && (
        <span className="w-fit rounded-full bg-terracotta-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-terracotta-600">
          {post.tag}
        </span>
      )}
      <h3 className="font-serif text-2xl leading-tight text-ink-900 group-hover:text-terracotta-500 transition-colors">
        {post.title}
      </h3>
      <p className="text-[15px] leading-relaxed text-ink-600">{post.excerpt}</p>
      <p className="mt-auto pt-2 text-[12px] uppercase tracking-[0.14em] text-ink-500">
        {formatDate(post.date)} · {post.readingMinutes} min read
      </p>
    </Link>
  );
}
