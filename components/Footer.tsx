import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-900/10 bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-4 max-w-sm">
            <Logo />
            <p className="text-[15px] leading-relaxed text-ink-600">
              {site.tagline} Milestones, stories and play ideas for the
              coolest job on earth.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-[13px] text-ink-500 hover:text-terracotta-500 transition-colors"
            >
              {site.email}
            </a>
          </div>
          <ul className="flex gap-8 text-[15px]">
            <li>
              <Link href="/milestones" className="text-ink-800 hover:text-terracotta-500 transition-colors">
                Milestones
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-ink-800 hover:text-terracotta-500 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#subscribe" className="text-ink-800 hover:text-terracotta-500 transition-colors">
                Subscribe
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-900/10 pt-6 text-[12px] text-ink-500 sm:flex-row sm:justify-between">
          <p>© {year} {site.domain}</p>
          <p className="max-w-xl sm:text-right">
            Milestone guidance adapted from the CDC’s “Learn the Signs. Act
            Early.” It’s not medical advice — if something feels off, talk to
            your child’s doctor.
          </p>
        </div>
      </div>
    </footer>
  );
}
