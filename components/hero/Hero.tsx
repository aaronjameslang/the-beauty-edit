export default function Hero() {
  return (
    <section className="min-h-svh flex flex-col items-center justify-center text-center px-6 relative overflow-hidden bg-stone-50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-50 via-stone-50 to-stone-50 opacity-60" />
      <div className="relative z-10 max-w-3xl">
        <p className="text-xs tracking-[0.25em] uppercase text-rose-400 mb-6">
          Beauty Direction &amp; Creative Concepting
        </p>
        <h1 className="font-serif text-6xl md:text-8xl text-stone-900 leading-none mb-8">
          Beauty,
          <br />
          <em className="not-italic text-rose-300">Considered.</em>
        </h1>
        <p className="text-stone-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
          Crafting beauty narratives for brands, magazines, and creators who
          believe that aesthetics are never accidental.
        </p>
        <a
          href="#work"
          className="inline-block text-xs tracking-widest uppercase border border-stone-900 text-stone-900 px-10 py-4 hover:bg-stone-900 hover:text-stone-50 transition-colors"
        >
          View Work
        </a>
      </div>
      <a
        href="#work"
        aria-label="Scroll to work"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <svg width="1" height="40" viewBox="0 0 1 40" className="overflow-visible">
          <line x1="0.5" y1="0" x2="0.5" y2="40" stroke="currentColor" strokeWidth="1" />
        </svg>
      </a>
    </section>
  )
}
