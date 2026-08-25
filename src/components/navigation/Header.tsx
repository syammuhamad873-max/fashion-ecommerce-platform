"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";

const navItems = ["Women", "Men", "Kids", "Sports", "Beauty", "Accessories", "Brands"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button type="button" aria-label="Open menu" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 lg:hidden" onClick={() => setOpen(!open)}>
          <Icon name="menu" className="size-5" />
        </button>
        <a href="#top" className="shrink-0 text-xl font-black tracking-[0.14em] text-neutral-950 sm:text-2xl">AURELIA</a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-950">{item}</a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <label className="hidden min-w-0 items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-3 py-2 md:flex md:w-56 lg:w-72">
            <Icon name="search" className="size-4 text-neutral-500" />
            <input aria-label="Search" placeholder="Search fashion, brands..." className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400" />
          </label>
          <button type="button" aria-label="Search" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-neutral-100 md:hidden"><Icon name="search" className="size-5" /></button>
          <button type="button" aria-label="Wishlist" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-neutral-100"><Icon name="heart" className="size-5" /></button>
          <button type="button" aria-label="Shopping bag" className="inline-flex size-10 items-center justify-center rounded-full hover:bg-neutral-100"><Icon name="bag" className="size-5" /></button>
          <button type="button" aria-label="Account" className="hidden size-10 items-center justify-center rounded-full hover:bg-neutral-100 sm:inline-flex"><Icon name="user" className="size-5" /></button>
        </div>
      </div>

      {open && (
        <div className="border-t border-neutral-200 bg-white px-4 py-4 lg:hidden">
          <nav className="grid grid-cols-2 gap-1 sm:grid-cols-3" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-100">{item}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
