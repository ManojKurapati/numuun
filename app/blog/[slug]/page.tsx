import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { formatDate, getAllPosts, getPost } from "@/lib/blog";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.cover ? { images: [post.cover] } : undefined
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 pt-32 sm:pt-40">
      <Link
        href="/blog/"
        className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 hover:text-terracotta-500 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" /> All posts
      </Link>

      <header className="mt-8 flex flex-col gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-ink-500">
          {post.emoji && <span className="text-2xl">{post.emoji}</span>}
          {post.tag && (
            <span className="whitespace-nowrap rounded-full bg-terracotta-50 px-3 py-1 font-medium text-terracotta-600">
              {post.tag}
            </span>
          )}
          <span>
            {formatDate(post.date)} · {post.readingMinutes} min read
          </span>
        </div>
        <h1 className="font-serif text-balance text-4xl sm:text-6xl leading-[1.05] tracking-tight text-ink-900">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="text-[19px] leading-relaxed text-ink-600">{post.excerpt}</p>
        )}
      </header>

      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.cover} alt="" className="mt-10 w-full rounded-[24px] object-cover shadow-soft" />
      )}

      <div className="prose-numuun mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
