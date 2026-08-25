import { Button } from "@/components/ui/Button";
import type { Promotion } from "@/types/catalog";

export function PromotionBanner({ promotion }: { promotion: Promotion }) {
  const buttonClass = promotion.tone === "dark" ? "border-white text-white hover:bg-white hover:text-neutral-950" : "";
  return <article className={`relative overflow-hidden rounded-3xl ${promotion.tone === "dark" ? "bg-neutral-950 text-white" : "bg-[#e8e2d8] text-neutral-950"}`}>
    <div className="grid min-h-[340px] md:grid-cols-[1.1fr_1fr]">
      <div className="relative z-10 flex flex-col justify-center p-8 sm:p-10 lg:p-14">
        <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-60">{promotion.eyebrow}</p>
        <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">{promotion.title}</h3>
        <p className="mt-4 max-w-md text-sm leading-6 opacity-70">{promotion.description}</p>
        <div className="mt-7"><Button variant={promotion.tone === "dark" ? "outline" : "solid"} className={buttonClass}>{promotion.cta}</Button></div>
      </div>
      <div className="min-h-[240px] bg-cover bg-center" style={{ backgroundImage: `url(${promotion.image})` }} />
    </div>
  </article>;
}
