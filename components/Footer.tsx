import { Sparkles } from "lucide-react";

const cols = [
  {
    title: "Practice",
    links: ["The Method", "Milestones", "Clinicians", "Journal"]
  },
  {
    title: "Care",
    links: ["Book a review", "Pricing", "Insurance", "FAQ"]
  },
  {
    title: "Namo",
    links: ["About", "Careers", "Press", "Contact"]
  }
];

export function Footer() {
  return (
    <footer className="relative border-t border-ink-900/10 bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2 w-fit">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta-500 text-cream-50 shadow-soft">
                <Sparkles className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-2xl tracking-tight text-ink-900">
                Namo
              </span>
            </a>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              An early childhood development practice for families who want
              the science — delivered with quiet, lasting care.
            </p>
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
              hello@namo.care · +91 80 4096 4040
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.title} className="flex flex-col gap-3">
                <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
                  {c.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-[15px] text-ink-800 hover:text-terracotta-600 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-ink-900/10 pt-6 text-[12px] uppercase tracking-[0.16em] text-ink-500">
          <p>© {new Date().getFullYear()} Namo Childhood Pvt. Ltd.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink-900 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Clinical ethics
            </a>
            <a href="#" className="hover:text-ink-900 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
