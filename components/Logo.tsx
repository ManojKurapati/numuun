import Link from "next/link";
import { Sprout } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2 w-fit", className)}>
      <span className="grid h-8 w-8 place-items-center rounded-full bg-terracotta-400 text-cream-50 shadow-soft transition-transform group-hover:rotate-12">
        <Sprout className="h-4 w-4" strokeWidth={2.2} />
      </span>
      <span className="font-serif text-xl tracking-tight text-ink-900 group-hover:text-terracotta-500 transition-colors">
        {site.name}
        <span className="text-terracotta-400">.health</span>
      </span>
    </Link>
  );
}
