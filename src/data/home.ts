import type { Category, Product, Promotion } from "@/types/catalog";

export const categories: Category[] = [
  {
    id: "women",
    name: "Women",
    description: "Refined essentials and statement pieces.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "men",
    name: "Men",
    description: "Modern tailoring and everyday style.",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "kids",
    name: "Kids",
    description: "Playful looks for every day.",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sports",
    name: "Sports",
    description: "Performance-inspired activewear.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "beauty",
    name: "Beauty",
    description: "Beauty essentials and daily rituals.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Finishing touches that elevate the look.",
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
  },
];

export const promotions: Promotion[] = [
  {
    id: "everyday-edit",
    eyebrow: "THE EVERYDAY EDIT",
    title: "Quiet luxury, reworked for everyday life.",
    description: "Clean silhouettes, rich textures, and versatile layers for the season ahead.",
    cta: "Explore the edit",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    tone: "light",
  },
  {
    id: "weekend-motion",
    eyebrow: "WEEKEND MOTION",
    title: "Move comfortably. Dress intentionally.",
    description: "A fresh selection of performance-minded pieces made for life on the go.",
    cta: "Shop activewear",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80",
    tone: "dark",
  },
];

const product = (value: Product): Product => value;

export const newArrivals: Product[] = [
  product({ id: "na-01", brand: "Aster Studio", name: "Relaxed Linen Shirt", price: 649000, originalPrice: 799000, discount: 19, image: "https://images.unsplash.com/photo-1605763240000-7e93b172d465?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "na-02", brand: "Northline", name: "Soft Tailored Trousers", price: 889000, image: "https://images.unsplash.com/photo-1506629905607-0c84d5c2ec31?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "na-03", brand: "Morrow", name: "Sculpt Knit Top", price: 529000, image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "na-04", brand: "Forma", name: "Structured Mini Bag", price: 799000, originalPrice: 949000, discount: 16, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=700&q=80" }),
];

export const trendingNow: Product[] = [
  product({ id: "tr-01", brand: "Aster Studio", name: "Boxy Cotton Overshirt", price: 729000, image: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "tr-02", brand: "Morrow", name: "Fine Knit Midi Dress", price: 959000, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "tr-03", brand: "Forma", name: "Minimal Leather Loafers", price: 1099000, originalPrice: 1299000, discount: 15, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "tr-04", brand: "Northline", name: "Everyday Utility Jacket", price: 1199000, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80" }),
];

export const bestSellers: Product[] = [
  product({ id: "bs-01", brand: "Morrow", name: "Signature Rib Tank", price: 399000, image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "bs-02", brand: "Aster Studio", name: "Classic Straight Denim", price: 679000, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "bs-03", brand: "Forma", name: "Everyday Crossbody", price: 749000, originalPrice: 899000, discount: 17, image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80" }),
  product({ id: "bs-04", brand: "Northline", name: "Minimal Court Sneaker", price: 899000, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80" }),
];
