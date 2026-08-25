export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <section className="w-full max-w-3xl rounded-3xl border border-black/10 bg-white p-10 shadow-sm">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
          Stage 1 · Project Foundation
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          Fashion E-commerce Platform
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
          The Next.js, React, TypeScript, and Tailwind CSS foundation is running successfully.
          Future e-commerce capabilities will be added incrementally in later stages.
        </p>
      </section>
    </main>
  );
}
