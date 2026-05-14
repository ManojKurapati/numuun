import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const
};

export function CommunicationIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 12.5C7 10.567 8.567 9 10.5 9h13A3.5 3.5 0 0 1 27 12.5v6A3.5 3.5 0 0 1 23.5 22h-7.2l-4.55 3.64A.6.6 0 0 1 10.8 25.2V22h-.3A3.5 3.5 0 0 1 7 18.5z" />
      <path d="M14 17h6M14 14h9" opacity="0.55" />
      <path
        d="M17 27.5c.6 1.5 2.16 2.5 3.94 2.5h6.3a3 3 0 0 1 1.8.62l3.36 2.6V30a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3h-2"
        opacity="0.55"
      />
    </svg>
  );
}

export function GrossMotorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="22" cy="8.5" r="2.4" />
      <path d="M14.5 17l4.5-3 3.5 2.5 4 1.5" />
      <path d="M19 14l1.5 5-3 4.5L14 26" />
      <path d="M20.5 19l4 2.5.5 6.5" />
      <path d="M10 31l4-5M28 31l-3-3" opacity="0.65" />
    </svg>
  );
}

export function FineMotorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 24V14a2 2 0 1 1 4 0v7" />
      <path d="M16 14V11a2 2 0 1 1 4 0v10" />
      <path d="M20 13a2 2 0 1 1 4 0v8" />
      <path d="M24 16a2 2 0 1 1 4 0v8a8 8 0 0 1-16 0V20" />
      <circle cx="9" cy="11" r="1.3" opacity="0.55" />
      <circle cx="31" cy="11" r="0.9" opacity="0.4" />
    </svg>
  );
}

export function ProblemSolvingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 12a3 3 0 0 1 3-3h4v3a2 2 0 1 0 4 0V9h4a3 3 0 0 1 3 3v4h-3a2 2 0 1 0 0 4h3v4a3 3 0 0 1-3 3h-4v-3a2 2 0 1 0-4 0v3h-4a3 3 0 0 1-3-3v-4h3a2 2 0 1 0 0-4H8z" />
      <circle cx="20" cy="20" r="2.4" opacity="0.5" />
    </svg>
  );
}

export function PersonalSocialIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="14" cy="13" r="3.2" />
      <circle cx="26" cy="13" r="3.2" />
      <path d="M8 27c0-3.31 2.69-6 6-6s6 2.69 6 6" />
      <path d="M20 27c0-3.31 2.69-6 6-6s6 2.69 6 6" />
      <path d="M17 19.5c.8.8 1.7 1.5 3 1.5s2.2-.7 3-1.5" opacity="0.55" />
    </svg>
  );
}
