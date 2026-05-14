import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const spring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 20,
  mass: 0.9
};

export const softSpring = {
  type: "spring" as const,
  stiffness: 80,
  damping: 22,
  mass: 1
};

export const reveal = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring }
};
