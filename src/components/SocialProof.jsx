export default function SocialProof() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Vertrauen aus der Branche</h3>
            <p className="mt-3 text-gray-600">Von Studios bis zu etablierten Salons – Luvira.io unterstützt Beauty-Businesses in ganz Deutschland.</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-violet-100 p-5 bg-white/70 backdrop-blur">
                <div className="text-3xl font-extrabold text-gray-900">98%</div>
                <div className="text-xs text-gray-500">Zufriedenheitsrate</div>
              </div>
              <div className="rounded-2xl border border-violet-100 p-5 bg-white/70 backdrop-blur">
                <div className="text-3xl font-extrabold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500">Online-Buchungen</div>
              </div>
              <div className="rounded-2xl border border-violet-100 p-5 bg-white/70 backdrop-blur">
                <div className="text-3xl font-extrabold text-gray-900"><span className="align-top text-base">+</span>50</div>
                <div className="text-xs text-gray-500">Services inklusive</div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-3xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/40 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/100?img=${18+i}`} alt={`Kunde ${i}`} />
                  <div>
                    <div className="font-semibold text-gray-900">Salon Aurora {i}</div>
                    <div className="text-xs text-gray-500">Berlin</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700 text-sm">“Seit wir Luvira.io nutzen, sind unsere Terminbuchungen einfacher und professioneller. Unsere Kundinnen lieben die Online-Buchung.”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
