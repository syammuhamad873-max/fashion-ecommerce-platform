import type { Category } from "@/types/catalog";

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((category) => (
        <a key={category.id} href={`#${category.id}`} className="group relative overflow-hidden rounded-3xl bg-neutral-100">
          <div className="aspect-[4/5] bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${category.image})` }} />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent p-4 text-white">
            <p className="text-lg font-semibold">{category.name}</p>
            <p className="mt-1 text-xs leading-5 text-white/80">{category.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
