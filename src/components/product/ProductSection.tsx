import { Icon } from "@/components/ui/Icon";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types/catalog";

export function ProductSection({ title, eyebrow, products }: { title: string; eyebrow?: string; products: Product[] }) {
  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{eyebrow}</p> : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">{title}</h2>
        </div>
        <a href={`#${title.toLowerCase().replace(/\s+/g, "-")}`} className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-neutral-950">View all <Icon name="arrow" className="size-4 transition-transform group-hover:translate-x-1" /></a>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-5">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
