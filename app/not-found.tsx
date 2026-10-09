import { ShinyButton } from "@/components/ShinyButton";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center gap-6 px-4 pt-32 text-center">
      <span className="text-6xl">🧸</span>
      <h1 className="font-serif text-balance text-[44px] sm:text-6xl leading-[1.04] tracking-tight text-ink-900">
        This page went for a <span className="italic text-terracotta-500">nap.</span>
      </h1>
      <p className="max-w-md text-[16px] sm:text-[17px] leading-relaxed text-ink-600">
        We couldn’t find what you were looking for. Let’s get you back to the fun stuff.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <ShinyButton href="/">Take me home</ShinyButton>
        <ShinyButton href="/milestones" variant="ghost">
          Explore milestones
        </ShinyButton>
      </div>
    </section>
  );
}
