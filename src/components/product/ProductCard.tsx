import { Icon } from "@/components/ui/Icon";
import type { Product } from "@/types/catalog";

const formatPrice = (price: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(price);

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
        <div className="aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]" style={{ backgroundImage: `url(${product.image})` }} />
        {product.discount ? <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-neutral-950">-{product.discount}%</span> : null}
        <button type="button" aria-label={`Add ${product.name} to wishlist`} className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-white/95 text-neutral-800 shadow-sm transition hover:scale-105">
          <Icon name="heart" className="size-5" />
        </button>
      </div>
      <div className="px-1 pt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">{product.brand}</p>
        <h3 className="mt-1 line-clamp-1 text-sm font-semibold text-neutral-950">{product.name}</h3>
        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="font-bold text-neutral-950">{formatPrice(product.price)}</span>
          {product.originalPrice ? <span className="text-neutral-400 line-through">{formatPrice(product.originalPrice)}</span> : null}
        </div>
      </div>
    </article>
  );
}
