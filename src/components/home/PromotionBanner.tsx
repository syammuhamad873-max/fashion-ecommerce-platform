import type { Promotion } from "@/types/catalog";

export function PromotionBanner({ promotion }: { promotion: Promotion }) {
  const dark = promotion.tone === "dark";

  return (
    <article className={`overflow-hidden rounded-[2rem] ${dark ? "bg-neutral-950 text-white" : "bg-[#ece6dc] text-neutral-950"}`}>
      <div className="grid min-h-[320px] md:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] opacity-60">{promotion.eyebrow}</p>
          <h3 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight sm:text-4xl">{promotion.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-6 opacity-75">{promotion.description}</p>
          <div className="mt-7">
            <a href="#catalog" className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/30 ${dark ? "bg-white text-neutral-950 hover:bg-neutral-100" : "bg-neutral-950 text-white hover:bg-neutral-800"}`}>
              {promotion.cta}
            </a>
          </div>
        </div>
        <div className="min-h-[240px] bg-cover bg-center" style={{ backgroundImage: `url(${promotion.image})` }} />
      </div>
    </article>
  );
}
