export default function PricingTeaser() {
  return (
    <section id="pricing" className="py-24 relative">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50/60" />
        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full blur-3xl opacity-30 bg-gradient-to-tl from-fuchsia-200 to-violet-200" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Transparent und fair</h3>
        <p className="mt-3 text-gray-600">Ab 19 € pro Monat – perfekt für kleine und mittlere Beauty-Businesses.</p>
        <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-violet-100 bg-white/80 backdrop-blur px-6 py-4 shadow-sm">
          <span className="text-sm text-gray-600">14 Tage kostenlos testen</span>
          <span className="text-gray-300">•</span>
          <span className="text-sm text-gray-600">Keine Kreditkarte erforderlich</span>
        </div>
        <a href="#cta" className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all">
          Preise ansehen
        </a>
      </div>
    </section>
  )
}
