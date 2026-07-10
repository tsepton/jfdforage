import { ReactNode } from "react";
import { Arrow } from "./icons";

type ButtonVariant = "primary" | "call" | "solid" | "ghost";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  /** Adds a trailing arrow that nudges on hover. */
  arrow?: boolean;
  /** Icon shown before the label (does not nudge). */
  leadingIcon?: ReactNode;
  /** Ghost buttons placed on a dark background. */
  onDark?: boolean;
  external?: boolean;
};

const BASE =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-transparent px-[22px] py-[14px] font-heading text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-jfd-teal-bright";

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-jfd-orange text-[#3a1d00] shadow-jfd-sm hover:bg-jfd-orange-strong hover:shadow-jfd-md",
  call: "bg-gradient-to-br from-jfd-teal to-jfd-teal-bright text-white shadow-jfd-sm hover:brightness-110 hover:shadow-jfd-md",
  solid: "bg-jfd-teal text-white shadow-jfd-sm hover:bg-[#055768] hover:shadow-jfd-md",
  ghost: "",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  arrow = false,
  leadingIcon,
  onDark = false,
  external = false,
}: ButtonProps) {
  const ghost = onDark
    ? "bg-transparent text-white border-white/35 hover:bg-white/10 hover:border-white"
    : "bg-transparent text-jfd-teal border-jfd-line hover:border-jfd-teal hover:bg-jfd-wash";

  const classes = `${BASE} ${variant === "ghost" ? ghost : VARIANTS[variant]} ${className}`;

  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {leadingIcon && <span className="shrink-0">{leadingIcon}</span>}
      {children}
      {arrow && (
        <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </a>
  );
}
