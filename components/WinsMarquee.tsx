const wins = [
  "First real smile 😊",
  "Rolled over 🔄",
  "Blew a raspberry 💨",
  "Found the hidden toy 🧸",
  "Waved bye-bye 👋",
  "First steps 👣",
  "Said “more milk” 🥛",
  "Asked “why?” for the 40th time 🤔",
  "Drew a circle ⭕",
  "Hopped on one foot 🦩",
  "Counted to ten 🔟"
];

export function WinsMarquee() {
  return (
    <div className="relative overflow-hidden border-y border-ink-900/10 bg-sun-100 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...wins, ...wins].map((w, i) => (
          <span key={i} className="font-serif text-xl italic text-ink-800" aria-hidden={i >= wins.length}>
            {w} <span className="mx-4 not-italic text-terracotta-400">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
