const footerGroups = [
  { title: "Customer Service", links: ["Contact us", "Shipping", "Returns", "Size guide"] },
  { title: "About", links: ["Our story", "Careers", "Journal", "Sustainability"] },
  { title: "Help", links: ["FAQ", "Order help", "Store locator", "Accessibility"] },
  { title: "Information", links: ["Payment methods", "Delivery info", "Terms", "Privacy"] },
];

export function Footer() {
  return (
    <footer className="mt-16 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <p className="text-xl font-black tracking-[0.14em]">AURELIA</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">A modern fashion destination for considered pieces, everyday essentials, and a more intentional way to shop.</p>
            <div className="mt-6 flex gap-2">
              {['IG', 'TK', 'FB'].map((social) => <span key={social} className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/75">{social}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-semibold">{group.title}</h2>
                <ul className="mt-4 space-y-3 text-sm text-white/55">
                  {group.links.map((link) => <li key={link}><a href="#top" className="hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aurelia. All rights reserved.</p>
          <p>Designed as an original fashion commerce experience.</p>
        </div>
      </div>
    </footer>
  );
}
