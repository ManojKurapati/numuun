import Link from "next/link";
import { Hero } from "@/components/Hero";
import { WinsMarquee } from "@/components/WinsMarquee";
import { SectionHeader } from "@/components/SectionHeader";
import { ShinyButton } from "@/components/ShinyButton";
import { PostCard } from "@/components/PostCard";
import { Survey } from "@/components/Survey";
import { stages } from "@/lib/milestones";
import { getAllPosts } from "@/lib/blog";

const facts = [
  {
    emoji: "⚡",
    title: "1,000,000+ connections a second",
    body: "That’s how fast a young child’s brain wires itself in the early years. Peek-a-boo is basically a software update."
  },
  {
    emoji: "🗺️",
    title: "Milestones are a map, not a test",
    body: "Every kid takes their own route. Knowing what’s around the corner just means you get to enjoy the view."
  },
  {
    emoji: "🫶",
    title: "You are the best toy they own",
    body: "No app or gadget beats your voice, your face and your attention. Talking, playing, reading — that’s the magic."
  }
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <Hero />
      <WinsMarquee />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20 sm:py-28">
        <SectionHeader
          eyebrow="Why it matters"
          title={
            <>
              Your kid is doing something <span className="italic text-terracotta-500">amazing</span> right now.
            </>
          }
          subhead="The first five years are when the brain builds most of its foundation. Here’s the good news: everyday moments with you are exactly what it needs."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {facts.map((f) => (
            <div key={f.title} className="flex flex-col gap-3 rounded-[24px] border border-ink-900/10 bg-white/70 p-7 transition-transform hover:-translate-y-1">
              <span className="text-3xl">{f.emoji}</span>
              <h3 className="font-serif text-2xl leading-tight text-ink-900">{f.title}</h3>
              <p className="text-[15px] leading-relaxed text-ink-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Survey />

      <section className="bg-cream-100/70 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeader
            eyebrow="Developmental milestones"
            title={
              <>
                Pick an age. <span className="italic text-terracotta-500">Meet your kid.</span>
              </>
            }
            subhead="From The Smiler to The Big Kid — what most children are doing at each stage, plus one play idea to try today."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {stages.map((s, i) => (
              <Link
                key={s.id}
                href={`/milestones/#${s.id}`}
                className={`group flex flex-col gap-1 rounded-[22px] p-5 transition-all hover:-translate-y-1 hover:shadow-soft ${
                  i % 3 === 0 ? "bg-terracotta-50" : i % 3 === 1 ? "bg-sage-50" : "bg-sun-50"
                }`}
              >
                <span className="text-[12px] uppercase tracking-[0.16em] text-ink-500">{s.age}</span>
                <span className="font-serif text-xl text-ink-900 group-hover:text-terracotta-500 transition-colors">
                  {s.nickname}
                </span>
              </Link>
            ))}
            <div className="flex items-center rounded-[22px] bg-ink-900 p-5">
              <ShinyButton href="/milestones" className="w-full justify-center whitespace-nowrap px-4 text-[13px] sm:text-sm">
                See them all
              </ShinyButton>
            </div>
          </div>
        </div>
      </section>

      {posts.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6 pt-20 sm:pt-28">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Fresh from the blog"
              title="Stories for the parenting legends."
              className="mb-0 sm:mb-0"
            />
            <ShinyButton href="/blog" variant="ghost" className="w-fit shrink-0">
              All posts
            </ShinyButton>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
