export default function SocialProof() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Bereits über XX Salons vertrauen Luvira.io</h3>
            <p className="mt-3 text-gray-600">Von kleinen Studios bis zu etablierten Salons – Luvira.io unterstützt Beauty-Businesses in ganz Deutschland.</p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-violet-100 p-4">
                <div className="text-2xl font-extrabold text-gray-900">98%</div>
                <div className="text-xs text-gray-500">Zufriedenheitsrate</div>
              </div>
              <div className="rounded-xl border border-violet-100 p-4">
                <div className="text-2xl font-extrabold text-gray-900">24/7</div>
                <div className="text-xs text-gray-500">Online-Buchungen</div>
              </div>
              <div className="rounded-xl border border-violet-100 p-4">
                <div className="text-2xl font-extrabold text-gray-900"><span className="align-top text-base">+</span>50</div>
                <div className="text-xs text-gray-500">Services inkludiert</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[1,2].map((i) => (
              <div key={i} className="rounded-2xl border border-violet-100 bg-gradient-to-br from-white to-violet-50/30 p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <img className="h-10 w-10 rounded-full" src={`https://i.pravatar.cc/100?img=${20+i}`} alt="avatar" />
                  <div>
                    <div className="font-semibold text-gray-900">Salon Beispiel {i}</div>
                    <div className="text-xs text-gray-500">Berlin</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-700 text-sm">“Seit wir Luvira.io nutzen, sind unsere Terminbuchungen deutlich einfacher geworden. Unsere Kunden lieben die Online-Buchung!”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
