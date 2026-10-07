import { Mail } from "lucide-react";
import { SubscribeForm } from "./SubscribeForm";

export function SubscribeBand() {
  return (
    <section id="subscribe" className="scroll-mt-28 bg-cream-50 px-4 sm:px-6 py-16 sm:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-ink-900 px-6 py-14 sm:px-14 sm:py-20 text-cream-50">
        <div aria-hidden className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-terracotta-400/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-sun-300/25 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-cream-50/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-sun-200">
              <Mail className="h-3.5 w-3.5" /> The numuun letter
            </span>
            <h2 className="font-serif text-balance text-4xl sm:text-5xl leading-[1.05] tracking-tight">
              One email. What’s next for your kid.{" "}
              <span className="italic text-sun-300">Zero guilt trips.</span>
            </h2>
            <p className="max-w-md text-[16px] leading-relaxed text-cream-200">
              Milestones to watch for, play ideas that actually work, and
              reminders that you’re doing way better than you think. No spam,
              unsubscribe anytime.
            </p>
          </div>
          <SubscribeForm tone="dark" className="lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
}
