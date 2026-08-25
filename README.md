# Fashion E-commerce Platform

A modern fashion e-commerce frontend foundation built with Next.js, React, TypeScript, and Tailwind CSS.

## Current stage

The repository is currently a Stage 1 storefront foundation. It contains a structured homepage, reusable UI components, navigation anchors, merchandising sections, promotional banners, and static product/category data.

The current stage does **not** include database-backed catalog management, authentication, persistent wishlist/cart state, checkout, payment, shipping, order management, or admin functionality. Those are intentionally deferred to later implementation stages.

## Design reference

The project's UX/UI direction uses [ZALORA Indonesia](https://www.zalora.co.id/) as a reference for studying common fashion e-commerce patterns such as navigation hierarchy, merchandising-oriented layouts, and shopping-oriented user flows.

ZALORA is reference material only. This project does not copy ZALORA source code, branding, logos, text, images, or proprietary assets.

## Technology

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- ESLint

## Requirements

- Node.js 20.9 or newer
- npm 10 or newer

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open `http://localhost:3000` in a browser.

## Verification commands

Run the production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Run TypeScript validation without emitting files:

```bash
npx tsc --noEmit
```

## Project structure

```text
.
├── src/
│   ├── app/                # Next.js App Router entry points
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Reusable UI components
│   │   ├── home/
│   │   ├── layout/
│   │   ├── navigation/
│   │   ├── product/
│   │   └── ui/
│   ├── data/               # Static homepage/catalog seed data
│   └── types/              # Shared TypeScript types
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Current implementation notes

The homepage provides working in-page navigation targets for the current Stage 1 sections. Call-to-action controls point to the storefront catalog section, and product section links point to their corresponding homepage sections.

Search, wishlist, shopping bag, account, and dedicated product/catalog pages remain intentionally unimplemented until their respective application stages are introduced.

## Development principles

The project will evolve incrementally. New domain functionality should remain modular and should be introduced behind clear boundaries so that the application can scale without coupling unrelated concerns.
