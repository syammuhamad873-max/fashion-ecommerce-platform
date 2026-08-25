import { CategoryGrid } from "@/components/home/CategoryGrid";
import { PromotionBanner } from "@/components/home/PromotionBanner";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/navigation/Header";
import { ProductSection } from "@/components/product/ProductSection";
import { Button } from "@/components/ui/Button";
import { bestSellers, categories, newArrivals, promotions, trendingNow } from "@/data/home";

const serviceNotes = ["Free delivery over Rp750k", "14-day easy returns", "Secure checkout"];

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white text-neutral-950">
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
          <div className="relative min-h-[540px] overflow-hidden rounded-[2rem] bg-neutral-900 text-white sm:min-h-[600px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.18),transparent_32%),linear-gradient(100deg,rgba(9,9,11,0.98),rgba(9,9,11,0.48),rgba(9,9,11,0.08))]" />
            <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-cover bg-center opacity-90 md:block" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=80)" }} />
            <div className="relative z-10 flex min-h-[540px] max-w-xl flex-col justify-center p-8 sm:min-h-[600px] sm:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">NEW SEASON / 2026 EDIT</p>
              <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">Dress for the life you actually live.</h1>
              <p className="mt-6 max-w-md text-base leading-7 text-white/70 sm:text-lg">A curated collection of modern wardrobe staples and elevated essentials, designed to move with you.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="light">Shop new arrivals</Button>
                <Button variant="outline" className="border-white/40 text-white hover:bg-white/10">Explore collections</Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 border-b border-neutral-200 py-5 text-center text-xs font-medium text-neutral-500 sm:grid-cols-3">
            {serviceNotes.map((note) => <p key={note}>{note}</p>)}
          </div>
        </section>

        <section id="women" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">SHOP BY CATEGORY</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Find your next look.</h2>
            </div>
            <p className="hidden max-w-sm text-right text-sm leading-6 text-neutral-500 md:block">A considered mix of fashion, accessories, beauty, and movement for every wardrobe.</p>
          </div>
          <CategoryGrid categories={categories} />
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {promotions.map((promotion) => <PromotionBanner key={promotion.id} promotion={promotion} />)}
          </div>
        </section>

        <section id="men" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <ProductSection eyebrow="JUST LANDED" title="New Arrivals" products={newArrivals} />
        </section>

        <section id="sports" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-18">
          <PromotionBanner promotion={promotions[1]} />
        </section>

        <section id="beauty" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <ProductSection eyebrow="WHAT&apos;S MOVING" title="Trending Now" products={trendingNow} />
        </section>

        <section id="brands" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-18">
          <div className="rounded-[2rem] bg-[#f4f1eb] p-8 sm:p-10 lg:p-14">
            <div className="grid items-end gap-7 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500">EDITORIAL NOTE</p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">Less noise. Better pieces. A wardrobe with more mileage.</h2>
              </div>
              <p className="text-sm leading-6 text-neutral-600">Discover versatile silhouettes, tactile materials, and easy layers selected to work together rather than compete for attention.</p>
            </div>
          </div>
        </section>

        <section id="kids" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <ProductSection eyebrow="COMMUNITY FAVORITES" title="Best Sellers" products={bestSellers} />
        </section>
      </main>
      <Footer />
    </div>
  );
}
