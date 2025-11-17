export default function FinalCTA() {
  return (
    <section id="cta" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-600 to-fuchsia-600 p-8 sm:p-12 text-white">
          <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
          <h3 className="text-3xl sm:text-4xl font-extrabold">Starte heute mit moderner Terminbuchung</h3>
          <p className="mt-3 text-white/90">Keine Kreditkarte erforderlich. 24 Monate kostenlos im Pilotprogramm.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-violet-700 font-semibold shadow-lg/30 hover:bg-violet-50 transition-colors">
              Kostenlos starten
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-white/90 hover:bg-white/10 transition-colors">
              Mit uns sprechen
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
