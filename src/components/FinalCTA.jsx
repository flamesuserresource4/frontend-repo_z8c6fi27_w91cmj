export default function FinalCTA() {
  return (
    <section id="cta" className="py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-600 via-violet-600 to-fuchsia-600 p-10 sm:p-16 text-white shadow-[0_40px_120px_-20px_rgba(124,58,237,0.5)]">
          <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
          <h3 className="text-4xl sm:text-5xl font-extrabold leading-tight">Starte heute mit moderner Terminbuchung</h3>
          <p className="mt-3 text-white/90 text-lg">Keine Kreditkarte erforderlich. 14 Tage kostenlos testen – dann flexibel monatlich kündbar.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3 text-violet-700 font-semibold shadow-lg/30 hover:bg-violet-50 transition-colors">
              Kostenlos starten
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-3 text-white/90 hover:bg-white/10 transition-colors">
              Mit uns sprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
