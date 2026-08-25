import type { ButtonHTMLAttributes } from "react";

type Variant = "solid" | "outline" | "light";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  solid: "bg-neutral-950 text-white hover:bg-neutral-800",
  outline: "border border-current bg-transparent text-current hover:bg-white/10",
  light: "bg-white text-neutral-950 hover:bg-neutral-100",
};

export function Button({ variant = "solid", className = "", ...props }: Props) {
  return (
    <button
      type="button"
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/30 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
