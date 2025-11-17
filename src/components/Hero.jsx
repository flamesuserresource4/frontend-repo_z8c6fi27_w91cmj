import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* layered gradients + sparkle noise */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />
        <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-fuchsia-300 to-violet-400" />
        <div className="absolute left-[-10%] top-[30%] h-72 w-72 rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-violet-200 to-pink-200" />
        <div className="absolute inset-0 bg-[radial-gradient(transparent_1px,rgba(0,0,0,0.03)_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/70 px-3 py-1 text-xs text-violet-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
              Neu: 24/7 Online-Buchung für Beauty & Wellness
            </div>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.05]">
              Mehr Buchungen. Weniger Aufwand. Alles in Luvira.
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Deine elegante Buchungsplattform mit eigener Subdomain, mobile-first Design und smartem Kundenmanagement. In Minuten startklar.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 px-6 py-3 text-white font-semibold shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:translate-y-[-1px] active:translate-y-0 transition-all">
                Jetzt kostenlos testen
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl border border-violet-200 px-6 py-3 text-violet-700 bg-white/70 hover:bg-violet-50 transition-colors">
                Demo ansehen
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=12" alt="Kundin" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=32" alt="Kundin" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/80?img=45" alt="Kunde" />
              </div>
              <span>Beliebt bei Salons in ganz Deutschland</span>
            </div>
          </div>

          <div className="h-[420px] sm:h-[520px] lg:h-[640px] order-1 lg:order-2">
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden ring-1 ring-violet-200/60 shadow-[0_40px_120px_-20px_rgba(124,58,237,0.35)]">
              <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
