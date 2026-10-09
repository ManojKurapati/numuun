"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { cn, spring } from "@/lib/utils";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "done" | "mailto" | "error";

export function SubscribeForm({
  className,
  tone = "light"
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!site.subscribeEndpoint) {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        "Subscribe me to numuun"
      )}&body=${encodeURIComponent(`Please add ${email} to the list!`)}`;
      setStatus("mailto");
      return;
    }
    setStatus("sending");
    try {
      // A url-encoded body + no-cors is a "simple" request, so it works from a
      // static site with Google Apps Script as well as Formspree/Buttondown etc.
      const body = new URLSearchParams({ email, page: window.location.pathname });
      await fetch(site.subscribeEndpoint, { method: "POST", body, mode: "no-cors" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const dark = tone === "dark";

  return (
    <div className={cn("w-full max-w-md", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "done" || status === "mailto" ? (
          <motion.p
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={spring}
            className={cn(
              "flex items-center gap-3 rounded-full px-5 py-3.5 text-[15px] font-medium",
              dark ? "bg-cream-50/10 text-cream-50" : "bg-sage-100 text-sage-700"
            )}
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-sage-500 text-cream-50">
              <Check className="h-4 w-4" />
            </span>
            {status === "done"
              ? "You’re in. Welcome to the club 🎉"
              : "Almost there — just hit send in your email app ✉️"}
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "flex w-full items-center gap-2 rounded-full p-1.5 pl-4 sm:pl-5 shadow-soft",
              dark ? "bg-cream-50" : "bg-white border border-ink-900/10"
            )}
          >
            <label htmlFor={`email-${tone}`} className="sr-only">
              Email address
            </label>
            <input
              id={`email-${tone}`}
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-w-0 flex-1 bg-transparent text-[16px] text-ink-900 placeholder:text-ink-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-900 px-4 sm:px-5 py-3 text-sm font-medium text-cream-50 transition-colors hover:bg-terracotta-500 disabled:opacity-70"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
      {status === "error" && (
        <p className={cn("mt-2 pl-5 text-[13px]", dark ? "text-sun-200" : "text-terracotta-600")}>
          Hmm, that didn’t go through. Try again in a sec?
        </p>
      )}
    </div>
  );
}
