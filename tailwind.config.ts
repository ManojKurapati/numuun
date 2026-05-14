import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: [
          "var(--font-playfair)",
          "var(--font-amiri)",
          "Georgia",
          "serif"
        ],
        sans: [
          "var(--font-inter)",
          "var(--font-plex-arabic)",
          "system-ui",
          "sans-serif"
        ],
        arabicSerif: ["var(--font-amiri)", "Georgia", "serif"],
        arabicSans: ["var(--font-plex-arabic)", "system-ui", "sans-serif"]
      },
      colors: {
        cream: {
          50: "#FCF9F6",
          100: "#F6EFE4",
          200: "#EBE1CE",
          300: "#DCCDB0"
        },
        terracotta: {
          50: "#FAEFE8",
          100: "#F2D8C7",
          200: "#E5BA9F",
          300: "#D69E80",
          400: "#C98467",
          500: "#B36C50",
          600: "#8F5440",
          700: "#6B3F31"
        },
        sage: {
          50: "#F0F3EE",
          100: "#DDE5DA",
          200: "#C2D0BD",
          300: "#A5B9A0",
          400: "#8BA88E",
          500: "#6F8C73",
          600: "#56705B",
          700: "#405543"
        },
        ink: {
          900: "#1F1A14",
          800: "#2D261D",
          700: "#3F362A",
          600: "#5B5042",
          500: "#7A6E5E"
        }
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(105, 50, 37, 0.08)",
        soft: "0 20px 50px -20px rgba(105, 50, 37, 0.18)",
        glow: "0 0 0 1px rgba(201, 132, 103, 0.18), 0 30px 60px -20px rgba(201, 132, 103, 0.32)"
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.42 0 0 0 0 0.27 0 0 0 0 0.18 0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        shimmer: "shimmer 6s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
