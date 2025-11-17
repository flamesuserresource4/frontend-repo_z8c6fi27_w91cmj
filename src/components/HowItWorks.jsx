const steps = [
  {
    step: '1',
    title: 'Account erstellen',
    desc: 'Kostenlos registrieren und deinen Salon-Namen wählen.',
  },
  {
    step: '2',
    title: 'Services auswählen',
    desc: 'Aus vordefinierten Services wählen oder eigene hinzufügen.',
  },
  {
    step: '3',
    title: 'Link teilen & loslegen',
    desc: 'Booking-URL teilen und Buchungen empfangen – sofort startklar.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24 relative">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-violet-50/60" />
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-violet-200 to-pink-200" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">So einfach funktioniert’s</h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {steps.map(({ step, title, desc }) => (
            <div key={step} className="relative rounded-3xl bg-white border border-violet-100 p-6 shadow-sm transition hover:shadow-[0_30px_80px_-24px_rgba(124,58,237,0.25)]">
              <div className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-semibold shadow-md">
                {step}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
