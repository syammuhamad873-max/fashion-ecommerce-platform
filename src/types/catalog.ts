export type Product = {
  id: string;
  brand: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
};

export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export type Promotion = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  tone?: "dark" | "light";
};
