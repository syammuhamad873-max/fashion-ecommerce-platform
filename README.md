# Fashion E-commerce Platform

A modern, scalable fashion e-commerce foundation built with Next.js, React, TypeScript, and Tailwind CSS.

## Project goal

This repository is the foundation for a large-scale fashion e-commerce platform that will be developed incrementally. Stage 1 intentionally contains only the application scaffold, shared project structure, and a minimal landing page used to verify that the stack is working.

## Design reference

The project's UX/UI direction uses [ZALORA Indonesia](https://www.zalora.co.id/) as a reference for studying common fashion e-commerce patterns such as navigation hierarchy, merchandising-oriented layouts, and shopping-oriented user flows.

ZALORA is reference material only. This project does not copy ZALORA source code, branding, logos, text, images, or proprietary assets.

## Technology

- Next.js with the App Router
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
├── public/                 # Static public assets
├── src/
│   ├── app/                # Next.js App Router entry points
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Reusable UI components
│   │   ├── layout/          # Site-level layout components
│   │   └── ui/              # Generic UI primitives
│   ├── features/            # Domain-oriented feature modules
│   ├── lib/                 # Shared utilities and infrastructure helpers
│   ├── services/             # External/business service boundaries
│   ├── types/                # Shared TypeScript types
│   └── config/               # Centralized application configuration
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

The domain folders are intentionally lightweight at this stage. No database, authentication, catalog, cart, checkout, payment, shipping, ordering, or admin functionality is included yet.

## Development principles

The project will evolve in stages. New domain functionality should remain modular and should be introduced behind clear boundaries so that the application can scale without coupling unrelated concerns.
