import type { SVGProps } from "react";

type IconName = "search" | "heart" | "bag" | "user" | "menu" | "arrow";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "search") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>;
  }
  if (name === "heart") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.3 4.3 0 0 1 11 6.2a4.3 4.3 0 0 1 9.8 2.6Z" /></svg>;
  }
  if (name === "bag") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M5 8.5h14l-1 11H6l-1-11Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>;
  }
  if (name === "user") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><circle cx="12" cy="8" r="3.2" /><path d="M5.8 19a6.2 6.2 0 0 1 12.4 0" /></svg>;
  }
  if (name === "menu") {
    return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg>;
}
